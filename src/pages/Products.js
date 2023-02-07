import { productCard } from "../data/productCard";
import "../App.css";
import { ProductsPage } from "../data/pagesData";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {ProductsPage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}
      <div>
        <div>
          <input type="text" placeholder=" Search property" />
          <button>Find Now</button>
        </div>
        <button>Filter</button>
      </div>
      <div>
        <div>
          <div>
            <h1>Total Product</h1>
            <span>184</span>
          </div>
          <div>
            <span>Sort By</span>
          </div>
        </div>
        <div className="productCard">
          {productCard.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))}
        </div>
      </div>
      {/* <nav className="pagination flex flex-d">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
