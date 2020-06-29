// Calculation of grand total price
function grandTotalCalculation() {
    subTotal = 0;
    for( i=0; i<document.getElementsByClassName("sub-total").length; i++ ) {
        subTotal = subTotal + parseFloat(document.getElementsByClassName("sub-total")[i].childNodes[0].innerHTML.split("$")[1]);
    }

    document.getElementById("st").innerHTML = "$" + subTotal.toFixed(2);
    if(couponUsed) {
        grandTotal = (subTotal + 5) - 10;
    } else {
        grandTotal = subTotal + 5;
    }
    
    if(document.getElementsByClassName("one-whole-order").length === 0) {
        document.getElementById("gt").innerHTML = "$" + "0.00";
    } 
    else {
        document.getElementById("gt").innerHTML = "$" + grandTotal.toFixed(2);
    }
}