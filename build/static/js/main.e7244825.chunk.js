(this["webpackJsonpthree-items-widget"]=this["webpackJsonpthree-items-widget"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"change":"Change","item":"Item","dialog_title":"Dialog title","search":"Search...","no_filter":"No filter","filter":"Filter","selected_items":"Selected items:","cancel":"Cancel","save":"Save"}')},81:function(e,t,n){},82:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(10),l=n.n(c),s=(n(81),n(82),n(23)),r=function(e){return{_container:{display:"flex",flexDirection:"column",alignItems:"flex-start",border:"1px solid gainsboro",borderRadius:6,padding:20,maxWidth:"max-content"},_button_area:{display:"flex",alignItems:"center",justifyContent:"flex-start"}}},o=n(131),d=n(13),u=n(123),j=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n=[],i=0;i<e;i++)n.push(t(i));return n},m=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},f=n(57),b=n(70),h=n(49),O=n.n(h),g=n(137),x=n(130),p=n(134),v=n(138),_=n(133),y=function(e){return{_all_area:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",top:0,left:0},_paper:{width:600,padding:20,zIndex:150},_backDrop:{zIndex:100},_label:{paddingBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between","& > svg":{cursor:"pointer","&:hover":{opacity:.6}}},_filters:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:16},_scroll_area:{paddingBottom:16},_item:{width:210,height:32,display:"flex",justifyContent:"flex-start",alignItems:"center",padding:4,backgroundColor:"#d1d1d1"},_buttons:{display:"flex",justifyContent:"space-between"}}},C=function(e){return{_selected_items:{display:"flex",flexDirection:"column",alignItems:"flex-start",paddingBottom:16},_label:{textAlign:"left",fontSize:18,paddingBottom:10},_items_row:{minHeight:32,display:"flex",justifyContent:"flex-start"},_item:{backgroundColor:"#ececec",marginRight:10,height:32,width:180,display:"flex",alignItems:"center",justifyContent:"space-between",padding:4,"& > svg":{cursor:"pointer","&:hover":{opacity:.6}},"&:last-child":{marginRight:0}}}},S=n(67),N=n.n(S),E=n(5),I=Object(u.a)(C);var w=function(e){var t=e.items,n=void 0===t?[]:t,a=e.main,c=e.updateElements,l=I(),r=l._selected_items,o=l._label,u=l._items_row,j=l._item,m=Object(i.useState)(n),f=Object(s.a)(m,2),b=f[0],h=f[1];return Object(i.useEffect)((function(){console.log("update items",n,a),h(n)}),[n]),Object(E.jsxs)("div",{className:r,children:[Object(E.jsx)("div",{className:o,children:d.selected_items}),Object(E.jsx)("div",{className:u,children:0===b.length?Object(E.jsx)(N.a,{}):b.map((function(e){return Object(E.jsxs)("div",{className:j,children:[e,Object(E.jsx)(O.a,{onClick:function(){return t=e,void c(b.filter((function(e){return e!==t})));var t}})]},"".concat(e))}))})]})},k=n(127),B=n(132),D=n(136),J=function(e){return{_filter:{width:210}}},F=Object(u.a)(J),z=function(e){var t=e.onSelect,n=e.selected,i=e.data,a=F()._filter;return Object(E.jsx)(k.a,{variant:"outlined",className:a,children:Object(E.jsx)(B.a,{className:"",labelId:"filter",id:"demo-simple-select-outlined",value:n,onChange:function(e){return t(e.target.value)},children:i.map((function(e){return Object(E.jsx)(D.a,{value:e,children:e===d.no_filter?Object(E.jsx)("em",{style:{opacity:.5},children:e}):e},e)}))})})},P=[d.no_filter,">10",">100",">200",">300",">400",">500",">600",">700",">800",">900"],R=n(56),A=n(24),L=Object(u.a)(y),T=Object(i.memo)((function(e){var t=e.data,n=e.index,i=e.style,a=t.elements,c=t._item,l=t.chooseElement,s=t.updatedElements,r=a[n],o=s.includes(r);return Object(E.jsx)("div",{style:Object(f.a)(Object(f.a)({},i),{},{display:"flex",alignItems:"center",justifyContent:"flex-start"}),children:Object(E.jsx)(v.a,{className:c,control:Object(E.jsx)(_.a,{checked:o,onChange:function(e){return l(r)},disabled:3===s.length&&!o,color:"primary"}),label:r})})}),R.b),H=Object(A.a)((function(e,t,n,i){return{elements:e,updatedElements:t,chooseElement:n,_item:i}})),M=Object(A.a)((function(e,t,n){return{memoElements:e.filter((function(e,i){return e.includes(t.trim())&&(n===d.no_filter?e:i+1>+n.replace(/>/gim,""))}))}})),W=function(e){var t=e.close,n=e.elements,a=e.chosenElements,l=e.saveElements,r=L(),u=r._all_area,j=r._paper,f=r._backDrop,h=r._label,v=r._filters,_=r._item,y=r._scroll_area,C=r._buttons,S=Object(i.useState)(d.no_filter),N=Object(s.a)(S,2),I=N[0],k=N[1],B=Object(i.useState)(""),D=Object(s.a)(B,2),J=D[0],F=D[1],A=Object(i.useState)(a),W=Object(s.a)(A,2),q=W[0],G=W[1],K=M(n,J,I).memoElements,Q=H(K,q,(function(e){q.includes(e)?G(q.filter((function(t){return t!==e}))):G([].concat(Object(b.a)(q),[e]))}),_);return Object(c.createPortal)(Object(E.jsxs)("div",{className:u,children:[Object(E.jsx)(g.a,{open:!0,className:f,onClick:t}),Object(E.jsxs)(x.a,{elevation:3,className:j,children:[Object(E.jsxs)("div",{className:h,children:[d.dialog_title,Object(E.jsx)(O.a,{style:{cursor:"pointer"},onClick:t})]}),Object(E.jsxs)("div",{className:v,children:[Object(E.jsx)(p.a,{id:"outlined-basic",label:d.search,variant:"outlined",value:J,onChange:function(e){return F(e.target.value)}}),Object(E.jsx)(z,{onSelect:function(e){return k(e)},selected:I,data:P})]}),Object(E.jsx)("div",{className:y,children:Object(E.jsx)(R.a,{height:300,itemCount:K.length,itemSize:44,itemData:Q,children:T})}),Object(E.jsx)(w,{items:q,updateElements:function(e){return G(e)}}),Object(E.jsxs)("div",{className:C,children:[Object(E.jsx)(o.a,{variant:"contained",color:"secondary",onClick:t,children:d.cancel}),Object(E.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(){l(q),t()},disabled:m(q,a),children:d.save})]})]})]}),document.getElementById("body"))},q=n(69),G=n.n(q),K=Object(u.a)(r),Q="chosenElements";var U=function(){var e=K(),t=e._container,n=e._button_area,a=Object(i.useState)([]),c=Object(s.a)(a,2),l=c[0],r=c[1],u=Object(i.useState)([]),m=Object(s.a)(u,2),f=m[0],b=m[1],h=Object(i.useState)(!1),O=Object(s.a)(h,2),g=O[0],x=O[1];Object(i.useEffect)((function(){var e=localStorage.getItem(Q);null!==e&&(console.log("PARSE"),r(JSON.parse(e)));var t=j(1e3,(function(e){return"Item ".concat(e+1)}));b(t),console.log("mount")}),[]);var p=function(e){r(e),localStorage.setItem(Q,JSON.stringify(e))};return Object(E.jsxs)("div",{className:t,children:[Object(E.jsx)(w,{items:l,main:"main",updateElements:p}),Object(E.jsxs)("div",{className:n,children:[Object(E.jsx)(o.a,{variant:"contained",color:"primary",onClick:function(){return x(!g)},children:d.change}),0===l.length?null:Object(E.jsx)(G.a,{})]}),g?Object(E.jsx)(W,{close:function(){return x(!g)},elements:f,chosenElements:l,saveElements:p}):null]})};var V=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(U,{})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),c(e),l(e)}))};l.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(V,{})}),document.getElementById("root")),X()}},[[90,1,2]]]);
//# sourceMappingURL=main.e7244825.chunk.js.map