import { ScrollRestoration } from "react-router-dom";
import Contact from "../components/Contact";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Portada from "../assets/fryer-01.png"
import Fryer2 from "../assets/fryer-02.png"
import Fryer3 from "../assets/fryer-03.png"
import Fryer4 from "../assets/fryer-04.png"


const Fryer = () => {
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
          gap={{base:'1rem', md:'0rem'}}>

            <Flex
             width={{base:'100%', md:'50%'}}
             justify='center'
             padding={{base:'0rem', md:'1rem'}}
             color='am.100'
             direction='column'
        
            >
                <Heading size={{base:'md', md:'lg'}}>
                FRYER AND GRILLS
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
            marginRight={{base:'0rem', xl:'10rem'}}
            color='am.100'
            direction='column'
            >
                <Text lineHeight='1.5rem' textAlign='justify' fontSize={{base:'sm', md:'initial'}}>
                Fryer and Grills have 23 years in the market. They are a strong established 
                company in Venezuela that offer industrial machines for restaurants and 
                technical service, working with important brands around the world. They 
                needed a rebranding that place the company in the new hera of now. Some 
                refreshes points as the visual identity brand, logotipe, paper stuff and 
                very soon the entry to social media and inthernet. I'm still 
                working on this brand.            </Text>
            </Flex>

        </Flex>

        <Flex 
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            <Image src={Portada} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>

        <Flex 
        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            <Image src={Fryer2} height={{base:'100%', md:'80%', xl:'90%'}}></Image>
        </Flex>
        
        <Flex 

        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            
            <Image src={Fryer3} height={{base:'100%', md:'80%', xl:'90%'}}></Image>

        </Flex>

        <Flex 

        height={{base:'30vh', md:'60vh', lg:'100vh'}}
        bgColor='am.200'
        paddingBottom={{base:'1rem', md:'0rem'}}
        >
            <Image src={Fryer4} height={{base:'100%', md:'80%', xl:'90%'}}></Image>

        </Flex>

        </Flex>

        <Contact/>
        <ScrollRestoration />

</>
    )

}

export default Fryer;