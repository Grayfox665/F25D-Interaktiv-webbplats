
    function toggleAll() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            }            
        });
    }
    

    function toggleVegan() {
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


    function toggleVegetarian() {
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

    function toggleMeat() {
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

    function togglePoultry() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";            
            if (toggle.classList.contains("Poultry")) {
            } else {
                toggle.style.display = "none";
            }            
        });

    }

    function togglePork() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
                toggle.style.display = "block";            
            if (toggle.classList.contains("Pork")) {
            } else {
                toggle.style.display = "none";
            }            
        });

    }