import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate(props) {
    return (
        <Box sx={{ width: '100%', paddingTop: '20px' }}>
            <LinearProgress variant="determinate" value={props.current} />
        </Box>
    );
}