// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded!')
});

let allHearts = document.querySelectorAll('like-glyph');
// let errorModal = document.querySelector('div'[0])

function likeHeart(e) {
  let targetHeart = e.target
  console.log(targetHeart)
  mimicServerCall()
  .then(function () {
    targetHeart.textContent = '♡'
    // targetHeart.classList.add('activated-heart')
    // targetHeart.textContent = FULL_HEART;
  })
  .catch(function (error) {
    errorModal.innerHTML = `
    id="modal">
      <h2>Error!</h2>
      <p id="modal-message"></p>
    `
  })
};

for (let heart of allHearts) {
  heart.addEventListener('click', likeHeart)
}

// if (heart.innerText === '♡') {
//   heart.addEventListener('click', likeHeart);
// } else if (heart[0].innerText === '♥') {
//   heart.addEventListener('click', unlikeHeart);
// }


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

mimicServerCall()

