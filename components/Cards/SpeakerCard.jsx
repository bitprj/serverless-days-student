import {
  Box,
  Badge,
  HStack,
  Icon,
  Text,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const SpeakerCard = ({
  name,
  title,
  company,
  img,
  twitter,
  linkedin,
}) => {
  return (
    <Box border="1px solid white" borderRadius="10px" textAlign="center" p="4">
      <Badge colorScheme="blue" px={2} mt={"-60px"}>
        {title}
      </Badge>
      <WrapItem mb={2}>
        <Avatar
          height="150px"
          width="150px"
          name={name}
          src={img}
          mx="auto"
          bg="transparent"
        />
      </WrapItem>

      <Text fontWeight="bold" fontSize={{ base: "md", lg: "xl" }} color="white">
        {name}
      </Text>
      {company && (
        <Text
          color="gray.300"
          fontStyle="italic"
          fontSize={{ base: "sm", lg: "md" }}
        >
          {company}
        </Text>
      )}

      <HStack justify="center">
        {twitter && (
          <Box as="a" href={twitter} target="_blank">
            <Icon as={AiOutlineTwitter} fontSize="3xl" color="#1DA1F2" />
          </Box>
        )}
        {linkedin && (
          <Box as="a" href={linkedin} target="_blank">
            <Icon
              as={AiFillLinkedin}
              fontSize="3xl"
              transition="all .2s"
              color="#0077b5"
              _hover={{
                color: "#006091",
              }}
            />
          </Box>
        )}
      </HStack>
    </Box>
  );
};
