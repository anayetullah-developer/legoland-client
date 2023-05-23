import { Card, CardGroup } from "react-bootstrap";

import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
import img5 from "../../assets/banner/5.jpg";
import img6 from "../../assets/banner/6.jpg";
import img7 from "../../assets/banner/7.jpg";
import img8 from "../../assets/banner/8.jpg";


const Gallery = () => {
  return (
    <div className="mt-5">
      <h1 className="fs1 text-center mb-4">Photo Gallery</h1>
      <CardGroup>
        <Card className="img-hover">
          <Card.Img variant="top" src={img1} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img2} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img3} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img4} />
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="img-hover">
          <Card.Img variant="top" src={img5} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img6} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img7} />
        </Card>
        <Card className="img-hover">
          <Card.Img variant="top" src={img8} />
        </Card>
      </CardGroup>
    </div>
  );
};

export default Gallery;
