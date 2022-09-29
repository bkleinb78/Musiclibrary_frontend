import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="song-footer">
        <div className="copy-right">
            <medium className='copy-color'>&copy;{new Date().getFullYear()} ALTERNATIVE RADIO PLAYLIST</medium>
        </div>
    </div>

  );
}

export default Footer;