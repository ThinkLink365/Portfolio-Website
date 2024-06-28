import React, { useEffect, useState } from "react";
import pfp from "../assets/images/steven.jpeg"; // Importing profile picture
import drive from "../assets/images/drive.jpg"; // Importing image for achievements
import code from "../assets/images/code.jpg"; // Importing image for skills
import tkd from "../assets/images/tkd.jpg"; // Importing image for hobbies
import ContentWithImage from "../components/Content"; // Importing custom component
import "../assets/styles/components.css"; // Importing component-specific styles

const Home: React.FC = () => {
  const [age, setAge] = useState<number | null>(null); // State to store calculated age

  useEffect(() => {
    // Function to calculate age and set it in state
    function calculateAge() {
      const bday = new Date("06/04/2003"); // Birthday date
      const today = new Date(); // Today's date

      let timeDiff = today.getTime() - bday.getTime(); // Difference in milliseconds
      timeDiff = timeDiff / 1000 / 31556952; // Convert milliseconds to years

      const calculatedAge = parseFloat(timeDiff.toFixed(3)); // Round and parse to float
      setAge(calculatedAge); // Set age in state
    }

    calculateAge(); // Invoke age calculation function
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="content">
      <h1 className="text-center">Welcome to my website!</h1>
      <p className="text-center">
        This is a place where you can learn a little bit about me, my hobbies,
        interests, passions and even look at some of the projects I have worked
        on, as well as ways to get in touch.
      </p>
      <h2 className="text-center">Who am I?</h2>
      <div className="d-flex justify-content-center my-3">
        <img
          src={pfp}
          alt="Liam"
          className="img-fluid rounded-circle"
          width={300}
          height={300}
        />
      </div>
      <p className="text-center">
        <b>
          "I'm doing it for myself. If it helps put smiles on peoples faces,
          helps them live their lives together, then that's my role in this
          world!" - Rex, Xenoblade Chronicles 2
        </b>
      </p>
      <p id="founder-name" className="text-center">
        My name is Liam Ó Dubhgáin. I am a 3rd year student at Munster
        Technological University (MTU) studying Software Development. I am {age}{" "}
        years old. I have experience with many programming languages such as
        Python, Java and C just to name a few. I enjoy learning new things,
        helping others and giving my all whatever I do. I have many hobbies such
        as Tae-Kwon-Do, Swimming, Coding and Gaming.
      </p>
      {/* Component for displaying achievements with image */}
      <ContentWithImage
        title="List of Achievements"
        points={[
          "1st Degree black belt since August 2021",
          "Introduction to Coaching Course completed as of March 2024",
          "Full Category B Drivers Licence",
        ]}
        imgUrl={drive}
        imgPosition="right"
      />
      {/* Component for displaying skills with image */}
      <ContentWithImage
        title="Skills"
        points={[
          "Proficient in many Programming Languages including Python, C, Java, HTML/CSS and Javascript ",
          "Experience with database management in both SQL and NoSQL such as MySQL, MongoDB and Neo4j",
          "Familar with many data structures and algorithms",
          "Fluent In Irish",
          "Excellent customer service and communication skills",
          "Capable for working in a team or taking the initiative",
        ]}
        imgUrl={code}
        imgPosition="left"
      />
      {/* Component for displaying hobbies and passions with image */}
      <ContentWithImage
        title="Hobbies and Passions"
        points={[
          "Tae-Kwon-Do Practitioner for 12 years. I have been training with Cork Tae-Kwon-Do for many years and it has given me great confidence. I enjoy training, learning new things and improving on my techinques as well as pushing others to become better. I am also an assistant instructor in the club meaning I give guideance and help to the younger students and even take classes from time to time",
          "Compotent swimmer. I have been swimming since I was very young and have developed a love for it. Whether its sea swimming or indoor swimming I enjoy swimming for long periods of time, always trying to improve",
          "Passionate about computer science related topics. I am fascinated by many different problems and aspects of computer science related topics and find great pleasure in learning about different languages, data structures and more so I can apply it in my own work ",
          "Member of the MTU Programming Society. As a future software developer it was a no brainer to join the Programming Society. It's filled with like-minded individuals who have helped me learn many different skills",
          "Enthusiastic about video games. They have been a great way to make friends and also have thought me many things about life through their storytelling. I enjoy learning new things about the games I play whether that be by playing or watching informative videos, I'm always striving to become better and more informed about the topics I'm intrested in",
          "Adive Anime Fan. Recently I have taken a liking to anime as they are highly entertaining while also giving some great messages which inspire me to become a better person.",
        ]}
        imgUrl={tkd}
        imgPosition="right"
      />
    </div>
  );
};

export default Home;
