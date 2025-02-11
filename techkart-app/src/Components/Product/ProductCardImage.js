function ProductCardImage({ img }) {

    const path = require(`../../Assets/Images/${img}`)

    return (
        <div class="carousel-item">
            <img src={path} class="d-block w-100" alt="..." />
        </div>

    )
}
export default ProductCardImage;