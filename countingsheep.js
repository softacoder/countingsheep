var sheep, other;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


sheep = 0;
other = 0;


document.getElementById('button').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    let element_sheep_count = document.getElementById('sheep_count');
    element_sheep_count.innerText = sheep;
    sheep = (typeof sheep === 'number' ? sheep : 0) + 1;
  } else {
    let element_other_count = document.getElementById('other_count');
    element_other_count.innerText = other;
    other = (typeof other === 'number' ? other : 0) + 1;
  }

});