const jokes = document.querySelector('#punchline')
const getJoke = document.querySelector('#getJoke')

const fetchDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'} };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.log(e)
        return "No Joke For You"
    }
}

const addNewJoke = async () => {
    const jokeText = await fetchDadJoke()
    jokes.innerText = jokeText;
}

getJoke.addEventListener('click', addNewJoke)

