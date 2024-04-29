// // script.js
// $(document).ready(function() {
//     // Fetch data from Google Sheets
//     // Implement the logic to fetch data here
    
//     // Example data
//     const videos = [
//       { title: "Video 1", category: "category1", thumbnail: "video1.jpg", email: "email1@example.com" },
//       { title: "Video 2", category: "category2", thumbnail: "video2.jpg", email: "email2@example.com" },
//       // Add more video objects
//     ];
  
//     // Function to populate the gallery
//     function populateGallery() {
//       const gallery = document.getElementById("video-gallery");
//       gallery.innerHTML = "";
//       videos.forEach(video => {
//         const videoDiv = document.createElement("div");
//         videoDiv.classList.add("video");
//         videoDiv.innerHTML = `
//           <img src="${video.thumbnail}" alt="${video.title}" onmouseover="showOverlay(this, '${video.email}')" onmouseout="hideOverlay()">
//           <div class="overlay" id="overlay">${video.email}</div>
//         `;
//         gallery.appendChild(videoDiv);
//       });
//     }
  
//     populateGallery(); // Populate the gallery initially
  
//     // Function to filter videos based on category
//     window.filterVideos = function(category) {
//       const filteredVideos = category === "all" ? videos : videos.filter(video => video.category === category);
//       populateGallery(filteredVideos);
//     };
  
//     // Function to show overlay with email
//     window.showOverlay = function(element, email) {
//       const overlay = element.nextElementSibling;
//       overlay.style.display = "block";
//     };
  
//     // Function to hide overlay
//     window.hideOverlay = function() {
//       const overlays = document.querySelectorAll(".overlay");
//       overlays.forEach(overlay => {
//         overlay.style.display = "none";
//       });
//     };
//   });

