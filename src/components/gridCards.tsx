import "./styles/gridCards.css";

interface contentDescription {
  title: string;
  content: string;
  link: string;
  imagesrc: string;
  imagealt: string;
  content_type: string;
}

interface allContent {
  all_content: contentDescription[];
}

function GridCards({ all_content }: allContent) {
  return (
    <div className="row row-cols-0 row-cols-md-3 g-4">
      {all_content.map((content) => (
        <a
          className="grid-cards-link"
          href={content.link}
          target="_blank"
          rel="noopener noreferer"
        >
          <div className="card h-100">
            <img
              className="card-img-top"
              src={content.imagesrc}
              alt={content.imagealt}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{content.title}</h5>
              <p className="card-text">{content.content}</p>
              <p className="card-text">
                <small className="text-muted">{content.content_type}</small>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default GridCards;
