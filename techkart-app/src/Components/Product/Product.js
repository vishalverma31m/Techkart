import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { myContext } from '../Context/Context';

import ProductCard from './ProductCard';

function Product() {

  const { productData, filteredData } = useContext(myContext);
  const { name } = useParams();

  const filterData = productData?.filter((prd) => filteredData.every((data) => prd.description.toLowerCase().includes(data.toLowerCase())));
  
  return (
    <>
      <div className="container mt-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="col">
            <div className="fw-medium fs-4 my-2 mb-4 text-capitalize">{name}</div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {
            filterData?.map(card => (
              <ProductCard id={card.id} name={card.name} description={card.description}
                rating={card.rating} ratingcount={card.ratingcount} reviewcount={card.reviewcount} mrp={card.mrp} discount={card.discount} image={card.img} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Product;