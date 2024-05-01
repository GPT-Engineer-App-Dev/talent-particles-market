import { Box, Flex, Text, VStack, HStack, Tag, Button, Image } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'], imageUrl: '/public/images/john_doe.jpg' },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['.NET', 'JavaScript'], imageUrl: '/public/images/jane_smith.jpg' },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Go', 'React'], imageUrl: '/public/images/carlos_ruiz.jpg' }
];

const Index = () => {
  return (
    <Box p={5} bg="brand.800" color="brand.100">
      <Flex direction="column" align="center" mb={10}>
        <Text fontSize="4xl" fontWeight="bold" color="brand.500" textShadow="1px 1px 2px black">Welcome to Particles</Text>
        <Text fontSize="xl" mt={2} color="brand.500">Connecting you with top-tier software talent specialized in web technologies.</Text>
        <Link to="/search">
          <Button mt={5} colorScheme="blue" size="lg" bg="brand.600" _hover={{ bg: "brand.700" }}>Search Developers</Button>
        </Link>
      </Flex>
      <VStack spacing={8} mt={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={5} color="brand.500" textShadow="1px 1px 2px black">Featured Developers</Text>
        <HStack spacing={10} wrap="wrap" justify="center">
          {developers.map(dev => (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" w="30%">
              <Image borderRadius="full" boxSize="150px" src={dev.imageUrl} alt={`Image of ${dev.name}`} mb={4} style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', filter: 'brightness(0.9)' }} />
              <Text fontWeight="bold" color="brand.500">{dev.name}</Text>
              <Text color="brand.500">{dev.location}</Text>
              <HStack spacing={2} mt={2}>
                {dev.technologies.map(tech => <Tag size="sm" colorScheme="blue">{tech}</Tag>)}
              </HStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="green" variant="solid" mt={3} bg="brand.600" _hover={{ bg: "brand.700" }}>
                Send Message
              </Button>
            </Box>
          ))}
        </HStack>
      </VStack>
      <Box bg="brand.800" color="brand.500" p={5} mt={10}>
        <VStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">Particles Marketplace</Text>
          <Text>Contact us at: info@particles.com</Text>
          <HStack spacing={5}>
            <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;