import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="orange.500" color="white">
      <Flex
        maxW="1200px"
        mx="auto"
        py={6}
        px={4}
        justifyContent="space-between"
        alignItems="center"
        height={"100"}
        width={"100"}
      >
        <Text fontSize="xl">© 2023 Token Transfer App</Text>
        
      </Flex>
    </Box>
  );
};

export default Footer;