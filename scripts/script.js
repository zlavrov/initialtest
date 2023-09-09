let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let nameid = '';
let contentid = '';

$('#usercard').append(`<p>${tg.initDataUnsafe.user.username}</p><p>${tg.initDataUnsafe.user.id}</p>`);

$('#savedata').on('click', function() {

    nameid = $('#nameid').val();
    contentid = $('#contentid').val();

    if (tg.MainButton.isVisible){

        tg.MainButton.hide()
    } else {
        
        tg.MainButton.setText(`Name: ${nameid}, Content: ${contentid}`);
        tg.MainButton.show()
    }

    Telegram.WebApp.onEvent('mainButtonClicked', function() {
        let data = {
            name: nameid,
            content: contentid
        }
        tg.sendData(data);
    });

});

