(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/allenglishclub/aide/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"11ef":function(e){e.exports=JSON.parse('[{"en":"This is a list of nurses and nurse\'s aides who work here","ru":"Это список медсестер и санитарок, работающих здесь","bre":"audio/third-br.mp3","ame":"audio/third-am.mp3"},{"en":"There are over 40 nurses that work there, at least twice that number of aides","ru":"Там работает более 40 медсестер, санитарок по крайней мере вдвое больше","bre":"audio/fourth-br.mp3","ame":"audio/fourth-am.mp3"},{"en":"That\'s the secretary\'s aide","ru":"Это помощник министра","bre":"audio/fifth-br.mp3","ame":"audio/fifth-am.mp3"},{"en":"He was a presidential aide during the first term","ru":"Он был помощником президента во время его первого срока","bre":"audio/seventh-br.mp3","ame":"audio/seventh-am.mp3"},{"en":"He has been a loyal and trustworthy aide since the election","ru":"Он был верным и надежным помощником с самого моего избрания","bre":"audio/eighth-br.mp3","ame":"audio/eighth-am.mp3"},{"en":"His aide said that he left the event at 9:00 PM","ru":"Его помощник сказал, что он покинул прием в 21:00","bre":"audio/ninth-br.mp3","ame":"audio/ninth-am.mp3"},{"en":"There are two aides on the ward with me","ru":"Со мной в отделении два санитара","bre":"audio/first-br.mp3","ame":"audio/first-am.mp3"},{"en":"Our two big black boys played for the aides","ru":"Оба наших больших черных парня играли за санитаров","bre":"audio/second-br.mp3","ame":"audio/second-am.mp3"}]')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[e._m(0),r("div",{staticClass:"my-3"},[r("span",{staticClass:"h2"},[e._v(e._s(e.title))]),e._v(" "),r("span",[e._v(e._s(e.subtitle))]),e._v(" "),r("span",{staticClass:"badge bg-secondary"},[e._v(e._s(e.level))]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-auto h5"},[r("button-bre-play",{attrs:{href:"audio/word-br.mp3"}}),e._v(" /eɪd/ ")],1),r("div",{staticClass:"col-md-auto h5"},[r("button-ame-play",{attrs:{href:"audio/word-am.mp3"}}),e._v(" /eɪd/ ")],1)]),r("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:a("9956"),alt:"adverse"}}),e._l(e.cards,(function(t,a){return r("div",{key:"key-"+a},[r("div",{staticClass:"card mt-3"},[r("div",{staticClass:"card-body counter"},[r("p",{domProps:{innerHTML:e._s(t.intro)}}),e._l(t.main_sentences,(function(t,a){return r("ul",{key:"key-"+a},[r("li",[r("i",[e._v(e._s(t.en)+". "),r("br"),e._v(" "+e._s(t.ru)+". ")])]),r("button-bre-play",{attrs:{href:t.bre}}),r("button-ame-play",{attrs:{href:t.ame}})],1)})),r("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[r("div",{staticClass:"accordion-item"},[r("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[r("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#col"+a,"aria-expanded":"false","aria-controls":"col"+a}},[e._v(" Extra Examples | Дополнительные примеры ")])]),r("div",{staticClass:"accordion-collapse collapse",attrs:{id:"col"+a,"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"}},[r("div",{staticClass:"accordion-body"},e._l(t.additional_sentences,(function(t,a){return r("ul",{key:"key-"+a},[r("li",[r("i",[e._v(e._s(t.en)+". "),r("br"),e._v(" "+e._s(t.ru)+". ")])]),r("button-bre-play",{attrs:{href:t.bre}}),r("button-ame-play",{attrs:{href:t.ame}})],1)})),0)])])])],2)])])})),e._m(1),e._l(e.exercises,(function(t,a){return r("div",{key:"key-"+a},[r("div",{staticClass:"card mt-3"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-text counterex"},[r("span",{staticClass:"badge bg-secondary"},[e._v("RU:")]),e._v(" "+e._s(t.ru)+" "),r("exercise",{attrs:{sentence:t.en,hrefbre:t.bre,hrefame:t.ame}})],1)])])])}))],2),e._m(2)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"my-5 text-center"},[a("h1",[a("a",{attrs:{href:"https://vk.com/allenglishclub"}},[e._v("Обучение английскому языку "),a("br"),e._v("(All English Club)")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-3 text-center h5"},[a("h4",[e._v(" Exercises | Упражнения ")]),e._v(" Drag the words into the correct order to make up sentences"),a("br"),e._v(" Перенесите слова в правильном порядке, чтобы получились предложения ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"my-5 text-center"},[a("small",[a("a",{attrs:{href:"https://vk.com/allenglishclub"}},[e._v("Обучение английскому языку (All English Club)")]),a("br"),e._v(" Николай Старков ")])])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"button-play btn btn-danger btn-sm mx-1",attrs:{type:"button"},on:{click:e.play}},[e._v("AmE"),a("img",{attrs:{src:e.publicPath+"listen-icon.svg",alt:""}})])},o=[],l={name:"button-bre-play",data:function(){return{publicPath:"/allenglishclub/aide/"}},props:{href:String},methods:{play:function(){var e=document.getElementById("loader");e.style.visibility="visible";var t=new Audio(this.publicPath+this.href);t.addEventListener("canplaythrough",(function(){e.style.visibility="hidden",t.play()}))}}},c=l,u=a("2877"),d=Object(u["a"])(c,s,o,!1,null,"2ca0b5b2",null),h=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"button-play btn btn-primary btn-sm mx-1",attrs:{type:"button"},on:{click:e.play}},[e._v("BrE"),a("img",{attrs:{src:e.publicPath+"listen-icon.svg",alt:""}})])},m=[],b={name:"button-bre-play",data:function(){return{publicPath:"/allenglishclub/aide/"}},props:{href:String},methods:{play:function(){var e=document.getElementById("loader");e.style.visibility="visible";var t=new Audio(this.publicPath+this.href);t.addEventListener("canplaythrough",(function(){e.style.visibility="hidden",t.play()}))}}},f=b,v=Object(u["a"])(f,p,m,!1,null,"271b3bb4",null),y=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("draggable",e._b({staticClass:"list-inline border p-2 flex-fill my-2",staticStyle:{"min-height":"60px"},attrs:{list:e.list,group:"sentence"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1},change:e.log}},"draggable",e.dragOptions,!1),[a("transition-group",{attrs:{type:"transition",name:e.drag?null:"flip-list"}},e._l(e.list,(function(t,r){return a("div",{key:"key-"+r,staticClass:"list-inline-item my-1 button-exercise",staticStyle:{cursor:"move"}},[e._v(" "+e._s(t)+" ")])})),0)],1),a("div",{staticClass:"d-flex justify-content-end align-items-baseline"},[e.showinc?a("div",{class:{shake:e.isShake,shake2:e.isShake2}},[a("span",{staticClass:"my-0 me-2 text-danger"},[e._v("Incorrect!")])]):e._e(),a("transition",{attrs:{name:"bounce"}},[e.showcor?a("div",{staticClass:"me-2"},[a("span",{staticClass:"my-0 me-2 text-success"},[e._v("Correct!")]),a("button-bre-play",{attrs:{href:e.hrefbre}}),a("button-ame-play",{attrs:{href:e.hrefame}})],1):e._e()]),a("div",[a("button",{staticClass:"btn btn-primary btn-sm ms-1",attrs:{type:"button"},on:{click:e.check}},[a("img",{attrs:{src:e.publicPath+"check.svg",alt:""}}),e._v(" Check")])])],1)],1)},_=[],w=(a("a15b"),a("ac1f"),a("1276"),a("b76a")),k=a.n(w),x={name:"exercise",components:{draggable:k.a,ButtonAmePlay:h,ButtonBrePlay:y},data:function(){return{publicPath:"/allenglishclub/aide/",showinc:!1,showcor:!1,isShake:!1,isShake2:!0,list:[],drag:!1}},props:{sentence:String,hrefbre:String,hrefame:String},methods:{log:function(e){window.console.log(e)},shuffle:function(e){var t,a,r;for(r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),a=e[r],e[r]=e[t],e[t]=a;return e},check:function(){this.isShake=!this.isShake,this.isShake2=!this.isShake2,this.list.join(" ")==this.sentence?(this.showcor=!0,this.showinc=!1):(this.showinc=!0,this.showcor=!1)}},mounted:function(){this.list=this.shuffle(this.sentence.split(" "))},computed:{dragOptions:function(){return{animation:200,group:"sentence",disabled:!1,ghostClass:"ghost"}}}},C=x,P=Object(u["a"])(C,g,_,!1,null,"dc10ae00",null),O=P.exports,E=a("d454"),S=a("11ef"),j={name:"App",components:{ButtonAmePlay:h,ButtonBrePlay:y,Exercise:O},data:function(){return{cards:E,exercises:S,title:"aide | помощник",subtitle:"noun | существительное",level:"Уровень C1",publicPath:"/allenglishclub/aide/"}},created:function(){var e=document.getElementById("loader");e.style.visibility="hidden"}},T=j,B=Object(u["a"])(T,i,n,!1,null,null,null),M=B.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(M)}}).$mount("#app")},9956:function(e,t,a){e.exports=a.p+"img/cover.f6aa6451.jpg"},d454:function(e){e.exports=JSON.parse('[{"intro":"a person who helps another person, especially a politician, in their job<br>человек, который помогает другому человеку в его работе, особенно в политике","main_sentences":[{"en":"There are two aides on the ward with me","ru":"Со мной в отделении два санитара","bre":"audio/first-br.mp3","ame":"audio/first-am.mp3"},{"en":"Our two big black boys played for the aides","ru":"Оба наших больших черных парня играли за санитаров","bre":"audio/second-br.mp3","ame":"audio/second-am.mp3"}],"additional_sentences":[{"en":"This is a list of nurses and nurse\'s aides who work here","ru":"Это список медсестер и санитарок, работающих здесь","bre":"audio/third-br.mp3","ame":"audio/third-am.mp3"},{"en":"There are over 40 nurses that work there, at least twice that number of aides","ru":"Там работает более 40 медсестер, санитарок по крайней мере вдвое больше","bre":"audio/fourth-br.mp3","ame":"audio/fourth-am.mp3"},{"en":"That\'s the secretary\'s aide","ru":"Это помощник министра","bre":"audio/fifth-br.mp3","ame":"audio/fifth-am.mp3"},{"en":"Preschool aide","ru":"Няня в детсаду","bre":"audio/sixth-br.mp3","ame":"audio/sixth-am.mp3"},{"en":"He was a presidential aide during the first term","ru":"Он был помощником президента во время его первого срока","bre":"audio/seventh-br.mp3","ame":"audio/seventh-am.mp3"},{"en":"He has been a loyal and trustworthy aide since the election","ru":"Он был верным и надежным помощником с самого моего избрания","bre":"audio/eighth-br.mp3","ame":"audio/eighth-am.mp3"},{"en":"His aide said that he left the event at 9:00 PM","ru":"Его помощник сказал, что он покинул прием в 21:00","bre":"audio/ninth-br.mp3","ame":"audio/ninth-am.mp3"}]}]')}});
//# sourceMappingURL=app.c9c943fd.js.map