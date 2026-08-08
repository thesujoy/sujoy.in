/* =====================================================
   SUJOY EMAIL POOL
===================================================== */

const SUJOY_EMAILS = [
    "newton@sujoy.in",
    "heisenberg@sujoy.in",
    "planck@sujoy.in",
    "proton@sujoy.in",
    "helium@sujoy.in"
];


/* Pick one email for this page load */

const SUJOY_ACTIVE_EMAIL =
    SUJOY_EMAILS[
        Math.floor(
            Math.random() * SUJOY_EMAILS.length
        )
    ];


/* Apply email everywhere */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* visible email text */

        document
            .querySelectorAll("[data-sujoy-email]")
            .forEach(element => {

                element.textContent =
                    SUJOY_ACTIVE_EMAIL;

            });


        /* mailto links */

        document
            .querySelectorAll("[data-sujoy-mailto]")
            .forEach(element => {

                element.href =
                    "mailto:" + SUJOY_ACTIVE_EMAIL;

            });

    }
);