import { Box, Img, Link } from "@chakra-ui/react";

export const SponsorCard = ({ img, href }) => {
  return (
    <Box as="a" href={href} target="_blank" mx="auto">
      <Img src={img} maxH="300px" />
    </Box>
  );
};
