let form = document.getElementById('form')
let ourField = document.getElementById('ourField')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(ourField.value)
});

      