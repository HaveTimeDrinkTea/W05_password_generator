// copy text from text area

function copyPwdText() {
    // Get the text field
    var copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }


// Display the finance report on webpage

function incText(isOption) {
    if (isOption) {
        return '<i class="fa fa-check" aria-hidden="true"></i>';
    } else {
        return '<i class="fa fa-times" aria-hidden="true"></i>';
    };
};


document.getElementById("optionsChoices").innerHTML = 
    ("<tr><th colspan='4' class='userOptionTitle'>Password Options</th></tr>" 
    + "<tr><th colspan='2'width='50%' class='userOption'>Desired Password Length:</th><td colspan='2' width='50%' class='userChoice'>" + defaultPwdLen + "</td></tr>"
    + "<tr><th class='userOption'>Numbers:</th><td class='userChoice'>" + incText(isNum) + "</td><th class='userOption'>Special Characters:</th><td class='userChoice'>"+ incText(isSpec) +"</td></tr>"
    + "<tr><th class='userOption'>Lower Case Letters:</th><td class='userChoice'>" + incText(isLower) + "</td><th class='userOption'>Upper Case Letters:</th><td class='userChoice'>"+ incText(isUpper) +"</td></tr>"
    );