let tg = window.Telegram.WebApp;

$('#usercard').append(`<p>${tg.initDataUnsafe.user.username}</p><p>${tg.initDataUnsafe.user.id}</p>`);

$('#savedata').on('click', function() {

    let data = {
        name: $('#nameid').val(),
        content: $('#contentid').val()
    }

    tg.sendData(JSON.stringify(data));
});
