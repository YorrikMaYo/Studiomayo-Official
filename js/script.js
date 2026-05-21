// A. THIS PART IS THE REVEAL ANIMATION!!!

// 1. Setup the Observer
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -5% 0px",
        threshold: 0
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.addEventListener("DOMContentLoaded", () => {
        // Reveal Observer setup
        const elementsToReveal = document.querySelectorAll(".reveal");
        elementsToReveal.forEach(el => revealObserver.observe(el));


// A. END OF REVEAL ANIMATION




// B. THIS PART IS THE CAROUSEL
    // Carousel setup
    const projects = [
        {
            title: "Homeliness",
            desc: `A magazine project By Marcel van Ranst. Combining photography Typography and printed Lay-out in an experimental Art-book. An academical work made During our studies at LUCA School of Arts.`,
            tags: ["Marcel VR.", "Book Design", "LUCA"],
            images: [
                "webp-im/homeliness_1_square.webp",
                "webp-im/homeliness_2_square.webp",
                "webp-im/homeliness_3_square.webp",
                "webp-im/homeliness_4_square.webp",
                "webp-im/homeliness_5_square.webp"
            ],
            link: "#"
        },
        {
            title: "Bar Coda merch",
            desc: `Bar Coda is a bar in ghent of which we had the honour to brand. The logo is a visual representation of the coda sign from music notation, and the type is custom made! Last year we created merch-prints for the bar, which we printed with a local screenprinter.
            
            The shirts have a line of music notes, which are actually the oping notes of rick roll's 'never gonna give you up'. The idea was to trigger the many musicians in the bar to find out.`,
            tags: ["MaYo", "Branding", "Commercial"],
            images: [
            "webp-im/coda_2.webp",
            "webp-im/coda_3.webp",
        ],
            link: "#"
        },
        {
            title: "I am not an object",
            desc: `This project, by Yorrik Oyen and Eelke Hinnekens, was a special edition magazine in our last year at LUCA School of Arts. The project was about the objectification of homeless people. I wanted to show the world that homeless people are not just objects, but human beings with feelings and stories. 

            I used unconventional printing techniques and typography to create a powerful message about the importance of treating homeless people with dignity and respect.`,
            tags: ["Yorrik O.", "Editorial", "LUCA"],
            images: [
            "assets/images/IAMNOTANOBJECT3.jpg",
            "assets/images/IAMNOTANOBJECT5.jpg",
            "assets/images/IAMNOTANOBJECT11.jpg",
            "assets/images/IAMNOTANOBJECT12.jpg",
            "assets/images/IAMNOTANOBJECT16.jpg",
            "assets/images/IAMNOTANOBJECT19.jpg",
            "assets/images/IAMNOTANOBJECT20.jpg",
            "assets/images/IAMNOTANOBJECT22.jpg",
            "assets/images/IAMNOTANOBJECT24.jpg"
            ],
            link: "#"
        },
        {
            title: "Twinning fontface",
            desc: `A custom font by Yorrik Oyen designed for a project about twinning. It is based on the idea of two identical shapes that are connected to each other. The shapes are inspired by the concept of twinning, which is the phenomenon of two people being born at the same time and sharing a special bond. 
        
            The font is designed to be used in a variety of contexts, such as headlines, logos, and body text. It is a unique and eye-catching font that can add a touch of personality to any design project.`,
            tags: ["Marcel VR.", "Type Design", "LUCA"],
            images: [
                "webp-im/twinning_1.webp",
                "webp-im/twinning_2.webp",
                "webp-im/twinning_3.webp",
                "webp-im/twinning_4.webp",
                "webp-im/twinning_5.webp",
                "webp-im/twinning_6.webp",
            ],
            link: "#"
        },
        {
            title: "ANIPFY",
            desc: `ANIPFY or And now i pray for you, is Marcel's graduation project. It's an alternative magazine / LP cover about the music and artistic approach of Westside Gunn, a rapper from Buffalo New York.
        
                    It is a tribute to Westside's unique style and his influence on the hip-hop scene. As well as a tribute to the influence hip-hop has had on Marcel's work and life. 
        
                    The project combines photography, typography, and layout design to create a visually stunning magazine.`,
            tags: ["Marcel VR.", "Editorial", "LUCA"],
            images: [
            "webp-im/atipfy_1.webp",
            "webp-im/atipfy_2.webp",
            "webp-im/atipfy_3.webp",
            "webp-im/atipfy_4.webp",
            "webp-im/atipfy_5.webp",
            "webp-im/atipfy_6.webp",
        ],
            link: "#"
        },
        {
            title: "Posterprikkel",
            desc: `Posterprikkel is an independent poster project where Yorrik would doodle distracted, about his distractions. These ended up to be very distorted and abstract images, containing a lot of information, but not clearly telling a story. 
            
            This project was a way for Yorrik to explore his own mind and the way he processes information. It was also a way for him to express his feelings and emotions in a creative way.
        
            The project combines photography, typography, and layout design to create a visually stunning magazine.`,
            tags: ["Yorrik O.", "Poster series", "Personal"],
            images: [
            "webp-im/posterprikkel_3.webp",
            "webp-im/posterprikkel_2.webp",
            "webp-im/posterprikkel_4.webp",
        ],
            link: "#"
        },

                {
            title: "Woodstock font",
            desc: `For an assignment in typedesign at LUCA, Marcel created a custom font for the woodstock festival. Under a strong sense of 'what if' scenario. 
            
            What if the woodstock festival was still going on, but in 2023? What would the font look like? Marcel wanted to create a font that was inspired by the original woodstock font, but with a modern twist. The font is designed to be used in a variety of contexts, such as headlines, logos, and body text.`,
            tags: ["Marcel VR.", "Type Design", "LUCA"],
            images: [
            "webp-im/woodstock_typo_2_square.webp",
            "webp-im/woodstock_typo_3_square.webp",
            "webp-im/woodstock_typo_4.webp",
            
        ],
            link: "#"
        },


    ];

    let currentIndex = 0;
    const titleEl = document.getElementById('work-title');
    const descEl = document.getElementById('work-content');
    const carouselEl = document.getElementById('work-carousel'); // Changed from imgEl
    const linkEl = document.getElementById('work-link');

    // --- LIGHTBOX LOGIC ---
    window.closeModal = function() {
        document.getElementById("modal").classList.remove("is-visible");
    };

    function openLightbox(src) {
        document.getElementById("modal").classList.add("is-visible");
        document.getElementById("fullImage").src = src;
    }

    // 4. Update function
function updateWork() {
    const p = projects[currentIndex];
    const elements = [titleEl, descEl.querySelector('p'), carouselEl];
    const tagContainer = document.getElementById('work-tags'); // Target the container
    
    elements.forEach(el => el.classList.remove('slide-in'));
    tagContainer.classList.remove('slide-in'); // Also animate tags
    
    setTimeout(() => {
        titleEl.textContent = p.title;
        descEl.querySelector('p').textContent = p.desc;
        linkEl.href = p.link;
        
        // --- NEW: Inject Tags ---
        tagContainer.innerHTML = ''; // Clear previous tags
        if (p.tags) {
            p.tags.forEach(tagText => {
                const span = document.createElement('span');
                span.className = 'tag'; 
                span.textContent = tagText;
                tagContainer.appendChild(span);
            });
        }
        
        // --- Image Carousel Logic ---
        carouselEl.innerHTML = ''; 
        p.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'wrk-image';
            img.onclick = () => {
                document.getElementById("modal").classList.add("is-visible");
                document.getElementById("fullImage").src = src;
            };
            carouselEl.appendChild(img);
        });
        
        // Animate in
        elements.forEach(el => el.classList.add('slide-in'));
        tagContainer.classList.add('slide-in');
    }, 50);
}

    // Initialize first project
    updateWork();

    document.getElementById('btn-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateWork();
    });

    document.getElementById('btn-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateWork();
    });
});

