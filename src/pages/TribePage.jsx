import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SuggestionsList from "../SuggestionsList";
import SuggestionForm from "../SuggestionForm";
import useUser from "../useUser";

export default function TribePage() {
	const { tribe } = useLoaderData();
	const [upvoted, setUpvoted] = useState(false);
	const [upvotes, setUpvotes] = useState(tribe.upvotes);
	const [suggestedReads, setSuggestedReads] = useState(tribe.suggestedReads);

	const { isLoading, user } = useUser();

	if (tribe.upvoteIds.includes(user?.uid)) {
		if (!upvoted) {
			setUpvoted(true);
		}
	}

	async function suggestNextRead({ book, author, suggestedBy }) {
		const token = user && (await user.getIdToken());
		const headers = token ? { authToken: token } : {};
		const response = await axios.post(
			"/api/tribes/" + tribe.slug + "/suggest-next-read",
			{
				book: book,
				author: author,
				suggestedBy: suggestedBy,
			},
			{ headers }
		);
		const updatedSuggestedReads = response.data.tribe.suggestedReads;
		setSuggestedReads(updatedSuggestedReads);
	}

	async function upvoteTribe() {
		const token = user && (await user.getIdToken());
		const headers = token ? { authToken: token } : {};
		const response = await axios.post(
			"/api/tribes/" + tribe.slug + "/upvote",
			null,
			{ headers }
		);
		const updatedTribe = response.data.updatedTribe;
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

			{user ? (
				<div className="mb-5">
					<SuggestionForm addSuggestion={suggestNextRead} />
				</div>
			) : (
				<p>Sign in to suggest the next read</p>
			)}

			{user && (
				<button
					type="button"
					disabled={upvoted}
					onClick={upvoteTribe}
					className="bg-neutral-700! cursor-default!"
				>
					{upvoted ? "Upvoted" : "Upvote"}
				</button>
			)}
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
