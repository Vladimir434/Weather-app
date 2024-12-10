/* eslint-disable react/prop-types */
import s from './data.module.css'

const Data = ({img,name,param}) => {
  return (
    <div className={s.cnt_params}>
      <div className={s.block_wrapper}>
        <div className={s.block}>
          <img src={img} alt="что-то не так" />
          <p>{name}</p>
        </div>
        <h3>{param}</h3>
      </div>
    </div>
  )
}

export default Data