!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.firstPageInPagingFrame=1,this.onClickEnterInSearch=null,this.switchToNextPage=null,this.swipeStart=null,this.swipeEnd=null,this.openVideo=null}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"pageLoad",value:function(){var e=this.element.document.createDocumentFragment(),t=this.element.document.createElement("div"),n=this.element.document.createElement("input");n.setAttribute("type","text"),n.setAttribute("id","input-text"),n.className="searcher-input",n.onkeyup=this.onClickEnterInSearch,t.appendChild(n),e.appendChild(t);var i=this.element.document.createElement("div");i.className="videos-container",i.id="videos",e.appendChild(i);var a=this.element.document.createElement("div");a.id="dots",e.appendChild(a),this.element.document.body.appendChild(e)}},{key:"render",value:function(e,t,n){var i=this;function a(e){window.open("https://www.youtube.com/watch?v=".concat(e),"_blank")}var s=this.element.document.getElementById("videos");s.style.setProperty("--i","0"),s.innerHTML="";for(var r=function(t){var n=i.element.document.createElement("div");n.className="video-section",n.style.height="100%";var r=i.element.document.createDocumentFragment(),o=i.element.document.createElement("img");o.setAttribute("src","".concat(e[t].thumbnails)),o.setAttribute("alt","video thumbnail"),o.className="video-img",r.appendChild(o);var d=i.element.document.createElement("div");d.className="video-title",d.addEventListener("mousedown",function(){a(e[t].id)}),d.addEventListener("touchend",function(){a(e[t].id)}),d.innerHTML="<p>".concat(e[t].title,"</p>"),r.appendChild(d);var c=i.element.document.createElement("div");c.className="video-author",c.innerHTML="<p>".concat(e[t].author,"</p>"),r.appendChild(c);var h=i.element.document.createElement("div");h.className="video-publishedAt",h.innerHTML="<p>".concat(e[t].publishedAt,"</p>"),r.appendChild(h),i.element.document.createElement("div").className="video-rate";var u=i.element.document.createElement("div");u.className="video-description",u.innerHTML="<p>".concat(e[t].description,"</p>"),r.appendChild(u),n.appendChild(r),s.appendChild(n)},o=0;o<e.length;o+=1)r(o);var d=this.element.document.getElementById("dots");d.innerHTML="";var c=this.element.document.createElement("span");c.className="dot",c.innerHTML="<span>&#60</span>",1===t?c.style.background="grey":c.onclick=this.switchToNextPage,d.appendChild(c);var h=1;t>n+this.firstPageInPagingFrame-1&&(this.firstPageInPagingFrame+=1,h=this.firstPageInPagingFrame),t<this.firstPageInPagingFrame&&(this.firstPageInPagingFrame=t),t<this.firstPageInPagingFrame+n&&(h=this.firstPageInPagingFrame);for(o=h;o<h+n;o+=1)(c=this.element.document.createElement("span")).className="dot",c.title=t,o===t&&(c.className="dot dot-active"),c.innerHTML="<span>".concat(o,"</span>"),c.onclick=this.switchToNextPage,d.appendChild(c);(c=this.element.document.createElement("span")).className="dot",c.innerHTML="<span>&#62</span>",c.onclick=this.switchToNextPage,d.appendChild(c),this.element.document.getElementById("videos").addEventListener("mousedown",this.swipeStart),this.element.document.getElementById("videos").addEventListener("touchstart",this.swipeStart),this.element.document.getElementById("videos").addEventListener("mousedown",function(e){e.preventDefault()}),this.element.document.getElementById("videos").addEventListener("touchstart",function(e){e.preventDefault()}),this.element.document.getElementById("videos").addEventListener("mouseup",this.swipeEnd),this.element.document.getElementById("videos").addEventListener("touchend",this.swipeEnd)}}]),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.XMLHttpRequest=t,this.videos=[],this.nextPageToken=""}return function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(e,[{key:"getVideoArray",value:function(e,t,n,i){var a="";if(this.videos.length-n*i<5&&(a=this.nextPageToken),""!==e||""!==a){var s=new this.XMLHttpRequest;if(s.open("GET","https://www.googleapis.com/youtube/v3/search?pageToken=".concat(a,"&key=AIzaSyBWtxPSToPQnHGveWXFkzYD1ICAh8XJeV4&type=video&part=snippet&maxResults=15&q=").concat(e),!1),s.send(),200!==s.status)throw new Error(s.status.concat(s.statusText));var r=JSON.parse(s.responseText);""!==a?(this.videos=this.videos.concat(r.items),this.nextPageToken=r.nextPageToken):(this.videos=r.items,this.nextPageToken=r.nextPageToken)}t(this.videos.slice((i-1)*n,i*n))}}]),e}();function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pageView=t,this.pageModel=n,this.videoPerPage=4,this.currentPage=1,this.numberOfPagingDots=2,this.x0=null}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"initialize",value:function(){this.pageView.onClickEnterInSearch=this.onClickEnterInSearch.bind(this),this.showVideos=this.showVideos.bind(this),this.measureWindowSize=this.measureWindowSize.bind(this),this.redrawOnResize=this.redrawOnResize.bind(this),this.pageView.swipeStart=this.swipeStart.bind(this),this.pageView.swipeEnd=this.swipeEnd.bind(this),this.pageView.switchToNextPage=this.switchToNextPage.bind(this),this.pageView.pageLoad()}},{key:"onClickEnterInSearch",value:function(e){this.measureWindowSize();var t=document.getElementById("input-text").value;this.currentPage=1,13===e.keyCode&&this.pageModel.getVideoArray(t,this.showVideos.bind(this),this.videoPerPage,this.currentPage)}},{key:"showVideos",value:function(e){var t=[],n=0;e.forEach(function(e){console.log(e),t[n]={},t[n].thumbnails=e.snippet.thumbnails.medium.url,t[n].title=e.snippet.title,t[n].description=e.snippet.description,t[n].publishedAt=e.snippet.publishedAt,t[n].author=e.snippet.channelTitle,t[n].id=e.id.videoId,n+=1}),this.pageView.render(t,this.currentPage,this.numberOfPagingDots)}},{key:"measureWindowSize",value:function(){var e=document.documentElement.clientWidth;this.videoPerPage=4,this.numberOfPagingDots=2,e<1200&&(this.videoPerPage=3,this.numberOfPagingDots=3),e<900&&(this.videoPerPage=2,this.numberOfPagingDots=4),e<600&&(this.videoPerPage=1)}},{key:"redrawOnResize",value:function(){var e=(this.currentPage-1)*this.videoPerPage+1;this.measureWindowSize(),this.currentPage=Math.ceil(e/this.videoPerPage),this.pageModel.getVideoArray("",this.showVideos.bind(this),this.videoPerPage,this.currentPage)}},{key:"switchToNextPage",value:function(e){">"===e.target.innerText&&(this.currentPage+=1),"<"===e.target.innerText&&(this.currentPage-=1),">"!==e.target.innerText&&"<"!==e.target.innerText&&(this.currentPage=+e.target.innerText),this.pageModel.getVideoArray("",this.showVideos.bind(this),this.videoPerPage,this.currentPage)}},{key:"swipeStart",value:function(e){var t=e.changedTouches?e.changedTouches[0]:e;this.x0=t.clientX}},{key:"swipeEnd",value:function(e){var t=e.changedTouches?e.changedTouches[0]:e;this.x0-t.clientX<0?1!==this.currentPage&&(document.getElementById("videos").style.setProperty("--i","100%"),this.currentPage-=1,this.pageModel.getVideoArray("",this.showVideos.bind(this),this.videoPerPage,this.currentPage)):(document.getElementById("videos").style.setProperty("--i","-100%"),this.currentPage+=1,this.pageModel.getVideoArray("",this.showVideos.bind(this),this.videoPerPage,this.currentPage)),this.x0=null}}]),e}(),c=new r(XMLHttpRequest),h=new d(new a(window),c);window.onload=h.initialize(),window.addEventListener("resize",h.redrawOnResize)}]);
//# sourceMappingURL=main.js.map