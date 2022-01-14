window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".header--menu li a")];
  links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
  const line = document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handleHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    //console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
  }
  const menu = document.querySelector(".header--menu");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("resume--btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.opacity = "1";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.opacity = "0";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.opacity = "0";
//   }
// };
