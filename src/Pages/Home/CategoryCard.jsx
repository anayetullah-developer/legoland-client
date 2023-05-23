import { Card } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";

const CategoryCard = ({toy}) => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    const {price, productName, url} = toy;
  return (
    <div>
      <div className="col">
        <Card data-aos="fade-down"> 
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
