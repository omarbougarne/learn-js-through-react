import "./MainCard.css";
import CardButton from "./UI/CardButton";

function MainCard({group, name}) {

    const handleClick = (func) =>{
        console.log(`Execution: ${func()}`);
        
    }
    return (
        <div className="main-card">
            <h1>{group.groupName}</h1>
            {group.items.map((item) => (
            <CardButton key={item.id} onClick={()=>handleClick(item.func)}>
                {item.name}
            </CardButton>
            ))}
        </div>
    );
}

export default MainCard;
