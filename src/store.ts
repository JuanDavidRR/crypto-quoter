import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Search } from "./types";
import getCryptoData, {
  getCurrentCryptoPrice,
} from "./services/CryptoServices";

//store type
type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  result: CryptoPrice;
  loading: boolean;
  //hover over fetchCrypto to see the type
  fetchCrypto: () => Promise<void>;
  fetchData: (search: Search) => Promise<void>;
};

//store

//Define the type of the store
export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    //STATES
    cryptoCurrencies: [],
    result: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      LASTUPDATE: "",
    },
    //or
    // result : {} as CryptoPrice,
    loading: false,

    //ACTIONS
    //We have to make this function async because getCrytoData is an async function
    fetchCrypto: async () => {
      const cryptoCurrencies = await getCryptoData();
      set(() => ({
        //set the data to our cryptoCurrencies state
        cryptoCurrencies,
      }));
    },
    fetchData: async (search: Search) => {
      //Executing the loading state
      set(() => ({
        loading: true,
      }));
      const result = await getCurrentCryptoPrice(search);
      set(() => ({
        result,
        //When the result is done, switch to false
        loading: false,
      }));
    },
  }))
);
