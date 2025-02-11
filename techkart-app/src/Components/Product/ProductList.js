import Album from "./Product";
import Sidebar from "./Sidebar";

function ProductList(){
    return(
        <main className="d-flex flex-nowrap">
            <Sidebar/>
            <Album/>
        </main>
    )
}
export default ProductList;