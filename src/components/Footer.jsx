import React from "react";

const Footer =()=>{

    const date= new Date();

    return(
        <footer>
            <p>Copyright {date.getFullYear()} @Rutuja Jadhav</p>
        </footer>
    )
}

export default Footer;