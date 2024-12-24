import "./index.scss";

const SentenceImage = ({
  title,
  description,
  article,
  backgroundImage,
}: any) => {
  return (
    <div
      className="sentence-image-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="sentence-image-overlay"></div>
      <div className="sentence-image-content">
        <h1 className="sentence-image-title">{title}</h1>
        <p className="sentence-image-description">" {description} "</p>
        <p className="sentence-image-article">- {article} -</p>
      </div>
    </div>
  );
};

export default SentenceImage;
