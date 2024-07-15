"use client";

import { ChatBox } from "./chatbox/ChatBox";
import { OnboardingFormC } from "./onboarding-form/OnboardingForm";

export function ChatForm() {
	return (
		<div className="w-full grid lg:min-h-[600px] grid-cols-1">
			{/* <div className="flex items-center justify-center py-5">
				<OnboardingFormC />
			</div> */}
			<div className="bg-muted lg:block w-10/12 mx-auto">
				<ChatBox />
			</div>
		</div>
	);
}
