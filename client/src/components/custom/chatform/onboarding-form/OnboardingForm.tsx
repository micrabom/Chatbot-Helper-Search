import { OnboardingForm } from "@/app/home/context/HomeContextProvider";
import { useHomeContext } from "@/app/home/utils/hooks/useHomeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const OnboardingFormC = () => {
	const { onChangeNameCompany, onChangeIndustry, formValue } =
		useHomeContext();
	const { companyOpenAPIKey, companyName, companyIndustry }: OnboardingForm =
		formValue;

	if (companyOpenAPIKey) {
		console.log("Open API key: is not empty");
	}

	/* --> Debugging Logs
	 ****************************** */
	// console.log("Company Name: ", companyName);
	// console.log("Company Industry: ", companyIndustry);
	return (
		<>
			<div className="mx-auto grid w-[350px] gap-3">
				<div className="grid gap-2 w-full">
					<h1 className="text-start text-3xl font-bold">
						Onboarding
					</h1>
					<p className="w-fit text-start text-balance text-muted-foreground">
						Onboard your company that so that the chatbot will
						understand make it function for your compan\ y
					</p>
				</div>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="company_name">Company Name</Label>
						<Input
							onChange={onChangeNameCompany}
							type="text"
							id="company_name"
							placeholder="XYZ Inc."
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="company_industry">Industry</Label>
						<Input
							onChange={onChangeIndustry}
							type="text"
							id="company_industry"
							placeholder="Restaurant, IT Consulting, Manufacturer, etc..."
							required
						/>
					</div>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</div>
			</div>
		</>
	);
};
