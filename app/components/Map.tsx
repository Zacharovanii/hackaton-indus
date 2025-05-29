import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
	return (
		<MapContainer
			center={[51.505, -0.09]} // Лондон (пример)
			style={{ height: "100%", width: "100%" }}
			className="w-full h-full overflow-hidden"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>Мы здесь!</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
