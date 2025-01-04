import Form from "./components/Form";
import PriceDetail from "./components/PriceDetail";
import { useCryptoStore } from "./store";
import { useEffect } from "react";

function App() {
  const fetchCrypto = useCryptoStore((state) => state.fetchCrypto);

  //Callinig the fetchCrypto function when the component mounts
  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <>
      <section className="container">
        <h1 className="app-title">
          <span> Crypto</span>
          Quoter
        </h1>
        <section className="content">
          <Form />
          <PriceDetail/>
        </section>
      </section>
    </>
  );
}

export default App;
