import React from "react";
import Button from "../../components/button";
interface buttonprops {}
export const Buttons: React.FC<buttonprops> = () => {
  return (
    <div className="Input__container">
      <Button symbol="5%" />
      <Button symbol="10%" />
      <Button symbol="15%" />
      <Button symbol="25%" />
      <Button symbol="50%" />
    </div>
  );
};
