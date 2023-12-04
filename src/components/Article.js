// on importe l'image de l'article
import LuffyImg from "../images/luffy.webp";

function Article() {
	return (
		<article>
			<div className="img-cont">
				<img src={LuffyImg} alt="Luffy" />
			</div>
			<div className="text-cont">
				<h3>Monkey D. Luffy</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat
					distinctio fuga eum maxime architecto placeat accusamus ea pariatur
					facilis quos omnis reprehenderit? Hic sed tenetur, temporibus quae
					dignissimos pariatur porro delectus esse neque labore quibusdam, quam
					quidem. Excepturi fugit tempore soluta dolores! Non modi nemo
					voluptatem ipsa rerum harum?
				</p>
			</div>
		</article>
	);
}

export default Article;
