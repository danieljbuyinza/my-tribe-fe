import { useState } from "react";

export default function SuggestionForm({ addSuggestion }) {
	const [book, setBook] = useState("");
	const [author, setAuthor] = useState("");
	const [suggestedBy, setSuggestedBy] = useState("Daniel");

	return (
		<>
			<h3>Suggest next read</h3>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!book || !author) {
						return;
					}
					addSuggestion({ book, author, suggestedBy });
					setBook("");
					setAuthor("");
				}}
			>
				<label htmlFor="suggestion">Book:</label>
				<input
					type="text"
					id="book"
					value={book}
					onChange={(e) => setBook(e.target.value)}
					required
				/>

				<label htmlFor="author">Author:</label>
				<input
					type="text"
					id="author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					required
				/>

				<button type="submit">Suggest</button>
			</form>
		</>
	);
}
