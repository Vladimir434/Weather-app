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
import Degree from "../../assets/degree.svg";
import Speed from "../../assets/speed.svg";
import Humidity from "../../assets/humidity.svg";
import Sun from "../../assets/Sun.svg";
import Data from "./weather-data/data";

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
    } else if (temperature >= 10 && temperature <= 20) {
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
        <div className={s.settings}>
          <Setting />
        </div>
        <div className={s.images}>
          <h1 className={s.title_image}>Activities in your area</h1>
        </div>
        <div className={s.parameter}>
          <div className={s.block__input}>
            <label>{weathetData?.name}</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
          <h2 className={s.title__parametr}>AIR CONDITIONS</h2>
          <Data img={Degree} name={"Real Feel"} param={weathetData?.main?.temp_max} />
          <Data img={Speed} name={"Wind"} param={weathetData?.wind?.speed} />
          <Data img={Humidity} name={"Chance of rain"} param={weathetData?.main?.humidity} />
          <Data img={Sun} name={"UV Index"} param={weathetData?.main?.temp_min} />
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
