import { Box, chakra, Container, Stack, Text, Image, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaSnapchat, FaGithub } from 'react-icons/fa';
import logo from './../../Assets/logo.png';
import React from 'react';
const SocialButton = ({ children, label, href, iconSize }) => {
    return (
        <chakra.button
            bg={'white'}
            rounded={'full'}
            w={40} // Increased width
            h={40} // Increased height
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('whiteAlpha.200', 'blackAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {React.cloneElement(children, { size: iconSize })} {/* Set the size of the icon */}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={'darkslategray'}
            textAlign={'center'}
            py={6}
            className='footer'
            borderTop="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}>
            <Container 
                as={Stack}
                maxW={'6xl'}
                textAlign={'center'}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
                direction={{ base: 'column', md: 'row' }}>
                <Image src={logo} marginLeft={'20%'} alt="logo" boxSize="100px" mb={{ base: 6, md: 0 }} />
                <Text textColor={'white'} marginTop={'2%'} marginLeft={'20%'}>© 2023 Resume Builder, All rights reserved</Text><br></br>
                <Stack direction={'row'} spacing={7} >
                    <SocialButton   label={'Github'} href={'https://github.com/NISHITHA-RAGUNATHAN'} iconSize={'1.5em'}>
                        <FaGithub />
                    </SocialButton><br></br>
                    <SocialButton label={'Snapchat'} href={'https://twitter.com/imhardikdesai'} iconSize={'1.5em'}>
                        <FaSnapchat />
                    </SocialButton><br></br>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/'} iconSize={'1.5em'}>
                        <FaInstagram />
                    </SocialButton><br></br>
                </Stack>
            </Container>
        </Box>
    );
}
