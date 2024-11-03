import HomeSlider from "./components/HomeSlider";
import JustLanded from "./components/JustLanded";
import Navbar from "./components/NavBar";
import ProductCategoriesSlider from "./components/ProductCategoriesSlider";
import ProductGrid from "./components/TrendingProducts";

function App() {
  return (
    <>
    <Navbar/>
      <HomeSlider/>
      <ProductCategoriesSlider/>
      <JustLanded/>
      <ProductGrid/>
    </>
  );
}

export default App;
