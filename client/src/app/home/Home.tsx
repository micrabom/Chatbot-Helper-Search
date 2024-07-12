import { Button } from "@/components/ui/button";
import React from "react";
import { Chatbot } from "./components/Chatbot";
import { HomeContextProvider } from "./context/HomeContextProvider";

const Homepage = () => {
	return (
		<>
			<HomeContextProvider>
				<Chatbot />
			</HomeContextProvider>
		</>
	);
};

export default Homepage;
