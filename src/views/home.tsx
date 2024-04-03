import { Button, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { GoArrowRight } from "react-icons/go";
import Contact from "../components/Contact";
import amanda from '../assets/IMG_1751.jpg'
import { Link as ReactRouterLink, ScrollRestoration } from 'react-router-dom';


const Home =  () => {
    return (

        <>
        <Flex id="welcome"
        height='6rem'
        bgColor='am.200'
        >
        <Navbar/>
        </Flex>

        <Flex 
        bgColor='am.200'
        height={{base:'80vh', md:'90vh'}}
        direction='column'
        alignItems={{base:'initial', md:'center'}}
        justifyContent='center'>

            <Flex
            bgColor='am.200'
            marginLeft={{base:'1rem', md:'3rem'}}
            >
                <Heading
                fontSize={{base:'3rem', md:'5rem', lg:'9rem'}}
                textColor='am.100'>
                    FULL STACK DEVELOPER
                </Heading>

            </Flex>

            <Flex
            textColor='am.100'
            fontSize={{base:'smaller', md:'medium'}}
            width={{base:'80%', md:'70%', lg:'40%'}}
            marginLeft={{base:'1rem', md:'0rem'}}
            >
                <h1>I create, build and turn ideas into real life products for brands and startups by balancing the business needs and the user's needs.</h1>
            </Flex>

        </Flex>

        <Divider
        height='0.5rem' bgColor='am.100'>
        </Divider>

        <Flex
        height={{base:'100vh', md:'150vh'}}
        bgImage={amanda}
        bgSize='cover'>
        </Flex>

        <Flex
        minHeight='100vh'
        bgColor='am.200'
        textColor='am.100'
        fontSize='10rem'
        overflow='hidden'
        justify='center'
        alignItems='center'
        >
        <Heading display={{base:'flex', md:'none'}} fontSize='11rem' textAlign='center'>AMA <br /> NDA MÁR <br /> QUEZ</Heading>
        <Heading display={{base:'none', md:'flex'}} fontSize={{md:'12rem', lg:'22rem'}} textAlign='center'>AMANDA MÁRQUEZ</Heading>
        </Flex>

        <Divider
         bgColor='am.100'>
        </Divider>

        <Flex height='2rem'
        bgColor='am.200'
        textColor='am.100' 
       justify='space-around'
       paddingTop='1rem'>

        <p>AM</p> 
        <p>CCS,VE</p>
        <p>WORLDWIDE</p>
        </Flex>

        <Flex id='boxes'
        height='100vh'
        bgColor='am.200'
        justifyContent='center'
        alignItems='center'
        direction={{base:'column', md:'row'}}>

        <Flex
        width={{base:'80%', md:'45%'}}
        bgColor='am.100'
        height={{base:'40%', md:'55%', lg:'65%'}}
        direction='column'
        padding={{base:'1.5rem', lg:'3rem'}}
        gap='1rem'
        justify='center'
        fontSize={{base:'small', md:'medium', lg:'large'}}
        >

            <Heading
            fontSize={{base:'2rem', md:'2rem', lg:'3rem'}}
            lineHeight={{base:'2.3rem', lg:'3rem'}}>
                I build and <br /> design cool stuff
            </Heading>

            <h1>
             Everything for the identity of your brand. <br />
             Creative, original and aesthetic.
            </h1>

        <Stack direction='row' spacing={4}>
        <Button 
        as={ReactRouterLink}
        to='/work'
        rightIcon={<GoArrowRight/>} 
        colorScheme='am.200' 
        variant='outline'>
            See my work
        </Button>
        </Stack>

        </Flex>

        <Divider 
        display={{base:'none', md:'flex'}}
        orientation='vertical' 
        height='20%'
        width='0.4rem'>
        </Divider>

        <Divider 
        display={{base:'flex', md:'none'}}
        orientation='horizontal' 
        width='80%'
        >
        </Divider>

        <Flex
        width={{base:'80%', md:'45%'}}
        bgColor='am.100'
        height={{base:'40%', md:'55%', lg:'65%'}}
        direction='column'
        padding={{base:'1.5rem', md:'1.5rem', lg:'3rem'}}
        gap='1rem'
        justify='center'
        fontSize={{base:'small', md:'medium', lg:'large'}}
        >
            <Heading
            fontSize={{base:'2rem', md:'2rem', lg:'3rem'}}
            lineHeight={{base:'2.3rem', lg:'3rem'}}>
                Design and web development
            </Heading>

            <h1>
             Full stack developer for web sites and web applications. <br />
            </h1>

        <Stack direction='row' spacing={4} >
        <Button 
         as={ReactRouterLink}
         to='/work'
        rightIcon={<GoArrowRight/>} 
        colorScheme='am.200' 
        variant='outline'>
            See my work
        </Button>
        </Stack>

        </Flex>

        </Flex>

       <Contact/>

        <Flex id="foot">

        </Flex>
        <ScrollRestoration />

        </>
    )
}

export default Home;