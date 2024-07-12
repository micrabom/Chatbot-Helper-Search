import { ChatForm } from "@/components/custom/chatform/ChatForm";

export const Chatbot = () => {
	return (
		<>
			<div className=" full grid grid-cols-1">
				<div className="min-h-full flex justify-center items-end p-1">
					<ChatForm />
				</div>
			</div>
		</>
	);
};
