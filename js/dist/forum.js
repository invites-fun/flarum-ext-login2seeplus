module.exports=function(e){var o={};function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(r,t,function(o){return e[o]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=10)}([function(e,o){e.exports=flarum.core.compat["common/app"]},function(e,o){e.exports=flarum.core.compat["common/extend"]},,function(e,o){e.exports=flarum.core.compat["common/components/CommentPost"]},function(e,o){e.exports=flarum.core.compat["common/components/LogInModal"]},function(e,o){e.exports=flarum.core.compat["common/components/HeaderPrimary"]},function(e,o){e.exports=flarum.core.compat["common/components/SignUpModal"]},,,,function(e,o,n){"use strict";n.r(o);var r=n(1),t=n(0),a=n.n(t),i=n(3),l=n.n(i),s=n(5),c=n.n(s),u=n(4),p=n.n(u),f=n(6),d=n.n(f);a.a.initializers.add("jslirola-login2seeplus",(function(){var e,o,n,t,i;function s(e){var o=document.createElement("a");return o.setAttribute("class","l2sp"),o.innerHTML=a.a.translator.trans(e),o.outerHTML}Object(r.extend)(c.a.prototype,"oninit",(function(){o=parseInt(a.a.forum.attribute("jslirola.login2seeplus.post")||100),isNaN(o)&&(o=-1),n=JSON.parse(a.a.forum.attribute("jslirola.login2seeplus.link")||1),t=JSON.parse(a.a.forum.attribute("jslirola.login2seeplus.image")||0),i=JSON.parse(a.a.forum.attribute("jslirola.login2seeplus.code")||0),e=JSON.parse(a.a.forum.attribute("jslirola.login2seeplus.php")||0)})),Object(r.extend)(l.a.prototype,"content",(function(r){if(!a.a.session.user&&!this.isEditing()&&!e){var l,c,u=r[1].children[0].children,p=!1;if(-1!=o&&(l=u,(c=document.createElement("div")).innerHTML=l,(c.textContent||c.innerText||"").length>o)){try{u=function(e,o){var n=document.createElement("div");return n.innerHTML=e,function e(n,r){var t=n.firstChild;n.innerHTML&&o<=0&&(n.innerHTML="");do{3===t.nodeType?r(t):1===t.nodeType&&t.childNodes&&t.childNodes[0]&&e(t,r)}while(t=t.nextSibling)}(n,(function(e){if(o>0){var n=e.data.length;(o-=n)<=0&&e&&e.data&&(e.data=e.substringData(0,e.data.length+o)+"...")}else e&&e.data&&(e.data="")})),n.innerHTML}(u,o)}catch(e){}p=!0}if(1==n&&(u=(u=(u=u.replace(/(<a((?!PostMention).)*?>)[^<]*<\/a>/g,s("jslirola-login2seeplus.forum.link"))).replace(/<span data-s9e-mediaembed=(.*?)><span (.*?)><iframe(.*?)><\/iframe><\/span><\/span>/g,s("jslirola-login2seeplus.forum.link"))).replace(/<iframe data-s9e-mediaembed=(.*?)><\/iframe>/g,s("jslirola-login2seeplus.forum.link"))),2==n&&(u=u.replace(/<a href=".*?"/g,'<a class="l2sp"')),t){var f=0;u=u.replace(/<img((.(?!class=))*)\/?>/g,(function(e){var o=$(e)[0].src,n=new Image;return n.onload=function(){var e=n.width,o=n.height;e=e>150?e:150,o=o>150?o:150,$(".wlip"+this.counter).width(e),$(".wlip"+this.counter).height(o)},n.counter=f,n.src=o,'<div class="jslirolaLogin2seeplusImgPlaceholder wlip'+f+++'">'+s("jslirola-login2seeplus.forum.image")+"</div>"}))}i&&(u=(u=u.replace(/<pre><code.*?>[^]*<\/pre>/g,s("jslirola-login2seeplus.forum.code"))).replace(/<code.*?>[^>]*<\/code>/g,s("jslirola-login2seeplus.forum.code"))),p&&(u+='<div class="jslirolaLogin2seeplusAlert">'+a.a.translator.trans("jslirola-login2seeplus.forum.post",{login:"<a class='jslirolaLogin2seeplusLogin'>"+a.a.translator.trans("core.forum.header.log_in_link")+"</a>",register:"<a class='jslirolaLogin2seeplusRegister'>"+a.a.translator.trans("core.forum.header.sign_up_link")+"</a>"}).join("")+"</div>"),r[1].children[0]=m.trust(u)}})),Object(r.extend)(l.a.prototype,"oncreate",(function(){$(".Post-body a.l2sp").off("click").on("click",(function(){return a.a.modal.show(p.a)})),$(".jslirolaLogin2seeplusLogin").off("click").on("click",(function(){return a.a.modal.show(p.a)})),$(".jslirolaLogin2seeplusRegister").off("click").on("click",(function(){return a.a.modal.show(d.a)}))}))}))}]);
//# sourceMappingURL=forum.js.map