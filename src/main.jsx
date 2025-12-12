import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCBtzrH6g99ShJBYtPr_CFXh2CcwjMFoIk",
	authDomain: "my-tribe-5f441.firebaseapp.com",
	projectId: "my-tribe-5f441",
	storageBucket: "my-tribe-5f441.firebasestorage.app",
	messagingSenderId: "167195945812",
	appId: "1:167195945812:web:932463b06c74de2fc636c1",
	measurementId: "G-LNFBG9Z70V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
