// Work carried out when an order is crossed
function cancelOrder(id) {
    document.getElementById(id).remove();

    if(document.getElementsByClassName("one-whole-order").length === 0) {
        document.getElementsByClassName("coupon")[0].style.display = "none"; //removes entering coupon code message
        document.getElementsByClassName("empty-order")[0].style.display = "block"; //displays that the add item list is empty
        document.getElementById("coup").innerHTML = ""; //removes the discounted price from coupon in payable amount section
        document.getElementsByClassName("coupon")[0].childNodes[5].childNodes[1].value = ""; //empty value in coupon input
        couponUsed = false;
    }

    grandTotalCalculation();
}

// Work carried out when the quantity of selected item is increased/decreased
function quantityControl(e, sign) {
    if(sign === "+") {
        e.target.parentElement.childNodes[1].innerHTML = 
            parseInt(e.target.parentElement.childNodes[1].innerHTML) + 1;
    }   
    else {
        if(parseInt(e.target.parentElement.childNodes[1].innerHTML) === 1) {
            return;
        }
        else {
            e.target.parentElement.childNodes[1].innerHTML = 
                parseInt(e.target.parentElement.childNodes[1].innerHTML) - 1;
        }
    }
    
    var newPrice = 
        parseFloat(originalPrice[e.target.parentElement.parentElement.parentElement.getAttribute("id")].split("$")[1]) * 
            e.target.parentElement.childNodes[1].innerHTML;

    e.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[0].innerHTML = 
        "$" + newPrice.toFixed(2);

    grandTotalCalculation();
}