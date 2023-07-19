import React from "react";
// import janu from "../images/janu.png"
//const janu= require("../images/janu.jpeg") we can use this way 
const About =() =>{

    return (
        <div className="about">
            <h1>About</h1>
            {/* <img src={janu}  alt="janu's pic"/> */}
            <img src={require("../images/janu.png")} alt="Abhishek's Pic" />
            <p>
            I am a highly motivated individual with a passion for technology and a strong desire to enhance my technical knowledge. I am currently seeking a beginner role where I can explore and expand my skills in Full Stack Development, Java programming, OOPs concepts, SQL, Data Structures, and Algorithms. With a background in Civil Engineering, I possess a unique blend of technical expertise and problem-solving abilities that I am eager to apply to the world of software development.

During my educational journey, I developed a deep interest in programming and software development. I have dedicated myself to gaining a solid foundation in various technologies and concepts relevant to the field. Java has been a key focus for me, as it offers a versatile and powerful language for building robust applications. Additionally, I have acquired knowledge in SQL, DBMS, HTML5, CSS3, Bootstrap3, JavaScript, and have gained an understanding of operating systems and network systems.

I pride myself on being a quick learner and adapt well to new technologies and frameworks. I continuously strive to keep up with emerging trends and advancements in the industry, ensuring that my skills remain relevant and up-to-date. I am committed to personal growth and self-improvement, always seeking opportunities to expand my knowledge base.
             </p>
        </div>
    )
}

export default About;