import React, { useState } from "react";
import {
	Bot,
	User,
	Sparkles,
	MessageCircle,
	Volume2,
	Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GuideCharacter {
	id: string;
	name: string;
	type: "human" | "robot" | "fairy-tale";
	avatar: string;
	personality: string;
	specialization: string;
}

const AIGuide = () => {
	const [selectedCharacter, setSelectedCharacter] = useState<string>("");
	const [isListening, setIsListening] = useState(false);
	const [chatMessages, setChatMessages] = useState([
		{
			id: "1",
			sender: "guide",
			message:
				"Привет! Я ваш персональный AI-гид. Готов помочь спланировать незабываемое путешествие по России!",
			timestamp: new Date(),
		},
	]);

	const characters: GuideCharacter[] = [
		{
			id: "elena",
			name: "Елена",
			type: "human",
			avatar: "👩‍🦰",
			personality: "Дружелюбная и опытная",
			specialization: "Историк-краевед",
		},
		{
			id: "robo",
			name: "РOБO-Гид",
			type: "robot",
			avatar: "🤖",
			personality: "Точный и технологичный",
			specialization: "Навигация и логистика",
		},
		{
			id: "firebird",
			name: "Жар-птица",
			type: "fairy-tale",
			avatar: "🔥🐦",
			personality: "Мистическая и мудрая",
			specialization: "Фольклор и традиции",
		},
	];

	const handleSendMessage = (message: string) => {
		const newMessage = {
			id: Date.now().toString(),
			sender: "user",
			message,
			timestamp: new Date(),
		};
		setChatMessages([...chatMessages, newMessage]);

		setTimeout(() => {
			const aiResponse = {
				id: (Date.now() + 1).toString(),
				sender: "guide",
				message: "Отличный вопрос! Я подберу для вас лучшие варианты...",
				timestamp: new Date(),
			};
			setChatMessages((prev) => [...prev, aiResponse]);
		}, 1000);
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Sparkles className="w-5 h-5 text-purple-500" />
						Выбор AI-гида
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{characters.map((character) => (
							<div
								key={character.id}
								className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
									selectedCharacter === character.id
										? "border-purple-500 bg-purple-50"
										: "border-gray-200 hover:border-purple-300"
								}`}
								onClick={() => setSelectedCharacter(character.id)}
							>
								<div className="text-center">
									<div className="text-4xl mb-2">{character.avatar}</div>
									<h3 className="font-semibold text-gray-800">
										{character.name}
									</h3>
									<p className="text-sm text-gray-600 mb-2">
										{character.personality}
									</p>
									{/* <Badge variant="secondary" className="text-gray-50 text-wrap">
										{character.specialization}
									</Badge> */}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Chat Interface */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<MessageCircle className="w-5 h-5 text-blue-500" />
							Диалог с AI-гидом
						</div>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="sm"
								onClick={() => setIsListening(!isListening)}
								className={isListening ? "bg-red-50 border-red-300" : ""}
							>
								<Volume2 className="w-4 h-4" />
								{isListening ? "Остановить" : "Голос"}
							</Button>
							<Button variant="outline" size="sm">
								<Settings className="w-4 h-4" />
							</Button>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{/* Chat Messages */}
					<div className="bg-background rounded-lg p-4 h-64 overflow-y-auto mb-4 space-y-3">
						{chatMessages.map((msg) => (
							<div
								key={msg.id}
								className={`flex ${
									msg.sender === "user" ? "justify-end" : "justify-start"
								}`}
							>
								<div
									className={`max-w-xs p-3 rounded-lg ${
										msg.sender === "user"
											? "bg-blue-500 text-white"
											: "bg-black border border-gray-200"
									}`}
								>
									<p className="text-sm">{msg.message}</p>
								</div>
							</div>
						))}
					</div>

					{/* Quick Actions */}
					<div className="space-y-2">
						<p className="text-sm font-medium text-gray-700">
							Быстрые вопросы:
						</p>
						<div className="flex flex-wrap gap-2">
							{[
								"Лучшие отели на маршруте?",
								"Где заправиться?",
								"Достопримечательности рядом?",
								"Местная кухня?",
							].map((question) => (
								<Button
									key={question}
									variant="outline"
									size="sm"
									className="text-xs"
									onClick={() => handleSendMessage(question)}
								>
									{question}
								</Button>
							))}
						</div>
					</div>

					{/* Message Input */}
					<div className="flex gap-2 mt-4">
						<input
							type="text"
							placeholder="Задайте вопрос AI-гиду..."
							className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									handleSendMessage((e.target as HTMLInputElement).value);
									(e.target as HTMLInputElement).value = "";
								}
							}}
						/>
						<Button>Отправить</Button>
					</div>
				</CardContent>
			</Card>

			{/* AI Guide Features */}
			<Card>
				<CardHeader>
					<CardTitle>Возможности AI-гида</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-3">
							<h4 className="font-semibold text-gray-800">
								Планирование маршрута
							</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Оптимизация по времени и расстоянию</li>
								<li>• Учет личных предпочтений</li>
								<li>• Рекомендации остановок</li>
								<li>• Прогноз погоды на маршруте</li>
							</ul>
						</div>

						<div className="space-y-3">
							<h4 className="font-semibold text-gray-800">
								Интерактивные функции
							</h4>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Голосовые заметки и рефлексия</li>
								<li>• Автоматическое ведение дневника</li>
								<li>• Интеграция с соцсетями</li>
								<li>• Создание итогового отчета</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default AIGuide;
