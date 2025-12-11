import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TribesPage from "./pages/TribesPage";
import TribePage, { loader } from "./pages/TribePage";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage";

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
			},
			{
				path: "/tribes/:slug",
				element: <TribePage />,
				loader: loader,
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
