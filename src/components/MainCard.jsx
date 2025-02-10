import "./MainCard.css";
import CardButton from "./UI/CardButton";

function MainCard() {

    const handleClick = () =>{
        console.log("I was clicked");
        
    }
    return (
        <div className="main-card">
            <CardButton onClick={handleClick}>
                Run
            </CardButton>
        </div>
    );
}

export default MainCard;
