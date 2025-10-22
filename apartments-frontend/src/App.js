import React, { useEffect, useState } from "react";

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://web-app-production-befc.up.railway.app/apartments')
    .then(res => res.json())
    .then(data => {
      console.log(data); // See what shape you get!
      setApartments(Array.isArray(data) ? data : data.apartments);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);


  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: 32 }}>
      <h1>Apartment Listings</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Apartment Name</th>
            <th>Address</th>
            <th>Unit Number</th>
            <th>Min Rent</th>
            <th>Max Rent</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Available Date</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apt) => (
            <tr key={apt.id}>
              <td>{apt.id}</td>
              <td>{apt.apt_result_apartment_name}</td>
              <td>{apt.apt_result_address}</td>
              <td>{apt.apt_result_unit_number}</td>
              <td>{apt.apt_result_min_rent}</td>
              <td>{apt.apt_result_max_rent}</td>
              <td>{apt.apt_result_bed}</td>
              <td>{apt.apt_result_bath}</td>
              <td>{apt.apt_result_available_date_formatted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
