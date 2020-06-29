// To show empty added items in the beginning
var emptyDiv =  document.createElement("div");
var span = document.createElement("span");
var orderNumbers = document.getElementById("listOfOrders").childElementCount;

if(orderNumbers === 0) {
    span.innerHTML = "You have not added any items";
    emptyDiv.appendChild(span);
    emptyDiv.classList.add("empty-order");
    document.getElementById("listOfOrders").appendChild(emptyDiv);
}


// Dropdown for previously ordered items
var task = "down";
function accordionClick() {
    if(task === "down") {
        document.getElementById("accorI").className = "fas fa-chevron-up";
        task = "up";
    }
    else {
        document.getElementById("accorI").className = "fas fa-chevron-down";
        task = "down";
    }
}

// Show/hide side menu for smaller screens
function menuToggle() {
    document.getElementById("menu").classList.toggle("show");
}