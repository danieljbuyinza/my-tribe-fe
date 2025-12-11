import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SuggestionsList from "../SuggestionsList";
import SuggestionForm from "../SuggestionForm";

export default function TribePage() {
	const { tribe } = useLoaderData();
	const [upvotes, setUpvotes] = useState(tribe.upvotes);
	const [suggestedReads, setSuggestedReads] = useState(tribe.suggestedReads);

	async function suggestNextRead({ book, author, suggestedBy }) {
		const response = await axios.post(
			"/api/tribes/" + tribe.slug + "/suggest-next-read",
			{
				book: book,
				author: author,
				suggestedBy: suggestedBy,
			}
		);
		const updatedSuggestedReads = response.data.tribe.suggestedReads;
		setSuggestedReads(updatedSuggestedReads);
	}

	async function upvoteTribe() {
		const response = await axios.post("/api/tribes/" + tribe.slug + "/upvote");
		const updatedTribe = response.data.tribe;
		setUpvotes(updatedTribe.upvotes);
	}

	return (
		<div className="p-3">
			<div className="mb-5">
				<h1>The {tribe.name} tribe</h1>
				<p>{tribe.description}</p>
				<p>Upvotes: {upvotes}</p>
				<SuggestionsList suggestedReads={suggestedReads} />
			</div>

			<div className="mb-5">
				<SuggestionForm addSuggestion={suggestNextRead} />
			</div>

			<button type="button" onClick={upvoteTribe}>
				Upvote
			</button>
		</div>
	);
}

export async function loader({ params }) {
	const response = await axios.get("/api/tribes/" + params.slug);
	const { tribe } = response.data;
	return {
		tribe,
	};
}
