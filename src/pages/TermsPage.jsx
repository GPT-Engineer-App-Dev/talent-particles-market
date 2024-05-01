import { Box, Text } from '@chakra-ui/react';

const TermsPage = () => {
  return (
    <Box p={5} bg="brand.800" color="brand.500">
      <Text fontSize="xl" fontWeight="bold" color="brand.500" textShadow="1px 1px 2px black">Terms of Service</Text>
      <Text mt={4} color="brand.500">
        The following terms and conditions govern all use of the Particles website and all content, services, and products available at or through the website.
        By using the website, you agree to these terms, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </Text>
    </Box>
  );
};

export default TermsPage;