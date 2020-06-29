// Opens popup after clicking add item
function openFoodPopup(todo) {
    if(todo === "open") {
        var selected = document.getElementsByClassName("selected");
        
        while (selected.length)
            selected[0].className = selected[0].className.replace(/\bselected\b/g, "");
        
        document.getElementById("popups").style.display = "flex";
    }else{
        selectedFoodArr = [];
        document.getElementById("popups").style.display = "none";
    }
}

// Toggles selection of food item in popup
function foodItemSelected(id) {
    document.getElementById(id).classList.toggle("selected");
}