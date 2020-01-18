const dataContainer = document.getElementById("data")
const getDarthVaderButton = document.getElementById("getDarthVaderButton")
const resultsContainer = document.getElementById("results")


async function getData () {
  const response = await fetch("https://swapi.co/api/people/1")
  const parsedResponse = await response.json();
  const responsesArray = Object.entries(parsedResponse)
    dataContainer.innerHTML = responsesArray
}

async function getData2 () {
  const response = await fetch("https://swapi.co/api/people/4")
  const parsedResponse = await response.json();
  const responsesArray = Object.entries(parsedResponse)
  resultsContainer.innerHTML = responsesArray
}

getData()

getDarthVaderButton.addEventListener("click", event => {
  event.preventDefault()
  getData2()
})
