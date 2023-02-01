interface propsType {
  title: string;
}

export default function HeroHeader({ title }: propsType) {
  return (
    <div className="hero-header">
      <div className="hero-header__wrapper wrapper">
        <div className="wrapper__title">{title}</div>
        <div className="wrapper__subtitle">
          <div className="wrapper__text">PT Hasta Dwiyustama Logistik</div>
          <div className="wrapper__text">{">"}</div>
          <div className="wrapper__page-title">{title}</div>
        </div>
      </div>
    </div>
  );
}
