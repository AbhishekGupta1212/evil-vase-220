  // navbar

  let box=document.createElement("div")
  box.setAttribute("id","navbar")
  let image=document.createElement("img")
  image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png")
  image.setAttribute("width",150)
  image.addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="index.html"
  })
  image.style.cursor="pointer"
  let menu=document.createElement("div")
  menu.setAttribute("id","menu")
  let div1=document.createElement("div")
  div1.innerText="Pricing"
  div1.style.color="#48505E"
  div1.style.cursor="pointer"
  div1.addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="https://lumen5.com/pricing/"
  })
  let div2=document.createElement("div")
  div2.innerText="Enterprise"
  div2.style.color="#48505E"
  div2.style.cursor="pointer"
  div2.addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="enterprise.html"
  })
  let div3=document.createElement("div")
  div3.innerText="Case Studies"
  div3.style.color="#48505E"
  div3.style.cursor="pointer"
  div3.addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="case-study.html"
  })
  let div4=document.createElement("div")
  div4.innerText="Learn"
  div4.style.color="#48505E"
  div4.style.cursor="pointer"
  div4.addEventListener("click",function(){
    
  })
  let btn1=document.createElement("button")
  btn1.setAttribute("id","login")
  btn1.innerText="Login"
  btn1.style.cursor="pointer",
 btn1.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="login.html"
 })
  btn1.style.width="70px"
let btn2=document.createElement("button")
  btn2.innerText="Sign up"
  btn2.addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="signup.html"
  })
  btn2.style.cursor="pointer"
  btn2.style.background="#5846f6"
  btn2.style.color="white"
  menu.append(div1,div2,div3,div4,btn1,btn2)
box.append(image,menu)
document.querySelector("body").append(box)

// middle

let mid=document.createElement("div")
mid.setAttribute("id","mid")
let div5=document.createElement("div")
div5.setAttribute("id","txt")
let head=document.createElement("h1")
head.innerText="Video maker built to supercharge your content strategy"
let para=document.createElement("p")
para.innerText="Easily make videos for content marketing , thought leadership, and brand awareness in a snap."
let btn=document.createElement("button")
btn.innerText="Sign up free"
btn.style.cursor="pointer"
btn.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="signup.html"
})
btn.style.width="135px"
btn.style.background="#5846f6"
  btn.style.color="white"
let div6=document.createElement("div")
div6.setAttribute("id","photo")
let pic=document.createElement("img")
pic.setAttribute("id","photo1")
pic.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png")
div6.append(pic)
div5.append(head,para,btn)
mid.append(div5,div6)
document.querySelector("body").append(mid)

// images after mid

let div7=document.createElement("h1")
div7.innerText="Over 6 million videos created by thousands of businesses"
let div8=document.createElement("div")
div8.setAttribute("id","logos")
let pic2=document.createElement("img")
pic2.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png")
let pic3=document.createElement("img")
pic3.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png")
let pic4=document.createElement("img")
pic4.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png")
let pic5=document.createElement("img")
pic5.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png")
let pic6=document.createElement("img")
pic6.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png")
let pic7=document.createElement("img")
pic7.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png")
let pic8=document.createElement("img")
pic8.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png")
let pic9=document.createElement("img")
pic9.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png")
div8.append(pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9)
document.querySelector("body").append(div7,div8)

let div9=document.createElement("div")
div9.setAttribute("id","title2")
head2=document.createElement("h2")
head2.innerText="Captivating video templates"
para2=document.createElement("p")
para2.innerText="Drag and drop. No experience required."
let div10=document.createElement("div")
div10.setAttribute("id","videos")

let vid1=document.createElement("video")
vid1.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4")
vid1.addEventListener("mouseover",function(){
this.play()
})
vid1.addEventListener("mouseleave",function(){
this.pause()
})
let vid2=document.createElement("video")
vid2.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4")
vid2.addEventListener("mouseover",function(){
this.play()
})
vid2.addEventListener("mouseleave",function(){
this.pause()
})
let vid3=document.createElement("video")
vid3.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4")
vid3.addEventListener("mouseover",function(){
this.play()
})
vid3.addEventListener("mouseleave",function(){
this.pause()
})
let vid4=document.createElement("video")
vid4.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4")
vid4.addEventListener("mouseover",function(){
this.play()
})
vid4.addEventListener("mouseleave",function(){
this.pause()
})
let vid5=document.createElement("video")
vid5.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4")
vid5.addEventListener("mouseover",function(){
this.play()
})
vid5.addEventListener("mouseleave",function(){
this.pause()
})
let vid6=document.createElement("video")
vid6.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4")
vid6.addEventListener("mouseover",function(){
this.play()
})
vid6.addEventListener("mouseleave",function(){
this.pause()
})
let vid7=document.createElement("video")
vid7.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4")
vid7.addEventListener("mouseover",function(){
this.play()
})
vid7.addEventListener("mouseleave",function(){
this.pause()
})
let vid8=document.createElement("video")
vid8.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4")
vid8.addEventListener("mouseover",function(){
this.play()
})
vid8.addEventListener("mouseleave",function(){
this.pause()
})
let vid9=document.createElement("video")
vid9.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4")
vid9.addEventListener("mouseover",function(){
this.play()
})
vid9.addEventListener("mouseleave",function(){
this.pause()
})
let head1=document.createElement("h1")
head1.innerText="Transform blog posts into videos with A.I."
let para1=document.createElement("p")
para1.innerText="Starting from a blank page is hard — and with Lumen5, you don’t have to. Our AI-powered technology helps you storyboard your ideas, fit your content to a layout, and find music and visuals that enhance your message."
let div11=document.createElement("div")
div11.setAttribute("id","photos")
div=document.createElement("div")
div.setAttribute("id","content")
let head3=document.createElement("h3")
head3.innerText="Get started for free "
head3.style.color="#5846f6"
head3.style.fontSize="16px"
head3.style.cursor="pointer"
head3.addEventListener("click",function(event){
event.preventDefault()
document.location.href="signup.html"
})
let linebrk=document.createElement("hr")
let pic10=document.createElement("img")
pic10.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png")
div11.append(pic10,div)
div9.append(head2,para2)
div.append(head1,para1,head3,linebrk)
div10.append(vid1,vid2,vid3,vid4,vid5,vid6,vid7,vid8,vid9)
document.querySelector("body").append(div9,div10,div11)

let btn6=document.querySelector("#colorful-box>button")
btn6.addEventListener("click",function(event){
  event.preventDefault()
  document.location.href="https://lumen5.com/enterprise-demo/"
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