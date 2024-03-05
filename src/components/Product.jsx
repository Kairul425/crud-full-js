import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_APP_CATEGORY_COURSE)
      .then((res) => setDatas(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {datas?.map((data) => (
        <Card style={{ width: "18rem" }} key={data.id}>
          <Card.Img variant="top" src={data.imageUrl} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Product;
