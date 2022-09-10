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
    if(document.getElementById("home_location").value=="")
    {
        alert("Please enter a location");
    }
    else
    {
        document.getElementById("home_email_id").value="";
        document.getElementById("home_phone").value="";
        document.getElementById("home_location").value="";
        alert("Your details are saved with us. We will contact you in case of any emergency in your area.")
    }
}
function submit_beds()
{
    if(document.getElementById("beds_location").value=="" || document.getElementById("beds_phone").value=="")
    {
        alert("Please enter the mandatory fields");
    }
    else
    {
        document.getElementById("beds_name").value="";
        document.getElementById("beds_phone").value="";
        document.getElementById("beds_location").value="";
        alert("We will be sending you details of bed availability in your provided phone number");
    }
}
function submit_report()
{
    if(document.getElementById("report_location").value=="" || document.getElementById("report_phone").value=="" || document.getElementById("report_name").value=="" ||document.getElementById("report_disaster").value=="")
    {
        alert("Please enter the mandatory fields");
    }
    else
    {
        document.getElementById("report_name").value="";
        document.getElementById("report_phone").value="";
        document.getElementById("report_location").value="";
        document.getElementById("report_disaster").value="";
        alert("Thanks for the information we will be alerting the hospitals in the neighbouring area soon.");
    }
}