import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User } from "lucide-react";
import "./ChatBox.style.css";
import { useQuery } from "@tanstack/react-query";
import { getChatMessages } from "@/services/chatbot/chatService";
import { getUserGithub } from "@/services/github/githubService";

const mockDataMessages = [
	{
		id: 3,
		content: "How are you?",
		type: "left",
	},
	{
		id: 4,
		content: "I'm doing well, thank you!",
		type: "right",
	},
];

export const ChatBox = () => {
	const { data: chatMessagesData } = useQuery({
		queryKey: ["chatMessages"],
		queryFn: async () => await getChatMessages(),
	});
	const { data: githubData } = useQuery({
		queryKey: ["xxxxxxxxxxxxxxxx"],
		queryFn: async () => await getUserGithub("micrabom"),
	});

	console.log(githubData);
	console.log(chatMessagesData?.data);
	return (
		<>
			<div className="container ">
				<h1 className="text-2xl">Chatbot</h1>
				<p className="mb-2 text-muted-foreground">
					Welcome to the chatbot interface
				</p>
				<div className="chat-container flex flex-col content-between ">
					<div className="bg-gray-300 p-2 h-[30rem] overflow-y-auto">
						{chatMessagesData &&
							chatMessagesData?.data?.map(
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
											<div className="flex justify-center items-center my-1">
												{message.message_type ===
													"response" && <Bot />}
												<h4 className="text-sm ml-1  bg-slate-200 p-1">
													{message.content}
												</h4>
												{message.message_type ===
													"input" && <User />}
											</div>
										</div>
									);
								}
							)}
					</div>
					<div className="chat-input my-1 flex">
						<Input type="text" placeholder="Type a message" />
						<Button className="ml-1">Send</Button>
					</div>
				</div>
			</div>
		</>
	);
};
