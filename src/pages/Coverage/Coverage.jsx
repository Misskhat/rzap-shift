import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  const position = [23.8103, 90.4125];

  return (
    <div>
      <h3 className="my-5 text-3xl font-bold">
        We are available in 64 districts
      </h3>
      <input type="text" placeholder="Type here" className="input" />
      <div className="w-full h-[850px] my-5 rounded">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="w-full h-[855px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {services.map((ser, idx) => (
            <Marker key={idx} position={[ser.latitude, ser.longitude]}>
              <Popup>
                <strong>{ser.district}</strong>
                <br />
                {ser.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
