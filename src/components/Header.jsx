import "./Header.css";
import HeaderButton from "./UI/HeaderButton";
 function Header(){

    const handleClick = () =>{
        console.log("I was clicked");
        
    }
    return (
        <div className="">
            <header>
                    <HeaderButton onClick={handleClick}>
                        Click me
                    </HeaderButton>
            </header>
        </div>
    )
}

export default Header;