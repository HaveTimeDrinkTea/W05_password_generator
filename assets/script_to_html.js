// Display the finance report on webpage

function incText(isOption) {
    if (isOption) {
        return '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>';
    } else {
        return '<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>';
    };
};


document.getElementById("optionsChoices").innerHTML = 
    ("<tr><th>You have chosen the following password options:/th></tr>" 
    + "<tr><th>Desired Password Length:</th><td>" + pwdLen + "</td></tr>"
    + "<tr><th>Numbers:</th><td>" + incText(isNum) + "</td><th>Special Characters:</th><td>"+ incText(isSpec) +"</td></tr>"
    + "<tr><th>Lower Case Letters:</th><td>" + incText(isLower) + "</td><th>Special Characters:</th><td>"+ incText(isUpper) +"</td></tr>"
    );