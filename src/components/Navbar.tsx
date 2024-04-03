import { Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import { Link as ChakraLink } from '@chakra-ui/react';
import { useEffect } from "react";
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';


const Links = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


    return (
        <Breadcrumb separator="" 
        textTransform="uppercase">
            
            <BreadcrumbItem display={window.location.pathname === '/' ? 'none' : 'flex'}>
          <ChakraLink  as={ReactRouterLink}
          to='/'>
          Home
        </ChakraLink>
        </BreadcrumbItem>

        <BreadcrumbItem display={window.location.pathname === '/about' ? 'none' : 'flex'}>
          <ChakraLink  as={ReactRouterLink} 
             to='/about'>
              About
        </ChakraLink>
        </BreadcrumbItem>
  
        <BreadcrumbItem display={window.location.pathname === '/work' ? 'none' : 'flex'}>
          <ChakraLink  as={ReactRouterLink} 
          to="/work">
            My work
        </ChakraLink>
        </BreadcrumbItem>
  
        <BreadcrumbItem >
        <ChakraLink  as={ReactRouterLink}  
        border='1px' borderColor='am.100' 
          rounded='3xl' padding='0.5rem' 
          to={{pathname: '/', hash: '#contact'}}>
            Contact
        </ChakraLink>
        </BreadcrumbItem>

      </Breadcrumb>

    )
};

const Navbar = () => {
    return (

      <Flex
        height="6rem"
        width='100%'
        alignItems="center"
        justify='center'
        position='fixed'
        zIndex={50}
        textColor={window.location.pathname === '/about' ? 'am.300' : 'am.100' }
        fontSize={{base:'0.8rem', md:'1rem'}}
      >
        <Links/>
    </Flex>
 
    );
  };

export default Navbar;