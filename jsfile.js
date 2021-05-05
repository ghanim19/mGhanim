function validateForm() 
{
    var flag=false;
    var x1 = document.getElementById("nameCheck").value
    if (x1 == "") {
        document.getElementById("nameCheck").style.border ="solid 1px #0000FF";
        flag=true;
    }
    var x2= document.getElementById("lastCheck").value
    if (x2 == "") {
        flag=true;
        document.getElementById("lastCheck").style.border ="solid 1px #0000FF";
    }
    var x3= document.getElementById("urlCheck").value
    if (x3 == "") {
        flag=true;
        document.getElementById("urlCheck").style.border ="solid 1px #0000FF";
    }
    var x4 = document.getElementById("telCheck").value
    if (x4 == "") {
        flag=true;
        document.getElementById("telCheck").style.border ="solid 1px #0000FF";
    }
    var x5 = document.getElementById("emailCheck").value
    if (x5 == "") {
        flag=true;
        document.getElementById("emailCheck").style.border ="solid 1px #0000FF";
    }
    var x6 = document.getElementById("userCheck").value
    if (x6 == "") {
        flag=true;
        document.getElementById("userCheck").style.border ="solid 1px #0000FF";
    }
    var x7 = document.getElementById("passCheck").value
    if (x7 == "") {
        flag=true;
        document.getElementById("passCheck").style.border ="solid 1px #0000FF";
    }
    var x = document.getElementById("check").value
    if (x == "") {

      document.getElementById("check").style.border ="solid #0000FF 1px";
      flag=true;
    }
    if(flag==true)
        alert("The blank input fields.");
}
function changeColor(id)
{
    id.style.border ="solid 1px #000000";
}
function spilt()
{
    
    var email = document.getElementById("emailCheck").value
    var name   = email.substring(0, email.lastIndexOf("@"));
    alert(name+" has been saved.")
}
var w=0;
function requiredFields(sort)
{
    if(sort==w)
        w++;
    else
    {
        alert("Enter the rows in order\nEnter box:"+w)
        w--;
    }
}
