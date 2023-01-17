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


// Display the user input parameters on web page

function incText(isOption) {
    if (isOption) {
        return '<i class="fa fa-check" aria-hidden="true"></i>';
    } else {
        return '<i class="fa fa-times" aria-hidden="true"></i>';
    };
};

function inputOptions() {
    document.getElementById("optionsChoices").innerHTML = (
        "<tr><th colspan='4' class='userOptionTitle'>Password Options</th></tr>" 
        + "<tr><th colspan='2'width='50%' class='userOption'>Desired Password Length:</th><td colspan='2' width='50%' class='userChoice'>" + pwdLen + "</td></tr>"
        + "<tr><th class='userOption'>Numbers:</th><td class='userChoice'>" + incText(isNum) + "</td><th class='userOption'>Special Symbols:</th><td class='userChoice'>"+ incText(isSpec) +"</td></tr>"
        + "<tr><th class='userOption'>Lower Case Letters:</th><td class='userChoice'>" + incText(isLower) + "</td><th class='userOption'>Upper Case Letters:</th><td class='userChoice'>"+ incText(isUpper) +"</td></tr>"
    );
}


// copy to clipboard
// code taken from https://codepen.io/MORHERO/pen/JLPzyB and amended accordingly
// Note that document.execCommand has been deprecated
// go check out the alternative at https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/

document.getElementById('copyToClipboard').addEventListener('click', function() {
    var text = document.getElementById('password');
    text.select();
    document.execCommand('copy');
})

