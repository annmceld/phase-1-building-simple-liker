// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartButtons = document.getElementsByClassName("like-glyph");

function likeHeartButton(e) {
  const heart = e.target
  mimicServerCall()
  .then((response) => {
    if (heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART
      heart.classList.add('activated-heart')
    }
    else {
      heart.textContent = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
  })
  .catch((error) => {
    const errorModal = document.getElementById('modal')
    errorModal.classList.remove('hidden')
    setTimeout((error) => {errorModal.classList.add('hidden')}, 3000);
  })
}

for (const glyph of heartButtons) {
  glyph.addEventListener('click', likeHeartButton);
}

//heartButtons.forEach(heartButton => heartButton.addEventListener('click', likeHeartButton))



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
