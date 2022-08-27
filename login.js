document.querySelector("#logo1").addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="index.html"
})
document.querySelector("#fb").addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1796597403992590&kid_directed_site=0&app_id=1796597403992590&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Foauth%3Fclient_id%3D1796597403992590%26redirect_uri%3Dhttps%253A%252F%252Flumen5.com%252Fcomplete%252Ffacebook%252F%26state%3Dao7lLvcG3ZsQ8xjJ5WjGOM6sCys9ZDxF%26return_scopes%3Dtrue%26scope%3Demail%252Cpages_manage_metadata%252Cpages_manage_posts%252Cread_insights%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df7141867-578f-459a-bfd9-8d5ec7f4974b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flumen5.com%2Fcomplete%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dao7lLvcG3ZsQ8xjJ5WjGOM6sCys9ZDxF%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
})
document.querySelector("#key").addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="https://lumen5.com/auth/sso-verification/"
})


document.querySelector("#login").addEventListener("click",mydata)
let logindata=JSON.parse(localStorage.getItem("info"))
//  console.log(logindata)
function mydata(event){
event.preventDefault()
let e_mail1=document.querySelector("#email").value 
let password1=document.querySelector("#pwrd").value
// console.log(e_mail1,password1)
logindata.forEach(function(el){
if(el.e_mail==e_mail1 ){
    if(el.password==password1){
        document.querySelector("#displaymsg").innerText="Login Successful"
        document.querySelector("#displaymsg").style.color="green";
    }else {
        document.querySelector("#displaymsg").innerText="Password Incorrect"
        document.querySelector("#displaymsg").style.color="red";

    }
}else if(el.e_mail!==e_mail1){
    document.querySelector("#displaymsg").innerText="Email Incorrect"
        document.querySelector("#displaymsg").style.color="red";
}else{
    document.querySelector("#displaymsg").innerText="Email or Password Incorrect"
        document.querySelector("#displaymsg").style.color="red";
}
})
}