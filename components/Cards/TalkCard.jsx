import {
  Box,
  Text,
  Heading,
  VStack,
  Avatar,
  Tooltip,
  HStack,
  Badge,
} from "@chakra-ui/react";

export const TalkCard = ({ title, desc, avatars, names, time, day, type }) => {
  const badgeThemes = {
    workshop: "teal",
    talk: "pink",
    presentation: "purple",
  };
  const color = day === 1 ? "#0DC5F6" : "#6f2ca8";
  return (
    <VStack
      spacing={1}
      bg="gray.800"
      boxShadow={`0px 0px 20px 1px ${color}`}
      _hover={{
        boxShadow: `0px 0px 40px 1px ${color}`,
      }}
      p={3}
      rounded="md"
      transition="all .2s"
      textAlign="center"
    >
      <Badge colorScheme={badgeThemes[type]} fontSize="sm">
        {type}
      </Badge>
      <Text color="white" fontWeight="semibold" fontSize="2xl">
        {title}
      </Text>
      <Text fontSize="md" fontWeight="semibold" color="white">
        {time}
      </Text>
      <HStack spacing={2} justifyContent="center">
        {avatars &&
          avatars.map((avatar, i) => {
            return (
              <Tooltip label={names[i]} key={i}>
                <Avatar
                  name={names[i]}
                  src={avatar}
                  height="40px"
                  width="40px"
                />
              </Tooltip>
            );
          })}
      </HStack>

      <Text color="gray.300" fontSize="lg">
        {desc}
      </Text>
    </VStack>
  );
};
