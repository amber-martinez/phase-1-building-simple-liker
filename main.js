// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded!')
});

let allHearts = document.querySelectorAll('span.like-glyph');
// let errorModal = document.querySelector('div#modal')
let modal = document.querySelector('.hidden')

function likeHeart(e) {
  let targetHeart = e.target
  console.log(targetHeart.textContent)
  mimicServerCall()
  .then(function () {
    if (targetHeart.textContent === EMPTY_HEART) {
      targetHeart.classList.add('activated-heart')
      targetHeart.textContent = FULL_HEART;
    } else {
      targetHeart.classList.remove('activated-heart')
      targetHeart.textContent = EMPTY_HEART;
    }
  })
  .catch(function () {
    modal.classList.remove('hidden')
    setTimeout(() => {modal.classList.add('hidden')}, 3000)
  })
};

// function unlikeHeart(e) {
//   let targetHeart = e.target
//   console.log(targetHeart)
//   mimicServerCall()
//   .then(function () {
//     // targetHeart.textContent = '♡'
//     targetHeart.classList.remove('activated-heart')
//     targetHeart.textContent = EMPTY_HEART;
//   })
//   .catch(function () {;
//     // Display the error modal by removing the .hidden class
//     // Display the server error message in the modal
//     // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
//     modal.removeAttribute('hidden');
//     modal.innerHTML = `
//     id="modal">
//       <h2>Error!</h2>
//       <p id="modal-message"></p>
//     `
//     setTimeout(() => {modal.setAttribute('hidden')}, 3000)
//   })
// };

for (let heart of allHearts) {
    heart.addEventListener('click', likeHeart);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// mimicServerCall()

