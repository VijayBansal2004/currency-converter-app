import { useState, useEffect } from "react";
import CurrencySelect from "./Components/CurrencySelect";
import AdditionalInfo from "./Components/AdditionalInfo";
import TransactionBtn from "./Components/TransactionBtn";
import SwitchCountries from "./SwitchCountries";
import "./App.css";
function App() {
  const currencyCodes = [
    "AFN",
    "EUR",
    "ALL",
    "DZD",
    "USD",
    "AOA",
    "ARS",
    "AMD",
    "AWG",
    "AUD",
    "AZN",
    "BSD",
    "BHD",
    "BDT",
    "BBD",
    "BYN",
    "BZD",
    "BMD",
    "INR",
    "BTN",
    "BOB",
    "BOV",
    "BAM",
    "BWP",
    "NOK",
    "BRL",
    "BND",
    "BGN",
    "BIF",
    "CVE",
    "KHR",
    "CAD",
    "KYD",
    "CLP",
    "CLF",
    "CNY",
    "COP",
    "COU",
    "KMF",
    "CDF",
    "NZD",
    "CRC",
    "HRK",
    "CUP",
    "CUC",
    "ANG",
    "CZK",
    "DKK",
    "DJF",
    "DOP",
    "EGP",
    "SVC",
    "ERN",
    "SZL",
    "ETB",
    "FKP",
    "FJD",
    "GMD",
    "GEL",
    "GHS",
    "GIP",
    "GTQ",
    "GBP",
    "GNF",
    "GYD",
    "HTG",
    "HNL",
    "HKD",
    "HUF",
    "ISK",
    "IDR",
    "IRR",
    "IQD",
    "ILS",
    "JMD",
    "JPY",
    "JOD",
    "KZT",
    "KES",
    "KPW",
    "KRW",
    "KWD",
    "KGS",
    "LAK",
    "LBP",
    "LSL",
    "ZAR",
    "LRD",
    "LYD",
    "CHF",
    "MOP",
    "MGA",
    "MWK",
    "MYR",
    "MVR",
    "MRU",
    "MUR",
    "XUA",
    "MXN",
    "MXV",
    "MDL",
    "MNT",
    "MAD",
    "MZN",
    "MMK",
    "NAD",
    "NPR",
    "NIO",
    "NGN",
    "OMR",
    "PKR",
    "PAB",
    "PGK",
    "PYG",
    "PEN",
    "PHP",
    "PLN",
    "QAR",
    "MKD",
    "RON",
    "RUB",
    "RWF",
    "SHP",
    "WST",
    "STN",
    "SAR",
    "RSD",
    "SCR",
    "SLL",
    "SGD",
    "XSU",
    "SBD",
    "SOS",
    "SSP",
    "LKR",
    "SDG",
    "SRD",
    "SEK",
    "CHE",
    "CHW",
    "SYP",
    "TWD",
    "TJS",
    "TZS",
    "THB",
    "TOP",
    "TTD",
    "TND",
    "TRY",
    "TMT",
    "UGX",
    "UAH",
    "AED",
    "USN",
    "UYU",
    "UYI",
    "UYW",
    "UZS",
    "VUV",
    "VES",
    "VND",
    "YER",
    "ZMW",
    "ZWL",
  ];
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(0);

  // const [fromInput, setFromInput] = useState();
  const [toInput, setToInput] = useState();

  const [from, setFrom] = useState("AUD");
  const [to, setTo] = useState("NPR");

  const getExchangeRate = async () => {
    const API_KEY = `9a511985466bca269731e507`;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something Went Wrong!");
      const data = await response.json();
      setRate(data.conversion_rate.toFixed(2));
      const rate = (data.conversion_rate * amount).toFixed(2);
      setToInput(rate);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExchangeRate();
  }, [toInput]);

  const handleSwitchCountries = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div className="main-container">
      <div className="white-background">
        <CurrencySelect
          amount={amount}
          setAmount={setAmount}
          handleDropDown={(e) => setFrom(e.target.value)}
          selectedCurrency={from}
          title="You send"
          currencyCodes={currencyCodes}
        />
        <AdditionalInfo
          amount={amount}
          rate={rate}
          selectedCurrencyFrom={from}
          selectedCurrencyTo={to}
          toInput={toInput}
        />
        <SwitchCountries handleSwitchCountries={handleSwitchCountries} />
        <CurrencySelect
          inputResult={toInput}
          amount={amount}
          setAmount={setAmount}
          handleDropDown={(e) => setTo(e.target.value)}
          selectedCurrency={to}
          title="Recipient gets"
          currencyCodes={currencyCodes}
        />
        <TransactionBtn getExchangeRate={getExchangeRate} />
      </div>
    </div>
  );
}

export default App;
