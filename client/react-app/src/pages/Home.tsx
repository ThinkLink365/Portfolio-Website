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
  // Code adapted from gojodev

  return (
    <div className="content">
      <h1 className="text-center" style={{ marginTop: "20px" }}>
        Welcome to my website!
      </h1>
      <p className="text-center">
        This is a place where you can learn a little bit about me, my hobbies,
        interests, passions, and even look at some of the projects I have worked
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
        My name is Liam Ó Dubhgáin. I am a First-Class Honours BSc Software
        Development graduate from Munster Technological University. I am {age}{" "}
        years old and currently work as a Security Research Intern at
        HiddenLayer, developing Python tooling and researching LLM
        vulnerabilities, adversarial testing, model backdoors, and agentic AI
        security. I have experience with many programming languages such as
        Python, Java and C just to name a few. I enjoy learning new things,
        helping others and giving my all whatever I do. I have many hobbies such
        as Tae-Kwon-Do, Swimming, Coding and Gaming.
      </p>
      {/* Component for displaying achievements with image */}
      <ContentWithImage
        title="List of Achievements"
        points={[
          "First-Class Honours BSc (Hons) in Software Development",
          "2nd Degree black belt with 15 years of Tae-Kwon-Do training",
          "Introduction to Coaching Course completed as of March 2024",
          "Disability Inclusion Training Course completed as of March 2025",
          "Sport Ireland Safeguarding 1 completed as of April 2025",
          "Trellix Scholarship Finalist in 2024",
          "Full Category B Drivers Licence",
        ]}
        imgUrl={drive}
        imgPosition="right"
      />
      {/* Component for displaying skills with image */}
      <ContentWithImage
        title="Skills"
        points={[
          "Proficient in Python, TypeScript and JavaScript, with working knowledge of Java and C",
          "Frontend development with React, HTML5, CSS3 and interactive D3.js data visualisation",
          "Backend and API development with FastAPI, Node.js and REST",
          "Database design and data management with MySQL, MongoDB, SQL, JSON and CSV",
          "Microservices and cloud infrastructure using RabbitMQ, Docker, Kubernetes, Google Cloud Run and Firebase Hosting",
          "AI security research covering prompt injection, jailbreaks, adversarial prompting, model backdoors and agentic-system security",
          "Data analytics and machine learning with pandas, matplotlib, statistical analysis and model evaluation",
          "Fluent in Irish",
          "Excellent customer service and communication skills",
          "Capable of working in a team or taking the initiative",
        ]}
        imgUrl={code}
        imgPosition="left"
      />
      {/* Component for displaying hobbies and passions with image */}
      <ContentWithImage
        title="Hobbies and Passions"
        points={[
          "Second Degree Tae-Kwon-Do black belt with 15 years of training. I am an assistant instructor with Cork Tae-Kwon-Do, and help train junior and senior members, as well as officiate as an umpire at regional tournaments.",
          "Competent swimmer. I have been swimming since I was very young and have developed a love for it. Whether it's sea swimming or indoor swimming, I enjoy swimming for long periods of time, always trying to improve.",
          "Passionate about computer science-related topics. I am fascinated by many different problems and aspects of computer science and find great pleasure in learning about different languages, data structures, and more so I can apply it in my own work.",
          "Member of the MTU Programming Society. As a future software developer, it was a no-brainer to join the Programming Society. It's filled with like-minded individuals who have helped me learn many different skills.",
          "Enthusiastic about video games. They have been a great way to make friends and also have taught me many things about life through their storytelling. I enjoy learning new things about the games I play whether that be by playing or watching informative videos. I'm always striving to become better and more informed about the topics I'm interested in.",
          "Avid Anime Fan. Recently, I have taken a liking to anime as they are highly entertaining while also giving some great messages which inspire me to become a better person.",
        ]}
        imgUrl={tkd}
        imgPosition="right"
      />
    </div>
  );
};

export default Home;
