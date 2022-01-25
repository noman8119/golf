import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {RadioGroup,Radio,Stack,Grid,Image,Container,Box, Flex, VStack,Heading,Text, Center, Button,Link,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from '@chakra-ui/react'
// import Details from './details'
// import Carts from './carts'
import {MinusIcon, AddIcon} from '@chakra-ui/icons'
// import ToggleSwitch from "./ToggleSwitch";
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
        // p={10} 
        // spacing={10}
        // bg="red.100"
         className='main-form'
         p="50px"
         textAlign="center"
        >
{/* <VStack  my="auto" className='textsent'> */}
<Flex justifyContent="space-around">
<Box className='circle'>
<input type="file" className='addimg' />
<Image height="auto" width="80%" src='addimg.png/' alt='Dan Abramov'  />

</Box>
<Box p="25px">
<Heading size="md" fontWeight="bold" colorScheme="black">Shaun Alexander</Heading>
  <Text fontWeight="medium">Handicap:<span className='span8'> +8</span></Text>
</Box>

</Flex>

   <SimpleGrid columns={1} columnGap={2} rowGap={4} w="full" mt="20px">
    <GridItem >
      <FormControl textAlign="center">
      <Flex mt="10px" justify="space-between">
      <FormLabel htmlFor='course'>Home Course</FormLabel>
        <Input placeholder="Select Course" ml='auto' type="text" className='register_input' textAlign="center" variant='outline' w="25"  fontSize="md"/><br/>
        </Flex>
        <Flex mt="10px" justify="space-between">
      <FormLabel htmlFor='course'>Handicap</FormLabel>
        <Input ml='auto' placeholder="Select Course" type="text" className='register_input' textAlign="center" variant='outline' w="25"  fontSize="md"/><br/>
        </Flex>

        <Flex mt="10px" >
      <FormLabel htmlFor='course'>Gender</FormLabel>
      <RadioGroup ml="auto" defaultValue='1' justify="center" >
  <Stack spacing={4} direction='row'>
    <Radio size="lg" value='2' mr="30px" colorScheme='red'>Male</Radio>
    <Radio size="lg" value='3' ml="auto" colorScheme='red'>Female</Radio>
  </Stack>
</RadioGroup>
{/* <Stack>
  <Radio size='lg' value='2' name='1' colorScheme='red' >
    Radio
  </Radio>
</Stack> */}


        </Flex>
        <Flex mt="10px" >
      <FormLabel htmlFor='course'>Swing</FormLabel>
      <RadioGroup ml="auto" defaultValue='1' justifyContent="center" >
  <Stack spacing={4} direction='row'>
    <Radio size="lg" mr="55px" value='2' colorScheme='red'>Left</Radio>
    <Radio size="lg"  value='3'  colorScheme='red'>Right</Radio>
  </Stack>
</RadioGroup>
        </Flex>
        <Flex mt="10px" >

        </Flex>

        <Flex mt="10px" justify="space-between">
      <FormLabel htmlFor='email'>Email</FormLabel>
        <Input ml='auto' placeholder="Email" type="email" className='register_input' textAlign="center" variant='outline' w="25"  fontSize="md"/><br/>
        </Flex>
        <Flex mt="10px" justify="space-between">
      <FormLabel htmlFor='dob'>Date of Birth</FormLabel>
        <Input ml='auto' placeholder="xx / xx / xxx" type="text" className='register_input' textAlign="center" variant='outline' w="25"  fontSize="md"/><br/>
        </Flex>

        <Flex mt="10px" justify="space-between">
      <FormLabel htmlFor='z-codw'>Zip Code</FormLabel>
        <Input ml='auto' placeholder="0000" type="number" className='register_input' textAlign="center" variant='outline' w="25"  fontSize="md"/><br/>
        </Flex>

        
       
      </FormControl>
    </GridItem>
   </SimpleGrid>
         {/* </VStack> */}
         <Box  justifyContent="space-between" mt="20%">
        <Box> <Button colorScheme="black" fontSize="xl"  height="60px" width="306px"  borderRadius="30px"  className="submit">Finish</Button></Box> 
        <Box mt="5%"><Link href="#"><a><span className="skip" >Skip Setup</span></a></Link></Box> 
        </Box>







       </Box>
       </Flex>
       {/* <ToggleSwitch  /> */}
    </Container>    
  )
}
export default Register;
