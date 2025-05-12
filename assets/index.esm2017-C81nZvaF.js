import{D as Xu,E as Yu,ad as Ju,J as Qt,I as Zu,ae as tl,X as el,U as nl,V as Mt,af as rl,K as sl,S as il,$ as ol,a0 as al,a1 as zi,N as ul}from"./index-D-Vn23KF.js";var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Bo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function g(){}g.prototype=m.prototype,E.D=m.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,T,I){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(T=0;16>T;++T)y[T]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=E.g[0],g=E.g[1],T=E.g[2];var I=E.g[3],p=m+(I^g&(T^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[2]+606105819&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[3]+3250441966&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[6]+2821735955&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[7]+4249261313&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[10]+4294925233&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[11]+2304563134&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(I^g&(T^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(T^m&(g^T))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(g^I&(m^g))+y[14]+2792965006&4294967295,T=I+(p<<17&4294967295|p>>>15),p=g+(m^T&(I^m))+y[15]+1236535329&4294967295,g=T+(p<<22&4294967295|p>>>10),p=m+(T^I&(g^T))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[11]+643717713&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[0]+3921069994&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[15]+3634488961&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[4]+3889429448&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[3]+4107603335&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[8]+1163531501&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(g^T))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^T&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^g&(I^m))+y[7]+1735328473&4294967295,T=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(T^I))+y[12]+2368359562&4294967295,g=T+(p<<20&4294967295|p>>>12),p=m+(g^T^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[11]+1839030562&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[14]+4259657740&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[7]+4139469664&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[10]+3200236656&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[3]+3572445317&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[6]+76029189&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(g^T^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^T)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^g)+y[15]+530742520&4294967295,T=I+(p<<16&4294967295|p>>>16),p=g+(T^I^m)+y[2]+3299628645&4294967295,g=T+(p<<23&4294967295|p>>>9),p=m+(T^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[14]+2878612391&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[5]+4237533241&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[10]+4293915773&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[1]+2240044497&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[6]+2734768916&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[13]+1309151649&4294967295,g=T+(p<<21&4294967295|p>>>11),p=m+(T^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~T))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~g))+y[2]+718787259&4294967295,T=I+(p<<15&4294967295|p>>>17),p=g+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var g=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=g;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){i(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var g=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=g&255,g/=256;for(this.u(E),E=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)E[g++]=this.g[m]>>>y&255;return E};function o(E,m){var g=h;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=m(E)}function u(E,m){this.h=m;for(var g=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(g[T]=I,y=!1)}this.g=g}var h={};function c(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return D(d(-E));for(var m=[],g=1,y=0;E>=g;y++)m[y]=E/g|0,g*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return D(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=A,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),p=parseInt(E.substring(T,T+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(p))):(y=y.j(g),y=y.add(d(p)))}return y}var A=c(0),R=c(1),C=c(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var m=d(Math.pow(E,6)),g=this,y="";;){var T=rt(g,m).g;g=K(g,T.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=T,k(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=K(this,E),x(E)?-1:k(E)?0:1};function D(E){for(var m=E.g.length,g=[],y=0;y<m;y++)g[y]=~E.g[y];return new u(g,~E.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),p=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=p>>>16,I&=65535,p&=65535,g[T]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function K(E,m){return E.add(D(m))}r.j=function(E){if(k(this)||k(E))return A;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,p=this.i(y)&65535,kt=E.i(T)>>>16,ke=E.i(T)&65535;g[2*y+2*T]+=p*ke,$(g,2*y+2*T),g[2*y+2*T+1]+=I*ke,$(g,2*y+2*T+1),g[2*y+2*T+1]+=p*kt,$(g,2*y+2*T+1),g[2*y+2*T+2]+=I*kt,$(g,2*y+2*T+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function $(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function rt(E,m){if(k(m))throw Error("division by zero");if(k(E))return new G(A,A);if(x(E))return m=rt(D(E),m),new G(D(m.g),D(m.h));if(x(m))return m=rt(E,D(m)),new G(D(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(E);)g=bt(g),y=bt(y);var T=it(g,1),I=it(y,1);for(y=it(y,2),g=it(g,2);!k(y);){var p=I.add(y);0>=p.l(E)&&(T=T.add(g),I=p),y=it(y,1),g=it(g,1)}return m=K(E,T.j(m)),new G(T,m)}for(T=A;0<=E.l(m);){for(g=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(g),p=I.j(m);x(p)||0<p.l(E);)g-=y,I=d(g),p=I.j(m);k(I)&&(I=R),T=T.add(I),E=K(E,p)}return new G(T,E)}r.A=function(E){return rt(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&E.i(y);return new u(g,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|E.i(y);return new u(g,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^E.i(y);return new u(g,this.h^E.h)};function bt(E){for(var m=E.g.length+1,g=[],y=0;y<m;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(g,E.h)}function it(E,m){var g=m>>5;m%=32;for(var y=E.g.length-g,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+g)>>>m|E.i(I+g+1)<<32-m:E.i(I+g);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Bo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,$t=u}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jo,He,zo,Fn,Wr,$o,Ko,Go;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in l))break t;l=l[v]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,f=!1,v={next:function(){if(!f&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function c(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,l){return s.call.apply(s.bind,arguments)}function A(s,a,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function k(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,v,w){for(var S=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)S[Q-2]=arguments[Q];return a.prototype[v].apply(f,S)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(c(f)){const v=s.length||0,w=f.length||0;s.length=v+w;for(let S=0;S<w;S++)s[v+S]=f[S]}else s.push(f)}}class K{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var bt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function it(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)s[l]=f[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function I(s){h.setTimeout(()=>{throw s},0)}function p(){var s=Er;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const f=ke.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var ke=new K(()=>new pu,s=>s.reset());class pu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,xe=!1,Er=new kt,zs=()=>{const s=h.Promise.resolve(void 0);Ne=()=>{s.then(gu)}};var gu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){I(l)}var a=ke;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}xe=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var _u=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s}();function Me(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(bt){t:{try{rt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:yu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Me.aa.h.call(this)}}k(Me,ht);var yu={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),Tu=0;function Eu(s,a,l,f,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=v,this.key=++Tu,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,l,f,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=Ir(s,a,f,v);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new Eu(a,this.src,w,!!f,v),a.fa=l,s.push(a)),a};function vr(s,a){var l=a.type;if(l in s.g){var f=s.g[l],v=Array.prototype.indexOf.call(f,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(f,v,1),w&&(mn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ir(s,a,l,f){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==f)return v}return-1}var Ar="closure_lm_"+(1e6*Math.random()|0),wr={};function $s(s,a,l,f,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)$s(s,a[w],l,f,v);return null}return l=Qs(l),s&&s[dn]?s.K(a,l,d(f)?!!f.capture:!1,v):vu(s,a,l,!1,f,v)}function vu(s,a,l,f,v,w){if(!a)throw Error("Invalid event type");var S=d(v)?!!v.capture:!!v,Q=Pr(s);if(Q||(s[Ar]=Q=new pn(s)),l=Q.add(a,l,f,S,w),l.proxy)return l;if(f=Iu(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)_u||(v=S),v===void 0&&(v=!1),s.addEventListener(a.toString(),f,v);else if(s.attachEvent)s.attachEvent(Gs(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Iu(){function s(l){return a.call(s.src,s.listener,l)}const a=Au;return s}function Ks(s,a,l,f,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Ks(s,a[w],l,f,v);else f=d(f)?!!f.capture:!!f,l=Qs(l),s&&s[dn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Ir(w,l,f,v),-1<l&&(mn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Pr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ir(a,l,f,v)),(l=-1<s?a[s]:null)&&Rr(l))}function Rr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[dn])vr(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(Gs(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=Pr(a))?(vr(l,s),l.h==0&&(l.src=null,a[Ar]=null)):mn(s)}}}function Gs(s){return s in wr?wr[s]:wr[s]="on"+s}function Au(s,a){if(s.da)s=!0;else{a=new Me(a,this);var l=s.listener,f=s.ha||s.src;s.fa&&Rr(s),s=l.call(f,a)}return s}function Pr(s){return s=s[Ar],s instanceof pn?s:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qs(s){return typeof s=="function"?s:(s[Vr]||(s[Vr]=function(a){return s.handleEvent(a)}),s[Vr])}function ct(){Ut.call(this),this.i=new pn(this),this.M=this,this.F=null}k(ct,Ut),ct.prototype[dn]=!0,ct.prototype.removeEventListener=function(s,a,l,f){Ks(this,s,a,l,f)};function _t(s,a){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var v=a;a=new ht(f,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];v=gn(S,f,!0,a)&&v}if(S=a.g=s,v=gn(S,f,!0,a)&&v,v=gn(S,f,!1,a)&&v,l)for(w=0;w<l.length;w++)S=a.g=l[w],v=gn(S,f,!1,a)&&v}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],f=0;f<l.length;f++)mn(l[f]);delete s.g[a],s.h--}}this.F=null},ct.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},ct.prototype.L=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function gn(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var Q=S.listener,ot=S.ha||S.src;S.fa&&vr(s.i,S),v=Q.call(ot,f)!==!1&&v}}return v&&!f.defaultPrevented}function Ws(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Hs(s){s.g=Ws(()=>{s.g=null,s.i&&(s.i=!1,Hs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class wu extends Ut{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Hs(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Ut.call(this),this.h=s,this.g={}}k(Le,Ut);var Xs=[];function Ys(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&Rr(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),Ys(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cr=h.JSON.stringify,Ru=h.JSON.parse,Pu=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Sr(){}Sr.prototype.h=null;function Js(s){return s.h||(s.h=s.i())}function Zs(){}var Oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dr(){ht.call(this,"d")}k(Dr,ht);function br(){ht.call(this,"c")}k(br,ht);var ne={},ti=null;function _n(){return ti=ti||new ct}ne.La="serverreachability";function ei(s){ht.call(this,ne.La,s)}k(ei,ht);function Fe(s){const a=_n();_t(a,new ei(a))}ne.STAT_EVENT="statevent";function ni(s,a){ht.call(this,ne.STAT_EVENT,s),this.stat=a}k(ni,ht);function yt(s){const a=_n();_t(a,new ni(a,s))}ne.Ma="timingevent";function ri(s,a){ht.call(this,ne.Ma,s),this.size=a}k(ri,ht);function Ue(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function qe(){this.g=!0}qe.prototype.xa=function(){this.g=!1};function Vu(s,a,l,f,v,w){s.info(function(){if(s.g)if(w)for(var S="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var j=Q[ot].split("=");if(1<j.length){var ft=j[0];j=j[1];var dt=ft.split("_");S=2<=dt.length&&dt[1]=="type"?S+(ft+"="+j+"&"):S+(ft+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function Cu(s,a,l,f,v,w,S){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+S})}function ce(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Du(s,l)+(f?" "+f:"")})}function Su(s,a){s.info(function(){return"TIMEOUT: "+a})}qe.prototype.info=function(){};function Du(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return Cr(l)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kr;function Tn(){}k(Tn,Sr),Tn.prototype.g=function(){return new XMLHttpRequest},Tn.prototype.i=function(){return{}},kr=new Tn;function qt(s,a,l,f){this.j=s,this.i=a,this.l=l,this.R=f||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ii}function ii(){this.i=null,this.g="",this.h=!1}var oi={},Nr={};function xr(s,a,l){s.L=1,s.v=An(Nt(a)),s.m=l,s.P=!0,ai(s,null)}function ai(s,a){s.F=Date.now(),En(s),s.A=Nt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),vi(l.i,"t",f),s.C=0,l=s.j.J,s.h=new ii,s.g=Ui(s.j,l?a:null,!s.m),0<s.O&&(s.M=new wu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Xs[0]=v.toString()),v=Xs);for(var w=0;w<v.length;w++){var S=$s(l,v[w],f||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Fe(),Vu(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const dt=xt(this.g);var a=this.g.Ba();const me=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ci(this.g)))){this.J||dt!=4||a==7||(a==8||0>=me?Fe(3):Fe(2)),Mr(this);var l=this.g.Z();this.X=l;e:if(ui(this)){var f=Ci(this.g);s="";var v=f.length,w=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Be(this);var S="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(w&&a==v-1)});f.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Cu(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Q)){var j=Q;break e}}j=null}if(l=j)ce(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,l);else{this.o=!1,this.s=3,yt(12),re(this),Be(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<S.length;)if(Rt=bu(this,S),Rt==Nr){dt==4&&(this.s=4,yt(14),l=!1),ce(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==oi){this.s=4,yt(15),ce(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else ce(this.i,this.l,Rt,null),Lr(this,Rt);if(ui(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||S.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ce(this.i,this.l,S,"[Invalid Chunked Response]"),re(this),Be(this);else if(0<S.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),jr(ft),ft.M=!0,yt(11))}}else ce(this.i,this.l,S,null),Lr(this,S);dt==4&&re(this),this.o&&!this.J&&(dt==4?Mi(this.j,this):(this.o=!1,En(this)))}else Wu(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),re(this),Be(this)}}}catch{}finally{}};function ui(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function bu(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?Nr:(l=Number(a.substring(l,f)),isNaN(l)?oi:(f+=1,f+l>a.length?Nr:(a=a.slice(f,f+l),s.C=f+l,a)))}qt.prototype.cancel=function(){this.J=!0,re(this)};function En(s){s.S=Date.now()+s.I,li(s,s.I)}function li(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ue(R(s.ba,s),a)}function Mr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Su(this.i,this.A),this.L!=2&&(Fe(),yt(17)),re(this),this.s=2,Be(this)):li(this,this.S-s)};function Be(s){s.j.G==0||s.J||Mi(s.j,s)}function re(s){Mr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ys(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Lr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||Or(l.h,s))){if(!s.K&&Or(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Sn(l),Vn(l);else break t;Br(l),yt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ue(R(l.Za,l),6e3));if(1>=fi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ie(l,11)}else if((s.K||l.g==s)&&Sn(l),!$(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(l.T=j[0],j=j[1],l.G==2)if(j[0]=="c"){l.K=j[1],l.ia=j[2];const ft=j[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const dt=j[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const me=j[5];me!=null&&typeof me=="number"&&0<me&&(f=1.5*me,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Rt=s.g;if(Rt){const bn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bn){var w=f.h;w.g||bn.indexOf("spdy")==-1&&bn.indexOf("quic")==-1&&bn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Fr(w,w.h),w.h=null))}if(f.D){const zr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;zr&&(f.ya=zr,W(f.I,f.D,zr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var S=s;if(f.qa=Fi(f,f.J?f.ia:null,f.W),S.K){di(f.h,S);var Q=S,ot=f.L;ot&&(Q.I=ot),Q.B&&(Mr(Q),En(Q)),f.g=S}else Ni(f);0<l.i.length&&Cn(l)}else j[0]!="stop"&&j[0]!="close"||ie(l,7);else l.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?ie(l,7):qr(l):j[0]!="noop"&&l.l&&l.l.ta(j),l.v=0)}}Fe(4)}catch{}}var ku=class{constructor(s,a){this.g=s,this.map=a}};function hi(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ci(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function fi(s){return s.h?1:s.g?s.g.size:0}function Or(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Fr(s,a){s.g?s.g.add(a):s.h=a}function di(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}hi.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function mi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Nu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var a=[],l=s.length,f=0;f<l;f++)a.push(s[f]);return a}a=[],l=0;for(f in s)a[l++]=s[f];return a}function xu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const f in s)a[l++]=f;return a}}}function pi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=xu(s),f=Nu(s),v=f.length,w=0;w<v;w++)a.call(void 0,f[w],l&&l[w],s)}var gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),v=null;if(0<=f){var w=s[l].substring(0,f);v=s[l].substring(f+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,vn(this,s.j),this.o=s.o,this.g=s.g,In(this,s.s),this.l=s.l;var a=s.i,l=new $e;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),_i(this,l),this.m=s.m}else s&&(a=String(s).match(gi))?(this.h=!1,vn(this,a[1]||"",!0),this.o=je(a[2]||""),this.g=je(a[3]||"",!0),In(this,a[4]),this.l=je(a[5]||"",!0),_i(this,a[6]||"",!0),this.m=je(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}se.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ze(a,yi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ze(a,yi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(ze(l,l.charAt(0)=="/"?Fu:Ou,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",ze(l,qu)),s.join("")};function Nt(s){return new se(s)}function vn(s,a,l){s.j=l?je(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function In(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function _i(s,a,l){a instanceof $e?(s.i=a,Bu(s.i,s.h)):(l||(a=ze(a,Uu)),s.i=new $e(a,s.h))}function W(s,a,l){s.i.set(a,l)}function An(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function je(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ze(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Lu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Lu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var yi=/[#\/\?@]/g,Ou=/[#\?:]/g,Fu=/[#\?]/g,Uu=/[#\?@]/g,qu=/#/g;function $e(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&Mu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=$e.prototype,r.add=function(s,a){Bt(this),this.i=null,s=fe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ti(s,a){Bt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ei(s,a){return Bt(s),a=fe(s,a),s.g.has(a)}r.forEach=function(s,a){Bt(this),this.g.forEach(function(l,f){l.forEach(function(v){s.call(a,v,f,this)},this)},this)},r.na=function(){Bt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const v=s[f];for(let w=0;w<v.length;w++)l.push(a[f])}return l},r.V=function(s){Bt(this);let a=[];if(typeof s=="string")Ei(this,s)&&(a=a.concat(this.g.get(fe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Bt(this),this.i=null,s=fe(this,s),Ei(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function vi(s,a,l){Ti(s,a),0<l.length&&(s.i=null,s.g.set(fe(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const w=encodeURIComponent(String(f)),S=this.V(f);for(f=0;f<S.length;f++){var v=w;S[f]!==""&&(v+="="+encodeURIComponent(String(S[f]))),s.push(v)}}return this.i=s.join("&")};function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Bu(s,a){a&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(l,f){var v=f.toLowerCase();f!=v&&(Ti(this,f),vi(this,v,l))},s)),s.j=a}function ju(s,a){const l=new qe;if(h.Image){const f=new Image;f.onload=C(jt,l,"TestLoadImage: loaded",!0,a,f),f.onerror=C(jt,l,"TestLoadImage: error",!1,a,f),f.onabort=C(jt,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=C(jt,l,"TestLoadImage: timeout",!1,a,f),h.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function zu(s,a){const l=new qe,f=new AbortController,v=setTimeout(()=>{f.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(w=>{clearTimeout(v),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function $u(){this.g=new Pu}function Ku(s,a,l){const f=l||"";try{pi(s,function(v,w){let S=v;d(v)&&(S=Cr(v)),a.push(f+w+"="+encodeURIComponent(S))})}catch(v){throw a.push(f+"type="+encodeURIComponent("_badmap")),v}}function wn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(wn,Sr),wn.prototype.g=function(){return new Rn(this.l,this.j)},wn.prototype.i=function(s){return function(){return s}}({});function Rn(s,a){ct.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Rn,ct),r=Rn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ge(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ii(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ii(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ke(this):Ge(this),this.readyState==3&&Ii(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Ke(this))},r.Qa=function(s){this.g&&(this.response=s,Ke(this))},r.ga=function(){this.g&&Ke(this)};function Ke(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ge(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ge(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ai(s){let a="";return it(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function Ur(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Ai(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function Y(s){ct.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Y,ct);var Gu=/^https?$/i,Qu=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kr.g(),this.v=this.o?Js(this.o):Js(kr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){wi(this,w);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Qu,a,void 0))||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){wi(this,w)}};function wi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ri(s),Pn(s)}function Ri(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Pn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Pi(this):this.bb())},r.bb=function(){Pi(this)};function Pi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)Ws(s.Ea,0,s);else if(_t(s,"readystatechange"),xt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=S===0){var v=String(s.D).match(gi)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),f=!Gu.test(v?v.toLowerCase():"")}l=f}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<xt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Ri(s)}}finally{Pn(s)}}}}function Pn(s,a){if(s.g){Vi(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=f}catch{}}}function Vi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ru(a)}};function Ci(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Wu(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if($(s[f]))continue;var l=T(s[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Si(s){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qe("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qe("baseRetryDelayMs",5e3,s),this.cb=Qe("retryDelaySeedMs",1e4,s),this.Wa=Qe("forwardChannelMaxRetries",2,s),this.wa=Qe("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new hi(s&&s.concurrentRequestLimit),this.Da=new $u,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Si.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,f){yt(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Fi(this,null,this.W),Cn(this)};function qr(s){if(Di(s),s.G==3){var a=s.U++,l=Nt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),We(s,l),a=new qt(s,s.j,a),a.L=2,a.v=An(Nt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=Ui(a.j,null),a.g.ea(a.v)),a.F=Date.now(),En(a)}Oi(s)}function Vn(s){s.g&&(jr(s),s.g.cancel(),s.g=null)}function Di(s){Vn(s),s.u&&(h.clearTimeout(s.u),s.u=null),Sn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Cn(s){if(!ci(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ne||zs(),xe||(Ne(),xe=!0),Er.add(a,s),s.B=0}}function Hu(s,a){return fi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ue(R(s.Ga,s,a),Li(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new qt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=ki(this,v,a),l=Nt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),We(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ai(w)))+"&"+a:this.m&&Ur(l,this.m,w)),Fr(this.h,v),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),v.T=!0,xr(v,l,null)):xr(v,l,a),this.G=2}}else this.G==3&&(s?bi(this,s):this.i.length==0||ci(this.h)||bi(this))};function bi(s,a){var l;a?l=a.l:l=s.U++;const f=Nt(s.I);W(f,"SID",s.K),W(f,"RID",l),W(f,"AID",s.T),We(s,f),s.m&&s.o&&Ur(f,s.m,s.o),l=new qt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=ki(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Fr(s.h,l),xr(l,f,a)}function We(s,a){s.H&&it(s.H,function(l,f){W(a,f,l)}),s.l&&pi({},function(l,f){W(a,f,l)})}function ki(s,a,l){l=Math.min(s.i.length,l);var f=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=v[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let j=v[ot].g;const ft=v[ot].map;if(j-=w,0>j)w=Math.max(0,v[ot].g-100),Q=!1;else try{Ku(ft,S,"req"+j+"_")}catch{f&&f(ft)}}if(Q){f=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,f}function Ni(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ne||zs(),xe||(Ne(),xe=!0),Er.add(a,s),s.v=0}}function Br(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ue(R(s.Fa,s),Li(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ue(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Vn(this),xi(this))};function jr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function xi(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Nt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),We(s,a),s.m&&s.o&&Ur(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=An(Nt(a)),l.m=null,l.P=!0,ai(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Vn(this),Br(this),yt(19))};function Sn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Mi(s,a){var l=null;if(s.g==a){Sn(s),jr(s),s.g=null;var f=2}else if(Or(s.h,a))l=a.D,di(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;f=_n(),_t(f,new ri(f,l)),Cn(s)}else Ni(s);else if(v=a.s,v==3||v==0&&0<a.X||!(f==1&&Hu(s,a)||f==2&&Br(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:ie(s,5);break;case 4:ie(s,10);break;case 3:ie(s,6);break;default:ie(s,2)}}}function Li(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ie(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),f=s.Xa;const v=!f;f=new se(f||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||vn(f,"https"),An(f),v?ju(f.toString(),l):zu(f.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Oi(s),Di(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Oi(s){if(s.G=0,s.ka=[],s.l){const a=mi(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Fi(s,a,l){var f=l instanceof se?Nt(l):new se(l);if(f.g!="")a&&(f.g=a+"."+f.g),In(f,f.s);else{var v=h.location;f=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new se(null);f&&vn(w,f),a&&(w.g=a),v&&In(w,v),l&&(w.l=l),f=w}return l=s.D,a=s.ya,l&&a&&W(f,l,a),W(f,"VER",s.la),We(s,f),f}function Ui(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new wn({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qi(){}r=qi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Dn(){}Dn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ct.call(this),this.g=new Si(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!$(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new de(this)}k(vt,ct),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){qr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Cr(s),s=l);a.i.push(new ku(a.Ya++,s)),a.G==3&&Cn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,vt.aa.N.call(this)};function Bi(s){Dr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Bi,Dr);function ji(){br.call(this),this.status=1}k(ji,br);function de(s){this.g=s}k(de,qi),de.prototype.ua=function(){_t(this.g,"a")},de.prototype.ta=function(s){_t(this.g,new Bi(s))},de.prototype.sa=function(s){_t(this.g,new ji)},de.prototype.ra=function(){_t(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Go=function(){return new Dn},Ko=function(){return _n()},$o=ne,Wr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,Fn=yn,si.COMPLETE="complete",zo=si,Zs.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",ct.prototype.listen=ct.prototype.K,He=Zs,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,jo=Y}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const Ki="@firebase/firestore",Gi="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new nl("@firebase/firestore");function pe(){return ae.logLevel}function b(r,...t){if(ae.logLevel<=Mt.DEBUG){const e=t.map(cs);ae.debug(`Firestore (${Ve}): ${r}`,...e)}}function Lt(r,...t){if(ae.logLevel<=Mt.ERROR){const e=t.map(cs);ae.error(`Firestore (${Ve}): ${r}`,...e)}}function Ee(r,...t){if(ae.logLevel<=Mt.WARN){const e=t.map(cs);ae.warn(`Firestore (${Ve}): ${r}`,...e)}}function cs(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(r="Unexpected state"){const t=`FIRESTORE (${Ve}) INTERNAL ASSERTION FAILED: `+r;throw Lt(t),new Error(t)}function z(r,t){r||L()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends el{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ll{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class hl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class cl{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},h=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string"),new Qo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new pt(t)}}class fl{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dl{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ml{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ul(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){z(this.o===void 0);const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Qi(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new Qi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=pl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function Hr(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=Wo(),u=gl(o.encode(Wi(r,e)),o.encode(Wi(t,e)));return u!==0?u:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function Wi(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function gl(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function ve(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=-62135596800,Xi=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Xi);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Hi)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xi}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Hi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new et(0,0))}static max(){return new O(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="__name__";class Pt{constructor(t,e,n){e===void 0?e=0:e>t.length&&L(),n===void 0?n=t.length-e:n>t.length-e&&L(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Pt.isNumericId(t),i=Pt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Hr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $t.fromString(t.substring(4,t.length-2))}}class H extends Pt{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const _l=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Pt{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return _l.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yi}static keyField(){return new ut([Yi])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new N(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new N(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(H.fromString(t))}static fromName(t){return new M(H.fromString(t).popFirst(5))}static empty(){return new M(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new H(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=-1;function yl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=O.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Wt(i,M.empty(),t)}function Tl(r){return new Wt(r.readTime,r.key,nn)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(O.min(),M.empty(),nn)}static max(){return new Wt(O.max(),M.empty(),nn)}}function El(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Il{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==vl)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&e()},c=>n(c))}),u=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let c=0;c<o;c++){const d=c;e(t[d]).next(_=>{u[d]=_,++h,h===o&&n(u)},_=>i(_))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function Al(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Se(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}nr.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=-1;function rr(r){return r==null}function $n(r){return r===0&&1/r==-1/0}function wl(r){return typeof r=="number"&&Number.isInteger(r)&&!$n(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="";function Rl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Ji(t)),t=Pl(r.get(e),t);return Ji(t)}function Pl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Xo:e+="";break;default:e+=o}}return e}function Ji(r){return r+Xo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function te(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Yo(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new to(this.data.getIterator())}getIteratorFrom(t){return new to(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class to{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new It([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ve(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Jo("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Vl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(r){if(z(!!r),typeof r=="string"){let t=0;const e=Vl.exec(r);if(z(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="server_timestamp",ta="__type__",ea="__previous_value__",na="__local_write_time__";function ds(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ta])===null||e===void 0?void 0:e.stringValue)===Zo}function sr(r){const t=r.mapValue.fields[ea];return ds(t)?sr(t):t}function rn(r){const t=Ht(r.mapValue.fields[na].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e,n,i,o,u,h,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=c,this.useFetchStreams=d}}const Kn="(default)";class sn{constructor(t,e){this.projectId=t,this.database=e||Kn}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===Kn}isEqual(t){return t instanceof sn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="__type__",Sl="__max__",xn={mapValue:{}},sa="__vector__",Gn="value";function Yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ds(r)?4:bl(r)?9007199254740991:Dl(r)?10:11:L()}function St(r,t){if(r===t)return!0;const e=Yt(r);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return rn(r).isEqual(rn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Ht(i.timestampValue),h=Ht(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Xt(i.bytesValue).isEqual(Xt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?$n(u)===$n(h):isNaN(u)&&isNaN(h)}return!1}(r,t);case 9:return ve(r.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Zi(u)!==Zi(h))return!1;for(const c in u)if(u.hasOwnProperty(c)&&(h[c]===void 0||!St(u[c],h[c])))return!1;return!0}(r,t);default:return L()}}function on(r,t){return(r.values||[]).find(e=>St(e,t))!==void 0}function Ie(r,t){if(r===t)return 0;const e=Yt(r),n=Yt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const h=J(o.integerValue||o.doubleValue),c=J(u.integerValue||u.doubleValue);return h<c?-1:h>c?1:h===c?0:isNaN(h)?isNaN(c)?0:-1:1}(r,t);case 3:return eo(r.timestampValue,t.timestampValue);case 4:return eo(rn(r),rn(t));case 5:return Hr(r.stringValue,t.stringValue);case 6:return function(o,u){const h=Xt(o),c=Xt(u);return h.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),c=u.split("/");for(let d=0;d<h.length&&d<c.length;d++){const _=U(h[d],c[d]);if(_!==0)return _}return U(h.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const h=U(J(o.latitude),J(u.latitude));return h!==0?h:U(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return no(r.arrayValue,t.arrayValue);case 10:return function(o,u){var h,c,d,_;const A=o.fields||{},R=u.fields||{},C=(h=A[Gn])===null||h===void 0?void 0:h.arrayValue,k=(c=R[Gn])===null||c===void 0?void 0:c.arrayValue,x=U(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:no(C,k)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===xn.mapValue&&u===xn.mapValue)return 0;if(o===xn.mapValue)return 1;if(u===xn.mapValue)return-1;const h=o.fields||{},c=Object.keys(h),d=u.fields||{},_=Object.keys(d);c.sort(),_.sort();for(let A=0;A<c.length&&A<_.length;++A){const R=Hr(c[A],_[A]);if(R!==0)return R;const C=Ie(h[c[A]],d[_[A]]);if(C!==0)return C}return U(c.length,_.length)}(r.mapValue,t.mapValue);default:throw L()}}function eo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Ht(r),n=Ht(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function no(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ie(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ae(r){return Xr(r)}function Xr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Ht(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Xt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Xr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Xr(e.fields[u])}`;return i+"}"}(r.mapValue):L()}function Un(r){switch(Yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sr(r);return t?16+Un(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Un(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return te(n.fields,(o,u)=>{i+=o.length+Un(u)}),i}(r.mapValue);default:throw L()}}function Yr(r){return!!r&&"integerValue"in r}function ms(r){return!!r&&"arrayValue"in r}function ro(r){return!!r&&"nullValue"in r}function so(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qn(r){return!!r&&"mapValue"in r}function Dl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ra])===null||e===void 0?void 0:e.stringValue)===sa}function Je(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return te(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Je(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Je(r.arrayValue.values[e]);return t}return Object.assign({},r)}function bl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Sl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!qn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Je(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=Je(u):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());qn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){te(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Et(Je(this.value))}}function ia(r){const t=[];return te(r.fields,(e,n)=>{const i=new ut([e]);if(qn(n)){const o=ia(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new gt(t,0,O.min(),O.min(),O.min(),Et.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,O.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,O.min(),O.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,O.min(),O.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e){this.position=t,this.inclusive=e}}function io(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Ie(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function oo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!St(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function kl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{}class tt extends oa{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new xl(t,e,n):e==="array-contains"?new Ol(t,n):e==="in"?new Fl(t,n):e==="not-in"?new Ul(t,n):e==="array-contains-any"?new ql(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ml(t,n):new Ll(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ie(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(Ie(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends oa{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Dt(t,e)}matches(t){return aa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function aa(r){return r.op==="and"}function ua(r){return Nl(r)&&aa(r)}function Nl(r){for(const t of r.filters)if(t instanceof Dt)return!1;return!0}function Jr(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ae(r.value);if(ua(r))return r.filters.map(t=>Jr(t)).join(",");{const t=r.filters.map(e=>Jr(e)).join(",");return`${r.op}(${t})`}}function la(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&St(n.value,i.value)}(r,t):r instanceof Dt?function(n,i){return i instanceof Dt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,h)=>o&&la(u,i.filters[h]),!0):!1}(r,t):void L()}function ha(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ae(e.value)}`}(r):r instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(ha).join(" ,")+"}"}(r):"Filter"}class xl extends tt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ml extends tt{constructor(t,e){super(t,"in",e),this.keys=ca("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ll extends tt{constructor(t,e){super(t,"not-in",e),this.keys=ca("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ca(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Ol extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ms(e)&&on(e.arrayValue,this.value)}}class Fl extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&on(this.value.arrayValue,e)}}class Ul extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!on(this.value.arrayValue,e)}}class ql extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>on(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.le=null}}function ao(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Bl(r,t,e,n,i,o,u)}function ps(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Jr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ae(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ae(n)).join(",")),t.le=e}return t.le}function gs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!kl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!la(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!oo(r.startAt,t.startAt)&&oo(r.endAt,t.endAt)}function Zr(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function jl(r,t,e,n,i,o,u,h){return new ir(r,t,e,n,i,o,u,h)}function fa(r){return new ir(r)}function uo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function zl(r){return r.collectionGroup!==null}function Ze(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new nt(ut.comparator);return u.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(h=h.add(d.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Wn(o,n))}),e.has(ut.keyField().canonicalString())||t.he.push(new Wn(ut.keyField(),n))}return t.he}function Vt(r){const t=F(r);return t.Pe||(t.Pe=$l(t,Ze(r))),t.Pe}function $l(r,t){if(r.limitType==="F")return ao(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Wn(i.field,o)});const e=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return ao(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ts(r,t,e){return new ir(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function or(r,t){return gs(Vt(r),Vt(t))&&r.limitType===t.limitType}function da(r){return`${ps(Vt(r))}|lt:${r.limitType}`}function ge(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>ha(i)).join(", ")}]`),rr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ae(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ae(i)).join(",")),`Target(${n})`}(Vt(r))}; limitType=${r.limitType})`}function ar(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Ze(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,h,c){const d=io(u,h,c);return u.inclusive?d<=0:d<0}(n.startAt,Ze(n),i)||n.endAt&&!function(u,h,c){const d=io(u,h,c);return u.inclusive?d>=0:d>0}(n.endAt,Ze(n),i))}(r,t)}function Kl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ma(r){return(t,e)=>{let n=!1;for(const i of Ze(r)){const o=Gl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Gl(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,h){const c=u.data.field(o),d=h.data.field(o);return c!==null&&d!==null?Ie(c,d):L()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Yo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new X(M.comparator);function Ot(){return Ql}const pa=new X(M.comparator);function Xe(...r){let t=pa;for(const e of r)t=t.insert(e.key,e);return t}function ga(r){let t=pa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function oe(){return tn()}function _a(){return tn()}function tn(){return new le(r=>r.toString(),(r,t)=>r.isEqual(t))}const Wl=new X(M.comparator),Hl=new nt(M.comparator);function q(...r){let t=Hl;for(const e of r)t=t.add(e);return t}const Xl=new nt(U);function Yl(){return Xl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function ya(r){return{integerValue:""+r}}function Jl(r,t){return wl(t)?ya(t):_s(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this._=void 0}}function Zl(r,t,e){return r instanceof Hn?function(i,o){const u={fields:{[ta]:{stringValue:Zo},[na]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ds(o)&&(o=sr(o)),o&&(u.fields[ea]=o),{mapValue:u}}(e,t):r instanceof an?Ea(r,t):r instanceof un?va(r,t):function(i,o){const u=Ta(i,o),h=lo(u)+lo(i.Ie);return Yr(u)&&Yr(i.Ie)?ya(h):_s(i.serializer,h)}(r,t)}function th(r,t,e){return r instanceof an?Ea(r,t):r instanceof un?va(r,t):e}function Ta(r,t){return r instanceof Xn?function(n){return Yr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Hn extends ur{}class an extends ur{constructor(t){super(),this.elements=t}}function Ea(r,t){const e=Ia(t);for(const n of r.elements)e.some(i=>St(i,n))||e.push(n);return{arrayValue:{values:e}}}class un extends ur{constructor(t){super(),this.elements=t}}function va(r,t){let e=Ia(t);for(const n of r.elements)e=e.filter(i=>!St(i,n));return{arrayValue:{values:e}}}class Xn extends ur{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function lo(r){return J(r.integerValue||r.doubleValue)}function Ia(r){return ms(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function eh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof an&&i instanceof an||n instanceof un&&i instanceof un?ve(n.elements,i.elements,St):n instanceof Xn&&i instanceof Xn?St(n.Ie,i.Ie):n instanceof Hn&&i instanceof Hn}(r.transform,t.transform)}class nh{constructor(t,e){this.version=t,this.transformResults=e}}class wt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wt}static exists(t){return new wt(void 0,t)}static updateTime(t){return new wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class lr{}function Aa(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ys(r.key,wt.none()):new ln(r.key,r.data,wt.none());{const e=r.data,n=Et.empty();let i=new nt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ee(r.key,n,new It(i.toArray()),wt.none())}}function rh(r,t,e){r instanceof ln?function(i,o,u){const h=i.value.clone(),c=co(i.fieldTransforms,o,u.transformResults);h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):r instanceof ee?function(i,o,u){if(!Bn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=co(i.fieldTransforms,o,u.transformResults),c=o.data;c.setAll(wa(i)),c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function en(r,t,e,n){return r instanceof ln?function(o,u,h,c){if(!Bn(o.precondition,u))return h;const d=o.value.clone(),_=fo(o.fieldTransforms,c,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ee?function(o,u,h,c){if(!Bn(o.precondition,u))return h;const d=fo(o.fieldTransforms,c,u),_=u.data;return _.setAll(wa(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(r,t,e,n):function(o,u,h){return Bn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(r,t,e)}function sh(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Ta(n.transform,i||null);o!=null&&(e===null&&(e=Et.empty()),e.set(n.field,o))}return e||null}function ho(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ve(n,i,(o,u)=>eh(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ln extends lr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ee extends lr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function wa(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function co(r,t,e){const n=new Map;z(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,th(u,h,e[i]))}return n}function fo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Zl(o,u,t))}return n}class ys extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ih extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&rh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=en(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=_a();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const c=Aa(u,h);c!==null&&n.set(i.key,c),u.isValidDocument()||u.convertToNoDocument(O.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&ve(this.mutations,t.mutations,(e,n)=>ho(e,n))&&ve(this.baseMutations,t.baseMutations,(e,n)=>ho(e,n))}}class Ts{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){z(t.mutations.length===n.length);let i=function(){return Wl}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Ts(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function lh(r){switch(r){case V.OK:return L();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return L()}}function Ra(r){if(r===void 0)return Lt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Z.OK:return V.OK;case Z.CANCELLED:return V.CANCELLED;case Z.UNKNOWN:return V.UNKNOWN;case Z.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Z.INTERNAL:return V.INTERNAL;case Z.UNAVAILABLE:return V.UNAVAILABLE;case Z.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Z.NOT_FOUND:return V.NOT_FOUND;case Z.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Z.ABORTED:return V.ABORTED;case Z.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Z.DATA_LOSS:return V.DATA_LOSS;default:return L()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new $t([4294967295,4294967295],0);function mo(r){const t=Wo().encode(r),e=new Bo;return e.update(t),new Uint8Array(e.digest())}function po(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new $t([e,n],0),new $t([i,o],0)]}class Es{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ye(`Invalid padding: ${e}`);if(n<0)throw new Ye(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ye(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ye(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=$t.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply($t.fromNumber(n)));return i.compare(hh)===1&&(i=new $t([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=mo(t),[n,i]=po(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);if(!this.Re(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Es(o,i,e);return n.forEach(h=>u.insert(h)),u}insert(t){if(this.Ee===0)return;const e=mo(t),[n,i]=po(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(n,i,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ye extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hr(O.min(),i,new X(U),Ot(),q())}}class hn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new hn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class Pa{constructor(t,e){this.targetId=t,this.ge=e}}class Va{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class go{constructor(){this.pe=0,this.ye=_o(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=q(),e=q(),n=q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:L()}}),new hn(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=_o()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ch{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ot(),this.$e=Mn(),this.Ue=Mn(),this.Ke=new X(U)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(Zr(o))if(n===0){const u=new M(o.path);this.ze(e,u,gt.newNoDocument(u,O.min()))}else z(n===1);else{const u=this.et(e);if(u!==n){const h=this.tt(t),c=h?this.nt(h,t,u):1;if(c!==0){this.Ye(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=Xt(n).toUint8Array()}catch(c){if(c instanceof Jo)return Ee("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{h=new Es(u,i,o)}catch(c){return Ee(c instanceof Ye?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return h.Ee===0?null:h}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ke.it(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const h=this.Xe(u);if(h){if(o.current&&Zr(h.target)){const c=new M(h.target.path);this._t(c).has(u)||this.ut(u,c)||this.ze(u,c,gt.newNoDocument(c,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let n=q();this.Ue.forEach((o,u)=>{let h=!0;u.forEachWhile(c=>{const d=this.Xe(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(n=n.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const i=new hr(t,e,this.Ke,this.Qe,n);return this.Qe=Ot(),this.$e=Mn(),this.Ue=Mn(),this.Ke=new X(U),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new go,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new nt(U),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new nt(U),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new go),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Mn(){return new X(M.comparator)}function _o(){return new X(M.comparator)}const fh={asc:"ASCENDING",desc:"DESCENDING"},dh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mh={and:"AND",or:"OR"};class ph{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(r,t){return r.useProto3Json||rr(t)?t:{value:t}}function Yn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ca(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function gh(r,t){return Yn(r,t.toTimestamp())}function Ct(r){return z(!!r),O.fromTimestamp(function(e){const n=Ht(e);return new et(n.seconds,n.nanos)}(r))}function vs(r,t){return ns(r,t).canonicalString()}function ns(r,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Sa(r){const t=H.fromString(r);return z(xa(t)),t}function rs(r,t){return vs(r.databaseId,t.path)}function $r(r,t){const e=Sa(t);if(e.get(1)!==r.databaseId.projectId)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(ba(e))}function Da(r,t){return vs(r.databaseId,t)}function _h(r){const t=Sa(r);return t.length===4?H.emptyPath():ba(t)}function ss(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ba(r){return z(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function yo(r,t,e){return{name:rs(r,t),fields:e.value.mapValue.fields}}function yh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,_){return d.useProto3Json?(z(_===void 0||typeof _=="string"),lt.fromBase64String(_||"")):(z(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),lt.fromUint8Array(_||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&function(d){const _=d.code===void 0?V.UNKNOWN:Ra(d.code);return new N(_,d.message||"")}(u);e=new Va(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=$r(r,n.document.name),o=Ct(n.document.updateTime),u=n.document.createTime?Ct(n.document.createTime):O.min(),h=new Et({mapValue:{fields:n.document.fields}}),c=gt.newFoundDocument(i,o,u,h),d=n.targetIds||[],_=n.removedTargetIds||[];e=new jn(d,_,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=$r(r,n.document),o=n.readTime?Ct(n.readTime):O.min(),u=gt.newNoDocument(i,o),h=n.removedTargetIds||[];e=new jn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=$r(r,n.document),o=n.removedTargetIds||[];e=new jn([],o,i,null)}else{if(!("filter"in t))return L();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new uh(i,o),h=n.targetId;e=new Pa(h,u)}}return e}function Th(r,t){let e;if(t instanceof ln)e={update:yo(r,t.key,t.value)};else if(t instanceof ys)e={delete:rs(r,t.key)};else if(t instanceof ee)e={update:yo(r,t.key,t.data),updateMask:Ch(t.fieldMask)};else{if(!(t instanceof ih))return L();e={verify:rs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const h=u.transform;if(h instanceof Hn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof an)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof un)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:u.field.canonicalString(),increment:h.Ie};throw L()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:gh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(r,t.precondition)),e}function Eh(r,t){return r&&r.length>0?(z(t!==void 0),r.map(e=>function(i,o){let u=i.updateTime?Ct(i.updateTime):Ct(o);return u.isEqual(O.min())&&(u=Ct(o)),new nh(u,i.transformResults||[])}(e,t))):[]}function vh(r,t){return{documents:[Da(r,t.path)]}}function Ih(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Da(r,i);const o=function(d){if(d.length!==0)return Na(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(_=>function(R){return{field:_e(R.field),direction:Rh(R.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=es(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function Ah(r){let t=_h(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){z(n===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ka(A);return R instanceof Dt&&ua(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(k){return new Wn(ye(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(A){let R;return R=typeof A=="object"?A.value:A,rr(R)?null:R}(e.limit));let c=null;e.startAt&&(c=function(A){const R=!!A.before,C=A.values||[];return new Qn(C,R)}(e.startAt));let d=null;return e.endAt&&(d=function(A){const R=!A.before,C=A.values||[];return new Qn(C,R)}(e.endAt)),jl(t,i,u,o,h,"F",c,d)}function wh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ka(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ye(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ye(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ye(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ye(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(r):r.fieldFilter!==void 0?function(e){return tt.create(ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>ka(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(r):L()}function Rh(r){return fh[r]}function Ph(r){return dh[r]}function Vh(r){return mh[r]}function _e(r){return{fieldPath:r.canonicalString()}}function ye(r){return ut.fromServerFormat(r.fieldPath)}function Na(r){return r instanceof tt?function(e){if(e.op==="=="){if(so(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(ro(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(so(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(ro(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:Ph(e.op),value:e.value}}}(r):r instanceof Dt?function(e){const n=e.getFilters().map(i=>Na(i));return n.length===1?n[0]:{compositeFilter:{op:Vh(e.op),filters:n}}}(r):L()}function Ch(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n,i,o=O.min(),u=O.min(),h=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=c}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.Tt=t}}function Dh(r){const t=Ah({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.Tn=new kh}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Wt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class kh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ma=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Ma,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new we(0)}static Kn(){return new we(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="LruGarbageCollector",Nh=1048576;function vo([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class xh{constructor(t){this.Hn=t,this.buffer=new nt(vo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();vo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Mh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(Eo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Se(e)?b(Eo,"Ignoring IndexedDB error during garbage collection: ",e):await Ce(e)}await this.er(3e5)})}}class Lh{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(nr.ae);const n=new xh(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(To)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),To):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,u,h,c,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(n=A,h=Date.now(),this.removeTargets(t,n,e))).next(A=>(o=A,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(A=>(d=Date.now(),pe()<=Mt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(h-u)+`ms
	Removed ${o} targets in `+(c-h)+`ms
	Removed ${A} documents in `+(d-c)+`ms
Total Duration: ${d-_}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function Oh(r,t){return new Lh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.changes=new le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&en(n.mutation,i,It.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=oe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=Xe();return o.forEach((h,c)=>{u=u.insert(h,c.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,n,i){let o=Ot();const u=tn(),h=function(){return tn()}();return e.forEach((c,d)=>{const _=n.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof ee)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),en(_.mutation,d,_.mutation.getFieldMask(),et.now())):u.set(d.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((d,_)=>u.set(d,_)),e.forEach((d,_)=>{var A;return h.set(d,new Uh(_,(A=u.get(d))!==null&&A!==void 0?A:null))}),h))}recalculateAndSaveOverlays(t,e){const n=tn();let i=new X((u,h)=>u-h),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let _=n.get(c)||It.empty();_=h.applyToLocalView(d,_),n.set(c,_);const A=(i.get(h.batchId)||q()).add(c);i=i.insert(h.batchId,A)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const c=h.getNext(),d=c.key,_=c.value,A=_a();_.forEach(R=>{if(!o.has(R)){const C=Aa(e.get(R),n.get(R));C!==null&&A.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return P.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(oe());let h=nn,c=o;return u.next(d=>P.forEach(d,(_,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(_)?P.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{c=c.insert(_,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,c,d,q())).next(_=>({batchId:h,changes:ga(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=Xe();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Xe();return this.indexManager.getCollectionParents(t,o).next(h=>P.forEach(h,c=>{const d=function(A,R){return new ir(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(_=>{_.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((c,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,gt.newInvalidDocument(_)))});let h=Xe();return u.forEach((c,d)=>{const _=o.get(c);_!==void 0&&en(_.mutation,d,It.empty(),et.now()),ar(e,d)&&(h=h.insert(c,d))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ct(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Dh(i.bundledQuery),readTime:Ct(i.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.overlays=new X(M.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=oe(),o=e.length+1,u=new M(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const c=h.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((d,_)=>d-_);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let _=o.get(d.largestBatchId);_===null&&(_=oe(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const h=oe(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,_)=>h.set(d,_)),!(h.size()>=i)););return P.resolve(h)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ah(e,n));let o=this.Rr.get(e);o===void 0&&(o=q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.Vr=new nt(st.mr),this.gr=new nt(st.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new st(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new st(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new M(new H([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.gr.forEachInRange([n,i],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new H([])),n=new st(e,t),i=new st(e,t+1);let o=q();return this.gr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(st.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new oh(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.Mr=this.Mr.add(new st(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?fs:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],u=>{const h=this.Or(u.Cr);o.push(h)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(U);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],h=>{n=n.add(h.Cr)})}),P.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new st(new M(o),0);let h=new nt(U);return this.Mr.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(h=h.add(c.Cr)),!0)},u),P.resolve(this.Br(h))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){z(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return P.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new st(e,0),i=this.Mr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.kr=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ot();const u=e.path,h=new M(u.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(h);for(;c.hasNext();){const{key:d,value:{document:_}}=c.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||El(Tl(_),n)<=0||(i.has(_.key)||ar(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){L()}qr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Gh(this)}getSize(t){return P.resolve(this.size)}}class Gh extends Fh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.persistence=t,this.Qr=new le(e=>ps(e),gs),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Is,this.targetCount=0,this.Kr=we.Un()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new we(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new nr(0),this.zr=!1,this.zr=!0,this.jr=new zh,this.referenceDelegate=t(this),this.Hr=new Qh(this),this.indexManager=new bh,this.remoteDocumentCache=function(i){return new Kh(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Sh(e),this.Yr=new Bh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new $h(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new Wh(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class Wh extends Il{constructor(t){super(),this.currentSequenceNumber=t}}class As{constructor(t){this.persistence=t,this.ti=new Is,this.ni=null}static ri(t){return new As(t)}get ii(){if(this.ni)return this.ni;throw L()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,n=>{const i=M.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.oi=new le(n=>Rl(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Oh(this,e)}static ri(t,e){return new Jn(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,u=>this.ar(t,u,e).next(h=>{h||(n++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Un(t.data.value)),e}ar(t,e,n){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ws(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return rl()?8:Al(sl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Hh;return this._s(t,e,u).next(h=>{if(o.result=h,this.Xi)return this.us(t,e,u,h.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(pe()<=Mt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ge(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(pe()<=Mt.DEBUG&&b("QueryEngine","Query:",ge(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(pe()<=Mt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ge(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):P.resolve())}rs(t,e){if(uo(e))return P.resolve(null);let n=Vt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ts(e,null,"F"),n=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.ns.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.cs(e,h);return this.ls(e,d,u,c.readTime)?this.rs(t,ts(e,null,"F")):this.hs(t,d,e,c)}))})))}ss(t,e,n,i){return uo(e)||i.isEqual(O.min())?P.resolve(null):this.ns.getDocuments(t,n).next(o=>{const u=this.cs(e,o);return this.ls(e,u,n,i)?P.resolve(null):(pe()<=Mt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ge(e)),this.hs(t,u,e,yl(i,nn)).next(h=>h))})}cs(t,e){let n=new nt(ma(t));return e.forEach((i,o)=>{ar(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return pe()<=Mt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ge(e)),this.ns.getDocumentsMatchingQuery(t,e,Wt.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="LocalStore",Yh=3e8;class Jh{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new X(U),this.Is=new le(o=>ps(o),gs),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Zh(r,t,e,n){return new Jh(r,t,e,n)}async function Oa(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],h=[];let c=q();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)c=c.add(_.key)}for(const d of o){h.push(d.batchId);for(const _ of d.mutations)c=c.add(_.key)}return e.localDocuments.getDocuments(n,c).next(d=>({Rs:d,removedBatchIds:u,addedBatchIds:h}))})})}function tc(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(h,c,d,_){const A=d.batch,R=A.keys();let C=P.resolve();return R.forEach(k=>{C=C.next(()=>_.getEntry(c,k)).next(x=>{const D=d.docVersions.get(k);z(D!==null),x.version.compareTo(D)<0&&(A.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),_.addEntry(x)))})}),C.next(()=>h.mutationQueue.removeMutationBatch(c,A))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(h){let c=q();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(c=c.add(h.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Fa(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function ec(r,t){const e=F(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const h=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;h.push(e.Hr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Hr.addMatchingKeys(o,_.addedDocuments,A)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,n)),i=i.insert(A,C),function(x,D,K){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Yh?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,C,_)&&h.push(e.Hr.updateTargetData(o,C))});let c=Ot(),d=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),h.push(nc(o,u,t.documentUpdates).next(_=>{c=_.Vs,d=_.fs})),!n.isEqual(O.min())){const _=e.Hr.getLastRemoteSnapshotVersion(o).next(A=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));h.push(_)}return P.waitFor(h).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(e.Ts=i,o))}function nc(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ot();return e.forEach((h,c)=>{const d=o.get(h);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(h)),c.isNoDocument()&&c.version.isEqual(O.min())?(t.removeEntry(h,c.readTime),u=u.insert(h,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),u=u.insert(h,c)):b(Rs,"Ignoring outdated watch update for ",h,". Current version:",d.version," Watch version:",c.version)}),{Vs:u,fs:i}})}function rc(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=fs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function sc(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Hr.allocateTargetId(n).next(u=>(i=new zt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function is(r,t,e){const n=F(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Se(u))throw u;b(Rs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function Io(r,t,e){const n=F(r);let i=O.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(c,d,_){const A=F(c),R=A.Is.get(_);return R!==void 0?P.resolve(A.Ts.get(R)):A.Hr.getTargetData(d,_)}(n,u,Vt(t)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(u,h.targetId).next(c=>{o=c})}).next(()=>n.Ps.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:q())).next(h=>(ic(n,Kl(t),h),{documents:h,gs:o})))}function ic(r,t,e){let n=r.Es.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class Ao{constructor(){this.activeTargetIds=Yl()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class oc{constructor(){this.ho=new Ao,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ao,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="ConnectivityMonitor";class Ro{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(wo,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(wo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=null;function os(){return Ln===null?Ln=function(){return 268435456+Math.round(2147483648*Math.random())}():Ln++,"0x"+Ln.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="RestConnection",uc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lc{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===Kn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const u=os(),h=this.bo(t,e.toUriEncodedString());b(Kr,`Sending RPC '${t}' ${u}:`,h,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,o),this.vo(t,h,c,n).then(d=>(b(Kr,`Received RPC '${t}' ${u}: `,d),d),d=>{throw Ee(Kr,`RPC '${t}' ${u} failed with error: `,d,"url: ",h,"request:",n),d})}Co(t,e,n,i,o,u){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ve}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=uc[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class cc extends lc{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=os();return new Promise((u,h)=>{const c=new jo;c.setWithCredentials(!0),c.listenOnce(zo.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fn.NO_ERROR:const _=c.getResponseJson();b(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case Fn.TIMEOUT:b(mt,`RPC '${t}' ${o} timed out`),h(new N(V.DEADLINE_EXCEEDED,"Request time out"));break;case Fn.HTTP_ERROR:const A=c.getStatus();if(b(mt,`RPC '${t}' ${o} failed with status:`,A,"response text:",c.getResponseText()),A>0){let R=c.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const k=function(D){const K=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN}(C.status);h(new N(k,C.message))}else h(new N(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else h(new N(V.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);b(mt,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",d,n,15)})}Wo(t,e,n){const i=os(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Go(),h=Ko(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const _=o.join("");b(mt,`Creating RPC '${t}' stream ${i}: ${_}`,c);const A=u.createWebChannel(_,c);let R=!1,C=!1;const k=new hc({Fo:D=>{C?b(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(mt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),b(mt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},Mo:()=>A.close()}),x=(D,K,$)=>{D.listen(K,G=>{try{$(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return x(A,He.EventType.OPEN,()=>{C||(b(mt,`RPC '${t}' stream ${i} transport opened.`),k.Qo())}),x(A,He.EventType.CLOSE,()=>{C||(C=!0,b(mt,`RPC '${t}' stream ${i} transport closed`),k.Uo())}),x(A,He.EventType.ERROR,D=>{C||(C=!0,Ee(mt,`RPC '${t}' stream ${i} transport errored:`,D),k.Uo(new N(V.UNAVAILABLE,"The operation could not be completed")))}),x(A,He.EventType.MESSAGE,D=>{var K;if(!C){const $=D.data[0];z(!!$);const G=$,rt=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(rt){b(mt,`RPC '${t}' stream ${i} received error:`,rt);const bt=rt.status;let it=function(g){const y=Z[g];if(y!==void 0)return Ra(y)}(bt),E=rt.message;it===void 0&&(it=V.INTERNAL,E="Unknown error status: "+bt+" with message "+rt.message),C=!0,k.Uo(new N(it,E)),A.close()}else b(mt,`RPC '${t}' stream ${i} received:`,$),k.Ko($)}}),x(h,$o.STAT_EVENT,D=>{D.stat===Wr.PROXY?b(mt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Wr.NOPROXY&&b(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(r){return new ph(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="PersistentStream";class qa{constructor(t,e,n,i,o,u,h,c){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ua(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new N(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return b(Po,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(b(Po,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fc extends qa{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=yh(this.serializer,t),n=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Ct(u.readTime):O.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=ss(this.serializer),e.addTarget=function(o,u){let h;const c=u.target;if(h=Zr(c)?{documents:vh(o,c)}:{query:Ih(o,c).ht},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=Ca(o,u.resumeToken);const d=es(o,u.expectedCount);d!==null&&(h.expectedCount=d)}else if(u.snapshotVersion.compareTo(O.min())>0){h.readTime=Yn(o,u.snapshotVersion.toTimestamp());const d=es(o,u.expectedCount);d!==null&&(h.expectedCount=d)}return h}(this.serializer,t);const n=wh(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=ss(this.serializer),e.removeTarget=t,this.I_(e)}}class dc extends qa{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Eh(t.writeResults,t.commitTime),n=Ct(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=ss(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Th(this.serializer,n))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{}class pc extends mc{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,ns(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(V.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Co(t,ns(e,n),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(V.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class gc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Lt(e),this.N_=!1):b("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="RemoteStore";class _c{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{n.enqueueAndForget(async()=>{he(this)&&(b(ue,"Restarting streams for network reachability change."),await async function(c){const d=F(c);d.W_.add(4),await cn(d),d.j_.set("Unknown"),d.W_.delete(4),await fr(d)}(this))})}),this.j_=new gc(n,i)}}async function fr(r){if(he(r))for(const t of r.G_)await t(!0)}async function cn(r){for(const t of r.G_)await t(!1)}function Ba(r,t){const e=F(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Ss(e)?Cs(e):De(e).c_()&&Vs(e,t))}function Ps(r,t){const e=F(r),n=De(e);e.K_.delete(t),n.c_()&&ja(e,t),e.K_.size===0&&(n.c_()?n.P_():he(e)&&e.j_.set("Unknown"))}function Vs(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}De(r).y_(t)}function ja(r,t){r.H_.Ne(t),De(r).w_(t)}function Cs(r){r.H_=new ch({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),De(r).start(),r.j_.B_()}function Ss(r){return he(r)&&!De(r).u_()&&r.K_.size>0}function he(r){return F(r).W_.size===0}function za(r){r.H_=void 0}async function yc(r){r.j_.set("Online")}async function Tc(r){r.K_.forEach((t,e)=>{Vs(r,t)})}async function Ec(r,t){za(r),Ss(r)?(r.j_.q_(t),Cs(r)):r.j_.set("Unknown")}async function vc(r,t,e){if(r.j_.set("Online"),t instanceof Va&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.K_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.K_.delete(h),i.H_.removeTarget(h))}(r,t)}catch(n){b(ue,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zn(r,n)}else if(t instanceof jn?r.H_.We(t):t instanceof Pa?r.H_.Ze(t):r.H_.je(t),!e.isEqual(O.min()))try{const n=await Fa(r.localStore);e.compareTo(n)>=0&&await function(o,u){const h=o.H_.ot(u);return h.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const _=o.K_.get(d);_&&o.K_.set(d,_.withResumeToken(c.resumeToken,u))}}),h.targetMismatches.forEach((c,d)=>{const _=o.K_.get(c);if(!_)return;o.K_.set(c,_.withResumeToken(lt.EMPTY_BYTE_STRING,_.snapshotVersion)),ja(o,c);const A=new zt(_.target,c,d,_.sequenceNumber);Vs(o,A)}),o.remoteSyncer.applyRemoteEvent(h)}(r,e)}catch(n){b(ue,"Failed to raise snapshot:",n),await Zn(r,n)}}async function Zn(r,t,e){if(!Se(t))throw t;r.W_.add(1),await cn(r),r.j_.set("Offline"),e||(e=()=>Fa(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b(ue,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await fr(r)})}function $a(r,t){return t().catch(e=>Zn(r,e,t))}async function dr(r){const t=F(r),e=Jt(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:fs;for(;Ic(t);)try{const i=await rc(t.localStore,n);if(i===null){t.U_.length===0&&e.P_();break}n=i.batchId,Ac(t,i)}catch(i){await Zn(t,i)}Ka(t)&&Ga(t)}function Ic(r){return he(r)&&r.U_.length<10}function Ac(r,t){r.U_.push(t);const e=Jt(r);e.c_()&&e.S_&&e.b_(t.mutations)}function Ka(r){return he(r)&&!Jt(r).u_()&&r.U_.length>0}function Ga(r){Jt(r).start()}async function wc(r){Jt(r).C_()}async function Rc(r){const t=Jt(r);for(const e of r.U_)t.b_(e.mutations)}async function Pc(r,t,e){const n=r.U_.shift(),i=Ts.from(n,t,e);await $a(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await dr(r)}async function Vc(r,t){t&&Jt(r).S_&&await async function(n,i){if(function(u){return lh(u)&&u!==V.ABORTED}(i.code)){const o=n.U_.shift();Jt(n).h_(),await $a(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await dr(n)}}(r,t),Ka(r)&&Ga(r)}async function Vo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),b(ue,"RemoteStore received new credentials");const n=he(e);e.W_.add(3),await cn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await fr(e)}async function Cc(r,t){const e=F(r);t?(e.W_.delete(2),await fr(e)):t||(e.W_.add(2),await cn(e),e.j_.set("Unknown"))}function De(r){return r.J_||(r.J_=function(e,n,i){const o=F(e);return o.M_(),new fc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:yc.bind(null,r),No:Tc.bind(null,r),Lo:Ec.bind(null,r),p_:vc.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Ss(r)?Cs(r):r.j_.set("Unknown")):(await r.J_.stop(),za(r))})),r.J_}function Jt(r){return r.Y_||(r.Y_=function(e,n,i){const o=F(e);return o.M_(),new dc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:wc.bind(null,r),Lo:Vc.bind(null,r),D_:Rc.bind(null,r),v_:Pc.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await dr(r)):(await r.Y_.stop(),r.U_.length>0&&(b(ue,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new Ds(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bs(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),Se(r))return new N(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static emptySet(t){return new Te(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=Xe(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Te;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.Z_=new X(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):L():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Re{constructor(t,e,n,i,o,u,h,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(h=>{u.push({type:0,doc:h})}),new Re(t,e,Te.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Dc{constructor(){this.queries=So(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=So(),o.forEach((u,h)=>{for(const c of h.ta)c.onError(n)})})(this,new N(V.ABORTED,"Firestore shutting down"))}}function So(){return new le(r=>da(r),or)}async function bc(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new Sc,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=bs(u,`Initialization of query '${ge(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&ks(e)}async function kc(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Nc(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.ta)h.oa(i)&&(n=!0);u.ea=i}}n&&ks(e)}function xc(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function ks(r){r.ia.forEach(t=>{t.next()})}var as,Do;(Do=as||(as={}))._a="default",Do.Cache="cache";class Mc{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Re(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Re.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==as.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){this.key=t}}class Wa{constructor(t){this.key=t}}class Lc{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=q(),this.mutatedKeys=q(),this.ya=ma(t),this.wa=new Te(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Co,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),C=ar(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?k!==x&&(n.track({type:3,doc:C}),D=!0):this.va(R,C)||(n.track({type:2,doc:C}),D=!0,(c&&this.ya(C,c)>0||d&&this.ya(C,d)<0)&&(h=!0)):!R&&C?(n.track({type:0,doc:C}),D=!0):R&&!C&&(n.track({type:1,doc:R}),D=!0,(c||d)&&(h=!0)),D&&(C?(u=u.add(C),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{wa:u,Da:n,ls:h,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((_,A)=>function(C,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return x(C)-x(k)}(_.type,A.type)||this.ya(_.doc,A.doc)),this.Ca(n),i=i!=null&&i;const h=e&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,d=c!==this.ga;return this.ga=c,u.length!==0||d?{snapshot:new Re(this.query,t.wa,o,u,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Co,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=q(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new Wa(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new Qa(n))}),e}Oa(t){this.fa=t.gs,this.pa=q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Re.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ns="SyncEngine";class Oc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Fc{constructor(t){this.key=t,this.Ba=!1}}class Uc{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new le(h=>da(h),or),this.qa=new Map,this.Qa=new Set,this.$a=new X(M.comparator),this.Ua=new Map,this.Ka=new Is,this.Wa={},this.Ga=new Map,this.za=we.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function qc(r,t,e=!0){const n=tu(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await Ha(n,t,e,!0),i}async function Bc(r,t){const e=tu(r);await Ha(e,t,!0,!1)}async function Ha(r,t,e,n){const i=await sc(r.localStore,Vt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await jc(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Ba(r.remoteStore,i),h}async function jc(r,t,e,n,i){r.Ha=(A,R,C)=>async function(x,D,K,$){let G=D.view.ba(K);G.ls&&(G=await Io(x.localStore,D.query,!1).then(({documents:E})=>D.view.ba(E,G)));const rt=$&&$.targetChanges.get(D.targetId),bt=$&&$.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(G,x.isPrimaryClient,rt,bt);return ko(x,D.targetId,it.Ma),it.snapshot}(r,A,R,C);const o=await Io(r.localStore,t,!0),u=new Lc(t,o.gs),h=u.ba(o.documents),c=hn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(h,r.isPrimaryClient,c);ko(r,e,d.Ma);const _=new Oc(t,e,u);return r.ka.set(t,_),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function zc(r,t,e){const n=F(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(u=>!or(u,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await is(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ps(n.remoteStore,i.targetId),us(n,i.targetId)}).catch(Ce)):(us(n,i.targetId),await is(n.localStore,i.targetId,!0))}async function $c(r,t){const e=F(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ps(e.remoteStore,n.targetId))}async function Kc(r,t,e){const n=Jc(r);try{const i=await function(u,h){const c=F(u),d=et.now(),_=h.reduce((C,k)=>C.add(k.key),q());let A,R;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Ot(),x=q();return c.ds.getEntries(C,_).next(D=>{k=D,k.forEach((K,$)=>{$.isValidDocument()||(x=x.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,k)).next(D=>{A=D;const K=[];for(const $ of h){const G=sh($,A.get($.key).overlayedDocument);G!=null&&K.push(new ee($.key,G,ia(G.value.mapValue),wt.exists(!0)))}return c.mutationQueue.addMutationBatch(C,d,K,h)}).next(D=>{R=D;const K=D.applyToLocalDocumentSet(A,x);return c.documentOverlayCache.saveOverlays(C,D.batchId,K)})}).then(()=>({batchId:R.batchId,changes:ga(A)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,h,c){let d=u.Wa[u.currentUser.toKey()];d||(d=new X(U)),d=d.insert(h,c),u.Wa[u.currentUser.toKey()]=d}(n,i.batchId,e),await fn(n,i.changes),await dr(n.remoteStore)}catch(i){const o=bs(i,"Failed to persist write");e.reject(o)}}async function Xa(r,t){const e=F(r);try{const n=await ec(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Ua.get(o);u&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Ba=!0:i.modifiedDocuments.size>0?z(u.Ba):i.removedDocuments.size>0&&(z(u.Ba),u.Ba=!1))}),await fn(e,n,t)}catch(n){await Ce(n)}}function bo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,u)=>{const h=u.view.sa(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const c=F(u);c.onlineState=h;let d=!1;c.queries.forEach((_,A)=>{for(const R of A.ta)R.sa(h)&&(d=!0)}),d&&ks(c)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Gc(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ua.get(t),o=i&&i.key;if(o){let u=new X(M.comparator);u=u.insert(o,gt.newNoDocument(o,O.min()));const h=q().add(o),c=new hr(O.min(),new Map,new X(U),u,h);await Xa(n,c),n.$a=n.$a.remove(o),n.Ua.delete(t),xs(n)}else await is(n.localStore,t,!1).then(()=>us(n,t,e)).catch(Ce)}async function Qc(r,t){const e=F(r),n=t.batch.batchId;try{const i=await tc(e.localStore,t);Ja(e,n,null),Ya(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await fn(e,i)}catch(i){await Ce(i)}}async function Wc(r,t,e){const n=F(r);try{const i=await function(u,h){const c=F(u);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let _;return c.mutationQueue.lookupMutationBatch(d,h).next(A=>(z(A!==null),_=A.keys(),c.mutationQueue.removeMutationBatch(d,A))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,_,h)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_)).next(()=>c.localDocuments.getDocuments(d,_))})}(n.localStore,t);Ja(n,t,e),Ya(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await fn(n,i)}catch(i){await Ce(i)}}function Ya(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function Ja(r,t,e){const n=F(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function us(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||Za(r,n)})}function Za(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Ps(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),xs(r))}function ko(r,t,e){for(const n of e)n instanceof Qa?(r.Ka.addReference(n.key,t),Hc(r,n)):n instanceof Wa?(b(Ns,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||Za(r,n.key)):L()}function Hc(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(b(Ns,"New document in limbo: "+e),r.Qa.add(n),xs(r))}function xs(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(H.fromString(t)),n=r.za.next();r.Ua.set(n,new Fc(e)),r.$a=r.$a.insert(e,n),Ba(r.remoteStore,new zt(Vt(fa(e.path)),n,"TargetPurposeLimboResolution",nr.ae))}}async function fn(r,t,e){const n=F(r),i=[],o=[],u=[];n.ka.isEmpty()||(n.ka.forEach((h,c)=>{u.push(n.Ha(c,t,e).then(d=>{var _;if((d||e)&&n.isPrimaryClient){const A=d?!d.fromCache:(_=e==null?void 0:e.targetChanges.get(c.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(c.targetId,A?"current":"not-current")}if(d){i.push(d);const A=ws.Yi(c.targetId,d);o.push(A)}}))}),await Promise.all(u),n.La.p_(i),await async function(c,d){const _=F(c);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>P.forEach(d,R=>P.forEach(R.Hi,C=>_.persistence.referenceDelegate.addReference(A,R.targetId,C)).next(()=>P.forEach(R.Ji,C=>_.persistence.referenceDelegate.removeReference(A,R.targetId,C)))))}catch(A){if(!Se(A))throw A;b(Rs,"Failed to update sequence numbers: "+A)}for(const A of d){const R=A.targetId;if(!A.fromCache){const C=_.Ts.get(R),k=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(R,x)}}}(n.localStore,o))}async function Xc(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){b(Ns,"User change. New user:",t.toKey());const n=await Oa(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(h=>{h.forEach(c=>{c.reject(new N(V.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await fn(e,n.Rs)}}function Yc(r,t){const e=F(r),n=e.Ua.get(t);if(n&&n.Ba)return q().add(n.key);{let i=q();const o=e.qa.get(t);if(!o)return i;for(const u of o){const h=e.ka.get(u);i=i.unionWith(h.view.Sa)}return i}}function tu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gc.bind(null,t),t.La.p_=Nc.bind(null,t.eventManager),t.La.Ja=xc.bind(null,t.eventManager),t}function Jc(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wc.bind(null,t),t}class tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=cr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Zh(this.persistence,new Xh,t.initialUser,this.serializer)}Xa(t){return new La(As.ri,this.serializer)}Za(t){return new oc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tr.provider={build:()=>new tr};class Zc extends tr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){z(this.persistence.referenceDelegate instanceof Jn);const n=this.persistence.referenceDelegate.garbageCollector;return new Mh(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new La(n=>Jn.ri(n,e),this.serializer)}}class ls{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>bo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xc.bind(null,this.syncEngine),await Cc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Dc}()}createDatastore(t){const e=cr(t.databaseInfo.databaseId),n=function(o){return new cc(o)}(t.databaseInfo);return function(o,u,h,c){return new pc(o,u,h,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,h){return new _c(n,i,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>bo(this.syncEngine,e,0),function(){return Ro.D()?new Ro:new ac}())}createSyncEngine(t,e){return function(i,o,u,h,c,d,_){const A=new Uc(i,o,u,h,c,d);return _&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);b(ue,"RemoteStore shutting down."),o.W_.add(5),await cn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ls.provider={build:()=>new ls};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class ef{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{b(Zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(b(Zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Qr(r,t){r.asyncQueue.verifyOperationInProgress(),b(Zt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Oa(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function No(r,t){r.asyncQueue.verifyOperationInProgress();const e=await nf(r);b(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Vo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Vo(t.remoteStore,i)),r._onlineComponents=t}async function nf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(Zt,"Using user provided OfflineComponentProvider");try{await Qr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ee("Error using user provided cache. Falling back to memory cache: "+e),await Qr(r,new tr)}}else b(Zt,"Using default OfflineComponentProvider"),await Qr(r,new Zc(void 0));return r._offlineComponents}async function eu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(Zt,"Using user provided OnlineComponentProvider"),await No(r,r._uninitializedComponentsProvider._online)):(b(Zt,"Using default OnlineComponentProvider"),await No(r,new ls))),r._onlineComponents}function rf(r){return eu(r).then(t=>t.syncEngine)}async function sf(r){const t=await eu(r),e=t.eventManager;return e.onListen=qc.bind(null,t.syncEngine),e.onUnlisten=zc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Bc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=$c.bind(null,t.syncEngine),e}function of(r,t,e={}){const n=new Kt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,h,c,d){const _=new tf({next:R=>{_.su(),u.enqueueAndForget(()=>kc(o,A)),R.fromCache&&c.source==="server"?d.reject(new N(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),A=new Mc(h,_,{includeMetadataChanges:!0,Ta:!0});return bc(o,A)}(await sf(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(r,t,e){if(!e)throw new N(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function af(r,t,e,n){if(t===!0&&n===!0)throw new N(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Mo(r){if(!M.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Lo(r){if(M.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ms(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":L()}function Ft(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ms(r);throw new N(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="firestore.googleapis.com",Oo=!0;class Fo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=su,this.ssl=Oo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Oo;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ma;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nh)throw new N(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ll;switch(n.type){case"firstParty":return new dl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xo.get(e);n&&(b("ComponentProvider","Removing Datastore"),xo.delete(e),n.terminate())}(this),Promise.resolve()}}function uf(r,t,e,n={}){var i;const o=(r=Ft(r,mr))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o.host!==su&&o.host!==h&&Ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:h,ssl:!1,emulatorOptions:n});if(!Zu(c,u)&&(r._setSettings(c),n.mockUserToken)){let d,_;if(typeof n.mockUserToken=="string")d=n.mockUserToken,_=pt.MOCK_USER;else{d=tl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new N(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new pt(A)}r._authCredentials=new hl(new Qo(d,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pr(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Gt extends pr{constructor(t,e,n){super(t,e,fa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new M(t))}withConverter(t){return new Gt(this.firestore,t,this._path)}}function Pf(r,t,...e){if(r=Qt(r),ru("collection","path",t),r instanceof mr){const n=H.fromString(t,...e);return Lo(n),new Gt(r,null,n)}{if(!(r instanceof At||r instanceof Gt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Lo(n),new Gt(r.firestore,null,n)}}function lf(r,t,...e){if(r=Qt(r),arguments.length===1&&(t=Ho.newId()),ru("doc","path",t),r instanceof mr){const n=H.fromString(t,...e);return Mo(n),new At(r,null,new M(n))}{if(!(r instanceof At||r instanceof Gt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return Mo(n),new At(r.firestore,r instanceof Gt?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="AsyncQueue";class qo{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ua(this,"async_queue_retry"),this.Su=()=>{const n=Gr();n&&b(Uo,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=Gr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Gr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Kt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Se(t))throw t;b(Uo,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(n);throw Lt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Ds.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&L()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class be extends mr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new qo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new qo(t),this._firestoreClient=void 0,await t}}}function Vf(r,t){const e=Xu(),n=Kn,i=Yu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Ju("firestore");o&&uf(i,...o)}return i}function iu(r){if(r._terminated)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hf(r),r._firestoreClient}function hf(r){var t,e,n;const i=r._freezeSettings(),o=function(h,c,d,_){return new Cl(h,c,d,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,nu(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new ef(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(h){const c=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pe(lt.fromBase64String(t))}catch(e){throw new N(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=/^__.*__$/;class ff{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}class ou{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function au(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Us{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Us(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return er(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(au(this.Lu)&&cf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class df{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||cr(t)}ju(t,e,n,i=!1){return new Us({Lu:t,methodName:e,zu:n,path:ut.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qs(r){const t=r._freezeSettings(),e=cr(r._databaseId);return new df(r._databaseId,!!t.ignoreUndefinedProperties,e)}function uu(r,t,e,n,i,o={}){const u=r.ju(o.merge||o.mergeFields?2:0,t,e,i);Bs("Data must be an object, but it was:",u,n);const h=lu(n,u);let c,d;if(o.merge)c=new It(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const R=hs(t,A,e);if(!u.contains(R))throw new N(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);cu(_,R)||_.push(R)}c=new It(_),d=u.fieldTransforms.filter(A=>c.covers(A.field))}else c=null,d=u.fieldTransforms;return new ff(new Et(h),c,d)}class _r extends Ls{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _r}}function mf(r,t,e,n){const i=r.ju(1,t,e);Bs("Data must be an object, but it was:",i,n);const o=[],u=Et.empty();te(n,(c,d)=>{const _=js(t,c,e);d=Qt(d);const A=i.Uu(_);if(d instanceof _r)o.push(_);else{const R=yr(d,A);R!=null&&(o.push(_),u.set(_,R))}});const h=new It(o);return new ou(u,h,i.fieldTransforms)}function pf(r,t,e,n,i,o){const u=r.ju(1,t,e),h=[hs(t,n,e)],c=[i];if(o.length%2!=0)throw new N(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)h.push(hs(t,o[R])),c.push(o[R+1]);const d=[],_=Et.empty();for(let R=h.length-1;R>=0;--R)if(!cu(d,h[R])){const C=h[R];let k=c[R];k=Qt(k);const x=u.Uu(C);if(k instanceof _r)d.push(C);else{const D=yr(k,x);D!=null&&(d.push(C),_.set(C,D))}}const A=new It(d);return new ou(_,A,u.fieldTransforms)}function yr(r,t){if(hu(r=Qt(r)))return Bs("Unsupported field value:",t,r),lu(r,t);if(r instanceof Ls)return function(n,i){if(!au(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const h of n){let c=yr(h,i.Ku(u));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Qt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Jl(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:Yn(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(i.serializer,o)}}if(n instanceof Os)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pe)return{bytesValue:Ca(i.serializer,n._byteString)};if(n instanceof At){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:vs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Fs)return function(u,h){return{mapValue:{fields:{[ra]:{stringValue:sa},[Gn]:{arrayValue:{values:u.toArray().map(d=>{if(typeof d!="number")throw h.Wu("VectorValues must only contain numeric values.");return _s(h.serializer,d)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${Ms(n)}`)}(r,t)}function lu(r,t){const e={};return Yo(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(r,(n,i)=>{const o=yr(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function hu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof Os||r instanceof Pe||r instanceof At||r instanceof Ls||r instanceof Fs)}function Bs(r,t,e){if(!hu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Ms(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function hs(r,t,e){if((t=Qt(t))instanceof gr)return t._internalPath;if(typeof t=="string")return js(r,t);throw er("Field path arguments must be of type string or ",r,!1,void 0,e)}const gf=new RegExp("[~\\*/\\[\\]]");function js(r,t,e){if(t.search(gf)>=0)throw er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new gr(...t.split("."))._internalPath}catch{throw er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function er(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let c="";return(o||u)&&(c+=" (found",o&&(c+=` in field ${n}`),u&&(c+=` in document ${i}`),c+=")"),new N(V.INVALID_ARGUMENT,h+r+c)}function cu(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new _f(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(du("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class _f extends fu{data(){return super.data()}}function du(r,t){return typeof t=="string"?js(r,t):t instanceof gr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tf{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return te(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Gn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Fs(o)}convertGeoPoint(t){return new Os(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=sr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(rn(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);z(xa(n));const i=new sn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ef extends fu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(du("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class zn extends Ef{data(t={}){return super.data(t)}}class vf{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new On(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new zn(this._firestore,this._userDataWriter,n.key,n,new On(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const c=new zn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:c,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const c=new zn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new On(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return h.type!==0&&(d=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),_=u.indexOf(h.doc.key)),{type:If(h.type),doc:c,oldIndex:d,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function If(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Af extends Tf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function Cf(r){r=Ft(r,pr);const t=Ft(r.firestore,be),e=iu(t),n=new Af(t);return yf(r._query),of(e,r._query).then(i=>new vf(t,n,r,i))}function Sf(r,t,e){r=Ft(r,At);const n=Ft(r.firestore,be),i=mu(r.converter,t);return Tr(n,[uu(qs(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,wt.none())])}function Df(r,t,e,...n){r=Ft(r,At);const i=Ft(r.firestore,be),o=qs(i);let u;return u=typeof(t=Qt(t))=="string"||t instanceof gr?pf(o,"updateDoc",r._key,t,e,n):mf(o,"updateDoc",r._key,t),Tr(i,[u.toMutation(r._key,wt.exists(!0))])}function bf(r){return Tr(Ft(r.firestore,be),[new ys(r._key,wt.none())])}function kf(r,t){const e=Ft(r.firestore,be),n=lf(r),i=mu(r.converter,t);return Tr(e,[uu(qs(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,wt.exists(!1))]).then(()=>n)}function Tr(r,t){return function(n,i){const o=new Kt;return n.asyncQueue.enqueueAndForget(async()=>Kc(await rf(n),i,o)),o.promise}(iu(r),t)}(function(t,e=!0){(function(i){Ve=i})(il),ol(new al("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new be(new cl(n.getProvider("auth-internal")),new ml(u,n.getProvider("app-check-internal")),function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(d.options.projectId,_)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),zi(Ki,Gi,t),zi(Ki,Gi,"esm2017")})();export{et as T,Cf as a,kf as b,Pf as c,lf as d,bf as e,Vf as g,Sf as s,Df as u};
