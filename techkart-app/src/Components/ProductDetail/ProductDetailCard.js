function ProductDetailCard({ image }) {

    const path = require(`../../Assets/Images/${image}`);
    
    return (
        <a href="#" class="list-group-item list-group-item-action border border-secondary-subtle rounded-0 p-2">
            <img src={path} width={'100%'} height={'64px'} />
        </a>
    )
}
export default ProductDetailCard;