function collapseFixedNavbar() {
    var x = document.getElementById("fixed-navbar");
    if (x.className === "fixed-navbar stick-fixed") {
        x.className += " responsive";
    } else {
        x.className = "fixed-navbar stick-fixed";
    }
}
function closeFixedNavbar() {
    var x = document.getElementById("fixed-navbar");
    if (x.className === "fixed-navbar stick-fixed responsive") {
        x.className = "fixed-navbar stick-fixed";
    }
}