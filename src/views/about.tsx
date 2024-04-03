import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import amanda from '../assets/IMG_1761.jpg'
import stepper from '../assets/stepper.png'
import steppersm from '../assets/steppersm-03.png'
import { ScrollRestoration } from "react-router-dom";
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { useEffect } from "react";


const About = () => {

    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      console.log(element);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


    return (
        <>
        <Navbar/>

        <Flex 
        height={{base:'20vh', md:'25vh'}}
        bgColor='am.200'
        position='relative'
        justify='center'
        >
             <Heading 
                fontSize={{base:'5rem', md:'8rem', lg:'10rem', xl:'13rem'}} 
                lineHeight={{base:'5rem', md:'7rem'}}
                padding='1rem'
                textColor='am.100'
                marginTop={{base:'6rem', lg:'8rem'}}
                zIndex={30}
                > ABOUT ME</Heading>
        </Flex>

        <Flex
        height={{base:'55vh', md:'85vh', lg:'90vh'}}
        bgColor='am.200'
        overflow='hidden'
        justify={{base:'center', md:'initial'}}
        >

        <Image src={amanda}
            height='100%'
            marginLeft={{base:'0rem', md:'2rem'}}
            loading="lazy">
        </Image>

        <Flex
        width='50%'
        textColor='am.100'
        alignSelf='center'
        padding='2rem'
        display={{base:'none', md:'flex'}}
        fontSize={{md:'small', lg:'large', xl:'2xl'}}
        fontWeight='500'
        textAlign='justify'
        direction='column'
        gap='1rem'

        >
            Hello there! I will start telling you more about me. My name is Amanda Márquez, 
            I'm 26 years old and I will be your trusted designer and web developer. I was born and raised 
            in Caracas, Venezuela until my 18! Then, I moved to Barcelona, Spain where I met the art world.
            I fell in love with the design field so I started studying Global Design at IED Institute for two years
            and since then I've been watching my world with art glance.  <br /> 
            I strongly believe that web development field and design field has a lot in common and also I like the 
            way that a stranger language called as "code" can build amazing and rares things. That is why I decided to 
            start studying Web Development and now I can find ways to communicate to users in a visually and 
            cohesively inviting way and also build them ideas into real life products.

            <Button
            as={ReactRouterLink}
          variant='outline'
          rounded='3xl' padding='0.5rem' textColor='am.100'
          width='7rem' placeSelf='end' fontWeight='100' colorScheme='whiteAlpha'
          to={{  pathname: '/about', hash:'#services'  }}
        >
            SERVICES
        </Button>

        </Flex>
    
        </Flex>

        <Flex id="about"
        minHeight='50vh'
        bgColor='am.200'
        display={{base:'flex', md:'none'}}
        textColor='am.100'
        padding='1.5rem'
        fontSize='medium'
        textAlign='justify'>
         Hello there! I will start telling you more about me. My name is Amanda Márquez, 
            I'm 26 years old and I will be your trusted designer and web developer. I was born and raised 
            in Caracas, Venezuela until my 18! Then, I moved to Barcelona, Spain where I met the art world.
            I fell in love with the design field so I started studying Global Design at IED Institute for two years
            and since then I've been watching my world with art glance.  <br /> 
            I strongly believe that web development field and design field has a lot in common and also I like the 
            way that a stranger languaje called as "code" can build amazing and rares things. That is why I decided to 
            start studying Web Development and now I can find ways to communicate to users in a visually and 
            cohesively inviting way and also build them ideas into real life products.
        </Flex>

        <Flex id='stepper'
        height='70vh'
        bgColor='am.200'
        justify='center'
        alignItems='center'
        >
            <Flex 
            display={{base:'none', md:'flex'}}
            width={{md:'90%', lg:'60%'}}>
            <Image src={stepper}>
            </Image>
            </Flex>

            <Flex 
            display={{base:'flex', md:'none'}}
            height='90%'
            padding='1rem'
            justify='center'>
            <Image src={steppersm}>
            </Image>
            </Flex>

        </Flex>

        <Flex id='services'
        minHeight='50vh'
        bgColor='am.100'
        justify='center'
        alignItems='center'
        direction={{base:'column', md:'row'}}>

        <Flex
        width={{base:'90%', md:'50%'}}
        alignItems='center'
        justify='center'
        >
             <Heading fontSize='2rem'
            display={{base:'flex', md:'none'}}
            textColor='am.200'>
                ABOUT DESIGN
            </Heading>

            <Heading fontSize={{md:'4rem', lg:'5rem', xl:'7rem'}} 
            display={{base:'none', md:'flex'}}
            textColor='am.200'>
                ABOUT <br /> DESIGN
            </Heading>
        </Flex>

        <Flex
        width={{base:'90%', md:'50%'}}
        paddingRight='3rem'
        padding={{base:'1rem', md:'2rem', lg:'5rem'}}
        justify='center'
        alignItems='center'
        textColor='am.200'
        fontWeight='600'

        >

        <Accordion allowToggle defaultIndex={[0]}  width='100%'>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' fontFamily='heading'>
                CREATIVE CONCEPT
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
            I'll set the tone and direction for the brand. 
            Providing a vision that guides the development 
            and execution of the visual identity.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'fontFamily='heading'>
                VISUAL IDENTITY
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
            I go beyond delivering just a logotype.
             Your brand's visual identity will include a
             thorough logotype system, a timeless color palette,
              a refined typographic, and distinctive 
              graphic elements for a truly cohesive brand.
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'fontFamily='heading'>
                BRAND APPLICATIONS
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
            - Social Media Plan <br />
            - Web Design
            </AccordionPanel>
        </AccordionItem>

        </Accordion>

        </Flex>

        </Flex>

        <Flex
        minHeight='50vh'
        bgColor='am.100'
        justify='center'
        alignItems='center'
        direction={{base:'column', md:'row'}}>

        <Flex
        width={{base:'90%', md:'50%'}}
        justify='center'
        alignItems='center'
        display={{base:'flex', md:'none'}}
        >
            <Heading fontSize={{base:'2rem', md:'4rem', lg:'7rem'}}
            textColor='am.200'>
                EXPERIENCE
            </Heading>
        </Flex>

        <Flex
        width={{base:'90%', md:'50%'}}
        padding={{base:'1rem', md:'2rem', lg:'5rem'}}
        fontWeight='600'
        justify='center'
        alignItems='center'
        textColor='am.200'
        >

        <Accordion allowToggle defaultIndex={[0]} width='100%'>
        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'fontFamily='heading'>
                DESIGN SYSTEMS
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
            I will create a custom web design 
            that sets your brand apart. Optimizing 
            the website to be accessible and user-friendly on every device.    
            </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' fontFamily='heading'>
                FRONT END DEVELOPMENT
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
           Languages: <br />
           - HTML, CSS, JavaScript <br />
           Tools: <br />
           - React JS, Tailwind, Chakra UI
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
            <h2>
            <AccordionButton _expanded={{ bg: 'am.300', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' fontFamily='heading'>
                BACK END DEVELOPMENT
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
            Languages: <br />
            - JavaScript
            Tools: <br />
            - Node JS, Express, MongoDB
            </AccordionPanel>
        </AccordionItem>

        </Accordion>
        
        </Flex>

        <Flex
        width='50%'
        justify='center'
        alignItems='center'
        marginRight='6rem'
        display={{base:'none', md:'flex'}}
        >
            <Heading fontSize={{md:'4rem', lg:'5rem', xl:'7rem'}}
            textColor='am.200'>
                WEB EXPERIENCE
            </Heading>
        </Flex>

        </Flex>
    
        <Contact/>
        <ScrollRestoration />
        </>
    )
}

export default About;