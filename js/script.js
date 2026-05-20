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

    // Carousel setup
    const projects = [
        {
            title: "Homeliness",
            desc: `A magazine project By Marcel van Ranst. Combining photography Typography and printed Lay-out in an experimental Art-book. An academical work made During our studies at LUCA School of Arts.`,
            img: "assets/images/homeliness-collage.jpg",
            link: "#"
        },
        {
            title: "Bar Coda merch",
            desc: `Bar Coda is a bar in ghent of which we had the honour to brand. The logo is a visual representation of the coda sign from music notation, and the type is custom made! Last year we created merch-prints for the bar, which we printed with a local screenprinter.
            
            The shirts have a line of music notes, which are actually the oping notes of rick roll's 'never gonna give you u'. The idea was to trigger the many musicians in the bar to find out.`,
            img: "assets/images/barcoda-collage.jpg",
            link: "#"
        },
        

        {
            title: "I am not an object",
            desc: `This project, by Yorrik Oyen and Eelke Hinnekens, was a special edition magazine in our last year at LUCA School of Arts. The project was about the objectification of homeless people. I wanted to show the world that homeless people are not just objects, but human beings with feelings and stories. 

I used unconventional printing techniques and typography to create a powerful message about the importance of treating homeless people with dignity and respect.`,
            img: "assets/images/iamnotanobject-collage.jpg",
            link: "#"
        },
        {
            title: "Twinning fontface",
            desc: `A custom font by Yorrik Oyen designed for a project about twinning. It is based on the idea of two identical shapes that are connected to each other. The shapes are inspired by the concept of twinning, which is the phenomenon of two people being born at the same time and sharing a special bond. 
        
The font is designed to be used in a variety of contexts, such as headlines, logos, and body text. It is a unique and eye-catching font that can add a touch of personality to any design project.`,
            img: "assets/images/twinning-collage.jpg",
            link: "#"
        },
        {
            title: "ANIPFY",
            desc: `ANIPFY or And now i pray for you, is Marcel's graduation project. It's an alternative magazine / LP cover about the music and artistic approach of Westside Gunn, a rapper from Buffalo New York.
        
It is a tribute to Westside's unique style and his influence on the hip-hop scene. As well as a tribute to the influence hi-hop has had on Marcel's work and life. 
        
The project combines photography, typography, and layout design to create a visually stunning magazine.`,
            img: "assets/images/anipfy-collage.jpg",
            link: "#"
        },
        {
            title: "Posterprikkel",
            desc: `Posterprikkel is an independent poster project where Yorrik would doodle distracted, about his distractions. These ended up to be very distorted and abstract images, containing a lot of information, but not clearly telling a story. 
            
            This project was a way for Yorrik to explore his own mind and the way he processes information. It was also a way for him to express his feelings and emotions in a creative way.
        
The project combines photography, typography, and layout design to create a visually stunning magazine.`,
            img: "assets/images/PosterPrikkels-collage.jpg",
            link: "#"
        },

                {
            title: "woodstock font",
            desc: `for an assignment in typedesign at LUCA, Marcel created a custom font for the woodstock festival. Under a strong sense of 'what if' scenario. 
            
            what if the woodstock festival was still going on, but in 2023? What would the font look like? Marcel wanted to create a font that was inspired by the original woodstock font, but with a modern twist. The font is designed to be used in a variety of contexts, such as headlines, logos, and body text.`,
            img: "assets/images/woodstock-collage.jpg",
            link: "#"
        },


    ];

    let currentIndex = 0;
    const titleEl = document.getElementById('work-title');
    const descEl = document.getElementById('work-content');
    const imgEl = document.getElementById('work-image');
    const linkEl = document.getElementById('work-link');

    // --- PASTE THIS NEW LIGHTBOX LOGIC HERE ---
    function initLightbox() {
        const workImage = document.getElementById("work-image");
        workImage.onclick = function() {
            document.getElementById("modal").style.display = "flex";
            document.getElementById("fullImage").src = this.src;
        };
    }
    
// --- LIGHTBOX LOGIC ---
    function initLightbox() {
        const workImage = document.getElementById("work-image");
        // We ensure we don't add the same listener twice
        workImage.onclick = function() {
            document.getElementById("modal").classList.add("is-visible");
            document.getElementById("fullImage").src = this.src;
        };
    }

    // Call it once on load
    initLightbox();

    window.closeModal = function() {
        document.getElementById("modal").classList.remove("is-visible");
    };

    // 4. Update function
    function updateWork() {
        const p = projects[currentIndex];
        const elements = [titleEl, descEl.querySelector('p'), imgEl];
        
        elements.forEach(el => el.classList.remove('slide-in'));
        
        setTimeout(() => {
            titleEl.textContent = p.title;
            descEl.querySelector('p').textContent = p.desc;
            imgEl.src = p.img;
            linkEl.href = p.link;
            
            // --- SAFETY NET ---
            // This ensures every new image gets the CSS class required for hover/zoom
            imgEl.classList.add("wrk-image"); 
            
            elements.forEach(el => el.classList.add('slide-in'));
            
            // Re-initialize lightbox for the new image
            initLightbox();
        }, 50);
    }

    document.getElementById('btn-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateWork();
    });

    document.getElementById('btn-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateWork();
    });
});
