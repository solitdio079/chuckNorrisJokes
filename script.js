const joke = document.getElementById('joke')
const jokeBtn = document.getElementById("joke-btn")


function getJoke() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //console.log(JSON.parse(this.responseText))
            const data = JSON.parse(this.responseText)
            joke.innerHTML = data.value;
        }
    }
    xhr.send();
}
jokeBtn.addEventListener('click', getJoke)