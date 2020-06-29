// Coupon handling

function handleCoupon(e) {
    if(e.target.value.length === 7) {
        document.getElementById("coup").innerHTML = "- $10.00";
        document.getElementById("err").classList.add("hide");
        couponUsed = true;
    } 
    else {
        document.getElementById("coup").innerHTML = "";
        document.getElementById("err").classList.remove("hide");
        couponUsed = false;
    }

    grandTotalCalculation();
}