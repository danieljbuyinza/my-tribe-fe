import { useLoaderData } from "react-router-dom";
import axios from "axios";
import TribesList from "../TribesList.jsx";

export default function TribesPage() {
	const { tribes } = useLoaderData();
	return (
		<div className="p-3">
			<h1>Tribes</h1>
			<TribesList tribes={tribes} />
		</div>
	);
}

export async function tribesLoader() {
	const response = await axios.get("/api/tribes");
	const { tribes } = response.data;
	return {
		tribes,
	};
}
