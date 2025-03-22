
function fetchMenu() {

    fetch("/Json/Foodmenu.json")
    .then(response =>{

        return response.json();
    })
    .then(data => {


        let appetizerList = document.getElementById("Appetizer-list");
        appetizerList.innerHTML = "";

        let mainCourseList = document.getElementById("Main-course-list");
        mainCourseList.innerHTML = "";

        let dessertList = document.getElementById("Dessert-list");
        dessertList.innerHTML = "";

        data.appetizers.forEach(function(appetizer) {
            let li = document.createElement("li");
            let hr = document.createElement("hr");
            li.textContent = appetizer.Food_item +"("+ appetizer.Food_description +")...(Ingredienser kan påverka dessa allergier: " + appetizer.Food_allergens + ").....Alternativ Specialkost: "+ appetizer.Special_diet + "........Pris: " + appetizer.Food_price + "kr. ";
            li.setAttribute("class", appetizer.Food_type);
            hr.setAttribute("class", appetizer.Food_type);
            appetizerList.appendChild(li);
            appetizerList.appendChild(hr);
        });

        data.Maincourses.forEach(function(mainCourse) {
            let liTwo = document.createElement("li");
            let hrTwo = document.createElement("hr");
            liTwo.textContent = mainCourse.Food_item +"("+ mainCourse.Food_description + ")...(Ingredienser kan påverka dessa allergier: " + mainCourse.Food_allergens + ").....Alternativ Specialkost: "+ mainCourse.Special_diet + "........Pris: " + mainCourse.Food_price + "kr. ";
            liTwo.setAttribute("class", mainCourse.Food_type);
            hrTwo.setAttribute("class", mainCourse.Food_type);
            mainCourseList.appendChild(liTwo);
            mainCourseList.appendChild(hrTwo);
        
        });

        data.Desserts.forEach(function(dessert) {
            let liThree = document.createElement("li");
            let hrThree = document.createElement("hr");
            liThree.textContent = dessert.Food_item +"("+ dessert.Food_description + ")...(Ingredienser kan påverka dessa allergier: " + dessert.Food_allergens + ").....Alternativ Specialkost: "+ dessert.Special_diet + "........Pris: " + dessert.Food_price + ". ";
            liThree.setAttribute("class", dessert.Food_type);
            hrThree.setAttribute("class", dessert.Food_type);
            dessertList.appendChild(liThree);
            dessertList.appendChild(hrThree);
            
        })
    })
    .catch(error =>{
        console.error("Fel vid hämtning av JSON:", error);        
    });

}


fetchMenu();