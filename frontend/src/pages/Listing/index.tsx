import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  //Hooks são funções cujo comportamento está vinculado ao estado e ao ciclo de vida do React a partir de componentes funcionais.
  const [pageNumber, setPageNumber] = useState(0) //Manter estado no componente

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then(response => {
        const data = response.data as MoviePage
        setPage(data)
      })
  }, [pageNumber])
  //Executar algo na instanciação ou destruição do componente, observar estado


  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          {page.content.map(movie => (

            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          )
          )}


        </div>
      </div>

    </>
  );
}

export default Listing;