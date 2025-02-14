import "./MainCard.css";
import CardButton from "./UI/CardButton";

function MainCard({group}) {

    const handleClick = (func) =>{
        console.log(`Execution: ${func()}`);
        
    }
    return (
        <div className="main-card">
            <h1>{group.groupLevel}</h1>
            
            {group.items.map((item) => (
            <CardButton key={item.id} onClick={()=>handleClick(item.func)}>
                {item.name}
            </CardButton>
            ))}
        </div>
    );
}

export default MainCard;
