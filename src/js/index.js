var x=0;
function toggle()
{
    if(x==0)
    {
        document.getElementById("nav").style.display="block";
        x=1;
    }
    else
    {
        document.getElementById("nav").style.display="none";
        x=0;
    }
}
function submit()
{
    alert("Your Details are Submitted");
}