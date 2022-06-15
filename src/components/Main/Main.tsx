import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FintechContext } from '../../FintechContext';
import './Main.scss';

export const Main = () => {
  const { balance } = useContext(FintechContext);

  const navigate = useNavigate();

  return (
    <main className='main'>
      <p className='main__text'>Balance</p>
      <article className='main__balance'>
        <span className='main__balance-sum'>{balance}</span>
        <button className='main__balance-btn' onClick={() => navigate('/TopUp')}>
          <img src="/images/icons/pig-icon-hover.svg" alt="Pig" />
          <p>Top up</p>
        </button>
      </article>

      <p className='main__text'>Quick Transaction</p>
      <article className='main__transaction'>
        <button className='main__transaction-btn main__transaction-btn_send' onClick={() => navigate('/SendMoney')}>
          <img src="/images/icons/send-icon-hover.svg" alt="Send" />
          <p>Send Money</p>
        </button>
        <button className='main__transaction-btn'>
          <img src="/images/pictures/Leo.png" alt="Leo" />
          <p>Lew W.</p>
        </button>
        <button className='main__transaction-btn'>
          <img src="/images/pictures/Monica.png" alt="Monica" />
          <p>Monica L.</p>
        </button>
      </article>

      <article className='main__info'>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src="/images/icons/check-icon.svg" alt="Check" />
            Account Type:
          </span>
          <p className='main__info-desc'>Personal</p>
        </div>
        <div className="main__info-line"></div>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src="/images/icons/coin-icon.svg" alt="Coins" />
            Currency
          </span>
          <p className='main__info-desc'>Euro EUR</p>
        </div>
      </article>

      <article className='main__info'>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src="/images/icons/piggy-bank-icon.svg" alt="Piggy-bank" />
            Passive Saving
          </span>
          <p className='main__info-desc'>Enabled 20%</p>
        </div>
        <div className="main__info-line"></div>
        <div className='main__info-ceil main__info-ceil_last'>
          <span className='main__info-title main__info-title_last'>
            Share Account
          </span>
          <div className='main__info-desc main__info-desc_img'>
            <img className='main__info-profile' src="/images/pictures/man-with-glasses.png" alt="Man with glasses" />
            <img className='main__info-profile' src="/images/pictures/woman-red-hair.png" alt="Woman red hair" />
            <img className='main__info-profile' src="/images/pictures/woman-broun-hair.png" alt="Woman broun hair" />
            <img className='main__info-profile main__info-profile_circle' src="/images/icons/circle-icon.svg" alt="Circle" />
          </div>
        </div>
      </article>
    </main>
  )

}