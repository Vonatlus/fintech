import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FintechContext } from '../../FintechContext';
import './Main.scss';
import ICONS from '../../images/icons';
import PICTURES from '../../images/pictures';

export const Main = () => {
  const {
    balance,
    setIsAdvertising,
    setProfileInfo,
    setAccontsTitle
  } = useContext(FintechContext);
  const navigate = useNavigate();

  function navigatePage(e: any) {
    navigate(e.target.value);
    setIsAdvertising(false);
    setProfileInfo('Setting');
    setAccontsTitle('Send Money From:');
  }

  return (
    <main className='main'>
      <p className='main__text'>Balance</p>
      <article className='main__balance'>
        <span className='main__balance-sum'>{balance}</span>
        <button
          className='main__balance-btn'
          value='/TopUp'
          onClick={navigatePage}
        >
          <img src={ICONS.pigHover} alt="Pig" />
          <p>Top up</p>
        </button>
      </article>

      <p className='main__text'>Quick Transaction</p>
      <article className='main__transaction'>
        <button
          className='main__transaction-btn main__transaction-btn_send'
          value='/SendMoney'
          onClick={navigatePage}
        >
          <img src={ICONS.sendHover} alt="Send" />
          <p>Send Money</p>
        </button>
        <button className='main__transaction-btn'>
          <img src={PICTURES.Leo} alt="Leo" />
          <p>Leo W.</p>
        </button>
        <button className='main__transaction-btn'>
          <img src={PICTURES.Monica} alt="Monica" />
          <p>Monica L.</p>
        </button>
      </article>

      <article className='main__info'>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src={ICONS.check} alt="Check" />
            Account Type:
          </span>
          <p className='main__info-desc'>Personal</p>
        </div>
        <div className="main__info-line"></div>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src={ICONS.coin} alt="Coins" />
            Currency
          </span>
          <p className='main__info-desc'>Euro EUR</p>
        </div>
      </article>

      <article className='main__info'>
        <div className='main__info-ceil'>
          <span className='main__info-title'>
            <img className='main__info-icon' src={ICONS.piggy} alt="Piggy-bank" />
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
            <img className='main__info-profile' src={PICTURES.manWithGlasses} alt="Man with glasses" />
            <img className='main__info-profile' src={PICTURES.womanRedHair} alt="Woman red hair" />
            <img className='main__info-profile' src={PICTURES.womanBrounHair} alt="Woman broun hair" />
            <img className='main__info-profile main__info-profile_circle' src={ICONS.circle} alt="Circle" />
          </div>
        </div>
      </article>
    </main>
  )

}