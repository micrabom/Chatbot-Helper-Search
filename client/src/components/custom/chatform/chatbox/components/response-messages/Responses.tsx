import { getConversationContents } from "@/services/chatbot/chatService";
import { useQuery } from "@tanstack/react-query";
import { Bot } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Responses = (props: any) => {
	const { conversationId } = props;

	const { data: chatConversationContentResponsessData } = useQuery({
		queryKey: ["chat-conversation-content-reponses", conversationId],
		queryFn: async () => await getConversationContents(conversationId),
	});

	return (
		<div className="flex justify-center items-start my-1">
			<div className="flex items-start">
				<Bot className="h-10 w-10 mr-1" />
			</div>
			<div>
				{chatConversationContentResponsessData?.data?.map(
					(item: any, index: any) => (
						<div
							key={index}
							className="bg-slate-200 flex flex-col w-11/12 border-l-blue-500 border-l-4 my-1"
						>
							<Link
								href={item?.link}
								className="text-lg ml-1 p-1 forced-color-adjust-auto text-blue-700"
							>
								{item?.title}
							</Link>
							<h4 className="text-xs ml-1  p-1 rounded-md my-1">
								{item?.content_message}
							</h4>
						</div>
					)
				)}
			</div>
		</div>
	);
};
