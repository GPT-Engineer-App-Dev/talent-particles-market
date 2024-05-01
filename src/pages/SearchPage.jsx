import { useState } from 'react';
import { Box, Flex, Text, Input, Button, VStack, HStack, Tag, useMediaQuery } from '@chakra-ui/react';
import { FaSearch, FaEnvelope } from 'react-icons/fa';
import { developers } from './Index.jsx';

const SearchPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Text fontSize="3xl" fontWeight="bold">Search Developers</Text>
        <Text fontSize="xl">Find top-tier software talent specialized in web technologies.</Text>
      </Flex>
      <VStack spacing={4}>
        <Input
          placeholder="Search developers..."
          size="lg"
          leftIcon={<FaSearch />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <HStack spacing={3} wrap="wrap" justify="center">
          {developers.filter(dev => 
            dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dev.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
          ).map(dev => (
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" w={isLargerThan768 ? "30%" : "80%"}>
              <Text fontWeight="bold">{dev.name}</Text>
              <Text>{dev.location}</Text>
              <HStack spacing={2}>
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

export default SearchPage;