"use client";

import { createContext, useState } from "react";

export const HomeContext = createContext(null);

export interface OnboardingForm {
	companyName: string;
	companyIndustry: string;
	companyOpenAPIKey: string;
	companyOpenAPIOrganizationId: string;
	companyLangchainAPIKey: string;
}

export const HomeContextProvider = ({ children }: any) => {
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
	const contextValue: any = {
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
