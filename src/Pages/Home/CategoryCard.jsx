import { Card } from "react-bootstrap";

const CategoryCard = ({toy}) => {
    const {price, productName, url} = toy;
  return (
    <div>
      <div className="col">
        <Card>
          <Card.Body>
            <img src={url} className="w-100 rounded" style={{height: "230px"}} alt="" />
            <div className="mt-5">
                <h4>{productName}</h4>
                <p className="fs-5 text-muted">${price}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CategoryCard;
