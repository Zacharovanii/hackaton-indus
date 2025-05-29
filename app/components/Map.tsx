"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

interface MapWithRoutingProps {
	points: [number, number][];
}

const RoutingControl: React.FC<{ points: [number, number][] }> = ({
	points,
}) => {
	const map = useMap();

	useEffect(() => {
		if (!map || points.length < 2) return;

		const control = L.Routing.control({
			waypoints: points.map(([lat, lng]) => L.latLng(lat, lng)),
			lineOptions: {
				styles: [{ color: "#007bff", weight: 5 }],
			},
			routeWhileDragging: true,
			addWaypoints: false,
			draggableWaypoints: true,
			show: false,
			createMarker: (i, waypoint, n) => {
				return L.marker(waypoint.latLng, {
					icon: L.icon({
						iconUrl:
							"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
						iconSize: [25, 41],
						iconAnchor: [12, 41],
					}),
				}).bindPopup(`Точка ${i + 1}`);
			},
		}).addTo(map);

		return () => {
			map.removeControl(control);
		};
	}, [map, points]);

	return null;
};

const MapWithRouting: React.FC<MapWithRoutingProps> = ({ points }) => {
	const center = points.length ? points[0] : [55.751244, 37.618423];

	return (
		<MapContainer
			center={center as [number, number]}
			zoom={9}
			className="w-full h-[500px] rounded-lg overflow-hidden z-10"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{points.map(([lat, lng], idx) => (
				<Marker key={idx} position={[lat, lng]}>
					<Popup>Точка {idx + 1}</Popup>
				</Marker>
			))}
			<RoutingControl points={points} />
		</MapContainer>
	);
};

export default MapWithRouting;
