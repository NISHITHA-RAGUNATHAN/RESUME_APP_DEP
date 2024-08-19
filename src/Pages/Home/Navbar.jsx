import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { Link as ReachLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const bgColor = 'darkslategray';
    const hoverBgColor = useColorModeValue('gray.200', 'gray.700');
    const hiddenPaths = ['/login', '/sign-in', '/theme1'];
    const displayNavbar = !hiddenPaths.includes(location.pathname);

    // Handle logout function
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated'); // Clear authentication status
        navigate('/login'); // Redirect to the login page
    };

    if (!displayNavbar) {
        return null;
    }

    const linkStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '0 12px',
        textDecoration: 'none',
    };

    const hoverStyle = {
        backgroundColor: hoverBgColor,
    };

    return (
        <Box 
            id='navbar' 
            bg={bgColor} 
            px={4} 
            boxShadow="md" 
            style={{ 
                borderBottom: '1px solid #e2e8f0', 
                position: 'fixed', 
                height: '10%',
                top: 0, 
                width: '100%',
                zIndex: 1000 
            }}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <HStack spacing={39} alignItems={'center'}>
                    {/* You can add a logo or title on the left side if needed */}
                </HStack>
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}
                ><pre>  </pre>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/profile'}
                        style={linkStyle}
                    >
                        Profile
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/'}
                        style={linkStyle}
                    >
                        Home
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/about'}
                        style={linkStyle}
                    >
                        About
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/home'}
                        style={linkStyle}
                    >
                        Resume
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/Modify'}
                        style={linkStyle}
                    >
                        Modify 
                        <ReachLink
                            px={2} py={1} rounded={'md'} _hover={hoverStyle}
                            to={'/ats-compliance'}
                            style={linkStyle}
                        >
                          Editer
                        </ReachLink>   
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/tips'}
                        style={linkStyle}
                    >
                        Tips
                    </ReachLink>
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/chat'}
                        style={linkStyle}
                    >
                        Chat
                    </ReachLink>   
                    <ReachLink
                        px={2} py={1} rounded={'md'} _hover={hoverStyle}
                        to={'/Feedback'}
                        style={linkStyle}
                    >
                        Feedback
                    </ReachLink>   
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </HStack>
            </Flex>
        </Box>
    );
}
