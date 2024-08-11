const TransactionBtn = ({ getExchangeRate }) => {
  return (
    <>
      {" "}
      <div className="Transaction-btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getExchangeRate()}
        >
          Convert
        </button>
      </div>
    </>
  );
};

export default TransactionBtn;
