import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import illusHolistic from "../assets/holistic-03.png"
import tono from "../assets/holistic-02.png"
import holisticlogo from "../assets/holistic-01.png"
import significados from "../assets/holistic-04.png"
import flyer from "../assets/flyer.png"
import tdv from "../assets/holistic-05.png"
import social from "../assets/holistic-07.png"
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { ScrollRestoration } from "react-router-dom"

const Holistic = () => {
    return (
<>

    <Navbar/>

    <Flex 
        width='full'
        height='6rem'
        overflow='hidden'
        bgColor='am.200'>
    </Flex>

    <Flex 
    width='full'
    justify='center'
    alignItems='center'
    bgColor='am.200'
    paddingX={{base:'1rem', md:'2rem'}}
    direction='column'>

        <Flex
        width='full'
        height={{base:'50vh', md:'50vh'}}
        direction={{base:'column', md:'row'}}
        gap={{base:'1rem', md:'0rem'}}
 >

            <Flex
            width={{base:'100%', md:'50%'}}
            justify='center'
            padding={{base:'0rem', md:'1rem'}}
            color='am.100'
            direction='column'
            >
                <Heading size={{base:'md', md:'lg'}}>
                HOLISTIC STUDIO
                </Heading>
                <Text lineHeight='1.5rem' size={{base:'sm', md:'md'}}>
                Brand Identity <br />
                Social Media <br />
                2023
                </Text>
            </Flex>

            <Flex
            width={{base:'100%', md:'50%'}}
            justify='center'
            marginRight='10rem'
            color='am.100'
            direction='column'
            >
                <Text lineHeight='1.5rem' textAlign='justify' fontSize={{base:'sm', md:'initial'}}>
                Holistic Studio focus on you living a unique moment, full of peace and harmony to align your energy and find your vital balance. It's more than a wellness place, it's the right moment of joyful and self conection that everybody needs and deserve. I worked with them to define what kind of brand they want to be and how it will be appreciated by the world. Some brand identity,  social media guideness and paper stuff.
                </Text>
            </Flex>

        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        marginTop='1.5rem'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            <Image src={holisticlogo} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            <Image src={tono} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
        <Image src={illusHolistic} height={{base:'100%', md:'80%', xl:'90%'}}></Image>

        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
                        <Image src={tdv} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
                        <Image src={flyer} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
                        <Image src={social} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        id='holistic'
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            
            <Image src={significados} height={{base:'100%', md:'80%', xl:'90%'}}></Image>

        </Flex>

        </Flex>

        <Contact/>
        <ScrollRestoration />

</>
    )

}

export default Holistic;