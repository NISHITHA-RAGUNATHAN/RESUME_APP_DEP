import { Box, Flex, Image, Text } from '@chakra-ui/react';

export default function ReviewCard() {
    return (
        <>
        <div className='flexDirection:"row"'>
        <Box 
            position={'relative'}
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            margin={'10vh'}
            width={'70vh'}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
            <Flex backgroundColor='' flexDirection="row" p={4}>
                <Image
                    borderRadius="80"
                    boxSize="150px"
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="User Review"
                    mr={4}
                />
                <Box>
                    <Text fontSize="xl" color="black" fontWeight="bold" mb={2}>
                        Varun
                    </Text>
                    <Text fontSize="md" color="black">
                        "Using this resume-building application was a game-changer for my career.
                        The templates are modern and professional, and the interface is incredibly user-friendly.
                        I landed my dream job within weeks!"
                    </Text>
                </Box>
            </Flex>
        </Box>
        <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            margin={'10vh'}
            width={'70vh'}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
            <Flex backgroundColor=''flexDirection="row" p={4}>
                <Image
                    borderRadius="80%"
                    boxSize="150px"
                    src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="User Review"
                    mr={4}
                />
                <Box>
                    <Text fontSize="xl"  color="black" fontWeight="bold" mb={2}>
                        Sri
                    </Text>
                    <Text fontSize="md" color="black">
                        "This website helped me to get shortlisted in a reputated company.Based on the skillsSet I have.I am happy and glad to review about us"
                    </Text>
                </Box>
            </Flex>
        </Box>
        <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            margin={'10vh'}
            width={'70vh'}
            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
            <Flex backgroundColor=''flexDirection="row" p={4}>
                <Image
                    borderRadius="80%"
                    boxSize="150px"
                    src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="User Review"
                    mr={4}
                />
                <Box>
                    <Text fontSize="xl" color="black" fontWeight="bold" mb={2}>
                       Swetha
                    </Text>
                    <Text fontSize="md" color="black">
                        "Using this resume-building application was a game-changer for my career.
                        The templates are modern and professional, and the interface is incredibly user-friendly.
                        I landed my dream job within weeks!"
                    </Text>
                </Box>
            </Flex>
        </Box>
        </div>
        </>
    );
}
