import { Container, Flex, Text, Box } from"@chakra-ui/react";
import Link from "next/link";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Navbar() {
    const address = useAddress();

    return(
        <Box bg="orange.500" color="white">
        <Container maxW={"1440px"} py={4}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Link href={"/"}>
                    <Text fontWeight={"bold"} fontSize={"3xl"} >Token Transfer App</Text>
                </Link>
                {address && (
                    <Flex flexDirection={"row"}>
                        <Link href={"/transfer"}>
                            <Text mr={9} fontSize={"lg"} fontWeight={"bold"}>Transfer</Text>
                        </Link>
                        <Link href={"/claim"}>
                            <Text mr={9} fontSize={"lg"} fontWeight={"bold"}>Claim Token</Text>
                        </Link>
                        <Link href={`/profile/${address}`}>
                            <Text fontSize={"lg"} fontWeight={"bold"}>My Account</Text>
                        </Link>
                    </Flex>
                )}
                <ConnectWallet />
            </Flex>
        </Container>
        </Box>
    )
}