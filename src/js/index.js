var x = 0;
function toggle() {
    if (x == 0) {
        document.getElementById("nav").style.display = "block";
        x = 1;
    }
    else {
        document.getElementById("nav").style.display = "none";
        x = 0;
    }
}
function submit() {
    if (document.getElementById("home_location").value == "") {
        alert("Please enter a location");
    }
    else {
        var mailer = document.getElementById("home_email_id").value;
        console.log(mailer);
        var location = document.getElementById("home_location").value;
        var str = "https://trojan-backends.herokuapp.com/user_data?email=" + mailer + "&location=" + location;
        console.log(str);
        fetch(str)
            .then(response => response.json().then
                (data => {
                    console.log(data);
                }
                ));
        alert("Your details are saved with us. We will contact you in case of any emergency in your area.")
    }
}
function submit_beds() {
    if (document.getElementById("beds_location").value == "" || document.getElementById("beds_phone").value == "") {
        alert("Please enter the mandatory fields");
    }
    else {

        var name = document.getElementById("beds_name").value;
        var email = document.getElementById("beds_phone").value;
        var location = document.getElementById("beds_location").value;
        var d = `https://trojan-backends.herokuapp.com/beds?name=${name}&location=${location}`;
        fetch(d)
            .then(response => response.json().then
                (data => {
                    console.log(data);
                    var message=`There are ${data["beds"]} beds available in ${name}`;
                    alert(message);
                }));

        document.getElementById("beds_name").value = "";
        document.getElementById("beds_phone").value = "";
        document.getElementById("beds_location").value = "";
    }
}
function submit_report() {
    if (document.getElementById("report_location").value == "" || document.getElementById("report_phone").value == "" || document.getElementById("report_name").value == "" || document.getElementById("report_disaster").value == "") {
        alert("Please enter the mandatory fields");
    }
    else {
        var name = document.getElementById("report_name").value;
        var email = document.getElementById("report_phone").value;
        var location = document.getElementById("report_location").value;
        var disaster = document.getElementById("report_disaster").value;

        z = '{"body":"I am ' + name + ' reporting ' + disaster + ' recorded at ' + location + '","from":"' + email + '","timestamp":0,"title":"Alert","to":"projcollab23@gmail.com"}';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
                'X-RapidAPI-Host': 'google-mail-api-bulk-send-and-receive-gmails.p.rapidapi.com'
            },
            body: z
        };

        fetch('https://google-mail-api-bulk-send-and-receive-gmails.p.rapidapi.com/api/send/e0VIgeZJt7S02OvBeN4QR5sRuE9RQUIk4umKyM6bjQQE7UE8Nf2bNMsT4aL43PpL', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        document.getElementById("report_name").value = "";
        document.getElementById("report_phone").value = "";
        document.getElementById("report_location").value = "";
        document.getElementById("report_disaster").value = "";
        alert("Thanks for the information we will be alerting the hospitals in the neighbouring area soon.");
    }
}