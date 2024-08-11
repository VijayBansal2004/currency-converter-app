import { RxCrossCircled } from "react-icons/rx";
import { GrSubtractCircle } from "react-icons/gr";
import { LuCircleEqual } from "react-icons/lu";

const AdditionalInfo = ({
  amount,
  rate,
  selectedCurrencyFrom,
  selectedCurrencyTo,
  toInput,
}) => {
  return (
    <>
      {" "}
      <div className="additional-info-container mb-4">
        <div className="special-rate d-flex justify-content-between">
          <div className="rate d-flex gap-2">
            <RxCrossCircled className="svg" />
            <p>
              1 {selectedCurrencyFrom} = {rate} {selectedCurrencyTo}
            </p>
          </div>
          <div className="special-rate-text">
            <p>Special Rate</p>
          </div>
        </div>

        <div className="zero-fees d-flex justify-content-between">
          <div className="fees d-flex gap-2">
            <GrSubtractCircle className="svg" />
            <div>
              <p>Zero Fees</p>
              <p>Special offer</p>
            </div>
          </div>
          <div className="zero-fees-text">
            <p>Fees</p>
          </div>
        </div>

        <div className="Total-amount d-flex justify-content-between">
          <div className="amount d-flex gap-2">
            <LuCircleEqual className="svg" />
            <p className="scroll">
              {amount} {selectedCurrencyFrom}
            </p>
          </div>
          <div className="Total-amount-text">
            <p>Total amount will convert</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
