import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Articles } from 'types';

interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  updatedAt: string;
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
      query: () => '?_limit=6',
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
