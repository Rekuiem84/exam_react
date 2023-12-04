import Article from "./Article";
import Hero from "./Hero";
// on importe Link pour rediriger vers la page article
import { Link } from "react-router-dom";

function Main() {
	// on utilise une boucle pour créer 10 articles
	const nbArticles = 10;
	// on crée un tableau vide qui va contenir les 10 articles
	const articles = [];
	// on crée une boucle qui va ajouter 10 fois un article dans le tableau
	for (let i = 0; i < nbArticles; i++) {
		articles.push(
			<Link to={"/article"} key={i}>
				<Article />
			</Link>
		);
	}
	return (
		<main>
			<Hero />
			<h2 id="personnages">Les personnages principaux</h2>
			<section>{articles}</section>
		</main>
	);
}

export default Main;
