const search = () => {
  const inputValue = document.getElementById('input-field').value;
  loadData(inputValue);
}

document.getElementById('input-field').addEventListener('keypress', (e) => {
  const inputValue = document.getElementById('input-field').value;
  if (e.key === 'Enter') {
    loadData(inputValue);
  }
})

const loadData = city => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e4d4e6d4b381fba5d999374a5dd1dc4`)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = data => {
  console.log(data);
  const city = document.getElementById('city');
  city.textContent = '';
  const temperature = document.getElementById('temperature');
  temperature.textContent = '';
  const description = document.getElementById('description');
  description.textContent = '';
  if (data.cod == 404) {
    city.innerText = "City not found !!"
    return;
  }
  city.innerText = data.name;
  temperature.innerText = data.main?.temp;
  description.innerText = data?.weather?.[0].description;
}