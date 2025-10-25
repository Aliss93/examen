import Product from "./Product";
import "@/components/ProductCard.css";

const ProductCard = ({productList}:any ) => {
  return (
    <div className="product-card">
      {productList.map((product:any)=> {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductCard; 