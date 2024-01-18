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

// let activeText = document.getElementById("demo1");

// function moveImage(id) {
//   let buttonElement = document.getElementById(`btn${id}`);
//   buttonElement.click();

//   activeText.classList.remove("active-text");
//   let textElement = document.getElementById(`demo${id}`);
//   textElement.classList.add("active-text");
//   activeText = textElement;
//   if (id === 1) {
//     activeText.style.color = "red";
//   } else if (id === 2) {
//     activeText.style.color = "blue";
//   } else if (id === 3) {
//     activeText.style.color = "yellow";
//   } else {
//     activeText.style.color = "green";
//   }
// }

// let activeText = document.getElementById("demo1");
// let activeButtonId = 1; // Initialize the active button ID

// function moveImage(id) {
//   let buttonElement = document.getElementById(`btn${id}`);
//   buttonElement.click();

//   // Check if the clicked button is the same as the active one
//   if (id !== activeButtonId) {
//     let textElement = document.getElementById(`demo${activeButtonId}`);
//     textElement.classList.remove("active-text");

//     // Reset the color of the previously active text
//     textElement.style.color = "";
//     textElement.style.borderLeft = "";

//     activeButtonId = id;
//   }

//   activeText.classList.remove("active-text");
//   let textElement = document.getElementById(`demo${id}`);
//   textElement.classList.add("active-text");
//   activeText = textElement;

//   if (id === 1) {
//     activeText.style.color = "red";
//     activeText.style.borderLeft = "2px solid red";
//   } else if (id === 2) {
//     activeText.style.color = "blue";
//     activeText.style.borderLeft = "2px solid blue";
//   } else if (id === 3) {
//     activeText.style.color = "yellow";
//     activeText.style.borderLeft = "2px solid yellow";
//   } else {
//     activeText.style.color = "green";
//     activeText.style.borderLeft = "2px solid green";
//   }
// }

let hoverText = document.getElementById("demo1");

function applyHoverEffect(id) {
  let textElement = document.getElementById(`demo${id}`);
  let buttonElement = document.getElementById(`btn${id}`);
  buttonElement.click();

  hoverText.classList.remove("hover-text");
  hoverText.style.color = "";
  hoverText.style.borderLeft = "";

  textElement.classList.add("hover-text");

  hoverText = textElement;
}
