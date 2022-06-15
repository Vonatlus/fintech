import { useContext } from 'react';
import { FC } from 'react';
import { FintechContext } from '../../FintechContext';
import './Accounts.scss';

interface accountsData {
  title: string,
  currency: string,
  balance: number
}

const accountsData: accountsData[] = [
  {
    title: 'Euro (EUR)',
    currency: 'eur',
    balance: 133.2
  },
  {
    title: 'British Starling (GBP)',
    currency: 'gbp',
    balance: 110
  },
  {
    title: 'US Dollar (USD)',
    currency: 'usd',
    balance: 10234.2
  },
  {
    title: 'South Korea Won (KRW)',
    currency: 'krw',
    balance: 0
  },
]

function getCurrencySymbol(name: string) {
  switch (name) {
    case 'eur':
      return '€';
    case 'gbp':
      return '₤';
    case 'usd':
      return '$';
    case 'krw':
      return '￦';
    default:
      return '$';
  }
}

export const Accounts: FC = () => {
  const { setBalance } = useContext(FintechContext);

  function getBalance(cur: string, numb: number) {
    const balance = getCurrencySymbol(cur) + numb;
    setBalance(balance);
  }

  return (
    <section className='accounts'>
      <ul className='accounts__list'>
        <h2 className='accounts__list-title'>Your accounts</h2>
        {accountsData.map(({ currency, title, balance }) => (
          <li className='accounts__list-item' key={currency} onClick={() => getBalance(currency, balance)}>
            <span className='accounts__list-item-title'>
              <i className={`symbol symbol_${currency}`}>{getCurrencySymbol(currency)}</i>
              {title}
            </span>
            <span className='accounts__list-item-balance'>{getCurrencySymbol(currency)}{balance}</span>
          </li>
        ))}
      </ul>

      {/* <article className="accounts__advertising advertising">
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
      </article> */}
    </section>
  )
}