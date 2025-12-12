import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignInPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const goTo = useNavigate();

	async function signIn() {
		try {
			await signInWithEmailAndPassword(getAuth(), email, password);
			goTo("/tribes");
		} catch (e) {
			setError(e.message);
		}
	}

	return (
		<>
			<h1>Sign in</h1>
			<p>
				Reconnect with <strong>your people</strong>.
			</p>

			{error && <p>{error}</p>}

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

				<button type="button" onClick={signIn}>
					Sign in
				</button>
				<Link to="/sign-up">Don't have an account? Sign up</Link>
			</form>
		</>
	);
}
