"use client";

import { useContext } from "react";
import { HomeContext } from "../../context/HomeContextProvider";

export const useHomeContext = () => {
	const value = useContext(HomeContext);
	if (!value)
		throw new Error(
			"useHomeContext must be used within a HomeContextProvider"
		);
	return value;
};
