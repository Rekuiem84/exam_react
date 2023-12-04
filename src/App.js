import "./App.css";
// on importe le hook browserRouter et les composants Router, Routes et Route pour pouvoir gérer les plusieurs pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exos from "./pages/Exos";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
	return (
		<Router>
			<Routes>
				{/* on crée nos différentes url pour accéder aux pages */}
				<Route path="/" Component={Home} />
				<Route path="/exos" Component={Exos} />
				<Route path="/article" Component={ArticleDetails} />
			</Routes>
		</Router>
	);
}
// 07 69 67 98 52

export default App;
