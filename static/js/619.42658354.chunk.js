"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[619],{6730:function(e,t,n){n.d(t,{Dx:function(){return p},Qu:function(){return c},SQ:function(){return d},aw:function(){return l},rg:function(){return h}});var r=n(4942),i=n(6934),o=n(890),a=n(7549),s=n(4570),u=n(376),c=(0,i.ZP)(u.Z)({marginRight:"10px"}),l=(0,i.ZP)(o.Z)((function(e){var t,n=e.theme;return t={display:"flex",fontSize:"14px",color:"rgba(54, 54, 54, 0.6)",marginBottom:"14px"},(0,r.Z)(t,n.breakpoints.up("tablet"),{marginBottom:"20px"}),(0,r.Z)(t,n.breakpoints.up("desktop"),{marginBottom:"24px"}),t})),p=(0,i.ZP)(o.Z)((function(e){var t=e.theme;return(0,r.Z)({fontSize:"24px",lineHeight:"1.2",marginBottom:"15px"},t.breakpoints.up("tablet"),{marginBottom:"20px"})})),d=(0,i.ZP)(a.Z)({boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",color:"#363636",lineHeight:1.5,fontWeight:700,"&:hover":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}),h=(0,i.ZP)(s.Z)((function(e){var t,n=e.theme;return t={height:"500px"},(0,r.Z)(t,n.breakpoints.up("desktop"),{height:"560px"}),(0,r.Z)(t,n.breakpoints.up(1440),{width:"400px",height:"530px"}),t}))},9619:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(2791),i=n(989),o=n(4538),a=n(890),s=n(3066),u=n(9276),c=n(6263),l=n.n(c),p=n(2169),d=n(9504),h=n(2363),x=n(8264),m=n(6730),g=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n="".concat(e.getDate());switch(n){case"1":n+="st";break;case"2":n+="nd";break;case"3":n+="rd";break;default:n+="th"}var r=e.getFullYear();return"".concat(t," ").concat(n,", ").concat(r)},b=n(1087),f=n(7689),Z=n(184),j=function(e){var t=e.title,n=e.summary,r=e.imageUrl,i=e.publishedAt,a=e.id,u=(0,f.TH)(),c=n.length>100?n.substring(0,100)+"...":n,j=t.length>60?t.substring(0,60)+"...":t+".",w=(0,o.CG)((function(e){return e.search.searchQuery}));return(0,Z.jsx)(s.ZP,{item:!0,component:"li",mobile:12,tablet:4,sx:{width:"400px"},children:(0,Z.jsxs)(m.rg,{children:[(0,Z.jsx)(p.Z,{sx:{height:217},image:r,title:"title"}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsxs)(m.aw,{children:[(0,Z.jsx)(m.Qu,{}),g(new Date(i))]}),(0,Z.jsx)(m.Dx,{children:(0,Z.jsx)(l(),{searchWords:[w],autoEscape:!0,textToHighlight:j})}),(0,Z.jsx)(l(),{searchWords:[w],autoEscape:!0,textToHighlight:c})]}),(0,Z.jsx)(h.Z,{children:(0,Z.jsx)(m.SQ,{size:"small",endIcon:(0,Z.jsx)(x.Z,{}),children:(0,Z.jsx)(b.OL,{to:"/article/".concat(a),state:{from:u},children:"Read More"})})})]})})},w=n(2620),v=n(4942),k=n(3457),y=(0,k.Z)("p")((function(e){var t=e.theme;return(0,v.Z)({fontSize:"20px",color:"red"},t.breakpoints.up("tablet"),{fontSize:"30px"})})),S=(0,k.Z)("div")({display:"flex",justifyContent:"center",width:"100%"}),C=function(){var e=(0,o.CG)((function(e){return e.search.searchQuery})),t=(0,i.sS)(e),n=t.data,r=void 0===n?[]:n,c=t.isLoading,l=r.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())||t.summary.toLowerCase().includes(e.toLowerCase())})).sort((function(t,n){return t.title.toLowerCase().includes(e.toLowerCase())&&n.summary.toLowerCase().includes(e.toLowerCase())?-1:1}));return(0,Z.jsxs)(u.Z,{sx:{flexGrow:1},children:[!c&&0===(null===r||void 0===r?void 0:r.length)&&(0,Z.jsx)(S,{children:(0,Z.jsx)(y,{children:"Nothing found. Please, try again."})}),e&&0!==(null===r||void 0===r?void 0:r.length)&&(0,Z.jsxs)(a.Z,{sx:{fontWeight:600,borderBottom:"1px solid #EAEAEA",lineHeight:"1.25",marginBottom:"45px"},children:["Results: ",r.length]}),(0,Z.jsx)(s.ZP,{container:!0,spacing:{mobile:"30px",tablet:"45px"},columns:{mobile:4,tablet:6,desktop:12},component:"ul",justifyContent:"center",children:c?(0,Z.jsx)(w.Z,{}):l.map((function(e){var t=e.id,n=e.title,r=e.summary,i=e.imageUrl,o=e.publishedAt;return(0,Z.jsx)(j,{title:n,summary:r,imageUrl:i,publishedAt:o,id:t},t)}))})]})},P=n(9439),L=n(5403),A=n(2088),B=n(6934),E=n(4245),z=(0,B.ZP)("div")((function(e){var t=e.theme;return(0,v.Z)({position:"relative",marginBottom:"30px",width:"100%"},t.breakpoints.up("tablet"),{marginBottom:"40px"})})),H=(0,B.ZP)("button")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",zIndex:5,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",border:"none",backgroundColor:"transparent"}})),Q=(0,B.ZP)(E.ZP)((function(e){var t,n=e.theme;return t={border:"1px solid #EAEAEA",boxShadow:"0px 8px 24px rgba(0, 0, 0, 0.05)",borderRadius:"5px","&:hover":{boxShadow:"0 0 0 0.1rem rgba(0,90,90,.2)"}},(0,v.Z)(t,n.breakpoints.down("tablet"),{width:"100%"}),(0,v.Z)(t,n.breakpoints.up("tablet"),{width:"500px"}),(0,v.Z)(t,n.breakpoints.up("desktop"),{width:"600px"}),(0,v.Z)(t,"& .MuiInputBase-input",{display:"block",cursor:"pointer",color:"#575757",padding:n.spacing(1.7,2,1.7,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")")}),t})),D=(0,B.ZP)(a.Z)({marginBottom:"10px",fontWeight:600,lineHeight:"1.25"}),M=function(){var e=(0,b.lr)(),t=(0,P.Z)(e,2),n=t[0],i=t[1],a=n.get("filter"),s=(0,r.useState)(a||""),c=(0,P.Z)(s,2),l=c[0],p=c[1],d=(0,o.TL)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(D,{children:"Filter by keywords"}),(0,Z.jsx)(z,{children:(0,Z.jsxs)(u.Z,{component:"form",onSubmit:function(e){e.preventDefault(),i(l?{filter:l}:{}),d((0,A.q)({searchQuery:l.trim()}))},children:[(0,Z.jsx)(H,{type:"submit",children:(0,Z.jsx)(L.Z,{})}),(0,Z.jsx)(Q,{onChange:function(e){p(e.target.value),i({filter:l})},placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})})]})},T=n(9164),W=(0,k.Z)(T.Z)((function(e){var t=e.theme;return(0,v.Z)({padding:"20px 20px 30px 20px"},t.breakpoints.up("desktop"),{padding:"50px 75px 50px 75px"})})),F=function(){return(0,Z.jsxs)(W,{children:[(0,Z.jsx)(M,{}),(0,Z.jsx)(C,{})]})}}}]);
//# sourceMappingURL=619.42658354.chunk.js.map