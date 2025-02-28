const input = document.getElementById("number");
const selection = document.querySelector("#unit");
const button = document.querySelector(".button");
const displayResults = document.querySelector("#results");
const errorContent = document.querySelector('#error-content');

let units = ["mm", "cm", "dm", "m", "Dm", "Hm", "Km"];

function convertUnits(value, fromUnits) {
  let fromIndex = -1;

  for (let i = 0; i <= units.length; i++) {
    if (units[i] === fromUnits) {
      fromIndex = i;
      break;
    }
  }

  if (fromIndex === -1) {
    return "Invalid Unit";
  }

  let results = {};

  for (let j = 0; j < units.length; j++) {
    let convertedValue = value;
    if (j > fromIndex) {
      for (let k = fromIndex; k < j; k++) {
        convertedValue /= 10;
      }
    }

    else if (j<fromIndex) {
      for(let k = fromIndex; k>j; k--) {
        convertedValue *= 10;
      }
    }
    results[units[j]] = convertedValue;
  }
  return results;
}


button.onclick = function () {
  
  let value = input.value;
  let fromUnit = selection.value;
  let connector = `<span class="connector">is equal to</span>`;


  let convertedValues = convertUnits (value, fromUnit);
  
  errorContent.innerHTML = '';

  input.classList.remove('error');

  selection.classList.remove('error');

  if (value === '' && fromUnit === '') {
    input.classList.add('error');
    errorContent.innerHTML = '<p class="error-message"> Please Input a Value </p>';
  } else if (value === '') {
    input.classList.add('error');
    errorContent.innerHTML = '<p class="error-message"> Please Input a Value </p>';
  } else if (fromUnit === '') {
    selection.classList.add('error');
    errorContent.innerHTML = '<p class="error-message"> Please select a base unit </p>';
  } else {
    input.classList.remove('error');
    selection.classList.remove('error');
  

  


  displayResults.innerHTML = "";
  for (let unit in convertedValues) {
    displayResults.innerHTML += `<p>${value} ${fromUnit} ${connector} ${convertedValues[unit]} ${unit}</p>`;
  }
};
  
}
