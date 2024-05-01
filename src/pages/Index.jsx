import { Box, Flex, Text, VStack, HStack, Tag, Button } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const developers = [
  { name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'] },
  { name: 'Jane Smith', location: 'Berlin, Germany', technologies: ['.NET', 'JavaScript'] },
  { name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: ['Go', 'React'] }
];

const Index = () => {
  return (
    <Box p={5} bg="brand.900" color="brand.500">
      <Flex direction="column" align="center" mb={10}>
        <Text fontSize="4xl" fontWeight="bold" color="brand.500">Welcome to Particles</Text>
        <Text fontSize="xl" mt={2} color="brand.500">Connecting you with top-tier software talent specialized in web technologies.</Text>
        <Link to="/search">
          <Button mt={5} colorScheme="blue" size="lg" bg="brand.700" _hover={{ bg: "brand.800" }}>Search Developers</Button>
        </Link>
      </Flex>
      <VStack spacing={8} mt={10}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>Featured Developers</Text>
        <HStack spacing={10} wrap="wrap" justify="center">
          {developers.map(dev => (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" w="30%">
              <Text fontWeight="bold">{dev.name}</Text>
              <Text>{dev.location}</Text>
              <HStack spacing={2} mt={2}>
                {dev.technologies.map(tech => <Tag size="sm" colorScheme="blue">{tech}</Tag>)}
              </HStack>
              <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" mt={3}>
                Send Message
              </Button>
            </Box>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;