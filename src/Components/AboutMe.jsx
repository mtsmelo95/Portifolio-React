import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="aboutmeComponent">
      <div className="aboutmeContainer">
        <div className="aboutmeText">
          <h1>About Me</h1>
          <p>
            I'm a software engineer from Brazil, I'm 28 years old, and I'm
            currently studying at PUCRS. I'm passionate about technology and
            programming, and I'm always looking for new challenges and
            opportunities to learn more.
          </p>
          <p>
            I'm currently studying <strong>HTML</strong>, <strong>CSS</strong>,
            <strong>JavaScript</strong>, <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>NodeJS</strong>,{" "}
            <strong>SQL</strong>, <strong>Git</strong>, among other
            technologies.
          </p>
          <p>
            I'm looking for a job opportunity where I can learn and develop my
            skills as a software engineer.
          </p>
        </div>
        <div className="aboutmeImage">
          <img src="././public/eu.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
