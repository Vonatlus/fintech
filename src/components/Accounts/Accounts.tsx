import { useContext, useState } from 'react';
import { FC } from 'react';
import { FintechContext } from '../../FintechContext';
import './Accounts.scss';

const accountsData = [
  {
    "title": "Euro (EUR)",
    "currency": "eur",
    "balance": 133.2
  },
  {
    "title": "British Sterling (GBP)",
    "currency": "gbp",
    "balance": 10
  },
  {
    "title": "US Dollar (USD)",
    "currency": "usd",
    "balance": 10234.2
  },
  {
    "title": "South Korea Won (KRW)",
    "currency": "krw",
    "balance": 0
  }
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
  const { setBalance, accontsTitle, isAdvertising } = useContext(FintechContext);
  const [isCurrencyActive, setIsCurrencyActive] = useState<string>('');

  function getBalance(cur: string, numb: number) {
    const balance = getCurrencySymbol(cur) + numb;
    setBalance(balance);
    setIsCurrencyActive(cur);
  }

  return (
    <section className='accounts'>
      <ul className='accounts__list'>
        <h2 className='accounts__list-title'>
          <i
            className="icon-rose-card-icon"
            style={{ marginRight: '10px', fontSize: '12px' }}
            hidden={isAdvertising}
          ></i>
          {accontsTitle}
        </h2>
        {accountsData.map(({ currency, title, balance }) => (
          <li
            className={`accounts__list-item ${currency === isCurrencyActive && 'accounts__list-item-active'}`}
            key={currency} onClick={() => getBalance(currency, balance)}
          >
            <span className='accounts__list-item-title'>
              <i className={`symbol symbol_${currency}`}>{getCurrencySymbol(currency)}</i>
              {title}
            </span>
            <span className='accounts__list-item-balance'>{getCurrencySymbol(currency)}{balance}</span>
          </li>
        ))}
      </ul>
    </section >
  )
}