!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");e.setAttribute("disabled","disabled");var a=null;function d(t,e){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}t.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16))),t.disabled=!0}),1e3),d(t,e)})),e.addEventListener("click",(function(){clearInterval(a),d(e,t)}))}();
//# sourceMappingURL=01-color-switcher.af0cef40.js.map