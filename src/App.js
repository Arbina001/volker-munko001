import logo from "./logo.svg";
import "./App.css";
import { Header } from "./header/header";
import { Footerpage } from "./footer/footer";
import { Mapspage } from "./maps/maps";
import { Advantagespage } from "./advantages/advantages";
import { Managmentpage } from "./assestmanagment/managment";
import { GlobalStyles } from "./App.style";
import { Housepage } from "./house/house";
import { Productpage } from "./products/products";
import { Financepage } from "./finance/finance";
function App() {
  return (
    <div>
      <Header />

      <Mapspage />
      <Advantagespage />
      <Managmentpage />
      <Productpage />
      <Housepage />
      <Financepage />
      <Footerpage />
      <GlobalStyles />
    </div>
  );
}

export default App;
