import React from 'react';
import { Box, Heading, FormControl, FormLabel, Switch, VStack, useColorMode, Button } from '@chakra-ui/react';

const Settings = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box p={5} maxW="600px" mx="auto" bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="xl" textAlign="center" mb={5} color={colorMode === 'light' ? 'darkslategray' : 'white'}>
                Settings
            </Heading>
            <VStack spacing={4}>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark-mode" mb="0">
                        Dark Mode
                    </FormLabel>
                    <Switch id="dark-mode" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                </FormControl>
                {/* Additional settings can be added here */}
                <Button colorScheme="teal" size="md" onClick={() => alert('Settings saved!')}>
                    Save Settings
                </Button>
            </VStack>
        </Box>
    );
};

export default Settings;
