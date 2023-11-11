import "../App.css";
export const Button = ({btnTxt, clickFunction}) => {
    
    const myClickFunction = () => {
        console.log("nothing to do");
    } ;
    return(
        <div onClick={clickFunction ?? myClickFunction } className="btnStyle">
            {btnTxt}
        </div>

        
    )
    
}
