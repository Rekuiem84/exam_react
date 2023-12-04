// importe les composants React et le hook useState
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Exos() {
	// exercice 1
	// déclare une variable d'état isVisible qui est un booléen avec la valeur initiale false
	const [isVisible, setIsVisible] = useState(false);

	// déclare une fonction handleClick qui change la valeur de isVisible
	function handleClick() {
		setIsVisible(!isVisible);
	}

	// exercice 2
	// tableau des 10 plus grandes villes de France avec leur code postal
	const cities = [
		{ name: "Paris", codePostal: "75000" },
		{ name: "Marseille", codePostal: "13000" },
		{ name: "Lyon", codePostal: "69000" },
		{ name: "Toulouse", codePostal: "31000" },
		{ name: "Nice", codePostal: "06000" },
		{ name: "Nantes", codePostal: "44000" },
		{ name: "Strasbourg", codePostal: "67000" },
		{ name: "Montpellier", codePostal: "34000" },
		{ name: "Bordeaux", codePostal: "33000" },
		{ name: "Rennes", codePostal: "35000" },
	];

	// exercice 3
	// déclare une fonction handleSubmit qui récupère l'événement submit du formulaire
	function handleSubmit(event) {
		// empêche le rechargement de la page qui pourrait effacer les données entrées
		event.preventDefault();
		// récupère le node du formulaire
		const form = event.target.form;
		// récupère les données entrées dans le formulaire
		const name = form.name.value;
		const email = form.email.value;
		const message = form.message.value;
		// les noms entrés ne doivent contenir que des lettres, des espaces, des virgules, des tirets et des apostrophes
		const regexName = /^[\p{L} .,\-']+$/u;
		// regex standard pour les emails
		const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		// si les données entrées correspondent au regex associé , affiche les données dans un div
		if (regexName.test(name) && regexEmail.test(email)) {
			// affiche les données entrées dans un div après le formulaire
			const div = document.createElement("div");
			div.classList.add("form-data-valid");
			div.innerHTML = `<p>Nom : ${name}</p><p>Email : ${email}</p><p>Message : ${message}</p>`;
			form.after(div);
		} else {
			// si les données entrées ne correspondent pas au regex associé, affiche un message d'erreur
			const error = document.createElement("p");
			error.classList.add("form-data-invalid");
			error.innerText = "Veuillez remplir les champs correctement";
			form.after(error);
		}
	}
	return (
		<div>
			{/* affiche le composant Header */}
			<Header />
			<main className="exos">
				<div>
					<p>Exo 1 :</p>
					{/* au clic sur le bouton, appelle la fonction handleClick */}
					<button onClick={handleClick}>
						{/* Utilise l'opérateur ternaire pour afficher "afficher" si isVisible est faux et "cacher" si isVisible est vrai */}
						Cliquer pour {!isVisible ? "afficher" : "cacher"} un message
					</button>
					{/* Utilise l'opérateur ternaire pour afficher "Hello World" si isVisible est vrai*/}
					<p>{isVisible ? "Hello World" : ""}</p>
				</div>
				<div>
					<p>Exo 2 :</p>
					<table>
						<thead>
							<tr>
								<th>Ville</th>
								<th>Code Postal</th>
							</tr>
						</thead>
						<tbody>
							{/* boucle sur le tableau cities et affiche les données dans le tableau sur une ligne */}
							{cities.map((city, index) => {
								return (
									<tr key={index}>
										<td>{city.name}</td>
										<td>{city.codePostal}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div>
					<p>Exo 3 :</p>
					<form>
						<label htmlFor="name">Nom :</label>
						<input type="text" id="name" name="name" required />
						<label htmlFor="email">Email :</label>
						<input type="email" id="email" name="email" required />
						<label htmlFor="message">Message :</label>
						<textarea id="message" name="message" rows="4"></textarea>
						{/* lors de l'envoi du formulaire, appelle la fonction handleSubmit */}
						<button type="submit" onClick={handleSubmit}>
							Envoyer
						</button>
					</form>
				</div>
			</main>
			{/* affiche le composant Footer */}
			<Footer />
		</div>
	);
}

export default Exos;
