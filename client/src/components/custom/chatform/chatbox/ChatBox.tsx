import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User } from "lucide-react";
import "./ChatBox.style.css";

const mockDataMessages = [
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",

		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	{
		id: 1,
		content: "Hello",
		type: "left",
	},
	{
		id: 2,
		content: "Hi there!",
		type: "right",
	},
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
	return (
		<>
			<div className="container ">
				<h1 className="text-2xl">Chatbot</h1>
				<p className="mb-2 text-muted-foreground">
					Welcome to the chatbot interface
				</p>
				<div className="chat-container flex flex-col content-between ">
					<div className="bg-gray-300 p-2 h-[35rem] overflow-y-auto">
						{mockDataMessages.map((message: any, index: any) => {
							return (
								<div
									key={index}
									className={` chat-message chat-message-${message.type}`}
								>
									<div className="flex justify-center items-center">
										{message.type === "left" ? (
											<Bot />
										) : (
											<User />
										)}
										<h4 className="text-sm ml-1">
											{message.content}
										</h4>
									</div>
								</div>
							);
						})}
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
