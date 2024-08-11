import { HiOutlineSwitchVertical } from "react-icons/hi";

const SwitchCountries = ({ handleSwitchCountries }) => {
  return (
    <HiOutlineSwitchVertical
      className="switch-countries"
      onClick={handleSwitchCountries}
    />
  );
};

export default SwitchCountries;
