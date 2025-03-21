
    function filterAll() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            }            
        });
    }
    

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