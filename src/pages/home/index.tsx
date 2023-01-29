import Image from "next/image";

import HomeLanding from "@/../public/home-landing.png";

export default function home() {
  return (
    <div className="home">
      <div className="home__landing-container">
        <div className="home__landing-content content">
          <div className="content__company-name">
            PT Hasta Dwiyustama Logistik
          </div>
          <div className="content__title">Best Coal Company</div>
          <div className="content__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
}
