import { NavLink } from "react-router-dom";

import './ProductCard.css';

function ProductCard({ id, description, rating, ratingcount, mrp, discount, image }) {

    const path1 = require(`../../Assets/Images/${image[0]}`);
    const path2 = require(`../../Assets/Images/${image[1]}`);
    const path3 = require(`../../Assets/Images/${image[2]}`);

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div id={id} className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-item active">
                        <img src={path1} className="d-block w-100" alt="..." height={'200px'} />
                    </div>
                    <div className="carousel-item">
                        <img src={path2} className="d-block w-100" alt="..." height={'200px'} />
                    </div>
                    <div className="carousel-item">
                        <img src={path3} className="d-block w-100" alt="..." height={'200px'} />
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="card-body">
                    <NavLink className="text-decoration-none text-dark" to={id}>
                        <p class="card-text text-center truncate">{description}</p>
                        <div className='text-center'>
                            <button type="button" class="btn btn-success px-2 py-0"><small>{rating}</small>
                                <i class="bi bi-star-fill ps-1"></i>
                            </button>
                            <span className='fw-light ps-2'>({ratingcount})</span>
                        </div>
                        <div className='text-center pt-2'>
                            <span className='h5'>₹{mrp}</span>
                            <small className='text-decoration-line-through mx-2'>₹{mrp}</small>
                            <small className='fw-medium text-success'>{discount}% off</small>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;