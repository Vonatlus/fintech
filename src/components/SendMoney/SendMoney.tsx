import { FC } from "react";
import './SendMoney.scss';

export const SendMoney: FC = () => {
  return (
    <div className="SendMoney">
      <img className="SendMoney__icon" src="/images/icons/send-icon-hover.svg" alt="Send" />
      <h2 className="SendMoney__title">Send Money</h2>
    </div>
  )
};