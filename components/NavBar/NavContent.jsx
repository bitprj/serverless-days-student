import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";

const links = [
  {
    label: "Register",
    href: "https://airtable.com/shrNjoawKZLej3fa1",
  },
  {
    label: "CFP",
    href: "https://airtable.com/shrcvcTLLApodQJYG",
  },
  {
    label: "Agenda",
    href: "/#agenda",
  },
  {
    label: "Speakers",
    href: "/#speakers",
  },
  {
    label: "Our Team",
    href: "/#team",
  },
  {
    label: "Swag",
    href: "/swag",
  },
  {
    label: "Sponsors",
    href: "/#sponsors",
  },
  {
    label: "CoC",
    href: "/coc",
  },
];

const MobileNavContent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Center as="button" p="2" fontSize="2xl" onClick={onToggle} color="white">
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="gray.900"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0">
          {links.map((link, index) => (
            <NavListItem key={index}>
              <NavLink.Mobile href={link.href}>{link.label}</NavLink.Mobile>
            </NavListItem>
          ))}
          <NavListItem
            style={{
              flex: "1",
            }}
          ></NavListItem>
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  return (
    <HStack spacing="6" align="stretch" {...props}>
      {links.map((link, index) => (
        <NavLink.Desktop
          key={index}
          href={link.href}
          fontSize="xl"
          fontWeight="bold"
          _hover={{
            color: "#808080",
          }}
        >
          {link.label}
        </NavLink.Desktop>
        // </motion.a>
      ))}
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
