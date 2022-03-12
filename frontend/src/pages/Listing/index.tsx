import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  //Hooks são funções cujo comportamento está vinculado ao estado e ao ciclo de vida do React a partir de componentes funcionais.
  const [pageNumber, setPageNumber] = useState(0) //Manter estado no componente

  useEffect(() => {
    axios.get(`${BASE_URL}//movies?size=12&page=0`)
      .then(response => {
        const data = response.data as MoviePage
        setPageNumber(data.number)
      })
  }, [])
  //Executar algo na instanciação ou destruição do componente, observar estado


  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>

    </>
  );
}

export default Listing;