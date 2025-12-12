import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./useUser";

export default function NavBar() {
	const { isLoading, user } = useUser();

	const goTo = useNavigate();

	return (
		<nav className=" bg-cyan-300 flex justify-between p-3">
			<ul className="flex my-auto gap-5 text-indigo-700">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/tribes">Tribes</Link>
				</li>
			</ul>

			<ul className="flex my-auto gap-5">
				{isLoading ? (
					<li>Loading...</li>
				) : (
					<>
						{user && (
							<li className="my-auto text-indigo-700">
								<p>Signed in as: {user.email}</p>
							</li>
						)}
						<li>
							{user ? (
								<button type="button" onClick={() => signOut(getAuth())}>
									Sign out
								</button>
							) : (
								<button
									type="button"
									onClick={() => goTo("/sign-in")}
									className="bg-neutral-900"
								>
									Sign in
								</button>
							)}
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
