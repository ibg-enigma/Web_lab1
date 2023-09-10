function openOrCloseMenu(evt) {
    var menu = document.getElementById("Hidden");

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function openWindow(evt, contentType) {
    var btns = document.getElementsByClassName("page-navigation-button");
    for (i = 0; i < btns.length; i++) {
        var btn = btns.item(i);
        btn.classList.remove("bold-button");
    }

    var button = document.getElementById(contentType);
    button.classList.add("bold-button");
}