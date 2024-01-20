interface GridCardsProps {
  title: string;
  description: string;
  imagesrc: string;
  imagealt: string;
}

function GridCards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img
            src="src/assets/medium_article_image_one.webp"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              Effortless Insights: Your Guide to Creating LLM-Based AI for
              Advanced Database Queries and Analysis
            </h5>
            <p className="card-text">
              In the ever-evolving landscape of data analysis, a challenge often
              lies in translating complex data queries into clear, actionable
              insights. Consider a scenario where a business needs to understand
              how a particular subset of users are interacting with one of their
              products. Traditionally, this would involve navigating through
              intricate database schemas and writing detailed SQL queries — a
              daunting task for many product-oriented professionals, and thus a
              dependency is created on the data teams.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridCards;
