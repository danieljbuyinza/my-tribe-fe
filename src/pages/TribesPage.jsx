import TribesList from "../TribesList.jsx";
import tribes from "../tribe-data.js";

export default function TribesPage() {
	return (
		<div className="p-3">
			<h1>Tribes</h1>
			<TribesList tribes={tribes} />
		</div>
	);
}
