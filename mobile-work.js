/**
 * Mobile Work Section Logic
 */

const myPortfolio = [
    {
        title: "HOMELINES",
        description: "A magazine project By Marcel van Ranst. Combining photography Typography and printed Lay-out in an experimental Art-book. An academical work made During our studies at LUCA School of Arts.",
        tags: ["Marcel VR.", "Book Design"],
        images: [
            "webp-im/homeliness_1_square.webp",
            "webp-im/homeliness_2_square.webp",
            "webp-im/homeliness_3_square.webp",
            "webp-im/homeliness_4_square.webp",
            "webp-im/homeliness_5_square.webp",
        ]
    },
    {
        title: "POSTER PRIKKELS",
        description: "This project was a way for Yorrik to explore his own mind and the way he processes information. ",
        tags: ["Yorrik O.", "Poster Series"],
        images: [
            "webp-im/posterprikkel_3.webp",
            "webp-im/posterprikkel_2.webp",
            "webp-im/posterprikkel_4.webp",
        ]
    },
    {
        title: "BAR CODA",
        description: "Bar Coda is a bar in ghent of which we had the honour to brand. The logo is a visual representation of the coda sign from music notation, and the type is custom made! Last year we created merch-prints for the bar!",
        tags: ["MAYO Project", "Branding / Merch"],
        images: [
            "webp-im/coda_2.webp",
            "webp-im/coda_3.webp",
        ]
    },
    {
        title: "I AM NOT AN OBJECT",
        description: "I used unconventional printing techniques and typography to create a powerful message about the importance of treating homeless people with dignity and respect.",
        tags: ["Yorrik O.", "Magazine"],
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
        ]
    },
    {
        title: "Twinning",
        description: "The font is designed to be used in a variety of contexts, such as headlines, logos, and body text. It is a unique and eye-catching font that can add a touch of personality to any design project.",
        tags: ["Yorrik O.", "Type Design"],
        images: [
            "webp-im/twinning_1.webp",
            "webp-im/twinning_2.webp",
            "webp-im/twinning_3.webp",
            "webp-im/twinning_4.webp",
            "webp-im/twinning_5.webp",
            "webp-im/twinning_6.webp",


        ]
    },
    {
        title: "ANIPFY",
        description:"ANIPFY or And now i pray for you, is Marcel's graduation project. It's an alternative magazine / LP cover about the music and artistic approach of Westside Gunn, a rapper from Buffalo New York.",
        tags: ["Marcel VR", "Book / LP-cover"],
        images: [
            "webp-im/atipfy_1.webp",
            "webp-im/atipfy_2.webp",
            "webp-im/atipfy_3.webp",
            "webp-im/atipfy_4.webp",
            "webp-im/atipfy_5.webp",
            "webp-im/atipfy_6.webp",
        ]
    }
];

let currentProjectIndex = 0;
const carousel = document.getElementById('mobile-work-carousel');

function loadProject(index) {
    const project = myPortfolio[index];
    const titleElement = document.querySelector('.mobile-work-title');
    const descElement = document.querySelector('.mobile-work-description');
    const tagsContainer = document.querySelector('.mobile-work-tags'); // Target the tag container
    const counterElement = document.getElementById('project-counter');
    
    if (!carousel) return;

    // Update Text
    if (titleElement) titleElement.textContent = project.title;
    if (descElement) descElement.textContent = project.description;
    if (counterElement) counterElement.textContent = (index + 1) + " / " + myPortfolio.length;
    
    // Clear and Fill Images
    carousel.innerHTML = '';
    project.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'mobile-work-image';
        img.alt = project.title;
        carousel.appendChild(img);
    });

    // Refresh Tags Dynamically
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        project.tags.forEach(tagText => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tagText;
            tagsContainer.appendChild(span);
        });
    }
    
    carousel.scrollLeft = 0;
    currentProjectIndex = index;
}

// Swipe detection logic
carousel.addEventListener('scroll', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    // We add a "buffer" threshold (e.g., 50px) to prevent accidental switching
    const threshold = 50; 
    
    // 1. Next Project (Scroll Right)
    // Only switch if the user has scrolled past the end by at least the threshold
    if (carousel.scrollLeft >= maxScroll + threshold && !carousel.dataset.isSwitching) {
        carousel.dataset.isSwitching = "true";
        currentProjectIndex = (currentProjectIndex + 1) % myPortfolio.length;
        loadProject(currentProjectIndex);
        
        // Reset the "isSwitching" flag after 1 second
        setTimeout(() => { delete carousel.dataset.isSwitching }, 1000);
    }
    
    // 2. Previous Project (Scroll Left)
    // Only switch if the user has scrolled past the start by at least the threshold
    if (carousel.scrollLeft <= -threshold && !carousel.dataset.isSwitching) {
        carousel.dataset.isSwitching = "true";
        currentProjectIndex = (currentProjectIndex - 1 + myPortfolio.length) % myPortfolio.length;
        loadProject(currentProjectIndex);
        
        // Reset the "isSwitching" flag after 1 second
        setTimeout(() => { delete carousel.dataset.isSwitching }, 1000);
    }
});

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    loadProject(0);
});