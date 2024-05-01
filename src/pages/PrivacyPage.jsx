import { Box, Text } from '@chakra-ui/react';

const PrivacyPage = () => {
  return (
    <Box p={5} bg="brand.800" color="brand.500">
      <Text fontSize="xl" fontWeight="bold" color="brand.500" textShadow="1px 1px 2px black">Privacy Policy</Text>
      <Text mt={4} color="brand.500">
        Your privacy is important to us. It is Particles' policy to respect your privacy regarding any information we may collect from you across our website.
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
      </Text>
    </Box>
  );
};

export default PrivacyPage;