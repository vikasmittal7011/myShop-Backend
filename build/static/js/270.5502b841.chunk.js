"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[270],{8334:function(e,i,t){var n=t(1087),s=t(184);i.Z=function(e){var i=e.className,t=e.to,a=e.name,r=e.onClick;return(0,s.jsx)(n.rU,{to:t,className:"".concat(i||""),onClick:r,children:a})}},4110:function(e,i,t){var n=t(8334),s=t(184);i.Z=function(e){var i=e.title,t=e.id,a=e.type,r=e.className,c=e.showLink,l=void 0!==c&&c,d=e.linkText,o=e.linkNavigate,g=e.linkClass,m=e.placeHolder,u=e.value,h=e.onChange,p=e.minLength,x=e.errorMessage,f=e.min,v=e.max,y=e.step;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("label",{htmlFor:t,className:"block text-sm font-medium leading-6 text-gray-900",children:i}),l&&(0,s.jsx)("div",{className:"text-sm",children:(0,s.jsx)(n.Z,{to:o,className:"".concat(g||"font-semibold text-indigo-600 hover:text-indigo-500"),name:d})})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("input",{id:t,name:t,type:a,autoComplete:"current-password",required:!0,className:"".concat(r||"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),placeholder:m,value:u,onChange:function(e){h(t,e.target.value)},minLength:p,min:f,max:v,step:y})}),(0,s.jsx)("p",{className:"text-red-600",children:x||null})]})}},7032:function(e,i,t){var n=t(184);i.Z=function(e){var i=e.title,t=e.id,s=e.onChange,a=e.options,r=e.defaultValue,c=e.errorMessage;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsx)("label",{htmlFor:t,className:"block text-sm font-medium leading-6 text-gray-900",children:i})}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsxs)("select",{id:"country",name:"country",autoComplete:"country-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",onChange:function(e){s(t,e.target.value)},children:[(0,n.jsx)("option",{value:"",children:r}),null===a||void 0===a?void 0:a.map((function(e,i){return(0,n.jsx)("option",{value:e.id||e.name,children:e.name||e.label},i)}))]})}),(0,n.jsx)("p",{className:"text-red-600",children:c||null})]})}},7270:function(e,i,t){t.r(i),t.d(i,{default:function(){return Z}});var n=t(4942),s=t(1413),a=t(9439),r=t(7689),c=t(9434),l=t(2791),d=t(170),o=t(7678),g=t(4110),m=t(184),u=function(e){var i=e.title,t=e.id,n=e.className,s=e.placeHolder,a=e.value,r=e.onChange,c=e.errorMessage,l=e.row,d=e.required;return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"flex items-center justify-between",children:(0,m.jsx)("label",{htmlFor:t,className:"block text-sm font-medium leading-6 text-gray-900",children:i})}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("textarea",{rows:l||3,id:t,name:t,autoComplete:"current-password",required:d,className:"".concat(n||"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),placeholder:s,value:a,onChange:function(e){r(t,e.target.value)}})}),(0,m.jsx)("p",{className:"text-red-600",children:c||null})]})},h=t(7032),p=function(e){var i=e.title,t=e.id,n=e.onChange,s=e.errorMessage,a=e.className,r=e.multiple,c=void 0!==r&&r;return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"flex items-center justify-between",children:(0,m.jsx)("label",{htmlFor:t,className:"block text-sm font-medium leading-6 text-gray-900",children:i})}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("input",{id:t,name:t,type:"file",autoComplete:"current-password",required:!0,className:"".concat(a||"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),onChange:function(e){n(t,c?e.target.files:e.target.files[0])},multiple:c})}),(0,m.jsx)("p",{className:"text-red-600",children:s||null})]})},x=t(6447),f=t(241),v=function(e){var i=e.id,t=e.className,n=e.onChange,s=e.values,a=e.title,r=function(e){n(e.target.value,e)};return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"flex items-center justify-between",children:(0,m.jsx)("label",{htmlFor:i,className:"block text-sm font-medium leading-6 text-gray-900",children:a})}),(0,m.jsx)("div",{className:"mt-2",children:(0,m.jsx)("div",{className:"flex",children:null===s||void 0===s?void 0:s.map((function(e,n){return(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("input",{id:i,name:i,type:"checkbox",value:e.id,className:"".concat(t||"rounded-md border-0 m-1.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer"),onChange:r,checked:e.checked}),(0,m.jsx)("p",{className:"block text-sm mt-0.5 leading-6 text-gray-900",children:e.name})]},n)}))})})]})},y=t(4348),j=t(2665),b=t(2234),k=t(2073),Z=function(){var e=(0,r.s0)(),i=(0,d.VY)(),t=(0,r.UO)().id,Z=(0,l.useState)(k.O9),N=(0,a.Z)(Z,2),C=N[0],w=N[1],S=(0,l.useState)(k.J7),E=(0,a.Z)(S,2),M=E[0],P=E[1],X=(0,c.I0)(),z=(0,c.v9)(y.nR),L=z.selectedProduct,H=z.status,F=z.message,I=(0,c.v9)(j.RR).brand,q=(0,c.v9)(b.uY).category,R={title:"",description:"",price:"",discountPercentage:"",stock:"",rating:0,thumbnail:"",images:[],image1:"",image2:"",image3:"",image4:"",colors:[],sizes:[],highlight:"",highlights:[]},B={brand:"Select Brand",category:"Select Category"},D=(0,l.useState)((0,s.Z)((0,s.Z)({},R),B)),G=(0,a.Z)(D,2),O=G[0],T=G[1],V=(0,l.useState)((0,s.Z)((0,s.Z)({},R),{},{brand:"",category:""})),Y=(0,a.Z)(V,2),J=Y[0],U=Y[1],A=function(e,i){if(T((0,s.Z)((0,s.Z)({},O),{},(0,n.Z)({},e,i))),U((0,s.Z)((0,s.Z)({},R),{},{brand:"",category:""})),"highlight"===e){var t=i.split(",").map((function(e){return e.trim()}));T((0,s.Z)((0,s.Z)({},O),{},(0,n.Z)({highlights:t},e,i)))}};return(0,l.useEffect)((function(){X(t?(0,y.X1)(t):(0,y.CH)())}),[t,X]),(0,l.useEffect)((function(){if(L&&t){T((0,s.Z)((0,s.Z)({},L),{},{highlight:L.highlights.toString()}));var e=new Map(L.colors.map((function(e){return[e.id,e]}))),i=C.map((function(i){var t=e.get(i.id);return t?(0,s.Z)((0,s.Z)({},i),t):i}));w(i);var n=new Map(L.sizes.map((function(e){return[e.id,e]}))),a=M.map((function(e){var i=n.get(e.id);return i?(0,s.Z)((0,s.Z)({},e),i):e}));P(a)}else w([{id:"White",name:"White",class:"bg-white",selectedClass:"ring-gray-400",checked:!1},{id:"Gray",name:"Gray",class:"bg-gray-600",selectedClass:"ring-gray-400",checked:!1},{id:"Black",name:"Black",class:"bg-black",selectedClass:"ring-black",checked:!1},{id:"Red",name:"Red",class:"bg-red-600",selectedClass:"ring-red-600",checked:!1},{id:"Green",name:"Green",class:"bg-green-500",selectedClass:"ring-green-500",checked:!1},{id:"Yellow",name:"Yellow",class:"bg-yellow-400",selectedClass:"ring-yellow-400",checked:!1}]),P([{name:"XXS",id:"XXS",inStock:!0,checked:!1},{name:"XS",id:"XS",inStock:!0,checked:!1},{name:"S",id:"S",inStock:!0,checked:!1},{name:"M",id:"M",inStock:!0,checked:!1},{name:"L",id:"L",inStock:!0,checked:!1},{name:"XL",id:"XL",inStock:!0,checked:!1},{name:"2XL",id:"2XL",inStock:!0,checked:!1},{name:"3XL",id:"3XL",inStock:!0,checked:!1}])}),[L,t]),(0,l.useEffect)((function(){setTimeout((function(){X((0,y.c4)())}),4e3)}),[null===F||void 0===F?void 0:F.message,X]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(x.Z,{heading:t?"Update Product":"Add New Product"}),(0,m.jsx)("p",{className:"text-red-600 my-3 font-bold text-2xl capitalize",children:null===F||void 0===F?void 0:F.message}),(0,m.jsx)("form",{onSubmit:function(n){var a;if(n.preventDefault(),""===(a=O).title?(U((0,s.Z)((0,s.Z)({},J),{},{title:"Enter title corretly"})),!1):""===a.description?(U((0,s.Z)((0,s.Z)({},J),{},{description:"Enter description corretly"})),!1):""===a.price?(U((0,s.Z)((0,s.Z)({},J),{},{price:"Enter price corretly"})),!1):""===a.stock?(U((0,s.Z)((0,s.Z)({},J),{},{stock:"Enter stock corretly"})),!1):""===a.discountPercentage?(U((0,s.Z)((0,s.Z)({},J),{},{discountPercentage:"Enter discountPercentage corretly"})),!1):""===a.brand||"Select Brand"===a.brand?(U((0,s.Z)((0,s.Z)({},J),{},{brand:"Enter brand corretly"})),!1):""===a.category||"Select Category"===a.category?(U((0,s.Z)((0,s.Z)({},q),{},{brand:"Enter category corretly"})),!1):""===a.thumbnail?(U((0,s.Z)((0,s.Z)({},J),{},{thumbnail:"Enter thumbnail corretly"})),!1):""===a.image1?(U((0,s.Z)((0,s.Z)({},J),{},{image1:"Enter image1 corretly"})),!1):""===a.image2?(U((0,s.Z)((0,s.Z)({},J),{},{image2:"Enter image2 corretly"})),!1):""===a.image3?(U((0,s.Z)((0,s.Z)({},J),{},{image3:"Enter image3 corretly"})),!1):""!==a.image4||(U((0,s.Z)((0,s.Z)({},J),{},{image4:"Enter image4 corretly"})),!1)){var r=new FormData;r.append("title",O.title),r.append("description",O.description),r.append("price",+O.price),r.append("discountPercentage",+O.discountPercentage),r.append("stock",+O.stock),r.append("brand",O.brand),r.append("category",O.category),r.append("colors",JSON.stringify(O.colors)),r.append("sizes",JSON.stringify(O.sizes)),r.append("thumbnail",O.thumbnail),r.append("image1",O.image1),r.append("image2",O.image2),r.append("image3",O.image3),r.append("image4",O.image4),r.append("highlights",O.highlights),t?(O.id=t,O.rating=L.rating||0,X((0,y.b2)(O)),e("/product-details/".concat(O.id))):(X((0,y.ns)(r)),"loading"!==H&&"failed"!==H?(i.success(O.title+" is added successfully"),e("/")):i.success(O.title+" failed to add")),T((0,s.Z)((0,s.Z)({},R),B))}},className:"m-10",children:(0,m.jsx)("div",{className:"space-y-12",children:(0,m.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,m.jsxs)("div",{className:"mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,m.jsx)("div",{className:"col-span-full",children:(0,m.jsx)(g.Z,{id:"title",title:"Title",type:"text",placeHolder:"Enter title...",value:O.title,errorMessage:J.title,onChange:A})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(h.Z,{id:"category",title:"Category",options:q,defaultValue:O.category,errorMessage:J.category,onChange:A})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(h.Z,{id:"brand",title:"Brand",options:I,defaultValue:O.brand,errorMessage:J.brand,onChange:A})}),(0,m.jsx)("div",{className:"col-span-full",children:(0,m.jsx)(u,{id:"description",title:"Description",type:"text",placeHolder:"Enter description...",onChange:A,value:O.description,errorMessage:J.description,required:!0})}),(0,m.jsx)("div",{className:"col-span-full",children:(0,m.jsx)(u,{id:"highlight",title:"Highlights",type:"text",placeHolder:"Separate every highlight with ','",onChange:A,value:O.highlight,required:!1})}),(0,m.jsx)("div",{className:"sm:col-span-2 sm:col-start-1",children:(0,m.jsx)(g.Z,{id:"price",title:"Price",type:"number",placeHolder:"Enter price...",onChange:A,value:O.price,errorMessage:J.price})}),(0,m.jsx)("div",{className:"sm:col-span-2",children:(0,m.jsx)(g.Z,{id:"discountPercentage",title:"Discount Percentage",type:"number",placeHolder:"Enter discount percentage...",onChange:A,value:O.discountPercentage,errorMessage:J.discountPercentage})}),(0,m.jsx)("div",{className:"sm:col-span-2",children:(0,m.jsx)(g.Z,{id:"stock",title:"Stock",type:"number",placeHolder:"Enter stock...",onChange:A,value:O.stock,errorMessage:J.stock})}),(0,m.jsx)("div",{className:"sm:col-span-full",children:(0,m.jsx)(v,{id:"sizes",title:"Sizes",values:M,onChange:function(e,i){var t=M.find((function(i){return i.id===e})),n=M.findIndex((function(i){return i.id===e})),a=(0,s.Z)({},O);if(L)if(i.target.checked){t.checked=!0;var r=M.map((function(e,i){return n===i?t:e})).filter((function(e){return!0===e.checked&&e}));a.sizes=r}else{t.checked=!1;var c=M.map((function(e,i){return n===i?t:e})).filter((function(e){return!0===e.checked&&e}));a.sizes=c}else i.target.checked?(t.checked=!0,M.splice(n,1,t),a.sizes.push(t)):(t.checked=!1,M.splice(n,1,t),a.sizes.splice(t,1));T(a)}})}),(0,m.jsx)("div",{className:"sm:col-span-full",children:(0,m.jsx)(v,{id:"colors",title:"Colors",values:C,onChange:function(e,i){var t=C.find((function(i){return i.id===e})),n=C.findIndex((function(i){return i.id===e})),a=(0,s.Z)({},O);if(L)if(i.target.checked){t.checked=!0;var r=C.map((function(e,i){return n===i?t:e})).filter((function(e){return!0===e.checked&&e}));a.colors=r}else{t.checked=!1;var c=C.map((function(e,i){return n===i?t:e})).filter((function(e){return!0===e.checked&&e}));a.colors=c}else i.target.checked?(t.checked=!0,C.splice(n,1,t),a.colors.push(t)):(t.checked=!1,C.splice(n,1,t),a.colors.splice(t,1));T(a)}})}),!t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"col-span-full",children:(0,m.jsx)(p,{id:"thumbnail",title:"Thumbnail",onChange:A,value:O.thumbnail,errorMessage:J.thumbnail})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(p,{id:"image1",title:"Image 1",type:"text",onChange:A,value:O.image1,errorMessage:J.image1})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(p,{id:"image2",title:"Image 2",type:"text",onChange:A,value:O.image2,errorMessage:J.image2})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(p,{id:"image3",title:"Image 3",type:"text",onChange:A,value:O.image3,errorMessage:J.image3})}),(0,m.jsx)("div",{className:"sm:col-span-3",children:(0,m.jsx)(p,{id:"image4",title:"Image 4",type:"text",onChange:A,value:O.image4,errorMessage:J.image4})})]})]}),(0,m.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,m.jsx)(f.Z,{onClick:function(){T((0,s.Z)((0,s.Z)({},R),B))},className:"text-sm font-semibold leading-6 text-gray-900",children:"Reset"}),(0,m.jsx)(f.Z,{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:t?"Save Changes":"Add"})]})]})})})]})})}}}]);
//# sourceMappingURL=270.5502b841.chunk.js.map