function CargarVideo(file) {
    var videoPlayer = document.getElementById('videoPlayer');
    var loadingMessage = document.getElementById('loadingMessage');
  
  
    loadingMessage.style.display = 'block';
  
    if (file.type === 'video/mp4') {
      var fileReader = new FileReader();
      fileReader.onload = function() {
            loadingMessage.style.display = 'none';
        videoPlayer.src = fileReader.result;
        videoPlayer.play();
      };
      fileReader.readAsDataURL(file);
    } else {
      console.error('Error: El video debe tener formato MP4.');
  
      loadingMessage.style.display = 'none';
    }
    
  }

  function cargaManual(event) {
    event.preventDefault();
    var fileInput = event.target;
    var file = fileInput.files[0];
    CargarVideo(file);
  }

  function handleDrop(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    CargarVideo(file);
  }
  
  function handleDragOver(event) {
    event.preventDefault();
  }