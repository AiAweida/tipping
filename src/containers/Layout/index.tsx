import React from "react";
import Button from "../../components/button";
import Amount from "../../components/textbox";
interface buttonprops {}
export const InputLayout: React.FC<buttonprops> = () => {
  return (
    <>
      <Amount icon="bill" title="bill" />
      <div className="Input__container">
        <Button symbol="5%" />
        <Button symbol="10%" />
        <Button symbol="15%" />
        <Button symbol="25%" />
        <Button symbol="50%" />
      </div>
      <Amount icon="people" title="people" />
    </>
  );
};
