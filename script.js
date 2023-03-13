const joke = document.getElementById('joke')
const jokeBtn = document.getElementById("joke-btn")


function getJoke() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            //console.log(JSON.parse(this.responseText))
            if (this.status === 200) {
                const data = JSON.parse(this.responseText)
                joke.innerHTML = data.value
            } else {
                joke.innerHTML = "Something went wrong!"
            }
        }
    }
    xhr.send();
}

jokeBtn.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)