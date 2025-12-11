import { Link } from "react-router-dom";

export default function TribesList({ tribes }) {
	return (
		<ul className="flex gap-5">
			{tribes.map((tribe) => (
				<li key={tribe.id}>
					<Link to={`/tribes/${tribe.slug}`}>{tribe.name}</Link> -{" "}
					{tribe.description}
				</li>
			))}
		</ul>
	);
}
