document.addEventListener("DOMContentLoaded", function() {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const existingUserBtn = document.getElementById("existing");

            // Check if there are saved details in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserBtn.style.display = "block";
            }

            // Handle form submission
            document.getElementById("loginForm").addEventListener("submit", function(event) {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;
                const rememberMe = rememberMeCheckbox.checked;

                if (rememberMe) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }

                alert(`Logged in as ${username}`);
            });

            // Handle existing user login
            existingUserBtn.addEventListener("click", function() {
                if (savedUsername) {
                    alert(`Logged in as ${savedUsername}`);
                }
            });
        });