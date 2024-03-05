import HomePage from "./components/HomePage";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
};

export default App;
