const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


// Product Array - Data source for product selection
const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }
];

// Function to populate the product select dropdown
function populateProducts() {
    const selectElement = document.getElementById('productName');

    if (!selectElement) {
        console.error('Product select element not found');
        return;
    }

    // Create and append option elements for each product
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();

    // Add form validation feedback
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (event) => {
            // Basic validation check before submit
            const productSelect = document.getElementById('productName');
            const rating = document.querySelector('input[name="rating"]:checked');
            const installDate = document.getElementById('installDate');

            if (!productSelect.value || !rating || !installDate.value) {
                event.preventDefault();
                alert('Please fill in all required fields (marked with *)');
                return false;
            }

            // Form is valid, will proceed with submission
            return true;
        });
    }

    // Optional: Add interactivity to star ratings
    const starLabels = document.querySelectorAll('.star-label');
    starLabels.forEach(label => {
        label.addEventListener('mouseenter', () => {
            label.style.transform = 'scale(1.05)';
        });

        label.addEventListener('mouseleave', () => {
            label.style.transform = 'scale(1)';
        });
    });
});