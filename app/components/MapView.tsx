import React, { useState } from "react";
import { MapPin, Navigation, Car, Hotel, Fuel, Camera } from "lucide-react";

interface RoutePoint {
	id: string;
	name: string;
	region: string;
	type: "city" | "attraction" | "hotel" | "fuel" | "park";
	coordinates: [number, number];
	description: string;
}

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr: false });

const TravelMap = () => {
	const [selectedRoute, setSelectedRoute] = useState<string>("");

	const regions = [
		"Ростовская область",
		"Воронежская область",
		"Липецкая область",
		"Тульская область",
		"Орловская область",
		"Калужская область",
		"Тверская область",
		"Новгородская область",
		"Ленинградская область",
		"Ярославская область",
		"Вологодская область",
	];

	const routePoints: RoutePoint[] = [
		{
			id: "1",
			name: "Ростов-на-Дону",
			region: "Ростовская область",
			type: "city",
			coordinates: [47.2357, 39.7015],
			description:
				"Отправная точка маршрута. Древний город с богатой историей казачества.",
		},
		{
			id: "2",
			name: "Музей-заповедник Танаис",
			region: "Ростовская область",
			type: "attraction",
			coordinates: [47.2657, 39.3215],
			description:
				"Древнегреческий город и археологический музей под открытым небом.",
		},
		{
			id: "3",
			name: 'Отель "Дон Плаза"',
			region: "Ростовская область",
			type: "hotel",
			coordinates: [47.223, 39.7156],
			description: "4-звездочный отель в центре города с видом на Дон.",
		},
	];

	return (
		<div
			className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg 
			flex-2
		"
		>
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
					Интерактивная карта маршрута
				</h2>
				<p className="text-gray-600 dark:text-gray-300">
					Выберите области для построения оптимального маршрута
				</p>
			</div>

			{/* Region Selection */}
			<div className="mb-6">
				<h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">
					Выбор регионов маршрута
				</h3>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
					{regions.map((region, index) => (
						<button
							key={index}
							className="p-3 text-sm bg-white dark:bg-gray-700 border-2 border-blue-200 dark:border-blue-600 rounded-lg hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 text-gray-800 dark:text-gray-200"
						>
							{region}
						</button>
					))}
				</div>
			</div>

			{/* Map Placeholder */}
			<div className="relative bg-white dark:bg-gray-700 rounded-xl shadow-inner border-2 border-gray-200 dark:border-gray-600 h-96 mb-6">
				<MapWithNoSSR
					points={[
						[47.2226, 39.7186],
						[47.2689, 39.3347],
						[47.5397, 40.6564],
						[51.1439, 41.7214],
						[51.6586, 39.2028],
						[51.9147, 39.3458],
						[52.6058, 38.9269],
						[52.6111, 39.5997],
						[52.6175, 38.5014],
						[52.9686, 36.0714],
						[53.0242, 36.0425],
						[53.2667, 35.3],
						[54.0754, 37.5243],
						[54.1935, 37.6187],
						[54.1962, 37.6184],
					]}
				/>

				{/* Route Points Overlay */}
				<div className="absolute top-4 left-4 space-y-2">
					{routePoints.map((point) => (
						<div
							key={point.id}
							className="flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 shadow-sm"
						>
							{point.type === "city" && (
								<MapPin className="w-4 h-4 text-red-500 mr-2" />
							)}
							{point.type === "attraction" && (
								<Camera className="w-4 h-4 text-green-500 mr-2" />
							)}
							{point.type === "hotel" && (
								<Hotel className="w-4 h-4 text-blue-500 mr-2" />
							)}
							{point.type === "fuel" && (
								<Fuel className="w-4 h-4 text-orange-500 mr-2" />
							)}
							<span className="text-sm font-medium text-gray-700 dark:text-gray-200">
								{point.name}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Route Statistics */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Общее расстояние
							</p>
							<p className="text-2xl font-bold text-gray-800 dark:text-white">
								2,847 км
							</p>
						</div>
						<Car className="w-8 h-8 text-blue-500" />
					</div>
				</div>

				<div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Время в пути
							</p>
							<p className="text-2xl font-bold text-gray-800 dark:text-white">
								14 дней
							</p>
						</div>
						<Navigation className="w-8 h-8 text-green-500" />
					</div>
				</div>

				<div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-600">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Точек остановки
							</p>
							<p className="text-2xl font-bold text-gray-800 dark:text-white">
								47
							</p>
						</div>
						<MapPin className="w-8 h-8 text-red-500" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TravelMap;
