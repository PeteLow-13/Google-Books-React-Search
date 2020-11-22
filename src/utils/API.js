const APIkey = 'AIzaSyDKNUu2ZB8hcPS61iZ_dcwXF_0gFI_TMgY';

export default {
    
    search: function(terms) {
      return fetch('https://www.googleapis.com/books/v1/volumes?q=' + terms + '&key=' + APIkey)
        .then(response => response.json())
        .then(result => {
          return result;
        });
    }
  };
  