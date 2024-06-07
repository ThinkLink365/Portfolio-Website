import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Fade from "react-bootstrap/Fade";
import "./Animation.css";

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
  const [inView, setInView] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isImageRight = imgPosition === "right";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="container my-4">
      <Fade in={inView}>
        <div
          ref={contentRef}
          className={`row ${
            inView ? (isImageRight ? "slide-in-right" : "slide-in-left") : ""
          }`}
        >
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
      </Fade>
    </div>
  );
};

export default ContentWithImage;
