document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signInForm = document.querySelector('.sign-in form'); // Get the sign-in form
    const userSelect = document.getElementById('userSelect'); // Get the dropdown

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Add event listener for form submission
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const selectedRole = userSelect.options[userSelect.selectedIndex].text; // Get the selected role text

        // Redirect based on the selected role
        if (selectedRole === 'Doctor') {
            window.location.href = 'https://adminhomepage.netlify.app/'; // Redirect to the specified URL
        }
        // You can add more conditions for other roles if needed
    });
});