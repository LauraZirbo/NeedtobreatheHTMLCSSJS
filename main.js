window.onscroll = function(){
    myF();
}
let nav = document.querySelector("div");
let sticky = nav.offsetTop;
function myF(){
    if(window.pageYOffset>= sticky)
    {
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}


let coll = document.getElementsByClassName("collapsible");
    let i;
    for(i = 0; i<coll.length;i++)
    {
        coll[i].addEventListener("click",function() {
            const content2 = this.nextElementSibling;
            this.classList.toggle("active");
            if(content2.style.display == "block")
            {
                content2.style.display = "none"
            }
            else
            {
                content2.style.display = "block";
            }
        });
    }


let today = new Date();
let t2 = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
let t1 = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById("p1").innerHTML = t1+' '+t2;
for(i = 0; i<=9;i++){
    let sd = document.getElementsByClassName("tk")[i].innerHTML;
    let d = parseInt (sd.substr(0,2));
    let m = parseInt(sd.substr(3,2));
    let ml  = m-(today.getMonth()+1);
    let dl = d - today.getDate();
    if(ml >0)
    {
        dl = dl+30*ml;
    }
    if(dl > 0)
    {
        document.getElementsByClassName("dl")[i].innerHTML = 'There are '+dl+' days left';
    }
    else
    {
        document.getElementsByClassName("dl")[i].innerHTML = "The concert has"+'\n' +"taken place";
    }

}

function alertConcert(i){
    let loc = document.getElementsByClassName("td2")[i].innerHTML;
    loc = loc.replace("<b>","");
    loc = loc.replace("</b>","");
    loc = loc.replace("<br>","");
    alert("See you in "+ loc +"! Your seat is "+ Math.floor(Math.random()*500)+1);
    document.querySelector("button")[i] = "See you there";
}

function validation(){
    var form = document.querySelector("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid";
        text.style.color = "#00ff00";

    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your Email Address is invalid";
        text.style.color = "#ff0000"
    } 
}

function done(){
    var name = document.getElementById("lname").value;
    console.log(name);
    var email = document.getElementById("email").value;
    var month = document.getElementById("date").value;
    var d = month.substr(5,2);
    var f = document.getElementById("fname").value;
    console.log(document.getElementById("male").checked);
    var checkedButton;
    
    if(!(name.length == 0 || email.length == 0 || month.length == 0 || f.length ==0 ))
    {
        if(document.getElementById("female").checked == true || document.getElementById("male").checked == true)
        {
            month = parseInt(month);
            alert("Thank you "+ name+" ! We will contact you at your email adress, "+email);
            if (d == (today.getMonth()+1))
            alert("Your Brithday is this month! Happy Brithday!")
        }
    }

}


