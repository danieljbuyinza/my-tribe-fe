import { useParams } from "react-router-dom";
import tribes from "../tribe-data.js";

export default function TribePage() {
	const { slug } = useParams();
	const tribe = tribes.find((tribe) => tribe.slug === slug);

	return (
		<>
			<h1>This is the {tribe.name} tribe.</h1>
			<p>{tribe.description}</p>
		</>
	);
}
