import { useEffect } from "react";
import { instanse } from "../../api/instons";
import { useState } from "react";
import { apiURL } from "../../api/api";
import imgName1 from "../../assets/imgName1.svg";
import imgName2 from "../../assets/imgName2.svg";
import RainImg from "../../assets/RainImg.svg";
import SunnyImg from "../../assets/SunnyImg.svg";
import CloudyImg from "../../assets/CloudyImg.svg";
import ThunderstormImg from "../../assets/ThunderstormImg.svg";
import s from "./main-page.module.css";
import Setting from "./custom settings/settings";
const WeatherPage = () => {
  const [weathetData, setWeathetData] = useState("");
  const [city, setCity] = useState("New York");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await instanse.get(
          `weather?q=${city}&units=metric&appid=${apiURL}`
        );
        setWeathetData(data.data);
        console.log(data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    getData();
  }, [city]);

  const getWeatherImage = (temperature) => {
    if (temperature < 0) {
      return ThunderstormImg;
    } else if (temperature >= 0 && temperature <= 10) {
      return CloudyImg;
    } else if (temperature > 10 && temperature <= 20) {
      return SunnyImg;
    } else if (temperature > 20) {
      return RainImg;
    }
  };

  return (
    <>
      <div className={s.container_info}>
        <div className={s.cont_result}>
          <div className={s.cont_name}>
            <img src={imgName1} alt="" />
            <h3>{weathetData?.name}</h3>
            <img src={imgName2} alt="" />
          </div>
          {weathetData?.weather?.map((item, index) => (
            <h2 className={s.weather} key={index}>
              {item.main}
            </h2>
          ))}
          <h2 className={s.temp}>{weathetData?.main?.temp}</h2>
        </div>
        <div className={s.cont_images}>
          <img
            src={getWeatherImage(weathetData.main?.temp)}
            className={s.weather__img}
            alt=""
          />
        </div>
      </div>
      <div className={s.container_navigation}>
        <div className={s.settings}><Setting/></div>
        <div className={s.images}></div>
        <div className={s.parameter}>
          <label htmlFor="">New York</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
