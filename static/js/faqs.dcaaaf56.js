(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{YSy6:function(e,t,o){"use strict";o.r(t);var n,a=o("pLV6"),r=o("BYLL"),i=o.n(r),s=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.faqs=[{q:"Why does the amount change?",a:"Gamification. If you want to have a different color or text size you should pay more than standard text"},{q:"Why does a color cost slightly different than another?",a:"I use the amount to encode the color, textSize and a version param. Please check out the corresponding FAQ"},{q:"What happens if I don't respect the amount?",a:"Depending on what you input as amount it will either never be shown here or have a random color/size scheme"},{q:"Can you add support to this/that feature?",a:"Probably yes but it all depends on the feature. Thanks to the amount encoding algorithm i left the data space intact and, if possible, i'd like to avoid using the reference field for options and features."},{q:"Can you go a bit more in depth on the amount encoding algorithm?",a:"Sure thing. Amount is: 1e7 + text.length * 1e5 * (color != black ? 4 : 1) + ( version + textCode * 2^4 + color * 2^8 )"},{q:"Did you ensure some space to other features.",a:"Yes. There are about 5 other bits we can exploit using this encoding."},{q:"What happens if we need more?",a:"That's the reason for the version number. I can decide to change the amount encoding along with a different version packing stuff in a different way"},{q:"What happens if this website goes down?",a:"Code is opensource and you could always inspect the blockchain to get all the entries."},{q:"Why did you do this?",a:"For fun"}],t}return s(t,e),function(e,t,o,n){var a,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(r<3?a(i):r>3?a(t,o,i):a(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}([i()({name:"faqs"})],t)}(a.default),u=o("Xm6T"),h=Object(u.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._l(e.faqs,function(t,n){return o("div",{key:n},[o("div",{staticClass:"faq"},[o("h3",{staticClass:"q"},[e._v(e._s(t.q))]),e._v(" "),o("p",{staticClass:"a"},[e._v(e._s(t.a))])]),e._v(" "),o("md-divider")],1)}))},[],!1,function(e){o("zoyP")},null,null);t.default=h.exports},ttsJ:function(e,t,o){(e.exports=o("e0uS")(!1)).push([e.i,".faq{margin:16px 0}",""])},zoyP:function(e,t,o){var n=o("ttsJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,o("tFQF").default)("62db183e",n,!0,{})}}]);