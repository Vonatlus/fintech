import { FC } from "react";
import './Advertising.scss';

export const Advertising: FC = () => {
  return (
    <>
      <article className="advertising">
        <div className="advertising__block">
          <div className="advertising__info">
            <img className="advertising__icon" src="/images/icons/card-icon.svg" alt="Card" />
            <div>
              <h4 className="advertising__title">Request a Card</h4>
              <span className="advertising__text">Get a debit card for free</span>
            </div>
          </div>
          <button className="advertising__btn">
            <img src="/images/icons/arrow-icon.svg" alt="Arrow" />
          </button>
        </div>

        <div className="advertising__block">
          <div className="advertising__info">
            <img className="advertising__icon" src="/images/icons/money-icon.svg" alt="Money" />
            <div>
              <h4 className="advertising__title">Earn £ 25 for free</h4>
              <span className="advertising__text">Apply for pension</span>
            </div>
          </div>
          <button className="advertising__btn">
            <img src="/images/icons/arrow-icon.svg" alt="Arrow" />
          </button>
        </div>
      </article>
    </>
  )
};