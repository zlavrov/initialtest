let tg = window.Telegram.WebApp;

$('#usercard').append(`<p>${tg.initDataUnsafe.user.username}</p><p>${tg.initDataUnsafe.user.id}</p>`);

tg.sendData('apple');
