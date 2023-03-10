import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Article {
  id: number;
  imageUrl: string;
  launches: number[];
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
}
type ArticlesResponse = Article[];

export const articlesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3/articles',
  }),
  reducerPath: 'articlesApi',
  tagTypes: ['Articles', 'Article'],
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getArticles: builder.query<ArticlesResponse, string>({
      query: filter => {
        const filterQuery =
          filter === ''
            ? ''
            : `&&title_contains=${filter}&&summary_contains=${filter}`;
        return `?_limit=9${filterQuery}`;
      },
      providesTags: ['Articles'],
    }),
    getArticleByQuery: builder.query<Article, string>({
      query: query => `?_limit=9&summary_contains=${query}`,
    }),
    getArticleById: builder.query<Article, string>({
      query: id => `/${id}`,
      providesTags: ['Article'],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetArticleByQueryQuery,
} = articlesApi;
