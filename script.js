// ===============================
// BLUE CYBER LANDING PAGE JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Efek halaman saat pertama dibuka
    document.body.classList.add("page-loaded");


    // ===============================
    // EFEK TOMBOL
    // ===============================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Efek tekan
            this.style.transform = "scale(0.96)";

            setTimeout(() => {
                this.style.transform = "";
            }, 150);

        });

    });


    // ===============================
    // EFEK GLOW BANNER
    // ===============================

    const banner = document.querySelector(".banner");

    if (banner) {

        let glow = 0;
        let direction = 1;

        setInterval(function () {

            glow += direction * 0.5;

            if (glow >= 10) {
                direction = -1;
            }

            if (glow <= 0) {
                direction = 1;
            }

            banner.style.boxShadow =
                `0 0 ${10 + glow}px rgba(0, 140, 255, .8),
                 0 0 ${20 + glow}px rgba(0, 100, 255, .3),
                 inset 0 0 20px #000`;

        }, 50);

    }


    // ===============================
    // EFEK TOMBOL BERCAHAYA
    // ===============================

    buttons.forEach(function (button) {

        button.addEventListener("mouseenter", function () {

            this.style.filter = "brightness(1.15)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.filter = "brightness(1)";

        });

    });

});// =========================
// NAVIGASI BAWAH
// =========================

function setActive(element) {

    document.querySelectorAll(".bottom-item").forEach(function(item) {
        item.classList.remove("active");
    });

    element.classList.add("active");
}