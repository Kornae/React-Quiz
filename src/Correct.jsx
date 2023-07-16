import React from "react";
import GameCSS from './game.module.css';
import SportsScoreIcon from '@mui/icons-material/SportsScore';


function Correct(props) {
    return <div>
        <div className={GameCSS.centeredContainer}>
            <h6 style={{ padding: '2px' }}>Your Score: {props.yourScore}/{props.totalCount} <SportsScoreIcon /> </h6>
        </div>
    </div>
}

export default Correct;