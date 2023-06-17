import "./HomePage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      axios
        .get("http://localhost:4000/api/beers")
        .then((response) => {
          console.log(response);
          setBeers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchBeers();
  }, []);

  const deleteBeer = (id) => {
    axios
      .delete(`http://localhost:4000/api/beers/${id}`)
      .then((response) => {
        const filteredBeers = beers.filter((beer) => {
          return beer._id !== id;
        });
        setBeers(filteredBeers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>List of beers</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer._id}>
              <h2>{beer.name}</h2>
              <p>{beer.description}</p>
              <p>{beer.alcohol}</p>
              <button onClick={() => deleteBeer(beer._id)}>Delete Beer</button>
              <button>Update Beer</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
