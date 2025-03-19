


    const allButton = document.getElementById("all-btn")
    const veganButton = document.getElementById("vegan-btn")
    const vegetarianButton = document.getElementById("vegetarian-btn")
    const meatButton = document.getElementById("meat-btn")
    const poultryButton = document.getElementById("poultry-btn")


    allButton.addEventListener("click", toggleAll)

    veganButton.addEventListener("click", toggleVegan)

    vegetarianButton.addEventListener("click", toggleVegetarian)

    meatButton.addEventListener("click", toggleMeat)

    poultryButton.addEventListener("click", togglePoultry)

    function toggleAll() {
        const toggle = document.querySelectorAll(".Food");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            } else {
                toggle.style.display = "none";
            }            
        });
    }
    

    function toggleVegan() {
        const toggle = document.querySelectorAll(".Vegan");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            } else {
                toggle.style.display = "none";
            }        
        });

    }


    function toggleVegetarian() {
        const toggle = document.querySelectorAll(".Vegetarian");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            } else {
                toggle.style.display = "none";
            }            
        });

    }

    function toggleMeat() {
        const toggle = document.querySelectorAll(".Meat");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            } else {
                toggle.style.display = "none";
            }            
        });

    }

    function togglePoultry() {
        const toggle = document.querySelectorAll(".Poultry");
        toggle.forEach(toggle => {
            if (toggle.style.display === "none") {
                toggle.style.display = "block";
            } else {
                toggle.style.display = "none";
            }            
        });

    }