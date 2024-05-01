import { Box, Flex, Text, VStack, Input, Button } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Box p={5} bg="brand.800" color="brand.500">
      <Flex direction="column" align="center" mb={10}>
        <Text fontSize="4xl" fontWeight="bold" color="brand.500" textShadow="1px 1px 2px black">Contact Us</Text>
        <VStack spacing={4} mt={5}>
          <Input placeholder="Your Name" size="lg" bg="brand.600" _placeholder={{ color: 'brand.700' }} />
          <Input placeholder="Your Email" type="email" size="lg" bg="brand.600" _placeholder={{ color: 'brand.700' }} />
          <Input placeholder="Subject" size="lg" bg="brand.600" _placeholder={{ color: 'brand.700' }} />
          <Input placeholder="Message" size="lg" bg="brand.600" _placeholder={{ color: 'brand.700' }} />
          <Button mt={4} colorScheme="blue" size="lg" bg="brand.600" _hover={{ bg: "brand.700" }}>Send Message</Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContactPage;