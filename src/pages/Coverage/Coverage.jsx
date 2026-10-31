import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const [services, setServices] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);
  const position = [23.8103, 90.4125];

  const onSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const searchTrims = search.trim().toLowerCase();
    console.log(search);
    const district = services.find((location) =>
      location.district.toLowerCase().includes(searchTrims),
    );
    console.log(district);

    if (district) {
      const latitude = district.latitude;
      const longitude = district.longitude;
      const location = [latitude, longitude];

      console.log(district, location);
      mapRef.current.flyTo(location, 12, { duration: 2.5 });
    } else {
      alert("No district found");
      e.target.search.value = "";
    }
  };

  return (
    <div>
      <h3 className="my-5 text-3xl font-bold">
        We are available in 64 districts
      </h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type here"
          className="input"
          name="search"
        />
      </form>
      <div className="w-full h-[800px] my-5 rounded">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
          className="w-full h-full"
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
