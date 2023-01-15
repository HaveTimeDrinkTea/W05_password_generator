// Display the finance report on webpage

function incText(isOption) {
    if (isOption) {
        return '<i class="fa fa-check" aria-hidden="true"></i>';
    } else {
        return '<i class="fa fa-times" aria-hidden="true"></i>';
    };
};


document.getElementById("optionsChoices").innerHTML = 
    ("<tr><th colspan='4' class='userOptionTitle'>Your Password Options</th></tr>" 
    + "<tr><th colspan='2' class='userOption'>Desired Password Length:</th><td colspan='2' class='userChoice'>" + pwdLen + "</td></tr>"
    + "<tr><th class='userOption'>Numbers:</th><td class='userChoice'>" + incText(isNum) + "</td><th class='userOption'>Special Characters:</th><td class='userChoice'>"+ incText(isSpec) +"</td></tr>"
    + "<tr><th class='userOption'>Lower Case Letters:</th><td class='userChoice'>" + incText(isLower) + "</td><th class='userOption'>Upper Case Letters:</th><td class='userChoice'>"+ incText(isUpper) +"</td></tr>"
    );