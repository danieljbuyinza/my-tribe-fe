import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const goTo = useNavigate();

	async function signUp() {
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		try {
			await createUserWithEmailAndPassword(getAuth(), email, password);
			goTo("/tribes");
		} catch (e) {
			setError(e.message);
		}
	}

	return (
		<>
			<h1>Sign up</h1>
			<p>
				Find <strong>your people</strong>.
			</p>

			<div className="bg-red-700 inline-block p-1">
				{error && <p>{error}</p>}
			</div>

			<form>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your email"
				/>

				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>

				<input
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder="Confirm password"
				/>

				<button type="button" onClick={signUp}>
					Sign up
				</button>
				<Link to="/sign-in">Already have an account? Sign in</Link>
			</form>
		</>
	);
}
