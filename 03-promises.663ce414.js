!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form");u.addEventListener("submit",(function(n){var t=function(n){(function(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))})(n,o).then((function(t){e(r).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){e(r).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),o+=+a.value};n.preventDefault();for(var o=+u.elements.delay.value,i=u.elements,a=i.step,l=i.amount,c=1;c<=l.value;c+=1)t(c)}))}();
//# sourceMappingURL=03-promises.663ce414.js.map
