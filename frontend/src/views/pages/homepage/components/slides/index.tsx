const Slide = ({ title, description, backgroundImage } : any) => {
  return (
    <div className="swiper-slide">
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default Slide;