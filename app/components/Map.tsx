import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
	return (
		<MapContainer
			center={[55.64, 37.5]} // Москва
			zoom={9}
			// style={{ height: "100%", width: "100%" }}
			className="w-full h-full overflow-hidden z-10"
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
