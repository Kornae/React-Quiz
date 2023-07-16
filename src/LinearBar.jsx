import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate(props) {
    return (
        <Box sx={{ width: '100%', padding:'10px' }}>
            <LinearProgress color='info' variant="determinate" sx={{ borderRadius: 10 }} value={props.current} />
        </Box>
    );
}