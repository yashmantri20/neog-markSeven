const btn = document.querySelector("#translatebtn");
const input = document.querySelector("#inputbox");
const output = document.querySelector("#outputbox");

const serverUrl = "https://api.funtranslations.com/translate/klingon.json";

const errorHandler = () => {
  alert("Please try again later")
}

const translate = () => {
  const val = input.value;
  if (val != "") {
    const url = `${serverUrl}?text=${val}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        output.innerText = data.contents.translated;
      })
      .catch(errorHandler)
  }
}

btn.addEventListener('click', translate);