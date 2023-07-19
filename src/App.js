import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Section from "./components/section";
import Footer from "./components/Footer";

let sectionData =[
    {
        title: "Skills",
        des:"In addition to my technical skills, I possess strong soft skills that contribute to my effectiveness as a professional. Effective communication is one of my key strengths, allowing me to collaborate seamlessly with teammates and stakeholders. I am a natural leader and have demonstrated my abilities by serving as a Student Coordinator for the Training and Placement Cell in my college. In this role, I organized workshops and seminars to help students understand the placement procedures and brought prominent companies to our campus for recruitment drives. This experience honed my management skills and provided me with valuable insights into the corporate world."
    },
    {
        title:"Experience",
        des:"Apart from my academic pursuits, I have gained practical experience through internships and training programs. I completed a training program on Pre-fabricated Construction of a Community Hall at Bihar State Power Holding Corporation Limited. This opportunity provided hands-on experience and insights into construction techniques. I also interned at NIT Patna, focusing on High Performance Concrete. This experience deepened my understanding of concrete technology and its applications.In conclusion, I am an enthusiastic and dedicated individual with a strong educational background and a passion for technology. My technical skills, coupled with my soft skills such as effective communication, leadership, and problem-solving abilities, make me well-equipped to contribute to the field of Full Stack Development and Java programming. I am eager to embark on a fulfilling career where I can continue to learn, grow, and make a positive impact."
    },
    {
        title:"Projects",
        des: " Throughout my academic journey, I have successfully completed various projects that highlight my technical proficiency and problem-solving capabilities. For instance, I developed a Snake Game using Java, implementing key OOPs concepts for its implementation. This project allowed me to showcase my ability to design and develop interactive applications. Furthermore, I created a real-time Chat Room application using HTML, CSS, and JavaScript, leveraging Socket.IO for seamless communication between the server and clients. This project demonstrated my proficiency in web development and my understanding of real-time communication protocols. Additionally, I built a Shopping Cart App using JavaScript, HTML5, and CSS3, incorporating features such as user authentication, cart management, and user profiles."        
    }
    ]

const App= ()=> {

    return(
        <div>
            <Navbar />
            <About />
            {
                sectionData.map((value,index)=>(

                    <Section
                    title = {value.title}
                    des = {value.des}
                    />
                ))
            }
            <Footer/>
        </div>
    )
}


export default App;