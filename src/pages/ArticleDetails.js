import Header from "../components/Header";
import Article from "../components/Article";
import Footer from "../components/Footer";

function ArticleDetails() {
	return (
		<div>
			<Header />
			<main className="articleDetailsCont">
				<Article />
			</main>
			<Footer />
		</div>
	);
}

export default ArticleDetails;
