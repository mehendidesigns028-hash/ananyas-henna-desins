// ==========================================
// ANANYA'S HENNA DESIGNS
// PREMIUM WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// SUPABASE CONNECTION
// ==========================================

const SUPABASE_URL =
    "https://tncyqdwrdcxywtxpcsaa.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_hKd5MwUzV0llyzApBVrLnA_XyJXYPHF";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// ==========================================
// MAIN WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {


    // ======================================
    // MOBILE MENU
    // ======================================

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );
        });


        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );
                });
            });
    }



    // ======================================
    // HERO CINEMATIC ENTRANCE
    // ======================================

    const hero =
        document.querySelector(".hero");

    if (hero) {

        const heroItems =
            hero.querySelectorAll(
                ".eyebrow, h1, .hero-text, .hero-buttons, .scroll-indicator"
            );

        heroItems.forEach((item, index) => {

            item.classList.add("hero-item");

            item.style.transitionDelay =
                `${index * 0.16}s`;
        });


        requestAnimationFrame(() => {

            setTimeout(() => {

                hero.classList.add(
                    "hero-loaded"
                );

            }, 150);

        });
    }



    // ======================================
    // HERO BACKGROUND SLIDESHOW
    // ======================================

    const heroBackgrounds =
        document.querySelectorAll(".hero-bg");

    if (heroBackgrounds.length > 0) {

        let current = 0;

        heroBackgrounds.forEach(
            (background, index) => {

                background.classList.toggle(
                    "active",
                    index === 0
                );
            }
        );


        if (heroBackgrounds.length > 1) {

            setInterval(() => {

                heroBackgrounds[current]
                    .classList.remove("active");

                current =
                    (current + 1) %
                    heroBackgrounds.length;

                heroBackgrounds[current]
                    .classList.add("active");

            }, 5000);
        }
    }



    new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    // Reset animation
                    entry.target.classList.remove("reveal-active");

                    // Force browser to restart animation
                    void entry.target.offsetWidth;

                    // Start animation
                    entry.target.classList.add("reveal-active");

                } else {

                    // Reset when element leaves screen
                    entry.target.classList.remove("reveal-active");
                }

            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -80px 0px"
        }
);
// ======================================
// PREMIUM SCROLL ANIMATIONS
// ======================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".about-image, " +
    ".about-text, " +
    ".gallery-grid, " +
    ".gallery-card, " +
    ".service-grid, " +
    ".service-card, " +
    ".booking-form, " +
    ".review-placeholder, " +
    ".review-box"
);


// Add animation class
revealElements.forEach((element, index) => {

    element.classList.add("premium-reveal");

    // Gallery stagger
    if (element.classList.contains("gallery-card")) {
        element.style.transitionDelay =
            `${(index % 3) * 0.14}s`;
    }

    // Services stagger
    if (element.classList.contains("service-card")) {
        element.style.transitionDelay =
            `${(index % 3) * 0.14}s`;
    }
});


// ======================================
// INTERSECTION OBSERVER
// ======================================

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Reset
                entry.target.classList.remove(
                    "reveal-active"
                );

                // Force animation restart
                void entry.target.offsetWidth;

                // Play animation
                entry.target.classList.add(
                    "reveal-active"
                );

            } else {

                // Reset when leaving screen
                entry.target.classList.remove(
                    "reveal-active"
                );
            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    }
);


