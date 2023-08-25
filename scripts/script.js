let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let view_1 = document.getElementById("view-1")
let view_2 = document.getElementById("view-2")
let view_3 = document.getElementById("view-3")
let view_4 = document.getElementById("view-4")
let view_5 = document.getElementById("view-5")
let view_6 = document.getElementById("view-6")
let view_7 = document.getElementById("view-7")
let view_8 = document.getElementById("view-8")
let view_9 = document.getElementById("view-9")

view_1.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 1");
        item = "1";
        tg.MainButton.show();
    }
});

view_2.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 2");
        item = "2";
        tg.MainButton.show();
    }
});

view_3.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 3");
        item = "3";
        tg.MainButton.show();
    }
});

view_4.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 4");
        item = "4";
        tg.MainButton.show();
    }
});

view_5.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 5");
        item = "5";
        tg.MainButton.show();
    }
});

view_6.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 6");
        item = "6";
        tg.MainButton.show();
    }
});

view_7.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 7");
        item = "7";
        tg.MainButton.show();
    }
});

view_8.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 8");
        item = "8";
        tg.MainButton.show();
    }
});

view_9.addEventListener("click", function() {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("You choice product 9");
        item = "9";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUndafe.user.first_name} ${tg.initDataUndafe.user.last_name}`;

usercard.appendChild(p);