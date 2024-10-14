document.addEventListener('DOMContentLoaded', function() {
    // Fetch the XML data
    fetch('book.xml')
        .then(response => {
            if (!response.ok) throw new Error('Fetch error: ' + response.status);
            return response.text();
        })
        .then(xmlText => {
            // Parse the XML string
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

            // Get the book elements
            const books = xmlDoc.getElementsByTagName('book');

            // Create a container to hold the book data
            const bookList = document.getElementById('book-list');

            // Loop through each book and create HTML elements
            for (let i = 0; i < books.length; i++) {
                const book = books[i];
                const id = book.getAttribute('id');
                const title = book.getElementsByTagName('title')[0].textContent;
                const author = book.getElementsByTagName('author')[0].textContent;
                const price = book.getElementsByTagName('price')[0].textContent;

                // Create a div for each book
                const bookDiv = document.createElement('div');
                bookDiv.className = 'book';

                // Create and append child elements
                const idElement = document.createElement('p');
                idElement.textContent = `ID: ${id}`;
                bookDiv.appendChild(idElement);

                const titleElement = document.createElement('p');
                titleElement.textContent = `Title: ${title}`;
                bookDiv.appendChild(titleElement);

                const authorElement = document.createElement('p');
                authorElement.textContent = `Author: ${author}`;
                bookDiv.appendChild(authorElement);

                const priceElement = document.createElement('p');
                priceElement.textContent = `Price: $${price}`;
                bookDiv.appendChild(priceElement);

                // Append the book div to the book list
                bookList.appendChild(bookDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching or parsing XML:', error);
        });
});