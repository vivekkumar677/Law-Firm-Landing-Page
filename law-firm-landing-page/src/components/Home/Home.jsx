import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { Box, Container } from '@mui/material';
import Introduction from '../Header/Introduction/Introduction';
import './Home.css';
import ChooseUs from '../ChooseUs/ChooseUs';
import PracticeArea from '../PracticeArea/PracticeArea';
import Client from '../Client/Client';
import Team from '../Team/Team';
import Faq from '../FAQ/Faq';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Box>
        <Box mb={4}>
          <Navbar />
          <Container maxWidth="xl">
            <Hero />
          </Container>
        </Box>
        <Box className="background-content" mb={4}>
          <Container className='body-wrapper' maxWidth="xl">
            <Introduction />
            <ChooseUs />
            <PracticeArea />
            <Client />
            <Team />
            <Faq />
            <NewsLetter />
            <Footer />
          </Container>
        </Box>
      </Box> 
    </>
  )
}

export default Home;