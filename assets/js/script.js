function updateList() {
    const list = document.getElementById("wire");
    const windowWidth = window.innerWidth;
    let numberOfItems;

    if (windowWidth < 480) {
        numberOfItems = 8;
    } else if (windowWidth < 768) {
        numberOfItems = 16;
    } else if (windowWidth < 992) {
        numberOfItems = 24;
    } else {
        numberOfItems = 32;
    }

    // Clear the existing list
    list.innerHTML = "";

    // Create and append the list items dynamically
    for (let i = 1; i <= numberOfItems; i++) {
        const li = document.createElement("li");
        // li.textContent = "Item " + i;
        list.appendChild(li);
    }
}

// Call the function on page load and whenever the window is resized
window.addEventListener("load", updateList);
window.addEventListener("resize", updateList);

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // const isDarkMode = body.classList.contains('light-mode');
    // darkModeToggle.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';

    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
});
