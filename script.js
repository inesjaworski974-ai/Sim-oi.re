(function(){
var d=document,hd=d.querySelector("header");
function s(){hd.classList.toggle("sc",window.scrollY>8)}s();window.addEventListener("scroll",s,{passive:true});
window.simMark=function(k){d.querySelectorAll("nav a[data-nav]").forEach(function(a){a.classList.toggle("on",a.getAttribute("data-nav")===k)})};
if(d.body.getAttribute("data-key"))window.simMark(d.body.getAttribute("data-key"));
if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var els=d.querySelectorAll(".svc,.dm,.zz,.card,.work,.band,.pt,.row,.steps div,.info>div,.center,.badge");
els.forEach(function(e){e.classList.add("rv");var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.transitionDelay=(Math.min(i,4)*90)+"ms"});
d.documentElement.classList.add("js");
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.classList.remove("rv","in");t.style.transitionDelay=""},1400)}})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});
els.forEach(function(e){io.observe(e)});
})();
