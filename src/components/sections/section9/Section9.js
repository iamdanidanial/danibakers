import React, { Fragment } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/layout';
import bgImageSection9 from '../../../resources/images/bgImageIce9.jpg';
import ContainerSocialNetworks from '../../ContainerSocialNetwokrs';

export default function Section9() {
  const fontsFamilies = ["'Pangolin', cursive", "'Roboto',sans-serif"];

  const socialNetworks = [
    {
      socialNetwork: 'Facebook',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg"><path d="M6.821 20v-9h2.733L10 7H6.821V5.052C6.821 4.022 6.848 3 8.287 3h1.458V.14c0-.043-1.252-.14-2.52-.14C4.58 0 2.924 1.657 2.924 4.7V7H0v4h2.923v9h3.898z" fill="currentColor" fillRule="evenodd"/></svg>`,
      url: 'https://www.facebook.com/danidanialdaniel94',
      pl: '6px',
    },
    {
      socialNetwork: 'Instagram',
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg"><path d="M5.87.123C4.242.196 2.83.594 1.69 1.729.548 2.869.155 4.286.081 5.897.037 6.902-.231 14.498.545 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 0 0-2.39 0M4.864 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31" fill="currentColor" fill-rule="evenodd"/></svg>',
      url: 'https://www.instagram.com/iamdanidanial',
    },
    {
      socialNetwork: 'Github',
      iconSvg:
        '<svg viewBox="0 0 256 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="currentColor"/></svg>',
      url: 'https://github.com/iamdanidanial',
    },
    {
      socialNetwork: 'Twitter',
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg"><path d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812" fill="currentColor" fill-rule="evenodd"/></svg>',
      url: 'https://twitter.com/iamdanidanial',
      pt: '2px',
    },
  ];

  return (
    <Fragment>
      <Flex
        position="relative"
        bgImg={`url(${bgImageSection9})`}
        color="white"
        w="full"
        h="740px"
        className="smt"
        bgAttachment="fixed"
        bgPosition={['top', 'top', 'top', 'center', 'center']}
        bgSize="cover"
        textAlign={['center', 'center', 'center', 'left', 'left']}
        fontFamily={fontsFamilies[1]}
      >
        <Stack
          mx={['auto', 'auto', 'auto', '0px', '0px']}
          pl={['0px', '0px', '0px', '120px', '120px']}
          pt="116px"
        >
          <Text as="h4" fontSize="50px" fontFamily={fontsFamilies[0]}>
            Dani <strong>Bakers</strong>
          </Text>
          <Text>Cianjur, Indonesia</Text>
          <Text mt="34px !important">Office Telephone : 001 01085379709</Text>
          <Text>Mobile : +62 812 8187 8727</Text>
          <Text mt="34px !important">Email : iamdanidanial@gmail.com</Text>
          <Text>Inquiries :iamdanidanial@gmail.com</Text>
          <Text mt="34px !important">Mon-Sat: 9am to 6pm</Text>
          <Flex
            gridGap="20px"
            mt="34px !important"
            justifyContent={['center', 'center', 'center', 'left', 'left']}
          >
            {socialNetworks.map((e) => (
              <ContainerSocialNetworks key={Math.random()} e={e} />
            ))}
          </Flex>
        </Stack>
      </Flex>
    </Fragment>
  );
}
