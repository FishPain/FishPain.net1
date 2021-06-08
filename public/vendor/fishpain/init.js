NProgress.configure({
    trickle: true,
    easing: 'ease', 
    speed: 350
});

$(document).on('turbolinks:click', function () {
    NProgress.start();
});

$(document).on('turbolinks:load', function () {
    NProgress.done();
});

$(document).on('ready', function () {
    $(window).on('load', function () {
        NProgress.done();
        Turbolinks.start()
    });
});
console.log("")
console.log("%cIf you see this, it's most likely that you know what you are doing.", 'font-size: 24px; font-weight: bold; font-family: IBM Plex Sans; color: black;');
console.log("%cBut there's nothing to see here, so go away.\n ヘ(゜Д、゜)ノ", 'font-size: 24px; font-family: IBM Plex Sans; font-weight: regular; color: black;');
console.log("")