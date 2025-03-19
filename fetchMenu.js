
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
            li.textContent = appetizer.Food_item + "...........Pris: " + appetizer.Food_price + ". ";
            li.setAttribute("class", appetizer.Food_type);
            appetizerList.appendChild(li);
        });

        data.Maincourses.forEach(function(mainCourse) {
            let liTwo = document.createElement("li");
            liTwo.textContent = mainCourse.Food_item + "...........Pris: " + mainCourse.Food_price + ". ";
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