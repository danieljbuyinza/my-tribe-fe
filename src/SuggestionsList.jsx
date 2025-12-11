export default function SuggestionsList({ suggestedReads }) {
	return (
		<>
			<h3>Suggested:</h3>
			<ul>
				{suggestedReads.map((read, index) => (
					<li key={index}>
						{read.book} (written by {read.author}) - Suggested by{" "}
						{read.suggestedBy}
					</li>
				))}
			</ul>
		</>
	);
}
