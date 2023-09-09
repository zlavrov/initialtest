let tg = window.Telegram.WebApp;
let nameid = '';
let contentid = '';

$('#usercard').append(`<p>${tg.initDataUnsafe.user.username}</p><p>${tg.initDataUnsafe.user.id}</p>`);

$('#savedata').on('click', function() {

    nameid = $('#nameid').val();
    contentid = $('#contentid').val();
});

Telegram.WebApp.onEvent('mainButtonClicked', function() {

    let data = {
        name: nameid,
        content: contentid
    }

    tg.sendData(JSON.stringify(data));
});
