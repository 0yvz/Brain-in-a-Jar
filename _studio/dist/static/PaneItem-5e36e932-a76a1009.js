import{v as w,ab as D,A as x,bN as _,r as o,cF as F,j as e,cG as L,cH as k,a3 as T,cI as j,cJ as M,cK as R,cL as E,p,ad as N}from"./sanity-6c3bb6e8.js";const W=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(N,{})});function A(t){const{layout:n,value:a}=t;return e(k,{...W(a._id,a._type),layout:n})}function P(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function H(t){const{icon:n,id:a,layout:i="default",pressed:v,schemaType:s,selected:r,title:u,value:c}=t,I=w(),l=D(),{ChildLink:d}=x(),m=_(a),f=!!(s&&s.name&&I.get(s.name)),[y,h]=o.useState(!1),g=o.useMemo(()=>c&&F(c)?!s||!f?e(A,{value:c}):e(L,{documentPreviewStore:l,icon:P(n,s,R),layout:i,schemaType:s,value:c,presence:m}):e(k,{status:e(T,{muted:!0,children:e(j,{})}),icon:P(n,s,E),layout:i,title:u}),[l,f,n,i,s,u,c,m]),C=o.useMemo(()=>function(b){return e(d,{...b,childId:a})},[d,a]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(M,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:v,selected:r||y,tone:"inherit",children:g})}export{H as P};
