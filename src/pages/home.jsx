import { Container, Button } from "react-bootstrap";

import Product from "../components/Product";
const Home = () => {
  return (
    <Container>
      <h1 className="text-center mt-5 mb-3">CRUD full JS</h1>
      <Button variant="primary" className="mb-3">
        add
      </Button>
      <Product />
    </Container>
  );
};

export default Home;
