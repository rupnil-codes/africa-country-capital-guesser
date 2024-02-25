const countriesAndCapitals = [
    { country: 'Algeria', capital: 'Algiers' },
    // { country: 'Angola', capital: 'Luanda' },
    // { country: 'Benin', capital: 'Porto-Novo' },
    { country: 'Botswana', capital: 'Gaborone' },
    // { country: 'Burkina Faso', capital: 'Ouagadougou' },
    { country: 'Burundi', capital: 'Bujumbura' },
    // { country: 'Cabo Verde', capital: 'Praia' },
    { country: 'Cameroon', capital: 'Yaounde' },
    // { country: 'Central African Republic', capital: 'Bangui' },
    // { country: 'Chad', capital: "N'Djamena" },
    { country: 'Comoros', capital: 'Moroni' },
    // { country: 'Democratic Republic of the Congo', capital: 'Kinshasa' },
    // { country: 'Djibouti', capital: 'Djibouti' },
    { country: 'Egypt', capital: 'Cairo' },
    // { country: 'Equatorial Guinea', capital: 'Malabo' },
    // { country: 'Eritrea', capital: 'Asmara' },
    // { country: 'Eswatini', capital: 'Mbabane' },
    // { country: 'Ethiopia', capital: 'Addis Ababa' },
    // { country: 'Gabon', capital: 'Libreville' },
    // { country: 'Gambia', capital: 'Banjul' },
    { country: 'Ghana', capital: 'Accra' },
    { country: 'Guinea', capital: 'Conakry' },
    // { country: 'Guinea-Bissau', capital: 'Bissau' },
    // { country: 'Ivory Coast', capital: 'Yamoussoukro' },
    { country: 'Kenya', capital: 'Nairobi' },
    // { country: 'Lesotho', capital: 'Maseru' },
    // { country: 'Liberia', capital: 'Monrovia' },
    { country: 'Libya', capital: 'Tripoli' },
    { country: 'Madagascar', capital: 'Antananarivo' },
    // { country: 'Malawi', capital: 'Lilongwe' },
    { country: 'Mali', capital: 'Bamako' },
    // { country: 'Mauritania', capital: 'Nouakchott' },
    { country: 'Mauritius', capital: 'Port Louis' },
    // { country: 'Morocco', capital: 'Rabat' },
    { country: 'Mozambique', capital: 'Maputo' },
    { country: 'Namibia', capital: 'Windhoek' },
    // { country: 'Niger', capital: 'Niamey' },
    // { country: 'Nigeria', capital: 'Abuja' },
    // { country: 'Rwanda', capital: 'Kigali' },
    // { country: 'São Tomé and Príncipe', capital: 'São Tomé' },
    { country: 'Senegal', capital: 'Dakar' },
    // { country: 'Seychelles', capital: 'Victoria' },
    // { country: 'Sierra Leone', capital: 'Freetown' },
    { country: 'Somalia', capital: 'Mogadishu' },
    { country: 'South Africa', capital: 'Pretoria' },
    { country: 'South Sudan', capital: 'Juba' },
    { country: 'Sudan', capital: 'Khartoum' },
    { country: 'Tanzania', capital: 'Dar-es-Salaam' },
    // { country: 'Togo', capital: 'Lomé' },
    // { country: 'Tunisia', capital: 'Tunis' },
    // { country: 'Uganda', capital: 'Kampala' },
    // { country: 'Zambia', capital: 'Lusaka' },
    // { country: 'Zimbabwe', capital: 'Harare' }
];

let num = 0;
let numElement = document.getElementById('num');

const countryElement = document.getElementById('type');
const itemElement = document.getElementById('item');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentItem;
let currentQuestionIndex = -1; // Start with -1 to force a new question on game start

function displayQuestion() {
  num++;
  numElement.textContent = num;

  currentQuestionIndex = Math.floor(Math.random() * countriesAndCapitals.length);
  let randomIndex = Math.floor(Math.random() * 2);
  if (randomIndex === 0) {
    currentItem = countriesAndCapitals[currentQuestionIndex].country;
    countryElement.textContent = 'Capital';
    itemElement.textContent = currentItem;
  } else {
    currentItem = countriesAndCapitals[currentQuestionIndex].capital;
    countryElement.textContent = 'Country';
    itemElement.textContent = currentItem;
  }
}

function checkAnswer() {
  const { country, capital } = countriesAndCapitals[currentQuestionIndex];
  const userGuess = guessInput.value.trim();

  if ((countryElement.textContent === 'Capital' && userGuess.toLowerCase() === capital.toLowerCase()) ||
      (countryElement.textContent === 'Country' && userGuess.toLowerCase() === country.toLowerCase())) {
    resultElement.textContent = 'Correct!';
    updateScore();
  } else {
    if (countryElement.textContent === 'Capital') {
      resultElement.textContent = `Incorrect. ${capital} is the capital of ${currentItem}.`;
    } else {
      resultElement.textContent = `Incorrect. ${country} is the country with capital ${currentItem}.`;
    }
  }

  guessInput.value = '';
  displayQuestion();
}

submitButton.addEventListener('click', checkAnswer);

// Initial question
displayQuestion();

// Score
let score = 0;
const scoreElement = document.getElementById('score-value');
scoreElement.textContent = score;

function updateScore() {
  score++;
  scoreElement.textContent = score;
}