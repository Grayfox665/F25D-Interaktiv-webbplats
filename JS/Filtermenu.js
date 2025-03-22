
/*Filter function to show all food */
    function filterAll() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            }            
        });
    }
    
/*Filter function to show all vegan food */
    function filterVegan() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle  => {
                toggle.style.display = "block";
            if (toggle.classList.contains("Vegan")) {
                return;
            } else {
                toggle.style.display = "none";
            }
        }); 

    }

/*Filter function to show all vegetarian food */
    function filterVegetarian() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";            
            if (toggle.classList.contains("Vegetarian")) {
                return;
            } else {
                toggle.style.display = "none";
            }            
        });

    }

/*filter function to show all meat food */
    function filterMeat() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";
            if (toggle.classList.contains("Meat")) {
                return;
            } else {
                toggle.style.display = "none";
            }            
        });

    }

/*Filter function to show all poultry food */
    function filterPoultry() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";            
            if (toggle.classList.contains("Poultry")) {
            } else {
                toggle.style.display = "none";
            }            
        });

    }

/*Filter function to show all pork food */
    function filterPork() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";            
            if (toggle.classList.contains("Pork")) {
            } else {
                toggle.style.display = "none";
            }            
        });

    }