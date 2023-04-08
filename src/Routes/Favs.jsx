import React from "react";
import Card, {getFavStorage} from "../Components/Card";

const Favs = () => {
  const LocalFavs = getFavStorage();

  return (
    <div>
      <h1>Aquí encuentras a tus dentistas favoritos</h1>
      <div className="container card-grid ">
        {LocalFavs.length
          ? LocalFavs.map((dentistFav) => (
              <Card {...dentistFav} key={dentistFav.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Favs;
