import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Image,Container,Box, Flex, VStack,Heading,Text, Center, Button,Link,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from '@chakra-ui/react'
// import Details from './details'
// import Carts from './carts'

 function Support() {
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

<VStack  className='textsent'>
         
         <Heading  textAlign="center" size="xl">Rad Support</Heading>
         <Box>
         <Text textAlign="center" color="red" fontWeight="sm" fontSize="md">1-800-456-7890</Text>
         <Text textAlign="center" color="red" fontWeight="sm" fontSize="md">Support@radgolg.com</Text>
         <Text textAlign="center" color="red" fontWeight="sm" fontSize="md">www.radgolf.com</Text>
         </Box>
    
         <SimpleGrid columns={1} columnGap={1} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl textAlign="center">
              {/* <Input placeholder="Phone Number" textAlign="center" w="25"/> */}
              <Button fontSize="xl"  colorScheme="black" borderRadius="30px"  m="4"   height="60px" width="318px" mt="4" className="submit">Back</Button>
          
            </FormControl>
          </GridItem>
         </SimpleGrid>
 
         </VStack>
 
         {/* <VStack mt="auto" className='textbottom'> */}

{/* <Text fontSize="medium" color="red"  mt="70%" textAlign="center">Contact Supprort</Text> */}
                {/* </VStack> */}

       </Box>
       </Flex>
    </Container>
    
  )
}
export default Support;
