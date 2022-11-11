import React from "react";
import VertualPremium from "./VertualPremium";
import ZepCoinHeader from "./ZepCoinHeader";
import ZepTaintment from "./ZepTaintment";

const ZepCoinFeatures = (props) => {
  return (
    <>
      <ZepCoinHeader />
      <ZepTaintment />
      <VertualPremium />
      <ZepTaintment />
    </>
  );
};

export default ZepCoinFeatures;
