import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    const bgColor = useColorModeValue('brand.800', 'brand.900');
    const textColor = useColorModeValue('brand.500', 'brand.500');

    return (
        <Box bg={bgColor} px={5} py={3}>
            <Flex as="nav" justify="space-between" wrap="wrap" align="center">
                <Link as={RouterLink} to="/" px={2} color={textColor} fontSize="xl" fontWeight="bold">Particles</Link>
                <Flex align="center">
                    <Link as={RouterLink} to="/search" px={2} color={textColor}>Search Developers</Link>
                    <Link as={RouterLink} to="/contact" px={2} color={textColor}>Contact Us</Link>
                    <Link as={RouterLink} to="/terms" px={2} color={textColor}>Terms of Service</Link>
                    <Link as={RouterLink} to="/privacy" px={2} color={textColor}>Privacy Policy</Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;