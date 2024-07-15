"use client";

import { createContext, useState } from "react";

// Ensure the context is correctly typed
export interface HomeContextType {
	formValue: any;
	inputMessage: string;
	onChangeInputMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setInputMessage: (message: { content: string }) => void;
}
export const HomeContext = createContext<HomeContextType | undefined>(
	undefined
);

export interface OnboardingForm {
	companyName: string;
	companyIndustry: string;
	companyOpenAPIKey: string;
	companyOpenAPIOrganizationId: string;
	companyLangchainAPIKey: string;
}
export interface InputMessage {
	content: string;
}

export const HomeContextProvider = ({ children }: any) => {
	const [inputMessage, setInputMessage] = useState<any>({
		content: "",
	});
	const [formValue, setFormValue] = useState<OnboardingForm>({
		companyName: "",
		companyIndustry: "",
		companyOpenAPIKey: "",
		companyOpenAPIOrganizationId: "",
		companyLangchainAPIKey: "",
	});

	const onChangeNameCompany = (event: any) => {
		const { value } = event.target;
		setFormValue({ ...formValue, companyName: value });
	};

	const onChangeOpenAPIKey = (event: any) => {
		const { value } = event.target;
		setFormValue({ ...formValue, companyOpenAPIKey: value });
	};

	const onChangeOpenAPIIndustry = (event: any) => {
		const { value } = event.target;
		setFormValue({ ...formValue, companyOpenAPIOrganizationId: value });
	};

	const onChangeIndustry = (event: any) => {
		const { value } = event.target;
		setFormValue({ ...formValue, companyIndustry: value });
	};

	const onChangeOrganizationLangchainAPIKey = (event: any) => {
		const { value } = event.target;
		setFormValue({ ...formValue, companyLangchainAPIKey: value });
	};

	const onChangeInputMessage = (event: any) => {
		const { value } = event.target;
		const data: any = {
			content: value as string,
		};
		setInputMessage(data);
	};

	const contextValue: any = {
		onChangeInputMessage,
		inputMessage,
		setInputMessage,
		onChangeOrganizationLangchainAPIKey,
		onChangeOpenAPIIndustry,
		onChangeOpenAPIKey,
		onChangeIndustry,
		onChangeNameCompany,
		formValue,
		setFormValue,
	};

	return (
		<HomeContext.Provider value={contextValue}>
			{children}
		</HomeContext.Provider>
	);
};
