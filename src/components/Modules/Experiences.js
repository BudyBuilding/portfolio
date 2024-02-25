import React from 'react';
import Experience from '../Reusable-components/Experience';

function Experiences() {
    return (
        <div className='about-me-box' id='experience'>
            <div className='main-title'>Experience</div>
            <div className='about-me-boxes'>
                <div className='studies-box'>
                    <div className='secondary-title'>Education</div>
                    <Experience period={"2017 - 2021"} name={"Kölcsey Ferenc National College"} position={"High-school"} description={"During this time I've learned the basics of programming, algorithmic thinking, and the role of team leading and being a team player."}/>
                    <Experience period={"2021 - 2024"} name={"University of Debrecen"} position={"Computer Science BsC."} description={"At the university, I've had the chance to learn about the newest technologies, develop my skills, and extend my stack."}/>
                </div>

                <div className='courses-section'>
                    <div className='secondary-title'>Courses</div>
                    <Experience period={"2023"} name={"Go-It"} description={"This was a Frontend developer marathon course, where I've learned a little bit about CSS and HTML."}/>
                    <Experience period={"2023"} name={"Udemy Git"} description={"During this Udemy course, I've learned about the GIT version control system and the possibilities."}/>
                    <Experience period={"2023"} name={"Udemy HTML"} description={"In this course, I've learned about HTML more precisely and in detail."}/>
                    <Experience period={"2023"} name={"Udemy CSS"} description={"The course was teaching CSS and SCSS better."}/>
                    <Experience period={"2023"} name={"Udemy JavaScript"} description={"I had the chance during this course to develop my JavaScript skills to a new level."}/>
                    <Experience period={"2023"} name={"Udemy React"} description={"During this course, I've connected all of the previous information together and built a complex website."}/>
                </div>

                <div className='work-exp-box'>
                    <div className='secondary-title'>Work experience</div>
                    <Experience period={"2016 - 2024"} name={"Family Company"} position={"Administrator"} description={"At our furniture factory, I am the 'IT guy', and I am calculating the materials and ordering them."}/>  
                    <Experience period={"2023"} name={"CodeLinks KFT."} position={"Front-end Intern"} description={"During the work time, I had the chance to develop my Front-end skills in the work area."}/>  
                </div>
            </div>
        </div>
    );
}

export default Experiences;
