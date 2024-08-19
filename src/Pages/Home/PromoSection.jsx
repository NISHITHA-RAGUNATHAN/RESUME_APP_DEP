import React, { useRef } from 'react';
import { Box, Flex, Heading, Button, Text, Image } from '@chakra-ui/react';

const PromoSection = () => {
    const iframeRef = useRef(null);

    const playVideo = () => {
        iframeRef.current.src += "?autoplay=1"; // Automatically plays the video when the button is clicked
    };

    return (
        <Flex direction="column" alignItems="center" justifyContent="center" bg="white"><br></br><br></br>
            <Box position="relative" width="90vw" height="90vh">
                <Image
                    src="https://img.freepik.com/free-photo/resume-new-business-launch-plan-concept_53876-133940.jpg?t=st=1723380759~exp=1723384359~hmac=cbc4a0bfd338d205259b6890f0007e7dd35f582bb7d037d4c3e3973342197521&w=1380"
                    alt="Promotional Graphic"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />

                <Box
                    position="absolute"
                    top="23%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="50%"
                    height="28%"
                    overflow="hidden"
                >
                    <Image
                        // Replace with your image path for the laptop screen
                        objectFit="cover"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Box>

            {/* Text and Video Section Below the Laptop Image */}
            <Box textAlign="center" p="8" maxW="80%" bg="white">
                <Heading as="h2" size="xl" mb="4">
                    Recruiters Love Our Resume Builder. Learn Why Below.
                </Heading>
                <Text fontSize="md" mb="4">
                    P.S. The video is less than 2 minutes
                </Text>
                <Button colorScheme="teal" onClick={playVideo}>
                    Play Video
                </Button>
                <Box mt="6">
                    <iframe
                        ref={iframeRef}
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/VjdlraonW2s"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Promotional Video"
                    />
                </Box>
            </Box>
        </Flex>
    );
};

export default PromoSection;
