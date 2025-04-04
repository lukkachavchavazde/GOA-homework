document.getElementById('searchForm').onsubmit = function(e) {
    e.preventDefault();
    
    let term = document.getElementById('searchInput').value;
    
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + term)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let results = document.getElementById('results');
        results.innerHTML = '';
        
        if (!data.items) {
          results.innerHTML = 'No books found';
          return;
        }
  
        for (let i = 0; i < data.items.length; i++) {
          let book = data.items[i].volumeInfo;
          let title = book.title || 'No Title';
          let authors = book.authors ? book.authors.join(', ') : 'No Authors';
          let thumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
          
          results.innerHTML += `
            <div>
              <h3>${title}</h3>
              <p>${authors}</p>
              ${thumbnail ? `<img src="${thumbnail}" alt="Book Cover">` : ''}
            </div>
          `;
        }
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  };
  