import React from 'react';
import Skill from "../Reusable-components/Skill";

function Skills() {
    return (
        <div className='skill-box' id='skills'>
            <div className='main-title skill-m-title'>Skills</div>
            <div className='secondary-title'>Coding skills</div>
            <div className='skill-list'>
                <Skill name="React" value="6"/>
                <Skill name="JavaScript" value="5"/>
                <Skill name="Sass/CSS" value="8"/>
                <Skill name="HTML" value="6"/>
                <Skill name="SQL" value="5"/>
                <Skill name="C/C++/C#" value="8"/>
                <Skill name="Java" value="8"/>
                <Skill name="Python" value="5"/>
                <Skill name="Unity" value="5"/>
            </div>
            <div className='secondary-title'>Language skills</div>
            <div className='skill-list'>
                <Skill name="English" value="9"/>
                <Skill name="Hungarian" value="10"/>
                <Skill name="Romanian" value="9"/>
                <Skill name="German" value="3"/>
            </div>
            <div className='secondary-title'>Other skills</div>
            <div className='skill-list'>        
                <Skill name="Communication" value="9"/>
                <Skill name="Presenting" value="8"/>
                <Skill name="Team working" value="8"/>
                <Skill name="3D modelling" value="9"/>
                <Skill name="Forex trading" value="7"/>
                <Skill name="Photography" value="8"/>
            </div>
        </div>
    );
}

export default Skills;
