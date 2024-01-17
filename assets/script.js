// function changeImage(imageId) {
//     const imageElement = document.getElementById(imageId);
//     // const textElement = document.getElementById(textid);

//     const currentImage = document.querySelector('.image-container img:not([hidden])');

//     if (currentImage) {
//         currentImage.setAttribute('hidden', 'true');
//     }

//     imageElement.removeAttribute('hidden');
// }

// function moveImage(id) {
//   // alert(id)
//   let buttonElement = document.getElementById(`btn${id}`);
//   buttonElement.click();
// }

let activeText = document.getElementById("demo1");

function moveImage(id) {
  let buttonElement = document.getElementById(`btn${id}`);
  buttonElement.click();

  activeText.classList.remove("active-text");
  let textElement = document.getElementById(`demo${id}`);
  textElement.classList.add("active-text");
  activeText = textElement;
  if (id === 1) {
    activeText.style.color = "red";
  } else if (id === 2) {
    activeText.style.color = "blue";
  } else if (id === 3) {
    activeText.style.color = "yellow";
  } else {
    activeText.style.color = "green";
  }
}
