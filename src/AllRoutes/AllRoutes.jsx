import { Route, Routes } from "react-router-dom";
import Homepage from "./Home/Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
