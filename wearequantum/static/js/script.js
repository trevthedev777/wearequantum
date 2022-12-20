const modal = document.getElementById("modal");
const form = document.querySelector('form');
const loading = document.getElementById("loading");
const btnSubmit = document.getElementById('btnSubmit');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Functions
function onlyNumbers(e) {
  e.preventDefault()
  const ageGate = document.querySelectorAll('.ageGate');
  const errMsgDiv = document.getElementById('errorMsg');

  const year = ageGate[2].value;
  const month = ageGate[1].value;
  const day = ageGate[0].value;
  const userBirthday = new Date(year, month - 1, day);

  // Date Right Now
  const today = new Date();
  // Users age in years
  const acceptingYear = today.getFullYear() - userBirthday.getFullYear()

  if (acceptingYear < 18 || 
      acceptingYear == 18 &&
      today.getMonth() < userBirthday.getMonth() ||
      today.getMonth() == userBirthday.getMonth() &&
      today.getDate() < userBirthday.getDate()
      ) {
      let paragraph = document.createElement('p');
      paragraph.innerHTML = 'Invalid Credentials';
      errMsgDiv.append(paragraph);
  } else {
    btnSubmit.remove()
    loading.classList.remove('hide')
    modal.classList.add('close');
    }
    
};



// Event Listeners
form.addEventListener('submit', onlyNumbers)