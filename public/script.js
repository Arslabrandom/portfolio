const homebtn = document.querySelectorAll('.red-home');
const funcBtns = document.querySelectorAll('.functionbtn');

Array.from(funcBtns, (btn) => {
    btn.addEventListener('click', () => {
        if (btn.value == 'dwnldcd') {
            downloadCV();
        };
        if (btn.value == 'hireme') {
            hireme();
        };
    });
});

Array.from(homebtn, (btn) => {
    btn.addEventListener('click', () => {
        window.location.href = "/";
    });
});

function downloadCV() {
    window.location.href = '/downloadcv';
};

function hireme() {
    window.location.href = "/hireme";
};
