// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        productName: params.get('productName') || 'N/A',
        rating: params.get('rating') || 'N/A',
        installDate: params.get('installDate') || 'N/A',
        features: params.getAll('features'),
        writtenReview: params.get('writtenReview') || 'No review provided',
        userName: params.get('userName') || 'Anonymous'
    };
}

// Function to format the date
function formatDate(dateString) {
    if (dateString === 'N/A') return 'N/A';

    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to display review summary
function displayReviewSummary() {
    const reviewData = getUrlParams();
    const summaryDiv = document.getElementById('reviewSummary');

    if (!summaryDiv) {
        console.error('Review summary element not found');
        return;
    }

    // Check if we have actual form data
    const urlParams = new URLSearchParams(window.location.search);
    const hasFormData = urlParams.has('productName') && urlParams.has('rating');

    if (!hasFormData) {
        // No form data - hide the summary section
        summaryDiv.style.display = 'none';
        return;
    }

    // We have form data - show the summary
    summaryDiv.style.display = 'block';

    // Build the features list
    let featuresHTML = '';
    if (reviewData.features && reviewData.features.length > 0) {
        featuresHTML = reviewData.features.join(', ');
    } else {
        featuresHTML = 'None selected';
    }

    // Create the summary HTML
    const summaryHTML = `
        <p><strong>Product:</strong> ${reviewData.productName}</p>
        <p><strong>Rating:</strong> ${'★'.repeat(parseInt(reviewData.rating))}${'☆'.repeat(5 - parseInt(reviewData.rating))} (${reviewData.rating}/5)</p>
        <p><strong>Installation Date:</strong> ${formatDate(reviewData.installDate)}</p>
        <p><strong>Useful Features:</strong> ${featuresHTML}</p>
        <p><strong>Review:</strong> ${reviewData.writtenReview}</p>
        <p><strong>Reviewer:</strong> ${reviewData.userName}</p>
    `;

    summaryDiv.innerHTML = summaryHTML;
}

// Function to update and display review counter
function updateReviewCounter() {
    const counterElement = document.getElementById('reviewCount');

    if (!counterElement) {
        console.error('Review counter element not found');
        return;
    }

    // Check if page was loaded with URL parameters (form submission)
    const urlParams = new URLSearchParams(window.location.search);
    const hasFormData = urlParams.has('productName') && urlParams.has('rating');

    // Get current count from localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    if (hasFormData) {
        // Create a unique identifier for this submission based on the URL parameters
        const submissionId = urlParams.toString();
        const lastSubmission = sessionStorage.getItem('lastSubmissionId');

        // Only increment if this is a NEW submission (different from last one)
        if (submissionId !== lastSubmission) {
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount.toString());
            // Store this submission ID to prevent counting it again on refresh
            sessionStorage.setItem('lastSubmissionId', submissionId);
        }
    }

    // Display the count (whether incremented or not)
    counterElement.textContent = reviewCount;
}

// Initialize the review page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayReviewSummary();
    updateReviewCounter();

    // Optional: Add animation to success icon
    const successIcon = document.querySelector('.success-icon');
    if (successIcon) {
        setTimeout(() => {
            successIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                successIcon.style.transform = 'scale(1)';
            }, 200);
        }, 100);
    }
});