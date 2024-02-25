import "../../css/components/Skill.css"

function Skill({ name, value }) {
    
    const fill = {
        maxWidth: `${value*10}%`,
      };
    

    return <div className="skill">
        <p className="skill-name">
            {name}
            </p>
            <div className="visualization-box">
                <div className="skill-value" style={fill}></div>
            </div>
    </div>
}

export default Skill;