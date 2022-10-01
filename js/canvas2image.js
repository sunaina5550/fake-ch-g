var Canvas2Image=function(){function t(t,e,n){var a=t.width,r=t.height;void 0==e&&(e=a),void 0==n&&(n=r);var o=document.createElement("canvas"),i=o.getContext("2d");return o.width=e,o.height=n,i.drawImage(t,0,0,a,r,0,0,e,n),o}function e(e,n,a,r){return(e=t(e,a,r)).toDataURL(n)}function n(t,e){var n=document.createElement("a");n.href=t,n.download=e;var a=new MouseEvent("click",{bubbles:!1,cancelable:!1});n.dispatchEvent(a)}function a(t){var e=document.createElement("img");return e.src=t,e}function r(t){return"image/"+(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function o(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function i(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function c(t,e){return"data:"+e+";base64,"+t}var u=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return{canvas:!!e,imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa}}(),g=function(t){var e=t.width,n=t.height,a=e*n*3,r=a+54,i=[66,77,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,54,0,0,0],c=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u=(4-3*e%4)%4,g=t.data,v="",d=e<<2,f=n,m=String.fromCharCode;do{for(var s=d*(f-1),h="",p=0;p<e;p++){var l=p<<2;h+=m(g[s+l+2])+m(g[s+l+1])+m(g[s+l])}for(var w=0;w<u;w++)h+=String.fromCharCode(0);v+=h}while(--f);return o(i.concat(c))+o(v)},v=function(a,o,v,d,f){if(u.canvas&&u.dataURL)if("string"==typeof a&&(a=document.getElementById(a)),void 0==d&&(d="png"),f=void 0==f||0===f.length?Date.now()+"."+d:f+"."+d,d=r(d),/bmp/.test(d)){var m=i(t(a,o,v));n(c(s=g(m),downloadMimedownloadMime),f)}else{var s=e(a,d,o,v);n(s.replace(d,"image/octet-stream"),f)}},d=function(n,o,v,d){if(u.canvas&&u.dataURL){if("string"==typeof n&&(n=document.getElementById(n)),void 0==d&&(d="png"),d=r(d),/bmp/.test(d)){var f=i(t(n,o,v));return a(c(m=g(f),"image/bmp"))}var m=e(n,d,o,v);return a(m)}};return{saveAsImage:v,saveAsPNG:function(t,e,n,a){return v(t,e,n,"png",a)},saveAsJPEG:function(t,e,n,a){return v(t,e,n,"jpeg",a)},saveAsGIF:function(t,e,n,a){return v(t,e,n,"gif",a)},saveAsBMP:function(t,e,n,a){return v(t,e,n,"bmp",a)},convertToImage:d,convertToPNG:function(t,e,n){return d(t,e,n,"png")},convertToJPEG:function(t,e,n){return d(t,e,n,"jpeg")},convertToGIF:function(t,e,n){return d(t,e,n,"gif")},convertToBMP:function(t,e,n){return d(t,e,n,"bmp")}}}();