import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'Useful Links',
    links: [
      {
        label: 'Code of Conduct',
        href: "https://bitproject.org",
      },
      {
        label: 'Bit Project',
        href: 'https://bitproject.org',
      },
      {
        label: 'CFP',
        href: 'https://sessionize.com/serverless-days-student-edition/',
      },
      {
        label: 'Contact Us',
        href: 'mailto:student@serverlessdays.io',
        // badge: (
        //   <Badge colorScheme="blue" variant="solid" fontSize="0.625rem">
        //     New
        //   </Badge>
        // ),
      },
    ],
  },

  

]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/bitproject.org',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/bitprojectorg',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/bitprojectorg',
  },
  {
    label: 'LinkedIn',
    icon: <FaTwitter />,
    href: 'https://www.twitter.com/bitprj',
  },
]

