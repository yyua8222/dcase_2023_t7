document.addEventListener("DOMContentLoaded", function() {
  const audioList = document.getElementById("audio-list");

  // Array of audio file names
  const audioFiles = [
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3"
    // Add more audio file names as needed
  ];

  audioFiles.forEach(function(audio) {
    const listItem = document.createElement("li");
    const audioElement = document.createElement("audio");
    audioElement.src = audio;
    audioElement.controls = true;

    listItem.appendChild(audioElement);
    audioList.appendChild(listItem);
  });
});
