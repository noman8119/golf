import Head from 'next/head'
// import Image from 'next/image'
import Link from "next/Link";
import styles from '../styles/Home.module.css'
import {Image,Container,Box, Flex, VStack,Heading,Text, Center, Button,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from '@chakra-ui/react'
// import Details from './details'
// import Carts from './carts'

 function Login() {
  return (
    <Container maxWidth="container.2xl" p={0}>
       <Flex h="100vh">
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

{/* <Heading>INTRO VIDEO</Heading> */}
        {/* <VStack spacing={3} alignItems="flex-start" my="auto">
         <Heading size="2xl">Your details</Heading>
         <Text>if you already have an account, click here to log in</Text>
         <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Fists name</FormLabel>
              <Input placeholder="john"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="doe"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="Type a message here"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="lahore"/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
               <option value="pak">Pakistan</option>
               <option value="usa">USA</option>
               <option value="uae">UAE</option>
               <option value="Frc">France</option>
              </Select>
            </FormControl>
          </GridItem>
         </SimpleGrid>
         </VStack> */}
       </Box>
       {/* right */}
       <Box
          width={{
      base: '100%', // 0-48em
      md: '50%', // 48em-80em,
      xl: '33%', // 80em+
    }}
        h="full"
        p={10} 
        spacing={10}
        // bg="red.100"
         className='main-form'
        >
<Box   className='textsent'>

<Heading size="xl" fontWeight="medium" textAlign="center">Sign in to your account</Heading>
         <Text fontWeight="medium" fontSize="xl" textAlign="center">Enter your phone number</Text>
         <SimpleGrid columns={1}  rowGap={6} w="full" textAlign="center">
          <GridItem colSpan={1}>
            <FormControl textAlign="center">
              <Input placeholder="Phone Number"  className='login-input' variant='flushed' textAlign="center" height="60px" width="318px" fontSize="lg" required />
              <Link href="/grid">
              <Button fontSize="xl" colorScheme="black" m="4" mx="auto" borderRadius="30px" height="60px" width="318px" mt="8" className="submit">Submit</Button>
              </Link>
              <Text fontSize="md"  pt="2" fontWeight="medium">{"Did't have an account?"}<Link href="/registerform"><a><span className="signin"> Click here</span></a></Link></Text>
            </FormControl>
          </GridItem>
         </SimpleGrid>
         </Box>

         {/* <VStack mt="auto" className='textbottom'> */}
<Text fontSize="medium" textAlign="center" mt="40%" color="red">Contact Supprort</Text>
 {/* </VStack> */}

       </Box>
       </Flex>
    </Container>
    
  )
}
export default Login;
