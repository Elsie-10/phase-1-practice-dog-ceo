console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch random dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImagesDiv = document.getElementById('dog-images');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Random Dog';
          dogImagesDiv.appendChild(img);
        });
      })
      .catch(error => console.log('Error fetching dog images:', error));
  
    // Challenge 2: Fetch dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message); // Getting all breed names
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          dogBreedsList.appendChild(li);
  
          // Challenge 3: Change font color when breed is clicked
          li.addEventListener('click', () => {
            li.style.color = 'green'; // Change color on click
          });
        });
      })
      .catch(error => console.log('Error fetching dog breeds:', error));
  
    // Challenge 4: Filter breeds by selected letter
    const letterFilter = document.getElementById('letter-filter');
    letterFilter.addEventListener('change', (e) => {
      const selectedLetter = e.target.value;
      const breedItems = dogBreedsList.getElementsByTagName('li');
      
      Array.from(breedItems).forEach(item => {
        if (item.textContent[0].toLowerCase() !== selectedLetter) {
          item.style.display = 'none'; // Hide the breed
        } else {
          item.style.display = 'block'; // Show the breed
        }
      });
    });
  });
  