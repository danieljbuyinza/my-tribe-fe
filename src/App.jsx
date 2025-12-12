import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TribesPage, { tribesLoader } from "./pages/TribesPage";
import TribePage, { loader } from "./pages/TribePage";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/tribes",
				element: <TribesPage />,
				loader: tribesLoader,
			},
			{
				path: "/tribes/:slug",
				element: <TribePage />,
				loader: loader,
			},
			{
				path: "/sign-in",
				element: <SignInPage />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
