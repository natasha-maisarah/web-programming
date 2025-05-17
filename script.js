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

  // === FORM SUBMISSION HANDLER ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("popup");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const formData = new FormData(form);

      fetch("submit_form.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then((data) => {
          popup.textContent = data;
          popup.style.display = "block";

          setTimeout(() => {
            popup.style.display = "none";
          }, 3000);

          form.reset(); // optional: clear form
        })
        .catch((err) => {
          popup.textContent = "There was an error. Please try again.";
          popup.style.display = "block";
          setTimeout(() => {
            popup.style.display = "none";
          }, 3000);
        });
    });
  }
});
