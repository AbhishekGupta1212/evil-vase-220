window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  }
}
let btn=document.querySelector("#left>button")
btn.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/enterprise-demo/"
})
let btn3=document.querySelector("#login")
btn3.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="login.html"
})
let btn4=document.querySelector("#login+button")
btn4.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="signup.html"
})
let logo1=document.querySelector("#navbar>img")
logo1.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="index.html"
})
let btn5=document.querySelector("#colorful-box>button")
btn5.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/enterprise-demo/"
})
let c=document.querySelector("#price")
c.addEventListener("click",function(event){
  event.preventDefault()
document.location.href="https://lumen5.com/pricing/"
})
let e=document.querySelector("#enter")
e.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="enterprise.html"
})
let x=document.querySelector("#case")
x.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="case-study.html"
})
let a=document.querySelector("#abt")
a.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/about/"
})
let fe=document.querySelector("#feat")
fe.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/features/"
})
let ce=document.querySelector("#care")
ce.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/careers/"

})
let li=document.querySelector("#link")
li.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://ca.linkedin.com/company/lumen5"

})
let su=document.querySelector("#sup")
su.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://help.lumen5.com/en/"

})
let pr=document.querySelector("#prou")
pr.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://updates.lumen5.com/"

})
let ad=document.querySelector("#adt")
ad.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/add-text-to-video"

})
let mr=document.querySelector("#merv")
mr.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/merge-video"

})
let co=document.querySelector("#compv")
co.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/compress-video/"

})
let rv=document.querySelector("#res")
rv.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/resize-video/"

})
let sa=document.querySelector("#sall")
sa.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/"

})
let ve=document.querySelector("#ved")
ve.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/video-editor/"

})
let pd=document.querySelector("#pdm")
pd.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/photo-video-maker/"

})
let me=document.querySelector("#fvm")
me.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/facebook-video-maker/"

})
let im=document.querySelector("#yim")
im.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/youtube-intro-maker/"

})
let iv=document.querySelector("#ivm")
iv.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/instagram-video-maker/"

})
let sl=document.querySelector("#sel")
sl.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/video-maker/"

})
let uv=document.querySelector("#cuv")
uv.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/tools/cut-video"
})