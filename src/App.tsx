// import "./App.css";
import "./grid.css";
import getBeers from "./services/BeerAPIService";
import { Beer } from "./domain/Beer";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const beerPerPage: number = 8;
  // const [age, setAge] = useState<number>();

  useEffect(() => {
    console.log(currentPage, "useEffect currentPage");
    getBeers(currentPage, beerPerPage).then((beers) => {
      setBeers(beers);
    });
  }, [currentPage]);

  const beerList = beers.map((beer) => (
    <div className="card" key={beer.id}>
      <div className="img-container">
        <img src={beer.image_url} alt={beer.name}></img>
      </div>
      <div className="description-container">
        <h2>{beer.name}</h2>
        <p>
          {beer.volume.value} {beer.volume.unit}
        </p>
        {/* <p>{beer.description}</p> */}
      </div>
    </div>
  ));

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Beer list</h1>
        <div className="cards-container">{beerList}</div>
        <Pagination
          totalItems={325}
          itemsPerPage={beerPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
