import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Ensure Bootstrap CSS is imported
import Fade from "react-bootstrap/Fade"; // Import Fade component from react-bootstrap
import "../assets/styles/components.css"; // Import custom component styles

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
  const [inView, setInView] = useState(false); // State to track if component is in view
  const contentRef = useRef<HTMLDivElement>(null); // Reference to the content's DOM element
  const isImageRight = imgPosition === "right"; // Determine if image should be on the right

  useEffect(() => {
    // Effect to observe intersection with the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set inView to true when content is intersecting
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the content is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current); // Start observing the content element
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current); // Clean up by stopping observation
      }
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div>
      <Fade in={inView}>
        <div
          ref={contentRef}
          className={`row ${
            inView ? (isImageRight ? "slide-in-right" : "slide-in-left") : ""
          } align-items-center`}
        >
          {isImageRight ? ( // Conditional rendering based on imgPosition prop
            <>
              <div className="col-md-6">
                <h2>{title}</h2>
                <ul>
                  {points.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={imgUrl}
                  alt="content"
                  className="img-fluid content-img"
                />
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 text-center">
                <img
                  src={imgUrl}
                  alt="content"
                  className="img-fluid content-img"
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
