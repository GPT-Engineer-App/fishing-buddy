import { Box, Flex, Text, Button, Image, VStack, HStack, Heading, Link } from "@chakra-ui/react";
import { FaFish, FaMapMarkedAlt, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
        <Heading as="h1" size="xl" mb={6}>
          Welcome to Fisherman's Haven
        </Heading>
        <Image src="https://images.unsplash.com/photo-1516894039413-0ee3187dbd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwbGFrZXxlbnwwfHx8fDE3MTM1MDkyNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fishing Lake" borderRadius="lg" boxSize="400px" objectFit="cover" />
        <Text fontSize="xl" mt={6}>
          Your ultimate guide to the best fishing spots and tips.
        </Text>
        <VStack spacing={4} mt={6}>
          <Button leftIcon={<FaFish />} colorScheme="teal" variant="solid">
            Fish Species
          </Button>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="teal" variant="outline">
            Find Locations
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="ghost">
            About Us
          </Button>
        </VStack>
        <HStack spacing={8} mt={10}>
          <Link href="#" isExternal>
            <Text fontSize="md">Privacy Policy</Text>
          </Link>
          <Link href="#" isExternal>
            <Text fontSize="md">Terms of Service</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;
