import { RiSunFill } from "react-icons/ri";
import { MdNightlightRound } from "react-icons/md";
import { IoMdCloud } from "react-icons/io";
import { TbWind, TbAirConditioning } from "react-icons/tb";

import { WRain, WStorm, WSunny } from "./datas/Weather";

import "./App.sass";

function App() {
  return (
    <div className="home">
      <div className="home-header">
        <p className="home-header-title">Weather Forecast</p>
        <p className="home-header-date">Friday, 10 May 2024</p>
        <div className="home-header-box">
          <div className="home-header-box-left">
            <p>Pemalang</p>
            <p>Indonesia</p>
            <p>32°</p>
          </div>
          <div className="home-header-box-right">
            <p>01.49 PM</p>
            <p>Mostly Sunny</p>
            <p>H:33° L:24°</p>
          </div>
        </div>
      </div>
      <div className="home-days">
        <div className="home-days-box active">
          <p>Today</p>
          <WRain />
          <p>24°-33°</p>
        </div>
        <div className="home-days-box">
          <p>Sat</p>
          <WStorm />
          <p>24°-32°</p>
        </div>
        <div className="home-days-box">
          <p>Sun</p>
          <WSunny />
          <p>24°-33°</p>
        </div>
        <div className="home-days-box">
          <p>Mon</p>
          <WRain />
          <p>23°-32°</p>
        </div>
        <div className="home-days-box">
          <p>Tue</p>
          <WRain />
          <p>23°-32°</p>
        </div>
        <div className="home-days-box">
          <p>Wed</p>
          <WSunny />
          <p>24°-32°</p>
        </div>
        <div className="home-days-box">
          <p>Thu</p>
          <WSunny />
          <p>23°-32°</p>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-left">
          <div className="home-section-left-wind">
            <p>Wind Status</p>
            <div className="home-section-left-wind-desc">
              <TbWind />
              <p>
                5 <span>km/h</span>
              </p>
            </div>
            <p>little wind</p>
          </div>
          <div className="home-section-left-air">
            <p>Air Quality</p>
            <div>
              <TbAirConditioning />
              <p>105</p>
            </div>
            <p>Unhealthy</p>
          </div>
        </div>
        <div className="home-section-right">
          <div className="home-section-right-hours">
            <div className="home-section-right-hours-hour active">
              <p>12.00AM</p>
              <MdNightlightRound />
              <p>25°</p>
            </div>
            <div className="home-section-right-hours-hour">
              <p>06.00AM</p>
              <RiSunFill />
              <p>24°</p>
            </div>
            <div className="home-section-right-hours-hour">
              <p>12.00PM</p>
              <RiSunFill />
              <p>32°</p>
            </div>
            <div className="home-section-right-hours-hour">
              <p>06.00PM</p>
              <IoMdCloud />
              <p>28°</p>
            </div>
            <div className="home-section-right-hours-hour">
              <p>00.00PM</p>
              <MdNightlightRound />
              <p>25°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
