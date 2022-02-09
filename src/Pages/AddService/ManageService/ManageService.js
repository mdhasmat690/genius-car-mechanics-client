import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://intense-scrubland-02834.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  
  const hanledDelete = (id) => {
    const url = `https://intense-scrubland-02834.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2>This is ManageService</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => hanledDelete(service._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
