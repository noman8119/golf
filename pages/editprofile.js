import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem ,Flex,Grid,Heading,Image,
       Text,GridItem,Wrap,WrapItem,Center,
      VStack,Container,Box,Button,
      SimpleGrid, FormControl,InputGroup,InputLeftElement,
      Input,FormLabel,Select,Avatar,
      AspectRatio,Spacer, InputRightElement, 
      Checkbox, CheckboxGroup,Stack,NumberInput,NumberInputField,NumberInputStepper
    ,NumberIncrementStepper,NumberDecrementStepper,useNumberInput,HStack} from '@chakra-ui/react';
import{SearchIcon} from '@chakra-ui/icons';
import {useState} from 'react'
import Link from "next/Link";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function Profile() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 0.01,
    defaultValue: +8,
    min: 1,
    max: 100,
    precision: 2,
  })

const inc = getIncrementButtonProps()
const dec = getDecrementButtonProps()
const input = getInputProps({ isReadOnly: true })

return (
<>
<Box  w='100%' p={4} color='black' mt={2} border="1px solid gray">
<Navbar/>
</Box>
<Container maxW="container.2xl" mt={4}>
<Heading fontSize="20px" fontweight="medium">My Profile</Heading>
<Box w="100%" h="auto" border="1px solid black" p={2} mt={2}>
  <Flex flexDir="row">
  <Box w="20%" h="auto">
     <Flex flexDir="column" p={2} mt={2} align='center'>
     <Image
         borderRadius='full'
        boxSize='130px'
        src='https://bit.ly/dan-abramov'
       alt='Dan Abramov'/>
        <Heading fontSize="16px" mt={4}>Shaun Alexander</Heading>
      <Text fontSize='20px' color="gray" mt={2}  className='handicape'>Handicap:</Text>
      <Button colorScheme="red" color="white" mt={4}
       borderRadius="30px" width="80px" height="30px" pb="2px">Save</Button>
     </Flex>
  </Box>
  <Box w="40%" h="auto">
  <Flex flexDir="column">
  <Flex flexDir="row" p={2} mt={4}>
  <Box w="full" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center" className='editprofile-after'>Home Cource</Box>
  <Input border="2px solid black" placeholder='executive course balboa park' width="60%" height="35px" textAlign="center" borderRadius="30px"/>
  {/* <Box fontSize="12px" fontWeight="normal" width="50%" align="center" className='recent-round-h' borderRadius="30px" border="1px solid gray">Executive Course balboa park</Box> */}
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="full" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center" className='editprofile-after'>Handicap</Box>
  <HStack maxW='320px' border="1px" borderRadius="50px" width="40%" height="35px">
     <Button {...dec} bgColor="transparent" mr={2}>-</Button>
      <Input {...input} border="none"  textAlign="center"/>
      <Button {...inc} bgColor="transparent" ml={2}>+</Button>
    </HStack>
  {/* <NumberInput defaultValue={+8} max={30} clampValueOnBlur={false}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput> */}
  {/* <Box fontSize="12px" fontWeight="noraml" width="50%" align="center" className='recent-round-h'>+8</Box> */}
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="full" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center" className='editprofile-after'>Swing</Box>
  <Box fontSize="12px" fontWeight="bold" width="60%" align="center" >
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
  <Checkbox size='md' borderRadius="50px" colorScheme='red' defaultIsChecked>
    Right
  </Checkbox>
  <Checkbox size='md' colorScheme='red' defaultIsChecked>
    Left
  </Checkbox>
</Stack>
  </Box>
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="full" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center" className='editprofile-after'>Units</Box>
  <Box fontSize="12px" fontWeight="bold" width="60%" align="center">
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
  <Checkbox size='md' borderRadius="50px" colorScheme='red' defaultIsChecked>
    Yards
  </Checkbox>
  <Checkbox size='md' colorScheme='red' defaultIsChecked>
    Meters
  </Checkbox>
</Stack>
  </Box>
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="full" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center" className='editprofile-after'>Gender</Box>
  <Box fontSize="12px" fontWeight="bold" width="60%" align="center" >
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
  <Checkbox size='md' borderRadius="50px" colorScheme='red' defaultIsChecked>
    Male
  </Checkbox>
  <Checkbox size='md' colorScheme='red' defaultIsChecked>
    Female
  </Checkbox>
</Stack>
  </Box>
  </Flex>
  </Box>
     </Flex>
     </Flex>
  </Box>
  <Box w="40%" h="auto">
  <Flex flexDir="column" ml="4">
  <Flex flexDir="row" p={2} mt={4} >
  <Box w="90%" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center"  className='editprofile-after'>Email</Box>
  <Input border="2px solid black" placeholder='Shaunradgolf@gmail.com' width="60%" height="35px" textAlign="center" borderRadius="30px" ml={4}/>
  {/* <Box fontSize="12px" fontWeight="normal" width="50%" align="center" className='recent-round-h'>Shaun@radgolf.com</Box> */}
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="90%" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center"  className='editprofile-after'>Phone Number</Box>
  <Input border="2px solid black" placeholder='480-555-90090' width="60%" height="35px" textAlign="center" borderRadius="30px" ml={4}/>
  {/* <Box fontSize="12px" fontWeight="normal" width="50%" align="center" className='recent-round-h'>+12345-567-7890</Box> */}
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="90%" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center"  className='editprofile-after'>Zip Code</Box>
  <Input border="2px solid black" placeholder='00000' width="60%" height="35px" textAlign="center" borderRadius="30px" ml={4}/>
  {/* <Box fontSize="12px" fontWeight="normal" width="50%" align="center" className='recent-round-h'>
    000000
  </Box> */}
  </Flex>
  </Box>
     </Flex>
     <Flex flexDir="row" p={2} mt={2}>
  <Box w="90%" h="30px">
  <Flex flexDir="row" mt="3px">
  <Box fontSize="12px" fontWeight="normal" width="25%" align="center"  className='editprofile-after'>Date of Birth</Box>
  <Input border="2px solid black" placeholder='-/-/--' width="60%" height="35px" textAlign="center" borderRadius="30px" ml={4}/>
  {/* <Box fontSize="12px" fontWeight="normal" width="60%" align="center" className='recent-round-h'>
      --/--/----
  </Box> */}
  </Flex>
  </Box>
     </Flex>
     </Flex>
  </Box>
  </Flex>
</Box>
</Container>
{/* my devices */}
<Container maxW="container.2xl" mt={4}>
<Flex>
<Box  w="50%">
<Heading size='md'>My Devices</Heading>
</Box>
<Box w="50%">
<Heading size='md' ml="4px">Subscriptions</Heading>
</Box>
</Flex>
<Box w="100%" h="auto" mt={2}>
  <Flex flexDir="row">
  <Box width="50%" border='1px solid black'>
  <Flex flexDir="row">
  hi
  </Flex>
  </Box>
  <Box width="50%" border='1px solid black' ml={4}>
        <Flex flexDir="row" p={8}>
           <Box w="50%" h="auto">
           <Flex flexDir="column" align="center">
           <Image
            boxSize='100px'
            objectFit='cover'
            src='./device.jpg'
           alt='Dan Abramov'
  />
           <Heading fontSize="22px" letterSpacing="tight" textTransform="uppercase" mt={4}>Lazer Subscription</Heading>
            <Text fontSize="12px">Price: $49.99/year</Text>
            <Text fontSize="12px">Expire: 12.21.2021</Text>
            <Flex flexDir="row" align="center">
            <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="100px" height="30px">Renew</Button>
               <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="110px" height="30px">Plan Info</Button>
            </Flex>
           </Flex>
           </Box>
           <Box w="50%" h="auto" ml={4}>
           <Flex flexDir="column" align="center">
           <Image
             boxSize='100px'
             objectFit='cover'
             src='./device.jpg'
              alt='Dan Abramov'
  />
           <Heading fontSize="22px" letterSpacing="tight" textTransform="uppercase" mt={4}>Launch Subscription</Heading>
            <Text fontSize="12px">Price: $49.99/year</Text>
            <Text fontSize="12px">Expire: 12.21.2021</Text>
            <Flex flexDir="row" align="center">
            <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="105px" height="30px">Renew</Button>
               <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="115px" height="30px">Plan Info</Button>
            </Flex>
           </Flex>
           </Box>
        </Flex>
   </Box>
  </Flex>
</Box>
</Container>
{/* Build your bag */}
<Container maxW="container.2xl" mt={4}>
<Heading fontSize="20px" fontweight="medium">Build Your Bag</Heading>
<Box w="100%" h="auto" border="1px solid black" p={2} mt={2}>
  <Flex flexDir="row" borderBottom="1px" pb={3}>
  <Box w="15%" h="auto">
     <Flex flexDir="row" p={2} mt={4}>
        <Heading fontSize="18px" mt={2} p={2}>Golf Club Brand</Heading>
     </Flex>
  </Box>
  <Box w="40%" h="auto">
     <Flex flexDir="row" mt={4} p={2}>
        <Box 
        width="80px" height="60px" 
        borderRadius="20px" border="1px solid black">
        <Image
        mt="20px"
        ml="2px"
      src='./b1.png'
       alt='Dan Abramov'
       width="65px"
       height="18px"
/>
        </Box>
        <Box 
        ml={2}
        width="80px" height="60px"
         borderRadius="20px" border="1px solid black">
        <Image
       mt="20px"
        ml="5px"
      src='./b2.png'
       alt='Dan Abramov'
       width="50px"
       height="18px"
/>
        </Box>
        <Box
          ml={2}
         width="80px" height="60px" 
         borderRadius="20px" border="1px solid black">
        <Image
        mt="16px"
        ml="5px"
      src='./b3.png'
       alt='Dan Abramov'
       width="52px"
       height="30px"
/>
        </Box>
        <Box 
          ml={2}
        width="80px" 
        height="60px" borderRadius="20px"
         border="1px solid black">
        <Image
        mt="20px"
        ml="5px"
      src='./b4.png'
       alt='Dan Abramov'
       width="55px"
       height="16px"
/>
        </Box>
        <Box 
          ml={2}
        width="80px" 
        height="60px" borderRadius="20px" border="1px solid black">
        <Image
       mt="20px"
        ml="5px"
      src='./b5.png'
       alt='Dan Abramov'
       width="53px"
       height="23px"
/>
        </Box>
        <Box 
          ml={2}
        width="80px" height="60px" borderRadius="20px" border="1px solid black">
        <Image
        mt="20px"
        ml="5px"
      src='./b6.png'
       alt='Dan Abramov'
       width="52px"
       height="28px"
/>
        </Box>
        <Box 
          ml={2}
        width="80px" height="60px" borderRadius="20px" border="1px solid black">
        <Image
        mt="14px"
        ml="5px"
      src='./b7.png'
       alt='Dan Abramov'
       width="52px"
       height="42px"
/>
        </Box>
     </Flex>
  </Box>
  <Box w="45%" h="auto">
    <Flex flexDir="row" mt={4} p={2} ml={16}>
    <Heading fontSize="18px" mt={2} p={2} className='golf-ball'>Golf Ball Brand</Heading>
    <Box  ml={8}
        width="65px" height="60px" 
        borderRadius="20px" border="1px solid black">
        <Image
        mt="20px"
        ml="2px"
      src='./b1.png'
       alt='Dan Abramov'
       width="65px"
       height="18px"
/>
        </Box>
        <Box 
        ml={2}
        width="65px" height="60px"
         borderRadius="20px" border="1px solid black">
        <Image
       mt="20px"
        ml="5px"
      src='./b2.png'
       alt='Dan Abramov'
       width="50px"
       height="18px"
/>
        </Box>
        <Box
          ml={2}
         width="65px" height="60px" 
         borderRadius="20px" border="1px solid black">
        <Image
        mt="16px"
        ml="5px"
      src='./b3.png'
       alt='Dan Abramov'
       width="52px"
       height="30px"
/>
        </Box>
        <Box 
          ml={2}
        width="65px" 
        height="60px" borderRadius="20px"
         border="1px solid black">
        <Image
        mt="20px"
        ml="5px"
      src='./b4.png'
       alt='Dan Abramov'
       width="55px"
       height="16px"
/>
        </Box>
    </Flex> 
  </Box>
  </Flex>
  {/* <hr pt="10px" color='red'/> */}
   <Flex flexDir="row" align="center">
  <Box w="30%" h="auto">
    <Heading fontSize="16px" mt={2} p={4} ml={4}>Woods/Hybrids</Heading>
    <Flex flexDir="column">
    <Flex flexDir="row">
        <Flex p={2} ml={4}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px" borderRadius="50px" fontWeight="normal" textAlign="center" pt={2}>Dr</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>3w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>4w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>5w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>7w</Heading>
        </Flex>
    </Flex>
    <Flex flexDir="row">
        <Flex p={2} ml={4}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal">2h</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>3h</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>4h</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>5h</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>6h</Heading>

        </Flex>
    </Flex>
    </Flex>
  </Box>
  <Box w="30%" h="auto" className='iron-before'>
    <Heading fontSize="16px" mt={2} p={4} ml={8}>Irons</Heading>
    <Flex flexDir="column" align="center">
    <Flex flexDir="row">
        <Flex p={2}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" fontWeight="normal" textAlign="center" pt={2}>1i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>2i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>3i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>4i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>5i</Heading>
        </Flex>
    </Flex>
    <Flex flexDir="row">
        <Flex p={2}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal">6i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>7i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>8i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>9i</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>9i</Heading>
        </Flex>
    </Flex>
    </Flex>
  </Box>
  <Box w="40%" h="auto" className='iron-before'>
    <Heading fontSize="16px" mt={2} p={4} ml={8}>Wedges</Heading>
    <Flex flexDir="column" ml={8}>
    <Flex flexDir="row">
        <Flex p={2}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px" borderRadius="50px" fontWeight="normal" textAlign="center" pt={2}>Pw</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>Sw</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>Gw</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>Lw</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>50w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>52w</Heading>
        </Flex>
    </Flex>
    <Flex flexDir="row">
        <Flex p={2}>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal">54w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>56w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>58w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>60w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>62w</Heading>
       <Heading fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center" pt={2} fontWeight="normal" ml={4}>64w</Heading>
        </Flex>
    </Flex>
    </Flex>
  </Box>
  </Flex>
</Box>
</Container>
{/* footer  */}
<Footer/>
</>
)
}
export default Profile;
