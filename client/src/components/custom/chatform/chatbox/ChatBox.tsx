import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Loader, User } from "lucide-react";
import "./ChatBox.style.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	getChatCoversations,
	getChatMessages,
	inputChatBotMessages,
} from "@/services/chatbot/chatService";
import { getUserGithub } from "@/services/github/githubService";
import { useState } from "react";
import { useHomeContext } from "@/app/home/utils/hooks/useHomeContext";
import { InputMessages } from "./components/input-messages/InputMessages";
import { Responses } from "./components/response-messages/Responses";

export const ChatBox = () => {
	const { formValue, inputMessage, onChangeInputMessage, setInputMessage } =
		useHomeContext();
	const queryClient = useQueryClient();

	const { data: chatConversationsData } = useQuery({
		queryKey: ["chatConversations"],
		queryFn: async () => await getChatCoversations(),
	});

	const { mutate: _handleInputMessage, isPending: loadingInput } =
		useMutation({
			mutationKey: ["inputMessage"],
			mutationFn: async () => await inputChatBotMessages(inputMessage),
			onSuccess: () => {
				queryClient.invalidateQueries({
					queryKey: ["chatConversations"],
				});
				setInputMessage({
					content: "",
				});
			},
		});

	const handleInputMessage = () => {
		_handleInputMessage();
	};

	return (
		<>
			<div className="container ">
				<h1 className="text-2xl">SearchBot</h1>
				<p className="text-xs mb-2 text-muted-foreground">
					Welcome to SearchBot, your intelligent and intuitive chatbot
					designed to make searching effortless and efficient. Whether
					you need quick answers or in-depth information, SearchBot
					Pro is here to assist you with precision and speed.
				</p>
				<div className="chat-container flex flex-col content-between ">
					<div className="bg-gray-300 p-2 h-[30rem] overflow-y-auto">
						{chatConversationsData &&
							chatConversationsData?.data?.map(
								(message: any, index: any) => {
									return (
										<div
											key={index}
											className={` chat-message chat-message-${
												message.message_type === "input"
													? "right"
													: "left"
											}`}
										>
											{message.message_type ===
												"input" && (
												<InputMessages
													conversationId={message.id}
												/>
											)}
											{message.message_type ===
												"response" && (
												<Responses
													conversationId={message.id}
												/>
											)}
										</div>
									);
								}
							)}
					</div>
					<div className="chat-input my-1 flex">
						<Input
							onChange={onChangeInputMessage}
							type="text"
							placeholder="Type a message"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleInputMessage();
								}
							}}
						/>
						<Button
							disabled={loadingInput}
							onClick={handleInputMessage}
							className="ml-1 w-60"
						>
							{loadingInput ? (
								<Loader className="animate-spin" />
							) : (
								"Search"
							)}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};
