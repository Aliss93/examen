import { fraunces, montserrat } from "@/app/layout";
import "@/components/product.css";
import ButtonSection from "./ButtonSection";

const Product = ({product}:any) => {
  return (
    <section className="background-white ">
      <img
        src= {product.image}
        alt="imagen del producto"
      />
      <div className="detalles">
        <h3 className={`${montserrat.className} `}>{product.category} </h3>
        <h2 className={`${fraunces.className} font-semibold`}>
          {product.name}
        </h2>
        <p className={`${montserrat.className} `}>{product.description}
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <span className={`${fraunces.className} font-semibold precio`}>
            $149.99
          </span>
          <span className="precio-antiguo">$169.99</span>
        </div>
        <ButtonSection />
      </div>
    </section>
  );
};

export default Product;