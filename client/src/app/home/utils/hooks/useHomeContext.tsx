"use client";

import { useContext } from "react";
import {
	HomeContext,
	type HomeContextType,
} from "../../context/HomeContextProvider";

export const useHomeContext = () => {
	const value = useContext(HomeContext);
	if (!value)
		throw new Error(
			"useHomeContext must be used within a HomeContextProvider"
		);
	return value;
};
