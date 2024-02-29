export default function ContactUsInfo() {
  return (
    <div className="contact-us-info">
      <div className="contact-us-info__wrapper">
        <div className="contact-us-info__left-content left-content">
          <div className="left-content__title">Become our partner</div>
          <div className="left-content__tagline">
            Start our journey, now, together.
          </div>
          <div className="left-content__message">
            Join the largest coal mining connections!
          </div>
        </div>
        <div className="contact-us-info__right-content right-content">
          <div className="right-content__wrapper">
            <div className="right-content__email email">
              <div className="email__logo-wrapper">
                <img className="email__logo" src={"/email.svg"} alt="email" />
              </div>
              <div className="email__wrapper">
                <div className="email__label">Email</div>
                <a
                  className="email__value"
                  href="mailto: hastadwiyustama.logistik@gmail.com"
                >
                  hastadwiyustama.logistik@gmail.com
                </a>
              </div>
            </div>
            {/* <div className="right-content__phone phone">
              <div className="phone__logo-wrapper">
                <img className="phone__logo" src={"/phone.svg"} alt="phone" />
              </div>
              <div className="phone__wrapper">
                <div className="phone__label">Phone</div>
                <a className="phone__value" href="tel:+6281250709912">
                  +62 812 5070 9912
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
