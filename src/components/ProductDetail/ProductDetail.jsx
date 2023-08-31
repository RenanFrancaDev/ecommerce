import "./index.scss";
import { Link } from "react-router-dom";

const ProductDetail = ({ data }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__left-side">
        <div className="product-detail__card">
          <img src={data.imgPathDetail} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>
      <div className="product-detail__right-side">
        <h1>Informações Sobre o Produto</h1>
        <h2>R${data.price}</h2>
        <p>
          Cor:{" "}
          {data.colors.length === 1
            ? //Condição for verdadeira:
              data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : //Condição não for verdadeira
              data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
        <div className="product-detail__cube-colors">
          {data.colors.map((color) => (
            <div
              className="product-detail__cube"
              style={{
                width: "64px",
                height: "60px",
                borderRadius: "10px",
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div>
        <p>Tamanho:</p>
        <div className="product-detail__sizes">
          {data.sizes.map((size) => (
            <span
              className="product-detail__span"
              style={{
                width: "55px",
                height: "58px",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "20px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {size}
            </span>
          ))}
        </div>
        <button>
          <Link to={`/pay/${data.id}`}>Finalizar Compra</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;