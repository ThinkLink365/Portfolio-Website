import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Define a TypeScript interface for the props
interface ContentWithImageProps {
  title: string;
  points: string[];
  imgUrl: string;
  imgPosition: "left" | "right";
}

const ContentWithImage: React.FC<ContentWithImageProps> = ({
  title,
  points,
  imgUrl,
  imgPosition,
}) => {
  const isImageRight = imgPosition === "right";

  return (
    <div className="container my-4">
      <div className="row">
        {isImageRight ? (
          <>
            <div className="col-md-6">
              <h2>{title}</h2>
              <ul>
                {points.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src={imgUrl}
                alt="content"
                className="img-fluid"
                width={300}
                height={300}
              />
            </div>
          </>
        ) : (
          <>
            <div className="col-md-6">
              <img
                src={imgUrl}
                alt="content"
                className="img-fluid"
                width={300}
                height={300}
              />
            </div>
            <div className="col-md-6">
              <h2>{title}</h2>
              <ul>
                {points.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentWithImage;
