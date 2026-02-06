async function getRandomJoke() {
    try {
        const res = await fetch('https://official-joke-api.appspot.com/random_joke');
        const json_result = await res.json();

        document.getElementById('getSetup').innerHTML = json_result.setup;
        document.getElementById('getPunchline').innerHTML = json_result.punchline;
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}

// Load one joke automatically on page load
getRandomJoke();
