function changeBackground(color) {
    document.body.style.backgroundColor = color;
    // Store the selected background color in localStorage
    localStorage.setItem('background_color', color);
  }
  
  // Retrieve the background color from localStorage when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const storedColor = localStorage.getItem('background_color');
    if (storedColor) {
      changeBackground(storedColor);
    }
  });
  
  const buttons = document.querySelectorAll('.button-container button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const color = button.dataset.color;
      changeBackground(color);
    });
  });
  