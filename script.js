
// Get elements
// == Navbar == //
const navbar = document.querySelector("nav");
const projectHeader = document.querySelector(".project__header");
const projectInfo = document.querySelector(".project__info");
const body = document.querySelector("body");

// == ToolBox == //
const navMenu = document.querySelector(".nav__menu");
const toolBox = document.querySelector(".menu-overlay__section");
const toolBoxCloseBtn = document.querySelector(".close__btn");


// ======================= NAV BACKGROUND TRANSPARENT ====================================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");  // Add class when scrolling down
    }else{
        navbar.classList.remove("scrolled");  // Remove class when scrolling up
    }
});



// ======================= TOOLBOX OVERLAY ====================================
navMenu.addEventListener("click", () => {
    toolBox.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

toolBoxCloseBtn.addEventListener("click", () => {
    toolBox.classList.remove('active');
    body.classList.remove('no-scroll');
});

 // Close the menu when clicking outside
 toolBox.addEventListener('click', (e) => {
    if (e.target === toolBox){
        toolBox.classList.remove('active');
        body.classList.remove('no-scroll');
    }
  });













    /*// Three.js background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('background-canvas'),
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.BufferGeometry();
    const particles = 2000;
    const positions = new Float32Array(particles * 3);

    for(let i = 0; i < particles * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0x98F595, // Default UI green
        size: 0.02
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    // Color transition functions
    function getColoredElements() {
        const coloredElements = document.querySelectorAll('[class^="color-"]');
        return Array.from(coloredElements).map(el => ({
            element: el,
            rect: el.getBoundingClientRect(),
            color: window.getComputedStyle(el).color
        }));
    }

    function rgbToHex(rgb) {
        const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!match) return 0x98F595;

        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);

        return (r << 16) | (g << 8) | b;
    }

    let targetColor = new THREE.Color(0x98F595);
    let isTouch = false;

    // Handle color updates
    function updateParticleColor(event) {
        if (isTouch) return;

        const mouseX = event.clientX;
        const mouseY = event.clientY + window.scrollY;
        const elements = getColoredElements();

        let closestDist = Infinity;
        let closestColor = 0x98F595;

        elements.forEach(({element, rect, color}) => {
            const elementX = rect.left + rect.width/2;
            const elementY = rect.top + rect.height/2;

            const dist = Math.sqrt(
                Math.pow(mouseX - elementX, 2) +
                Math.pow(mouseY - elementY, 2)
            );

            if (dist < closestDist) {
                closestDist = dist;
                closestColor = rgbToHex(color);
            }
        });

        targetColor = new THREE.Color(closestColor);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Smooth color transition
        material.color.lerp(targetColor, 0.05);

        points.rotation.x += 0.001;
        points.rotation.y += 0.001;
        renderer.render(scene, camera);
    }

    animate();*/
