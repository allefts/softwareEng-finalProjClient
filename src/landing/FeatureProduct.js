import metalStraw from "../metal-straw.jpg";
import { Link } from "react-router-dom";

function FeatureProduct() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark contain"
          height="240"
          alt=""
          src={metalStraw}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Metal Straw 5pk</h5>
          <p className="card-text text-center text-muted">$30.00</p>
          <div className="d-grid gap-2">
            <Link to="/products/1" className="btn btn-outline-dark" replace>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
