import React from 'react';
import './Team.css';
import team1 from '../../assets/daniel.png';
import team2 from '../../assets/sanfole.png';
import team3 from '../../assets/cesforila.png';
import team4 from '../../assets/colleen.png';
import team5 from '../../assets/haldone.png';
import team6 from '../../assets/nik.png';
import { Box, Grid } from '@mui/material';

const teamsData = [
    {
        id: 1,
        image: team1,
        name: "Daniel Def",
        cases: 301,
    },
    {
        id: 2,
        image: team2,
        name: "Sanfole",
        cases: 850,
        style : {
            backgroundColor: '#E3B748',
            borderRadius: '14px',
            width: '344px',
            height: '109px',
            paddingRight: '120px',
            marginBottom: '10px'
        }
    },
    {
        id: 3,
        image: team3,
        name: "Cesforila",
        cases: 470,
    },
    {
        id: 4,
        image: team4,
        name: "Colleen",
        cases: 180,
    },
    {
        id: 5,
        image: team5,
        name: "Haldone",
        cases: 212,
    },
    {
        id: 6,
        image: team6,
        name: "Nik Jeo",
        cases: 350,
    }
]

const Team = () => {
    return (
        
        <div className="team-wrapper">
            <div className="team-header">
                <h3>Our Team</h3>
            </div>
            <div className="team-container">
                <Box sx={{ flexGrow: 1}}>
                    <Grid container 
                        spacing={{ xs: 2, md: 6 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }}>
                        { teamsData.map((team, index) => {
                            const { image, name, cases } = team;
                            return (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <div style={team.style} className="team-grid">
                                        <div className="client-img">
                                            <img src={image} alt="team" />
                                        </div>
                                        <div className="text-wrapper">
                                            <h5>{name}</h5>
                                            <p>{cases} Cases</p>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Team;