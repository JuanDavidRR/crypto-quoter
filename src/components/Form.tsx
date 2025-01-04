import React, { useState } from "react";
import { currencies } from "../data/currencies";
import { useCryptoStore } from "../store";
import { Search } from "../types";
import ErrorMessage from "./ErrorMessage";

function Form() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);


  const [search, setSearch] = useState<Search>({
    currency: "",
    cryptocurrency: "",
  });

  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setError('All fields are required');
      return;
    }
    setError('');
    //Send the form data to the store
    fetchData(search);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Currency:</label>
        <select
          name="currency"
          id="currency"
          value={search.currency}
          onChange={handleChange}
        >
          <option value="">-- Select a currency --</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Cryptocurrency:</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          value={search.cryptocurrency}
          onChange={handleChange}
        >
          <option value="">-- Select cryptocurrency --</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Quote price" />
    </form>
  );
}

export default Form;
