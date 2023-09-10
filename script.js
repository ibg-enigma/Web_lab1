function openOrCloseMenu(evt) {
    var menu = document.getElementById("Hidden");

    if (menu.classList.contains("hidden-list")) {
        menu.classList.remove("hidden-list");
    } else {
        menu.classList.add("hidden-list");
    }
}

function openWindow(evt, contentType) {
    var btns = document.getElementsByClassName("page-navigation-button");
    for (var i = 0; i < btns.length; i++) {
        var btn = btns.item(i);
        btn.classList.remove("bold-button");
    }

    evt.currentTarget.classList.add("bold-button");
    
    var info_items = document.getElementsByClassName("information-item");
    for (var i = 0; i < info_items.length; i++) {
        info_items[i].style.display = "none";
    }

    var content = document.getElementsByClassName(contentType);
    if (content.length == 0) return;

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "block";
    }
}