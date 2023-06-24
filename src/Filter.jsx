import * as React from 'react';
import BlurOnIcon from '@mui/icons-material/BlurOn';

export default function Filter({ onSearch }) {
    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };

    return (
        <div className="form d-flex justify-content-center align-items-center">
            <input
                id="idSearch"
                placeholder="Search"
                className="abc form-control form-input"
                onChange={handleInputChange}
            />
            <span className="left-pan n">
                <BlurOnIcon style={{ color: '#38575c' }} />
            </span>
        </div>
    );
}
