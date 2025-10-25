import "@/components/ButtonSection.css";
import { montserrat } from "@/app/layout";

const ButtonSection = () => {
  return (
    <div className="button-container">
      <button className={`cart-button ${montserrat.className} `}>
        <i className="cart-icon"></i>
        Add to Cart
      </button>
    </div>
  );
};

export default ButtonSection;