function toggleNav() {
    const content = document.querySelector('.content');
    if (content.style.width === '100%') {
        content.style.width = '80%';
    } else {
        content.style.width = '100%';
    }
}

function toggleDropdown(span) {
    const dropdowns = document.querySelectorAll('.dropdown');
    const currentDropdown = span.nextElementSibling;

    // Hide all dropdowns
    dropdowns.forEach(dropdown => {
        if (dropdown !== currentDropdown) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    if (currentDropdown.style.display === 'block') {
        currentDropdown.style.display = 'none';
    } else {
        currentDropdown.style.display = 'block';
    }
}