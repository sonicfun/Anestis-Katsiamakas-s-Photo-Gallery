window.addEventListener('DOMContentLoaded', function() {
    var asyncImages = document.querySelectorAll('.async-image');

    Array.prototype.forEach.call(asyncImages, function(img) {
      img.addEventListener('load', function() {
        // Image has loaded
        console.log('Image loaded:', img.src);
      });

      img.src = img.getAttribute('data-src');
    });
  });