// Start observing
revealElements.forEach(element => {
    revealObserver.observe(element);
});

    // ======================================
    // BOOKING CINEMATIC CURTAIN
    // ======================================

    const bookingForm =
        document.querySelector(
            ".booking-form"
        );

    if (bookingForm) {

        const bookingObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            bookingForm.classList.add(
                                "booking-open"
                            );

                        } else {

                            bookingForm.classList.remove(
                                "booking-open"
                            );
                        }

                    });

                },
                {
                    threshold: 0.18
                }
            );


        bookingObserver.observe(
            bookingForm
        );
    }



    // ======================================
    // SMOOTH PREMIUM PAGE TRANSITION
    // ======================================

    const bubbleContainer =
        document.querySelector(
            ".page-bubbles"
        );

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]:not([href="#"])'
        );


    if (bubbleContainer) {

        internalLinks.forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );

                    const target =
                        document.querySelector(
                            targetID
                        );

                    if (!target) return;

                    event.preventDefault();


                    bubbleContainer.classList.remove(
                        "bubble-active"
                    );

                    void bubbleContainer.offsetWidth;


                    bubbleContainer.classList.add(
                        "bubble-active"
                    );


                    setTimeout(() => {

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 180);


                    setTimeout(() => {

                        bubbleContainer.classList.remove(
                            "bubble-active"
                        );

                    }, 900);

                }
            );
        });
    }



    // ======================================
    // BOOKING → WHATSAPP
    // ======================================

    const bookingFormElement =
        document.getElementById(
            "bookingForm"
        );


    if (bookingFormElement) {

        bookingFormElement.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        .value.trim();


                const phone =
                    document
                        .getElementById("phone")
                        .value.trim();


                const service =
                    document
                        .getElementById("service")
                        .value;


                const date = document.getElementById("date").value;

const hour = document.getElementById("bookingHour").value;
const minute = document.getElementById("bookingMinute").value;
const ampm = document.getElementById("bookingAmPm").value;

const time = `${hour}:${minute} ${ampm}`;


                const message =
                    document
                        .getElementById("message")
                        ?.value.trim();


                if (
                    !name ||
                    !phone ||
                    !service ||
                    !date
                ) {

                    alert(
                        "Please fill all required fields."
                    );

                    return;
                }


                if (
                    !/^[6-9]\d{9}$/.test(phone)
                ) {

                    alert(
                        "Please enter a valid 10-digit WhatsApp number."
                    );

                    return;
                }


                const whatsappNumber =
                    "917849025753";


                const whatsappMessage =
`Hello Ananya's Henna Designs,

I would like to book a mehendi service.

Name: ${name}
WhatsApp: ${phone}
Service: ${service}
Preferred Date: ${date}
Additional Details: ${message || "None"}`;


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=` +
                    encodeURIComponent(
                        whatsappMessage
                    );


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );


                bookingFormElement.reset();

            }
        );
    }



    // ======================================
    // DATE PROTECTION
    // ======================================

    const dateInput =
        document.getElementById("date");


    if (dateInput) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        dateInput.min =
            `${year}-${month}-${day}`;
    }



    // ======================================
    // PHONE INPUT PROTECTION
    // ======================================

    const phoneInput =
        document.getElementById("phone");


    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            () => {

                phoneInput.value =
                    phoneInput.value
                        .replace(/\D/g, "")
                        .slice(0, 10);

            }
        );
    }



    // ======================================
    // IMAGE ERROR PROTECTION
    // ======================================

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.opacity = "0";

                }
            );

        });



    // ======================================
    // REDUCED MOTION
    // ======================================

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        document.documentElement
            .classList.add(
                "reduce-motion"
            );
    }



    // ======================================
    // PUBLIC REVIEW SUBMISSION
    // ======================================

    const reviewForm =
        document.getElementById(
            "reviewForm"
        );


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const reviewName =
                    document
                        .getElementById(
                            "reviewName"
                        )
                        ?.value.trim();


                const ratingValue =
                    document
                        .getElementById(
                            "rating"
                        )
                        ?.value;


                const reviewText =
                    document
                        .getElementById(
                            "reviewText"
                        )
                        ?.value.trim();


                const reviewPhoto =
                    document
                        .getElementById(
                            "reviewPhoto"
                        )
                        ?.files[0];


                if (
                    !reviewName ||
                    !ratingValue ||
                    !reviewText
                ) {

                    alert(
                        "Please fill all required review fields."
                    );

                    return;
                }


                const rating =
                    Number(ratingValue);


                if (
                    !rating ||
                    rating < 1 ||
                    rating > 5
                ) {

                    alert(
                        "Please select a valid rating."
                    );

                    return;
                }


                let photoURL = null;


                // PHOTO UPLOAD
                if (reviewPhoto) {

                    if (
                        !reviewPhoto.type
                            .startsWith("image/")
                    ) {

                        alert(
                            "Please select an image file."
                        );

                        return;
                    }


                    if (
                        reviewPhoto.size >
                        5 * 1024 * 1024
                    ) {

                        alert(
                            "Photo must be smaller than 5 MB."
                        );

                        return;
                    }


                    const extension =
                        reviewPhoto.name
                            .split(".")
                            .pop()
                            .toLowerCase();


                    const fileName =
                        `${Date.now()}-${Math.random()
                            .toString(36)
                            .substring(2)}.${extension}`;


                    const filePath =
                        `reviews/${fileName}`;


                    const { error: uploadError } =
                        await supabaseClient
                            .storage
                            .from(
                                "review-photos"
                            )
                            .upload(
                                filePath,
                                reviewPhoto,
                                {
                                    contentType:
                                        reviewPhoto.type,

                                    upsert: false
                                }
                            );


                    if (uploadError) {

                        console.error(
                            uploadError
                        );

                        alert(
                            "Photo upload failed. Please try again."
                        );

                        return;
                    }


                    const { data: publicData } =
                        supabaseClient
                            .storage
                            .from(
                                "review-photos"
                            )
                            .getPublicUrl(
                                filePath
                            );


                    photoURL =
                        publicData.publicUrl;
                }



                // SAVE REVIEW
                const { error } =
                    await supabaseClient
                        .from("reviews")
                        .insert([
                            {
                                name:
                                    reviewName,

                                rating:
                                    rating,

                                review:
                                    reviewText,

                                photo_url:
                                    photoURL,

                                approved:
                                    false
                            }
                        ]);


                if (error) {

                    console.error(
                        "Review submission error:",
                        error
                    );

                    alert(
                        "Review could not be submitted. Please try again."
                    );

                    return;
                }


                alert(
                    "Thank you! Your review has been submitted and will appear after approval."
                );


                reviewForm.reset();

            }
        );
    }



    // ======================================
    // LOAD APPROVED PUBLIC REVIEWS
    // ======================================

    const reviewList =
        document.querySelector(
            ".review-placeholder"
        );


    if (reviewList) {

        async function loadReviews() {

            const { data, error } =
                await supabaseClient
                    .from("reviews")
                    .select(
                        "name, rating, review, photo_url, created_at"
                    )
                    .eq(
                        "approved",
                        true
                    )
                    .order(
                        "created_at",
                        {
                            ascending: false
                        }
                    );


            if (error) {

                console.error(
                    "Reviews loading error:",
                    error
                );

                return;
            }


            if (
                !data ||
                data.length === 0
            ) {

                return;
            }


            reviewList.innerHTML = "";


            data.forEach(item => {

                const stars =
                    "★".repeat(item.rating) +
                    "☆".repeat(
                        5 - item.rating
                    );


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "public-review premium-reveal";


                card.innerHTML = `
                    <div class="quote-mark">“</div>

                    <div class="review-stars">
                        ${stars}
                    </div>

                    <p>${item.review}</p>

                    <span>— ${item.name}</span>

                    ${
                        item.photo_url
                            ? `
                                <img
                                    src="${item.photo_url}"
                                    alt="Customer review photo"
                                    class="review-photo"
                                >
                              `
                            : ""
                    }
                `;


                reviewList.appendChild(card);


                // Observe newly created review
                revealObserver.observe(card);

            });
        }


        loadReviews();
    }

});


// ==========================================
// EXTRA PREMIUM MOUSE MOVEMENT
// ==========================================

document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 769
        ) return;


        const glow =
            document.querySelector(
                ".hero-glow"
            );


        if (!glow) return;


        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 25;


        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 20;


        glow.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);