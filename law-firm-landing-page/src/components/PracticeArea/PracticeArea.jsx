import React from 'react';
import './PracticeArea.css';

import image1 from '../../assets/Business-Law.png';
import image2 from '../../assets/Partnership-Law.png';
import image3 from '../../assets/Real-Estate-Law.png';
import image4 from '../../assets/Business-Law2.png';
import image5 from '../../assets/Landlord-Disputes.png';
import image6 from '../../assets/Elder-Abuse.png';
import { Box, Grid } from '@mui/material';


const PracticeArea = () => {
    
    return (
        <div className="area-wrapper">
            <div className="practices-heading">
                <h1>Area of Practice</h1>
            </div>

            <Box className="grid-container">
                <Grid container spacing={2} className='grid-wrapper'>
                    <Grid item xs={6} md={8} className="grid-item">
                        <img src={image1} alt="business law" />
                        <p className='large-img'>BUSINESS LAW</p>
                    </Grid>
                    <Grid item xs={6} md={4} className="grid-item">
                        <img src={image2} alt="partnership law" />
                        <p className='small-img'>Partnership LAW</p>
                    </Grid>
                    <Grid item xs={6} md={4} className="grid-item">
                        <img src={image3} alt="real estate law" />
                        <p className='small-img'>REAL ESTATE LAW</p>
                    </Grid>
                    <Grid item xs={6} md={8} className="grid-item">
                        <img src={image4} alt="business law" />
                        <p className='large-img'>BUSINESS LAW</p>
                    </Grid>
                    <Grid item xs={6} md={8} className="grid-item">
                        <img src={image5} alt="landlord deputes" />
                        <p className='large-img'>LANDLORD DESPUTES</p>
                    </Grid>
                    <Grid item xs={6} md={4} className="grid-item">
                        <img src={image6} alt="elder abuse" />
                        <p className='small-img'>ELDER ABUSE</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default PracticeArea;