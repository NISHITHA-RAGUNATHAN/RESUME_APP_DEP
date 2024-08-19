import React from 'react';
import { Box, Flex, Heading, Button, Text, Stack, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PromoSection from './PromoSection';
import ResumeBuilder from './ResumeBuilder';
import nishlogo from './../../Assets/nishlogo.png'; // Updated path

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const navigate = useNavigate();

    const handleTemplateClick = () => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated) {
            navigate('/home'); // User is authenticated, navigate to the home page
        } else {
            alert('You must be logged in to view this template.');
            navigate('/login'); // Redirect to the login page
        }
    };

    return (
        <Box>
            {/* Navigation Bar */}
            <Flex as="nav" p="4" bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" size="40px">
                    <Image src={nishlogo} alt="Logo" boxSize="70px" mr="7" /> {/* Use Image and nishlogo */}
                    <Heading size="md" color="white"> Resume Builder</Heading> {/* Ensure the heading text is white */}
                </Flex>
                <Flex className="log">
                    <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr="6" color="white">
                        <Text color="white"><h3>Home</h3></Text> {/* Ensure the text is white */}
                    </Button><pre>    </pre>
                    <Button as={Link} to="/login" variant="ghost" colorScheme="whiteAlpha" color="white">
                        <Text color="white"><h3>Login</h3></Text> {/* Ensure the text is white */}
                    </Button>
                </Flex>
            </Flex>

            {/* Main Content */}
            <Flex justifyContent="center" alignItems="center" flexDirection="column" p="8" mt="8">
                <Stack spacing="8" maxW="lg" textAlign="center">
                    <Heading as="h1" size="2xl" fontWeight="bold" color="black">
                        Build Your Professional Resume in Minutes
                    </Heading>
                    <Text fontSize="lg" color="black">
                        Create a resume that stands out with our easy-to-use resume builder. Choose from a variety of templates, customize your resume, and download it in a few simple steps.
                    </Text>
                </Stack>
            </Flex>

            {/* Templates Carousel */}
            <Box mt="8" mx="auto" maxW="1200px" p="4" textAlign="center">
                <Heading as="h2" size="lg" textAlign="center" mb="8">
                    Templates
                </Heading>
                <Slider {...settings}>
                    <Box p="6" onClick={handleTemplateClick} style={{ cursor: 'pointer' }}>
                        <img src="https://www.graphicworker.com/wp-content/uploads/2020/04/Creative-Resume.jpg" alt="Template 1" />
                    </Box>
                    <Box p="4" onClick={handleTemplateClick} style={{ cursor: 'pointer' }}>
                        <img src="https://images.sampletemplates.com/wp-content/uploads/2016/03/31114815/Professional-Resume-Cover-Page.jpg" alt="Template 2" />
                    </Box>
                    <Box p="4" onClick={handleTemplateClick} style={{ cursor: 'pointer' }}>
                        <img src="https://cdn-images.zety.com/pages/minimalist_resume_templates_6.jpg" alt="Template 3" />
                    </Box>
                    <Box p="4" onClick={handleTemplateClick} style={{ cursor: 'pointer' }}>
                        <img src="https://i.pinimg.com/736x/86/0f/5d/860f5d650ca2bf8848b3d34610bf29e5.jpg" alt="Template 4" />
                    </Box>
                </Slider>
            </Box>

            <PromoSection />
            <br />
            <ResumeBuilder />

            {/* Footer */}
            <Flex as="footer" p="4" bg="teal.500" color="white" justifyContent="center">
                <Text>© 2024 Resume Builder. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};

export default HomePage;
