import { FC } from "react";
import './SendMoney.scss';
import ICONS from "../../images/icons";

export const SendMoney: FC = () => {
  return (
    <div className="SendMoney">
      <img className="SendMoney__icon" src={ICONS.sendHover} alt="Send" />
      <h2 className="SendMoney__title">Send Money</h2>
    </div>
  )
};