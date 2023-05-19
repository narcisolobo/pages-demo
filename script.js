async function getDadJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    const jokeContainer = document.getElementById("joke");
    jokeContainer.innerText = data.joke;
  } catch (error) {
    console.log(error);
  }
}
