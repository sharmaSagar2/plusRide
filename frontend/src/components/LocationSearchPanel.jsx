/* eslint-disable react/prop-types */
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  
    // Sample array for location
    const locations = [
        { id: 1, name: 'New York', lat: 40.7128, lng: -74.0060 },
        { id: 2, name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
        { id: 3, name: 'Chicago', lat: 41.8781, lng: -87.6298 },
        { id: 4, name: 'Houston', lat: 29.7604, lng: -95.3698 },
        { id: 5, name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
        { id: 6, name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
        { id: 7, name: 'San Antonio', lat: 29.4241, lng: -98.4936 },
        { id: 8, name: 'San Diego', lat: 32.7157, lng: -117.1611 },
        { id: 9, name: 'Dallas', lat: 32.7767, lng: -96.7970 },
    ];

    return (
        <div>
            {locations.map((location) => (
                <div
                onClick={() =>
                    {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }

                }
                    key={location.id}
                    className="flex items-center border-2 p-3 border-gray-100 active:border-black rounded-xl gap-4 my-2 justify-start"
                >
                    <h2 className="bg-[#eee] px-3 h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-map-pin-line"></i>
                    </h2>
                    <h4 className="font-medium">{location.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;
