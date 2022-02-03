function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    //Add the result display
    //check if input is valid
    if (principal <= 0)
    {
        //alert if input invalid
        alert("Enter a positive number");
        //clear results
        document.getElementById("result").innerHTML ="";
        //focus on input box
        document.getElementById("principal").focus();
        return false;
    }
    //update the result
    document.getElementById("result").innerHTML = 
    "If you deposit <mark>" + principal + 
    "</mark>,<br>at an interest rate of <mark>" + rate +
    "%</mark>.<br>You will receive an amount of <mark>" + interest + 
    "</mark>,<br>in the year <mark>" + year +"</mark>";
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        