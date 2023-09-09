let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText("Changed Text1");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});


let btn = document.getElementById("savedata");
btn.addEventListener('click', function(){

 tg.MainButton.show();
});


Telegram.WebApp.onEvent('mainButtonClicked', function(){
   tg.sendData('cherrys'); 

});
