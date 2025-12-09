import TribesList from "../TribesList.jsx";
import tribes from "../tribe-data.js";

export default function TribesPage() {
	return (
		<>
			<h1>Tribes</h1>
			<TribesList tribes={tribes} />
		</>
	);
}
