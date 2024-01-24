import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        // console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement... </p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div>
              {/* -- Seulement s'il y a une clé 'avatar' on affiche l'image */}
              {offer.owner.account.avatar && (
                <img src={offer.owner.account.avatar.secure_url} alt="" />
              )}
              <span>{offer.owner.account.username}</span>
            </div>

            <img src={offer.product_image.secure_url} alt="" />

            <p>
              {offer.product_price.toFixed(2).toString().replace(".", ",")} €
            </p>
          </Link>
        );
      })}
      t
    </div>
  );
};

export default Home;
