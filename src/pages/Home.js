// importe les composants React et le hook useState
import Header from "../components/Header";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

function Home() {
	return (
		// la page Home contient le header, les articles et le footer
		<div>
			<Header />
			<Articles />
			<Footer />
		</div>
	);
}

export default Home;
