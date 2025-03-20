
function fetchMenu() {

    fetch("Foodmenu.json")
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
            li.textContent = appetizer.Food_item + "...(Ingredienser kan påverka dessa allergier: " + appetizer.Food_allergens + ").....Alternativ Specialkost: "+ appetizer.Special_diet + "........Pris: " + appetizer.Food_price + "kr. ";
            li.setAttribute("class", appetizer.Food_type);
            appetizerList.appendChild(li);
        });

        data.Maincourses.forEach(function(mainCourse) {
            let liTwo = document.createElement("li");
            liTwo.textContent = mainCourse.Food_item + "...(Ingredienser kan påverka dessa allergier: " + mainCourse.Food_allergens + ").....Alternativ Specialkost: "+ mainCourse.Special_diet + "...........Pris: " + mainCourse.Food_price + "kr. ";
            liTwo.setAttribute("class", mainCourse.Food_type);
            mainCourseList.appendChild(liTwo);
        });

        data.Desserts.forEach(function(dessert) {
            let liThree = document.createElement("li");
            liThree.textContent = dessert.Food_item + "...........Pris: " + dessert.Food_price + ". ";
            liThree.setAttribute("class", dessert.Food_type);
            dessertList.appendChild(liThree);
        })
    })
    .catch(error =>{
        console.error("Fel vid hämtning av JSON:", error);        
    });

}


fetchMenu();