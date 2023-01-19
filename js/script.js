function toggleNav() {
          var links = document.getElementsByTagName("a");
          for (var i = 0; i < links.length; i++) {
                    if (links[i].style.display === "block") {
                              links[i].style.display = "none";
                    } else {
                              links[i].style.display = "block";
                    }
          }
}

var readMoreBtn = document.getElementById("read-more-btn");
var moreContent = document.getElementById("more-content");

readMoreBtn.addEventListener("click", function () {
          if (moreContent.style.display === "none") {
                    moreContent.style.display = "block";
                    readMoreBtn.innerHTML = "Read Less";
          } else {
                    moreContent.style.display = "none";
                    readMoreBtn.innerHTML = "Read More";
          }
});

let currentImage = 1;

function changeImage() {
          document.getElementById("image" + currentImage).style.display = "none";
          currentImage = currentImage % 3 + 1;
          document.getElementById("image" + currentImage).style.display = "block";
}

setInterval(changeImage, 2000);
