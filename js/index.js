document.addEventListener('DOMContentLoaded', function() {
    // Get all select elements
    const selectElements = document.querySelectorAll('.search-div-select');
    
    selectElements.forEach((select) => {
        // Find the corresponding caret icon (next sibling span)
        const caretIcon = select.nextElementSibling;
        
        // Track if dropdown is open
        let isOpen = false;
        
        // When select is clicked
        select.addEventListener('mousedown', function() {
            isOpen = !isOpen;
            toggleCaretIcon(caretIcon, isOpen);
        });
        
        // When select loses focus (dropdown closes)
        select.addEventListener('blur', function() {
            isOpen = false;
            toggleCaretIcon(caretIcon, isOpen);
        });
        
        // When an option is selected
        select.addEventListener('change', function() {
            isOpen = false;
            toggleCaretIcon(caretIcon, isOpen);
        });
    });
    
    function toggleCaretIcon(icon, isOpen) {
        if (isOpen) {
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        } else {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
    }
});


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress-bar').style.height = scrollPercent + "%";
});


    const cards = [
        {
            img: "./Pictures/Business Visa.png",
            heading: "BUSINESS VISA",
            detail: "Whether to attend a Business Meeting or to participate in an International Exhibition, We ensure you meet all requirements."
        },
        {
            img: "./Pictures/Tourist Visa.png",
            heading: "TOURIST VISA",
            detail: "Ready to explore new Destinations? Let us handle the paper work and logistics of securing your tourist visa so you can focus on creating unforgettable travel memories."
        },
        {
            img: "./Pictures/family Friend Visit post.jpg",
            heading: "Family/Friend Visit",
            detail: "Reuniting with family members is Priceless. We will assist You in obtaining the necessary visa for your family or friend’s visit, making the journey to see your loved ones stress-free."
        },
        {
            img: "./Pictures/Visa Appeal Services post.jpg",
            heading: "Visa Appeal Services",
            detail: "Our Expert Team Provides Personalized Support By Meticulously Reviewing Each Case and Crafting Strategic Appeal Arguments. "
        },
        {
            img: "./Pictures/E-Visa post.jpg",
            heading: "E-Visa",
            detail: "An E-visa is a digital visa that lets you apply online, saving time and ef ort. Countries like Thailand, Malaysia  and Baku E-visasfor Pakistani travelers, making travel simple and convenient!"
        }
    ];

    let currentIndex = 0;
    let autoSlideInterval;

    const leftArrow = document.querySelector('.fa-angle-left');
    const rightArrow = document.querySelector('.fa-angle-right');
    const servicesLeft = document.querySelector('.services-left');
    const servicesRight = document.querySelector('.services-right');


    function updateCards() {
        // 🌟 First reset left card background and text color
        const leftCardTextBox = document.querySelector('.services-left .services-text-box');
        const leftCardDetail = document.querySelector('.services-left .services-detail');

      
        if (leftCardDetail) {
            leftCardDetail.style.color = "white"; // reset text color
        }

        // (your existing code for updating images and text)
        let leftCardIndex = currentIndex;
        let rightCardIndex = (currentIndex + 1) % cards.length;

        const leftCard = cards[leftCardIndex];
        const rightCard = cards[rightCardIndex];

        servicesLeft.querySelector('.services-img').src = leftCard.img;
        servicesLeft.querySelector('.services-heading').textContent = leftCard.heading;
        servicesLeft.querySelector('.services-detail').textContent = leftCard.detail;

        servicesRight.querySelector('.services-img').src = rightCard.img;
        servicesRight.querySelector('.services-heading').textContent = rightCard.heading;
        servicesRight.querySelector('.services-detail').textContent = rightCard.detail;

        updateDots();
        // animateBackgroundChange(); // 🌟 Apply new background + text color
    }


    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
        resetAutoSlide();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
        resetAutoSlide();
    });

   
    // Select all your existing dots
    const dots = document.querySelectorAll('.services-dots .dot-1');

    // Add click event listeners to each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCards();
            resetAutoSlide();
        });
    });

    // Update dot active state
    function updateDots() {
        const allDots = document.querySelectorAll('.services-dots .dot-1');
        allDots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto Slide Function
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCards();
        }, 5000); // every 5 seconds
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize
    updateCards();
    startAutoSlide();