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
        window.location.href = "http://localhost:3000/";
    });
});

function downloadCV() {
    window.location.href = 'http://localhost:3000/downloadcv';
};

function hireme() {
    window.location.href = "http://localhost:3000/hireme";
};
