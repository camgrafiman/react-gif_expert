(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=a(1),o=a(9);var i=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null," Agregar categor\xeda: "),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(o.a)(e))})),i(""))}},r.a.createElement("input",{type:"text",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",null," Enviar ")))},m=a(4),s=a.n(m),f=a(7),d=function(){var e=Object(f.a)(s.a.mark((function e(t){var a,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=PTjpLvexMsaPA8HGX2EDOPipPC3Jrr1r&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.color,a=e.img,n={color:t,background:"grey"};return r.a.createElement("div",{className:"card animate__animated animate__flipInY "},r.a.createElement("a",{href:a.url},r.a.createElement("img",{className:"animate__animated animate__fadeIn animate__delay-1s",src:a.url,alt:a.title,key:a.id})),r.a.createElement("p",{style:n},a.title))},p=a(8),E=a.n(p),v=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"loading",src:E.a,alt:"Cargando..."}))},b=function(e){var t=e.category,a=e.col,c=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),l=c.data,o=c.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,t),o&&r.a.createElement(v,null),r.a.createElement("div",{className:"card-grid"},l.map((function(e){return r.a.createElement(g,{color:a,img:e,key:e.id})})))))};b.defaultProps={category:"nada"};var h=b,y=function(e){var t=e.color,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1];function i(e){console.info(e.target.dataset.color),o(e.currentTarget.dataset.color)}return Object(n.useEffect)((function(){t(l)}),[l]),r.a.createElement(n.Fragment,null,r.a.createElement("ol",{className:"flex"},["green","red","blue","white","black","orange","grey"].map((function(e){var t={background:e};return r.a.createElement("div",{className:"caja-color",key:e,onClick:i,"data-color":e,style:t},e)}))))},j=function(){var e=Object(n.useState)(["Dragon Ball Z","Final fantasy 7"]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),m=o[0],s=o[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(i,{setCategorias:c}),r.a.createElement("hr",null),r.a.createElement(y,{color:function(e){return s(e)}}),r.a.createElement("hr",null),r.a.createElement("p",null,"Color actual: ",m," "),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(h,{key:e,category:e,col:m})}))))};a(16);l.a.render(r.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/loading.18848c18.gif"}},[[10,1,2]]]);
//# sourceMappingURL=main.8ad86bea.chunk.js.map