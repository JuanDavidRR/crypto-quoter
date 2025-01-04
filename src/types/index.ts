import { z } from "zod";
import {
  CryptoCurrencySchema,
  CryptoPriceSchema,
  CurrencySchema,
  SearchSchema,
} from "../schema/crypto-schema";

//Setting the type based on the schema
export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type Search = z.infer<typeof SearchSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
