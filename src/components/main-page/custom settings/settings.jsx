import s from './setting.module.css'
import Weather from '../../../assets/wt.svg'
import IconUser from '../../../assets/iconUser.svg'
import Location from '../../../assets/Location.svg'
import Explore from '../../../assets/Explore.svg'
import Settings from '../../../assets/Settings-alt.svg'

const Setting = () => {
  return (
    <>
    <img className={s.icon_user} src={IconUser} alt="" />
    <div className={s.setting_cnt}>
      <div className={s.icon}>
        <img src={Weather} alt="" />
        <p>weather</p>
      </div>
      <div className={s.icon}>
        <img src={Explore} alt="" />
        <p>explore</p>
      </div>
      <div className={s.icon}>
        <img src={Location} alt="" />
        <p>cities</p>
      </div>
      <div className={s.icon}>
        <img src={Settings} alt="" />
        <p>setting</p>
      </div>
    </div>
    </>
  )
}

export default Setting