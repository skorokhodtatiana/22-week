function getGifs() {
    let valInputSearch = document.getElementById('searchGif').value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=7wJgSFYwhi8JAM6vE1UxJ7gaTTomMPmR&q=" + valInputSearch + "&limit=5&offset=0&rating=g&lang=en")
        .then(response => response.json())
        .then(responseImg => {
            console.log(responseImg.data.length)
            for (let i = 0; i < responseImg.data.length; i++) {
                let imgGif = document.createElement('img');
                document.body.append(imgGif);
                imgGif.src = responseImg.data[i].images.fixed_height_small.url;
            }
        })
        // .catch((error) => {
        //     throw new Error('Something went wrong')
        // });

        .catch((error) => {
            if(!navigator.onLine) {
              alert('Отсутствует подключение к сети интернет');
            }
          });
}


// fetch(url).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Something went wrong');
//     }
//   })
//   .then((responseJson) => {
//     // Do something with the response
//   })
//   .catch((error) => {
//     console.log(error)
//   });