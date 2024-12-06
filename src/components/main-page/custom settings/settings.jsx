import s from './setting.module.css'
import Weather from '../../../assets/wt.svg'
import IconUser from '../../../assets/iconUser.svg'

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
        <img src={Weather} alt="" />
        <p>weather</p>
      </div>
      <div className={s.icon}>
        <img src={Weather} alt="" />
        <p>weather</p>
      </div>
      <div className={s.icon}>
        <img src={Weather} alt="" />
        <p>weather</p>
      </div>
    </div>
    </>
  )
}

export default Setting