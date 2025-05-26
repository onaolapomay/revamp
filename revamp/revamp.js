const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });



document.addEventListener("DOMContentLoaded", () => {
    initMainCarousel();
    initCardboxCarousel();
});

// === MAIN CAROUSEL ===
function initMainCarousel() {
    const track = document.getElementById("carousel-main"); // previously "carousel-main"
    const prev = document.getElementById("prev");      // previously "prev-main"
    const next = document.getElementById("next");      // previously "next-main"

    if (!track || !prev || !next) {
        console.warn("Main carousel elements not found.");
        return;
    }

    let currentIndex = 0;
    const totalSlides = track.children.length;

    function updateMainCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateMainCarousel();
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateMainCarousel();
    });
}


// === CARDBOX CAROUSEL ===
function initCardboxCarousel() {
    const carousel = document.getElementById('carousel-cardbox');
    const prevButton = document.getElementById('prev-main');
    const nextButton = document.getElementById('next-main');

    if (!carousel || !prevButton || !nextButton) {
        console.warn("Cardbox carousel elements not found.");
        return;
    }

    let position = 0;
    const cardWidth = 220;
    const totalCards = carousel.children.length;
    const maxPosition = totalCards - Math.floor(document.querySelector('.relative').clientWidth / cardWidth);

    function updateCardboxCarousel() {
        carousel.style.transform = `translateX(-${position * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (position < maxPosition) {
            position++;
            updateCardboxCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (position > 0) {
            position--;
            updateCardboxCarousel();
        }
    });
}

// === UNIFIED COLOR CHANGER FUNCTION ===
function changeColor(color, imageElement, cardId) {
    const imageMap = {
        card1: {
            black: '../src/media/card-images5/card1/card1-img1-black.jpg',
            pink: '../src/media/card-images5/card1/card1-img2-pink.jpg',
            orange: '../src/media/card-images5/card1/card1-img3-orange.jpg',
            blue: '../src/media/card-images5/card1/card1-img4-blue.jpg'
        },
        card2: {
            black: '../src/media/card-images5/card2/black.webp',
            chocolate: '../src/media/card-images5/card2/chocolate.webp',
            white: '../src/media/card-images5/card2/white.webp',
            navy: '../src/media/card-images5/card2/navy.webp',
            rose: '../src/media/card-images5/card2/rose.webp',
            sage: '../src/media/card-images5/card2/sage.webp'
        },
        card3: {
            black: '../src/media/card-images5/card3/black.webp',
            red: '../src/media/card-images5/card3/red.webp',
            roseGold: '../src/media/card-images5/card3/rosegold.webp',
            blue: '../src/media/card-images5/card3/blue.webp'
        },
        card4: {
            red: '../src/media/card-images5/card4/red.webp',
            black: '../src/media/card-images5/card4/black.webp',
            green: '../src/media/card-images5/card4/green.webp',
        },
        card5: {
            burgundy: '../src/media/card-images5/card5/burgundy.webp',
            pink: '../src/media/card-images5/card5/blush.webp',
        },
        card7: {
            white: '../src/media/card-images5/card7/white.webp',
            brown: '../src/media/card-images5/card7/brown.webp',
            gray: '../src/media/card-images5/card7/gray.webp',
        },
        card8: {
            black: '../src/media/card-images5/card8/CelineBlack.webp',
            blue: '../src/media/card-images5/card8/CelineBlue.webp',
            brown: '../src/media/card-images5/card8/CelineBrown.webp',
            burgundy: '../src/media/card-images5/card8/CelineBurgundy.webp',
            green: '../src/media/card-images5/card8/CelineLightGreen.webp',
            sage: '../src/media/card-images5/card8/CelineSage.webp',
            white: '../src/media/card-images5/card8/CelineWhite.webp',
        },
    };

    const imagePath = imageMap[cardId]?.[color];

    if (!imagePath) {
        console.error(`Image not found for color "${color}" in "${cardId}"`);
        return;
    }

    const img = new Image();
    img.onload = () => {
        imageElement.src = imagePath;
    };

     imageElement.setAttribute('data-selected-color', color);
    imageElement.setAttribute('data-selected-image', imagePath);
    img.onerror = () => {
        console.error("Failed to load image:", imagePath);
    };
    img.src = imagePath;
}  


                // card1 modals

function openModal(button, imgEl) {
  const title = button.getAttribute('data-title');
  const price = button.getAttribute('data-price');
  const imgSrc = imgEl.src;
  const selectedColor = imgEl.getAttribute('data-selected-color') || 'black';

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-price').innerText = price;
  document.getElementById('modal-image').src = imgSrc;
  document.getElementById('modal-color').innerText = `Selected Color: ${capitalize(selectedColor)}`;

  // Show modal
  const modal = document.getElementById('productModal');
  modal.classList.remove('hidden');  
  modal.classList.add('flex');       
}

function closeModal() {
  const modal = document.getElementById('productModal');

  // Forcefully remove display
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  // Extra fallback in case something blocks class-based hiding
  modal.style.display = 'none';
}
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Size button selection styling
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => {
          b.classList.remove('bg-black', 'text-white', 'selected');
        });
        btn.classList.add('bg-black', 'text-white', 'selected');
      });
    });
  });  

  
                // Card 6 inner pictures code
function selectImage(imageSrc) {
    document.getElementById('card6-img').src = imageSrc;
}




            // select size

let selectedSize = "";

function selectSize(size) {
  selectedSize = size;

  // Optional: Highlight the selected button (visual feedback)
  const buttons = document.querySelectorAll(".size-btn");
  buttons.forEach(btn => btn.classList.remove("bg-pink-700", "text-white"));

  const selectedButton = Array.from(buttons).find(btn => btn.textContent === size);
  if (selectedButton) {
    selectedButton.classList.add("bg-pink-700", "text-white");
  }
}

                        //  Add to Cart

const cart = [];

function addToCart() {
  const sizeBtns = document.querySelectorAll('.size-btn');
  let selectedSize = null;

  sizeBtns.forEach(btn => {
    if (btn.classList.contains('selected')) {
      selectedSize = btn.textContent;
    }
  });

  if (!selectedSize) {
    alert("Please select a size before adding to cart.");
    return;
  }

  const image = document.getElementById('modal-image').src;
  const title = document.getElementById('modal-title').textContent;
  const price = document.getElementById('modal-price').textContent;

  const product = {
    title,
    image,
    price,
    size: selectedSize,
    quantity: 1
  };

  flyToCartAnimation(image); // animate to cart icon

  const existing = cart.find(
    (item) =>
      item.title === product.title &&
      item.size === product.size &&
      item.image === product.image
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  renderCartItems(); 
  closeModal();
}


function flyToCartAnimation(imageSrc) {
  const cartIcon = document.getElementById("cartIcon");
  if (!cartIcon) return;

  const flyingImg = document.createElement("img");
  flyingImg.src = imageSrc;
  flyingImg.className = "fixed w-16 h-16 object-cover rounded-full z-[9999] transition-transform duration-700 ease-in-out pointer-events-none";

  document.body.appendChild(flyingImg);

  const startRect = document.getElementById("modal-image").getBoundingClientRect();
  const endRect = cartIcon.getBoundingClientRect();

  flyingImg.style.left = `${startRect.left}px`;
  flyingImg.style.top = `${startRect.top}px`;

  // Set position absolute AFTER appending
  flyingImg.style.position = "fixed";

  // Trigger animation on next frame
  requestAnimationFrame(() => {
    flyingImg.style.transform = `translate(${endRect.left - startRect.left}px, ${endRect.top - startRect.top}px) scale(0.1)`;
    flyingImg.style.opacity = "0.5";
  });

  setTimeout(() => {
    document.body.removeChild(flyingImg);
  }, 700);
}

// Toggle and Update the cart sidebar
function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  sidebar.classList.toggle("translate-x-full");
}

function renderCartItems() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='text-gray-600 text-sm'>Your cart is empty.</p>";
    updateCartTotal();
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "flex justify-between items-center border-b pb-3";

    itemDiv.innerHTML = `
      <div class="flex items-center space-x-3">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-10 object-cover rounded-md border">
        <div class="text-sm">
          <h4 class="font-medium text-gray-900 truncate w-40">${item.title}</h4>
          <p class="text-gray-500 text-xs">Size: ${item.size}</p>
          <p class="text-pink-700 text-sm font-semibold">${item.price}</p>
          <div class="flex items-center gap-1 mt-1">
            <button onclick="updateQuantity(${index}, -1)" class="text-xs px-2 py-1 border rounded hover:bg-gray-200">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="text-xs px-2 py-1 border rounded hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeCartItem(${index})" class="text-xs text-red-500 hover:underline ml-2">Remove</button>
    `;

    container.appendChild(itemDiv);
  });

  updateCartTotal();
}