import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

function PriceDetail() {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  const isResulEmpty = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );
  return (
    <section>
      {loading ? <Spinner/> : isResulEmpty && (
        <div className="result-wrapper">
          <h2>Price quote</h2>
          <div className="result">
            <img
              src={`https://cryptocompare.com/${result.IMAGEURL}`}
              alt={`Cryptocurrency logo}`}
            />
            <div>
              <p>
                Price: <span>{result.PRICE}</span>
              </p>
              <p>
                Highest price: <span>{result.HIGHDAY}</span>
              </p>
              <p>
                Lowest price: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Last update: <span>{result.LASTUPDATE}</span>
              </p>
              <p>
                24 hour variation: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PriceDetail;
