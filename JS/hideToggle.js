
/*Function to hide lunch buffé info */

function hideToggle() {
    const toggle = document.querySelector(".Lunch-buffé-menyn");
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
}

