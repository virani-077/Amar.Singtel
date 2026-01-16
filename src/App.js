import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import ThankYou from "./pages/ThankYou/ThankYou";
const Products = lazy(() => import("./pages/Products/Products"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div style={{ padding: "50px", textAlign: "center" }}>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="thank-you" component={ThankYou} />
      </Switch>
      </Suspense>
      <Footer />
      <WhatsAppButton/>
    </>
  );
}

export default App;