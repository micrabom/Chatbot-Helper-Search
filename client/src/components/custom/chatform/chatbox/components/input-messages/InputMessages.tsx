import { getConversationContents } from "@/services/chatbot/chatService";
import { useQuery } from "@tanstack/react-query";
import { User } from "lucide-react";
import React from "react";

export const InputMessages = (props: any) => {
	const { conversationId } = props;
	const { data: chatConversationContentInputsData } = useQuery({
		queryKey: ["chat-conversation-contents-inputs", conversationId],
		queryFn: async () => await getConversationContents(conversationId),
	});

	return (
		<div className="flex justify-center items-center my-5">
			<h4 className="text-sm ml-1  bg-slate-200 p-1 border-r-green-500 border-r-4">
				{chatConversationContentInputsData?.data?.[0]?.content_message}
			</h4>
			<User />
		</div>
	);
};
