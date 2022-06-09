import { Box, Flex, Text, Img } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export const NavBar = ({ bg }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      bg={bg ? bg : scrollPosition == 0 ? "transparent" : "gray.900"}
      color="white"
      transition="all 0.2s"
      position="fixed"
      top="0"
      width="100%"
      zIndex={99999}
    >
      <Box as="header" height="16" position="relative">
        <Box
          height="100%"
          px={{
            base: "8",
            md: "8",
          }}
          pe={{
            base: "8",
            md: "8",
          }}
        >
          <Flex
            as="nav"
            aria-label="Site navigation"
            align="center"
            justify="space-between"
            height="100%"
          >
            <motion.a href="/" whileHover={{ scale: 1.1 }}>
              <Img src="/updated_logo.png" h="16" />
            </motion.a>

            <NavContent.Desktop
              display={{
                base: "none",
                md: "flex",
              }}
            />
            <NavContent.Mobile
              display={{
                base: "flex",
                md: "none",
              }}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
