function done() {
    for(i=0; i<document.getElementsByClassName("selected").length; i++) {
        var selectedFoodObj = {};
        selectedFoodObj.name = document.getElementsByClassName("selected")[i].childNodes[3].innerHTML;
        selectedFoodObj.price = document.getElementsByClassName("selected")[i].childNodes[5].innerHTML;
        selectedFoodObj.foodImage = document.getElementsByClassName("selected")[i].childNodes[1].getAttribute("src");
        
        selectedFoodArr.push(selectedFoodObj);
    }

    selectedFoodArr.map((food) => {
        var row = document.createElement("div");
        row.setAttribute("class", "row container-fluid mx-0 p-0 one-whole-order");

        var idForitem = document.getElementsByClassName("one-whole-order").length;
        row.setAttribute("id", idForitem);

        // icon section
        var icon = document.createElement("div");
        icon.setAttribute("class", "col-1 p-0 food-icon");
        var image = document.createElement("img");
        image.setAttribute("src", food.foodImage);
        icon.appendChild(image);
        row.appendChild(icon);
        

        // name section
        var item  = document.createElement("div");
        item.setAttribute("class", "col-6 food-name");
        var foodName = document.createElement("h5");
        foodName.innerHTML = food.name;
        item.appendChild(foodName);

        var priceAndEdit = document.createElement("div");
        priceAndEdit.classList.add("price-edit");
        var priceSpan = document.createElement("span");
        priceSpan.setAttribute("class", "sub-title mr-3");
        priceSpan.innerHTML = food.price
        var edit = document.createElement("span");
        edit.classList.add("sub-title");
        edit.setAttribute("style", "color: black; text-decoration: underline;");
        edit.innerHTML = "Edit";
        priceAndEdit.appendChild(priceSpan);
        priceAndEdit.appendChild(edit);
        item.appendChild(priceAndEdit);
        row.appendChild(item);

        // quantity section
        var quantity = document.createElement("div");
        var quantityNumbers = document.createElement("div");
        quantityNumbers.classList.add("quantity-numbers");
        quantity.setAttribute("class", "col-2 p-0");
        var button1 = document.createElement("span");
        button1.innerHTML = "-";
        button1.setAttribute("onclick", "quantityControl(event, '-')");
        var button2 = document.createElement("span");
        button2.innerHTML = "+";
        button2.setAttribute("onclick", "quantityControl(event, '+')");
        var number = document.createElement("h5");
        number.innerHTML = "1";
        quantityNumbers.appendChild(button1);
        quantityNumbers.appendChild(number);
        quantityNumbers.appendChild(button2);
        var quantityText = document.createElement("p");
        quantityText.innerHTML = "Quantity";
        quantityText.classList.add("sub-title");
        quantity.appendChild(quantityNumbers);
        quantity.appendChild(quantityText);
        row.appendChild(quantity);

        //subtotal section
        originalPrice[idForitem] = food.price;
        var subtotal = document.createElement("div");
        subtotal.setAttribute("class", "col-2 p-0 sub-total");
        var price = document.createElement("h5");
        price.innerHTML = food.price;
        var priceText = document.createElement("p");
        priceText.innerHTML = "Subtotal";
        priceText.classList.add("sub-title");
        subtotal.appendChild(price);
        subtotal.appendChild(priceText);
        row.appendChild(subtotal);

        // cross section
        var cross = document.createElement("div");
        cross.setAttribute("class", "col-1 p-0 cross-sign");
        var i = document.createElement("i");
        i.setAttribute("class", "fas fa-times cross");
        i.setAttribute("id", idForitem);
        i.setAttribute("onclick", "cancelOrder(id)");
        cross.appendChild(i);
        row.appendChild(cross);
        
        //one whole order
        document.getElementById("listOfOrders").appendChild(row);
    })

    document.getElementsByClassName("empty-order")[0].style.display = "none";
    document.getElementsByClassName("coupon")[0].style.display = "flex";
    selectedFoodArr = [];
    document.getElementById("popups").style.display = "none";

    grandTotalCalculation();
}