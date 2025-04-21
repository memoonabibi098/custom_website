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
  


document.addEventListener('DOMContentLoaded', function() {
    // Sample data for exhibitions (replace with your actual data)
    const exhibitionsData = [
        {
            logo: "./Pictures/chinaplas 2025.png",
            image: "./Pictures/image 2.png",
            detail: "the world's leading plastics and rubber trade fair",
            date: "2025. 4. 15 - 18",
            location: "Shenzhen World Exhibition & Convention Center (Bao'an), PR China"
        },
        {
            logo: "./Pictures/Sino-Label.png",
            image: "./Pictures/Sino-Label-img.png",
            detail: "The Way For Labeling Industry ",
            date: "04 - 06 , 03 , 2025",
            location: "China Import and Export Fair Complex, Guangzhou, China"
        },
        {
            logo: "./Pictures/ites.png",
            image: "./Pictures/ites-img.png",
            detail: "Shenzhen International Industrial Manufacturing Technology and Equipment Exhibition",
            date: "2025. 3. 26 - 29",
            location: "Shenzhen World Exhibition & Convention Center (PR China)"
        },
        {
            logo: "./Pictures/Sino-Pack.png",
            image: "./Pictures/Sino-Pack-img.png",
            detail: "The 31st China International Exhibition on Packaging Machinery and Materials",
            date: "2025. 3. 4 - 6",
            location: "China Import & Export Fair Complex, Guangzhou, P.R.China"
        },
        {
            logo: "./Pictures/PRINTING SOUTH CHINA EXPO.png",
            image: "./Pictures/PRINTING SOUTH CHINA EXPO-img.png",
            detail: "Smart Packaging Printing ",
            date: "2025. 3. 4 - 6",
            location: "China Import and Export Fair Complex, Guangzhou, China"
        }
    ];

    // Get DOM elements
    const leftArrow = document.querySelector('.exhibitions-left-angle.fa-angle-left');
    const rightArrow = document.querySelector('.exhibitions-left-angle.fa-angle-right');
    const imgDiv = document.querySelector('.exhibitions-img-div img');
    const logoDiv = document.querySelector('.exhibitions-div-logo img');
    const detailDiv = document.querySelector('.exhibitions-div-detail p');
    const dateDiv = document.querySelector('.exhibitions-div-date p');
    const locationDiv = document.querySelector('.exhibitions-div-location p');
    const currentNumberSpan = document.querySelector('.exhibitions-div-slider-span');
    const totalNumberSpan = document.querySelector('.exhibitions-div-slider-span-1');

    // Set total number of exhibitions
    totalNumberSpan.textContent = exhibitionsData.length;

    let currentIndex = 0;
    let autoRotateInterval;

    // Function to update the exhibition display
    function updateExhibition(index) {
        const exhibition = exhibitionsData[index];
        
        imgDiv.src = exhibition.image;
        logoDiv.src = exhibition.logo;
        detailDiv.textContent = exhibition.detail;
        dateDiv.textContent = exhibition.date;
        locationDiv.textContent = exhibition.location;
        currentNumberSpan.textContent = index + 1;
        
        currentIndex = index;
    }

    // Function to move to next exhibition
    function nextExhibition() {
        currentIndex = (currentIndex + 1) % exhibitionsData.length;
        updateExhibition(currentIndex);
    }

    // Function to move to previous exhibition
    function prevExhibition() {
        currentIndex = (currentIndex - 1 + exhibitionsData.length) % exhibitionsData.length;
        updateExhibition(currentIndex);
    }

    // Set up auto rotation
    function startAutoRotate() {
        autoRotateInterval = setInterval(nextExhibition, 3000);
    }

    // Initialize
    updateExhibition(0);
    startAutoRotate();

    // Event listeners for arrows
    leftArrow.addEventListener('click', function() {
        clearInterval(autoRotateInterval);
        prevExhibition();
        startAutoRotate();
    });

    rightArrow.addEventListener('click', function() {
        clearInterval(autoRotateInterval);
        nextExhibition();
        startAutoRotate();
    });

    // Pause auto rotation when hovering over the exhibition
    const servicesMainDiv = document.querySelector('.services-main-div');
    servicesMainDiv.addEventListener('mouseenter', function() {
        clearInterval(autoRotateInterval);
    });

    servicesMainDiv.addEventListener('mouseleave', function() {
        startAutoRotate();
    });
});
