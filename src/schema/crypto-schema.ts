import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

//Singular for for a single currency
export const CryptoCurrencySchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
    ImageUrl: z.string(),
  }),
});

//Plural for a list of currencies
export const CryptCurrenciesSchema = z.array(CryptoCurrencySchema);

export const SearchSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

export const CryptoPriceSchema = z.object({
  IMAGEURL: z.string(),
  PRICE: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string(),
});
