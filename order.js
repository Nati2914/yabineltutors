
        // Optional: Add client-side validation for file type and size
        document.getElementById('contactForm').onsubmit = function(event) {
            const fileInput = document.getElementById('photo');
            const filePath = fileInput.value;

            // Check if the file is an image
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if (!allowedExtensions.exec(filePath)) {
                alert('Please upload a valid image file (JPG, PNG, GIF).');
                fileInput.value = '';
                event.preventDefault(); // Prevent form submission
            }
        };
    