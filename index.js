//RESUELVE TUS EJERCICIOS AQUI

function getAllBreeds() {
	return fetch("https://dog.ceo/api/breeds/list/all")
		.then((res) => res.json())
		.then((json) => Object.keys(json.message));
}

function getRandomDog() {
	return fetch("https://dog.ceo/api/breeds/image/random")
		.then((res) => res.json())
		.then((json) => json.message);
}

function getAllImagesByBreed() {
	return fetch("https://dog.ceo/api/breed/komondor/images")
		.then((res) => res.json())
		.then((json) => json.message);
}

function getAllImagesByBreed2(breed) {
	return fetch(`https://dog.ceo/api/breed/${breed}/images`)
		.then((res) => res.json())
		.then((json) => json.message);
}

function getGitHubUserProfile(username) {
	return fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
}

function printGithubUserProfile(username) {
	return fetch(`https://api.github.com/users/${username}`)
		.then((res) => res.json())
		.then((json) => {
			const { avatar_url: image, name } = json;
			const profile = document.getElementById("githubprofile");
			profile.innerHTML = `
                <h2>${name}</h2>
                <img src="${image}"/>
            `;
			return { img: image, name: name };
		});
}

function getAndPrintGitHubUserProfile(username) {
	return fetch(`https://api.github.com/users/${username}`)
		.then((res) => res.json())
		.then((json) => {
			const { avatar_url: image, name, public_repos } = json;
			return `
            <section>
                <img src="${image}" alt="${name}">
                <h1>${name}</h1>
                <p>Public repos: ${public_repos}</p>
            </section>
        `;
		});
}

function fetchGithubUsers(usernames) {
	return Promise.all(
		usernames.map((username) =>
			fetch(`https://api.github.com/users/${username}`)
				.then((res) => res.json())
				.then((json) => ({ name: json.name, html_url: json.html_url }))
		)
	);
}