// Select the navigation bar elements
const navBar = document.getElementById('nav-bar');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu li a');

// Add event listener to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
  });
});

// Select the search input and button elements
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');

// Add event listener to search button
searchButton.addEventListener('click', () => {
  // Get the search query from the input field
  const searchQuery = searchInput.value.trim();
  // Check if the search query is not empty
  if (searchQuery !== '') {
    // Perform search operation (e.g., make an API call)
    console.log(`Searching for: ${searchQuery}`);
    // Clear the search input field
    searchInput.value = '';
  }
});

// Select the cart button elements
const cartButtons = document.querySelectorAll('.card button');

// Add event listener to cart buttons
cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product details (e.g., name, price)
    const productDetails = button.parentNode;
    const productName = productDetails.querySelector('h3').textContent;
    const productPrice = productDetails.querySelector('p').textContent;
    // Add the product to the cart (e.g., update the cart array)
    console.log(`Added to cart: ${productName} - ${productPrice}`);
  });
});

// Select the social media link elements
const socialMediaLinks = document.querySelectorAll('.footer .text a');

// Add event listener to social media links
socialMediaLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Open the social media link in a new tab
    window.open(link.textContent, '_blank');
  });
});

// Select the shop now button element
const shopNowButton = document.querySelector('.Shop-Now');

// Add event listener to shop now button
shopNowButton.addEventListener('click', () => {
  // Scroll to the featured products section
  const featuredProductsSection = document.getElementById('cards');
  featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
});