import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {RadioGroup,Radio,Stack,Grid,Image,Container,Box, Flex, VStack,Heading,Text, Center, Button,Link,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from '@chakra-ui/react'

 function Register() {
  return (
    <Container maxWidth="container.2xl" p={0}>
       <Flex h="100vh" >
       {/* left */}
       <Box 
           width={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '67%', // 80em+
    }}
        h="full"

        p={0} 
        spacing={10}
        // bg="gray.100"
        >

  <Image src='img2.png/' alt='Dan Abramov' width='100%' height='100vh' />

       </Box>
       {/* right */}
       <Box
          width={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '33%', // 80em+
    }}
        h="full"
        // p={10} 
        // spacing={10}
        // bg="red.100"
         className='main-form'
         p="45px"
         textAlign="center"
        >
<VStack mt="20%">
<Heading size="lg" fontWeight="bold" colorScheme="black">Download tha Rad Mobile App</Heading>
   <Text fontWeight="lg">Scan the code with your phone to download the app</Text>
   <Flex flexDir="row" justifyContent="center" verticalAlign="middle" pt="35px" pb="35px">
    <Image
  borderRadius='full'
  boxSize='180px'
  src='code.png'
  alt='Dan Abramov'
/>
   </Flex>
   <Text fontWeight="medium" fontSize="lg">{"Don't want to scan it?"}</Text>
   <Text fontWeight="medium" fontSize="lg">Go to the App Store and search for Rad Golf</Text>
         </VStack>
         <Text fontSize="md" pt="35px" fontWeight="medium">Already have an account?<Link href="/"><span className="signin"> Sign in here</span></Link></Text>

<Text fontSize="medium" mt="35%" color="red">Contact Supprort</Text>
 {/* </VStack> */}
       </Box>
       
       </Flex>
       {/* <ToggleSwitch  /> */}
    </Container>    
  )
}
export default Register;
