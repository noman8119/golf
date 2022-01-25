import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Image,Container,Box, Flex, VStack,Heading,Text, Center, Button,Link,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from '@chakra-ui/react'
// import Details from './details'
// import Carts from './carts'

 function Login() {
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
<VStack verticalAlign="center" mt="30%">
<Heading  size="xl" fontWeight="bold" textAlign="center" colorScheme="black">Get Started</Heading>
   <Text fontWeight="medium" fontSize="xl" textAlign="center">Enter your email and password<br/> to access your account</Text>
   <SimpleGrid columns={1} columnGap={2} rowGap={4} w="full">
    <GridItem colSpan={2}>
      <FormControl textAlign="center">
        <Input placeholder="Email" type="email" textAlign="center" width="306px" className='login-input' variant="flushed" mt="4" fontSize="lg"/><br/>
        <Input placeholder="Password" type="password" textAlign="center" width="306px" className='login-input' variant="flushed"  mt="4" fontSize="lg"/>
        <Input placeholder="Confirm Password" type="password" className='login-input' width="306px" variant="flushed" textAlign="center"  mt="4" fontSize="lg"/>
        <Button colorScheme="black" fontSize="xl" m="4" borderRadius="30px" height="60px" width="306px" mt="8" className="submit">Submit</Button>
        <Text fontSize="md" pt="2" fontWeight="medium">Already have an account?<Link href="/"><span className="signin">Sign in here</span></Link></Text>
      </FormControl>
    </GridItem>
   </SimpleGrid>
         </VStack>

         {/* <VStack mt="auto" className='textbottom'> */}

<Text fontSize="medium" textAlign="center" mt="40%" color="red">Contact Supprort</Text>
    {/* </VStack> */}

       </Box>
       </Flex>
    </Container>
    
  )
}
export default Login;
