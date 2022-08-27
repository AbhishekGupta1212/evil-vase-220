document.querySelector("#logo1").addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="index.html"
})
document.querySelector("#fb").addEventListener("click",function(event){
    event.preventDefault()
    document.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1796597403992590&kid_directed_site=0&app_id=1796597403992590&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Foauth%3Fclient_id%3D1796597403992590%26redirect_uri%3Dhttps%253A%252F%252Flumen5.com%252Fcomplete%252Ffacebook%252F%26state%3Dao7lLvcG3ZsQ8xjJ5WjGOM6sCys9ZDxF%26return_scopes%3Dtrue%26scope%3Demail%252Cpages_manage_metadata%252Cpages_manage_posts%252Cread_insights%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df7141867-578f-459a-bfd9-8d5ec7f4974b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Flumen5.com%2Fcomplete%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dao7lLvcG3ZsQ8xjJ5WjGOM6sCys9ZDxF%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
})

let dataArr=JSON.parse(localStorage.getItem("info"))||[]
document.querySelector("form").addEventListener("submit", mydata);
function mydata(event) {
event.preventDefault()
let Name = document.querySelector("#name").value;
let e_mail = document.querySelector("#email").value;
let password = document.querySelector("#pwrd").value;
let dataobj={
    Name,
    e_mail,
    password
}
dataArr.push(dataobj)
localStorage.setItem("info",JSON.stringify(dataArr))
}