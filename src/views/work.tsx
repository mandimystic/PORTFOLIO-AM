import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import portadaHolistic from "../assets/portadaholistic-01.png"
import portadaAmnesia from "../assets/fondoAmnesiaSM-02.png"
import portadaFryer from "../assets/portadafryer-01.png"
import portadaCoco from "../assets/portadaCoco-26.png"
import { Link, ScrollRestoration } from "react-router-dom";
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";




const Work = () => {
    return (

    <>

        <Navbar/>

        <Flex 
        height='6rem'
        overflow='hidden'
        bgColor='am.200'
>
        </Flex>


        {/* WORK FOR MD */}

        <Flex
        id='cocohouse'
        width='full'
        height={{base:'55vh', md:'40vh', lg:'50vh'}}
        direction={{base:'column', md:'row'}}
        bgColor='am.200'>

            <Flex
            width={{base:'100%', md:'50%'}}
            padding='2rem'
            color='am.100'
            direction='column'
            justify='center'
            alignItems='center'
        
            >
                <Image src={portadaCoco}>
                </Image>
            </Flex>

            <Flex
            width={{base:'100%', md:'50%'}}
            color='am.100'
            direction='column'
           
           justify='center'
           padding='2rem'
            >
                 <Heading size={{base:'md', md:'lg'}}>
                COCO HOUSE
                <Button rightIcon={<FaArrowRight />}
            as={Link} variant='ghost'
            padding='0.5rem' 
            textColor='am.100'
            fontWeight='100' 
            colorScheme='whiteAlpha'
            width='1rem'
            to='https://cocohouse.es/'
        >
        </Button>
                </Heading>
                <Text lineHeight='1.5rem' size={{base:'sm', md:'md'}}>
                Web design <br />
                Web development <br />
                Spain, <br />
                2024
                </Text>
            </Flex>

        </Flex>
        
        <Flex
        id='holisticstudio'
        width='full'
        height={{base:'55vh', md:'40vh', lg:'50vh'}}
        direction={{base:'column', md:'row'}}
        bgColor='am.200'>

            <Flex
            width={{base:'100%', md:'50%'}}
            padding='2rem'
            color='am.100'
            direction='column'
            justify='center'
            alignItems='center'
        
            >
                <Image src={portadaHolistic}>
                </Image>
            </Flex>

            <Flex
            width={{base:'100%', md:'50%'}}
            color='am.100'
            direction='column'
           
           justify='center'
           padding='2rem'
            >
                 <Heading size={{base:'md', md:'lg'}}>
                HOLISTIC STUDIO
                <Button rightIcon={<FaArrowRight />}
            as={ReactRouterLink} variant='ghost'
            padding='0.5rem' 
            textColor='am.100'
            fontWeight='100' 
            colorScheme='whiteAlpha'
            width='1rem'
          to='/HolisticStudio'
        >
        </Button>
                </Heading>
                <Text lineHeight='1.5rem' size={{base:'sm', md:'md'}}>
                Brand Identity <br />
                Social Media <br />
                Venezuela, <br />
                2023 . 2024
                </Text>
        

            </Flex>

        </Flex>

        <Flex
        id='fryer'
        width='full'
        height={{base:'55vh', md:'40vh', lg:'50vh'}}
        direction={{base:'column', md:'row'}}
        bgColor='am.200'>

            <Flex
            width={{base:'100%', md:'50%'}}
            padding='2rem'
            color='am.100'
            direction='column'
            justify='center'
            alignItems='center'
        
            >
                <Image src={portadaFryer}>
                </Image>
            </Flex>

            <Flex
            width={{base:'100%', md:'50%'}}
            color='am.100'
            direction='column'
           
           justify='center'
           padding='2rem'
            >
                 <Heading size={{base:'md', md:'lg'}}>
                FRYER AND GRILLS
                <Button rightIcon={<FaArrowRight />}
            as={ReactRouterLink} variant='ghost'
            padding='0.5rem' 
            textColor='am.100'
            fontWeight='100' 
            colorScheme='whiteAlpha'
            width='1rem'
            to='/Fryer'
        >
        </Button>
                </Heading>
                <Text lineHeight='1.5rem' size={{base:'sm', md:'md'}}>
                UNDER CONSTRUCTION <br />
                Brand Identity <br />
                Venezuela, <br />
                2024
                </Text>
        

            </Flex>

        </Flex>

        <Flex
        id='amnesia'
        width='full'
        height={{base:'55vh', md:'40vh', lg:'50vh'}}
        direction={{base:'column', md:'row'}}
        bgColor='am.200'>

            <Flex
            width={{base:'100%', md:'50%'}}
            padding='2rem'
            color='am.100'
            direction='column'
            justify='center'
            alignItems='center'
        
            >
                <Image src={portadaAmnesia}>
                </Image>
            </Flex>

            <Flex
            width={{base:'100%', md:'50%'}}
            color='am.100'
            direction='column'
           
           justify='center'
           padding='2rem'
            >
                 <Heading size={{base:'md', md:'lg'}}>
                AMNESIA
                <Button rightIcon={<FaArrowRight />}
            as={ReactRouterLink} variant='ghost'
            padding='0.5rem' 
            textColor='am.100'
            fontWeight='100' 
            colorScheme='whiteAlpha'
            width='1rem'
        >
        </Button>
                </Heading>
                <Text lineHeight='1.5rem' size={{base:'sm', md:'md'}}>
                Brand Identity <br />
                Social Media <br />
                Spain | Venezuela, <br />
                2024
                </Text>
        

            </Flex>

        </Flex>

        <Contact/>
        <ScrollRestoration />

        </>
    )
}

export default Work;