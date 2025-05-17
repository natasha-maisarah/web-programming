const images = [
    "/assets/guitar.jpg",
    "/assets/strawberry-matcha.jpg",
    "/assets/notis.jpg",
    "/assets/jigsaw.jpg"
  ];
  
  let currentIndex = 0;
  
  function showImage() {
    document.getElementById('gallery-image').src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
  
  function openSpotify(url) {
    window.open("https://spotify.com", '_blank').focus();
  }

  const form = document.getElementById("myForm");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const popupMessage = document.getElementById("popup-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from submitting normally

    const formData = new FormData(form);

    // Send data using fetch (POST request)
    fetch('submit_form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // or response.json()
    })
    .then(data => {
      // Show success popup
      popupMessage.textContent = "Form submitted successfully!";
      popup.style.display = "block";
      overlay.style.display = "block";
      form.reset(); // Clear form fields
    })
    .catch(error => {
      // Handle errors
      popupMessage.textContent = "Error: " + error.message;
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
  }