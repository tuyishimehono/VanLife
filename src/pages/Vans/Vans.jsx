import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} className="w-96" />
        <div>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1 className="text-3xl font-semibold pb-10">Explore our van options</h1>
      <div className="flex flex-wrap gap-10">{vanElements}</div>
    </div>
  );
}