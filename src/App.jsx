import AllRoutes from "./AllRoutes/AllRoutes";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/navbar/Navbar";

const App = () => {
  return (
    <div className="max-w-[1550px] mx-auto">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
