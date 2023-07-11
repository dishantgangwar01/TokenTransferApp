import { Container, Flex,Box } from "@chakra-ui/react";
import TransferCard from "../components/TransferCard";
import Events from "../components/Events";

export default function TransferPage() {
    return (
    <Box bgGradient='linear(to-r, green.200, orange.200, red.100)'>
        <Container maxW={"1440px"}>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

                <TransferCard />
                <Events />
               
            </Flex>
        </Container>
        </Box>
    );
}