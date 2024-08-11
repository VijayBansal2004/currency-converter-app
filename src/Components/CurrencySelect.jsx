const currencySelect = ({
  title,
  currencyCodes,
  selectedCurrency,
  handleDropDown,
  amount,
  setAmount,
  inputResult,
  readOnlyInput,
}) => {
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <>
      {" "}
      <div className="from-container d-flex justify-content-between mb-4">
        <div className="from-money-container">
          <p>{title}</p>
          <input
            type="number"
            name="number"
            id="number"
            min={0}
            placeholder={amount}
            value={inputResult}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="from-country d-flex gap-2 align-items-center">
          <img
            src={`https://flagsapi.com/${countryCode}/flat/64.png`}
            alt="From Country"
          />
          <div className="from-dropDown-container">
            <select
              name="country"
              id="country-from"
              value={selectedCurrency}
              onChange={(e) => {
                handleDropDown(e);
              }}
            >
              {currencyCodes.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default currencySelect;
