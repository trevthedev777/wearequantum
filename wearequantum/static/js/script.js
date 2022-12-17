const modal = document.getElementById("myModal");
const form = document.querySelector('form');
const loading = document.getElementById("loading");
const btnSubmit = document.getElementById('btnSubmit');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Functions

function onlyNumbers(e) {
  const ageGate = document.querySelectorAll('.ageGate');
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const errMsgDiv = document.getElementById('errorMsg');

  let containsNumber = false
  ageGate.forEach(input => {
    if(numbers.some(num => input.value.includes(num))) containsNumber = true;
  })
  if (containsNumber || ageGate.value !== numbers && ageGate.value == '' || ageGate[2].value < 2004) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'Invalid Credentials';
    errMsgDiv.append(paragraph);
    e.preventDefault()
    }  else if (containsNumber = true) {
        btnSubmit.remove()
        loading.classList.remove('hide')
    }
    
};


// Event Listeners
form.addEventListener('submit', onlyNumbers)