import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  //   console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <main className="offerPage">
      <div>
        <img src={data.product_image.secure_url} alt="" />

        <div>
          <p>{data.product_price} €</p>

          <div>
            {data.product_details.map((detail, index) => {
              // -- Utilisation de 'Object.keys' pour récupérer le nom de la clé puis pouvoir l'afficher et afficher sa valeur
              const keyTab = Object.keys(detail);
              console.log(keyTab[0]);
              return (
                <div key={index}>
                  <p>
                    {keyTab[0]} : {detail[keyTab[0]]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Offer;
