import "../../css/experience/Experience.css"

function experience ({period, name, position, description}) {
    return (
        <div className="experience-box" >
            <div className="left-side">
                <div className="period">{period}</div>
            </div>
            <div className="right-side">
                <div className="name">{name}</div>
                {position && <div className="position">{position}</div>}
                <div className="description">{description}</div>
            </div>
        </div>
    );
}

export default experience;
