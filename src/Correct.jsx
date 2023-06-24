import React from "react";
import GameCSS from './game.module.css';
import Chip from '@mui/material/Chip';
import SportsScoreIcon from '@mui/icons-material/SportsScore';


function Correct(props) {
    return <div>
        <div className="row">
            <div className={GameCSS.centeredContainer} style={{ padding: '2px' }}>
                <div className="h4 font-weight-bold mb-0 correct-count"></div><span style={{ padding: '5px' }} className="small text-gray"> <Chip label={props.right} color="success" variant="outlined" /></span>
                <div className="h4 font-weight-bold mb-0 wrong-count"></div><span style={{ padding: '5px' }} className="small text-gray"><Chip label={props.wrong} color="error" variant="outlined" /></span>
            </div>

        </div>
        <div className={GameCSS.centeredContainer}>
            <p style={{ padding: '2px' }}>Your Score: {props.yourScore}/{props.totalCount} <SportsScoreIcon /> </p>
        </div>
    </div>
}

export default Correct;