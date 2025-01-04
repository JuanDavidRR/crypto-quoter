import axios from "axios";
import {
  CryptCurrenciesSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { Search } from "../types";

//logic for fetching data from the API
export default async function getCryptoData() {
  try {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    //Destructure data: data.data
    const {
      data: { Data },
    } = await axios(url);

    //Validate the data with our schema
    const result = CryptCurrenciesSchema.safeParse(Data);
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentCryptoPrice(search: Search) {
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${search.cryptocurrency}&tsyms=${search.currency}`;
    //Destructure data: data.data
    const {
      data: { DISPLAY },
    } = await axios(url);

    //Validate the data with our schema
    const result = CryptoPriceSchema.safeParse(
      DISPLAY[search.cryptocurrency][search.currency]
    );
    if (result.success) {
      return result.data
    }
  } catch (error) {
    console.error(error);
  }
}
