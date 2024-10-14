document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data
    fetch('userProfiles.json')
        .then(response => {
            if (!response.ok) throw new Error('Fetch error: ' + response.status);
            return response.json();
        })
        .then(userProfiles => {
            // Create a container to hold the user data
            const userList = document.getElementById('user-list');

            // Loop through each user profile and create HTML elements
            userProfiles.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';

                // Create and append child elements
                const fullNameElement = document.createElement('p');
                fullNameElement.textContent = `Name: ${user.firstName} ${user.lastName}`;
                userDiv.appendChild(fullNameElement);

                const emailElement = document.createElement('p');
                emailElement.textContent = `Email: ${user.email}`;
                userDiv.appendChild(emailElement);

                const dobElement = document.createElement('p');
                dobElement.textContent = `Date of Birth: ${user.dateOfBirth}`;
                userDiv.appendChild(dobElement);

                const addressElement = document.createElement('p');
                addressElement.textContent = `Address: ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zipCode}`;
                userDiv.appendChild(addressElement);

                const themeElement = document.createElement('p');
                themeElement.textContent = `Theme: ${user.preferences.theme}`;
                userDiv.appendChild(themeElement);

                const languageElement = document.createElement('p');
                languageElement.textContent = `Language: ${user.preferences.language}`;
                userDiv.appendChild(languageElement);

                const notificationsElement = document.createElement('p');
                notificationsElement.textContent = `Notifications: ${user.preferences.notifications ? 'Enabled' : 'Disabled'}`;
                userDiv.appendChild(notificationsElement);

                const newsletterElement = document.createElement('p');
                newsletterElement.textContent = `Newsletter: ${user.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}`;
                userDiv.appendChild(newsletterElement);

                // Append the user div to the user list
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing JSON:', error);
        });
});