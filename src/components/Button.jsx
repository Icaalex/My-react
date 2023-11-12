import "../App.css";
// import { Sec4button } from './Button';
export const Button = (props) => {

    return(
        <>
        <div className="btnStyle">
            {props.btnTxt}
            {props.btnTxxt}
        </div>
        
        </>
        

        
    )
    
}
export const Secbutton = (props) => {
    return(
        <div className="btnStyles">
           {props.btnTxtt}

         </div>

    )
}
export const Sec2button = (props) => {
    return(
        <div className="btn2Styles">
           {props.btnTxtt}

         </div>

    )
}
export const Sec3button = (props) => {
    return(
        <div className="btn3Styles">
           {props.btnTxtt}

         </div>

    )
}
export const Sec4button = (props) => {
    return(
        <div className="btn4Styles">
           {props.btn3Txtt}

         </div>

    )
}
export const Sec5button = (props) => {
    return(
        <div className="btn5Styles">
           {props.btn3Txtt}

         </div>

    )
}
export const Sec6button = (props) => {
    return(
        <div className="btn6Styles">
            {props.btn3Txttt}
        </div>
    )
}

