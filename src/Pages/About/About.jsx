import { Avatar, Box, Container,Heading,chakra, Flex, Icon, SimpleGrid, useColorModeValue, } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import Navbar from '../Home/Navbar';
import './About.css'
import ReviewCard from './Review';

const testimonials = [
    {
        name: 'Thamaraiselvi S',
        role: 'Web Developer',
        content:
            'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.',
        avatar:
            'https://avatars.githubusercontent.com/u/87645745?v=4',
    }
];


export default function About() {
    return (
        <>
        <Navbar/>
        <div className="aboutiu">
        <Box className='boxcolor'>
        <Helmet>
        <title>About Us - Resume Builder</title>
        <meta name="description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
        <meta name="keywords" content="resume builder, about us, mission, professional resumes, tools" />
        <meta name="author" content="Hardik Desai" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Resume Builder" />
                <meta property="og:description" content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes." />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                <meta property="og:type" content="website" />
                </Helmet>
            <Flex  className='upbox'
            textAlign={'center'}
            pt={10}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}>
            <Box textColor={'black'} width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          
            <chakra.h3
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            fontSize={20}
            textTransform={'uppercase'}
            color={'teal.400'}>
            People love us
            </chakra.h3>
            <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Resume Builder
            </chakra.h1>
            <chakra.h2
            margin={'auto'}
            width={'70%'}
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={useColorModeValue('gray.500', 'gray.400')}>
            Build the Resume That Gets You Hired!
            </chakra.h2>
            </Box>
            <SimpleGrid
            columns={{ base: 1, xl: 1 }}
            spacing={'20'}
            mt={16}
            mx={'auto'}>
            <Container maxW="container.xl" mt={10}>
            <Heading textColor='black'as="h2" size="xl" mb={6} textAlign="center">
                What Our Users Are Saying
            </Heading>
            <Flex justifyContent="center">
                <ReviewCard />
            </Flex>
        </Container>
       
                </SimpleGrid>
                <Box>
                <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'teal.400'}>
                <path
                fill={'currentColor'}
                d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
                />
                </Icon>
                </Box>
                </Flex>
                </Box>
                </div>
                </>
                
            );
        }