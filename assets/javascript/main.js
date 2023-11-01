
var isModalOpen = false;

function show() {
    if (isModalOpen) {
        close();
    } else {
        open();
    }
    isModalOpen = !isModalOpen;
}

function open() {
    $('#modal-start').css("bottom", "75px")
    $('.bar').addClass("bar-show")
}


function close() {
    $('#modal-start').css("bottom", "-1000px")
    $('.bar').removeClass("bar-show")
}