function welcomeMsg()
{
    var name = document.getElementById('fn').value;
    var emailid = document.getElementById('email').value  // Retrieve the email input value
    var welcomeMessage = "Welcome, " + name + "!"; // Add the welcome message
    document.getElementById('h1wcmsg').innerText = welcomeMessage;    
    var nextmsg= "Your email id is::" + emailid + "!!!!";
    
    document.getElementById('h1wcmsg').innerText = welcomeMessage;
    document.getElementById('h1email').innerText = nextmsg;

}
