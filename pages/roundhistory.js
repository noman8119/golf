import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem ,Flex,Grid,Heading,Image,Text,GridItem,Wrap,WrapItem,Center,
    VStack,Container,Box,Button,SimpleGrid, FormControl,InputGroup,InputLeftElement,
    Input,FormLabel,Select,Avatar,AspectRatio,Spacer, InputRightElement} from '@chakra-ui/react';
import{SearchIcon} from '@chakra-ui/icons';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function Roundhistory() {
return (
    <>
    <Box  w='100%' p={4} color='black' mt={2} border="1px solid gray">
    <Navbar/>
  </Box>
{/*--recent rounds section ---*/}
<Container maxW="container.2xl" mt={4}>
<Heading fontSize="20px" fontweight="medium">Round History</Heading>
<Box w="100%" border="1px solid black" p={5} mt={2}>
<Flex>
<Box  w="25%" h="auto">
<Select placeholder='Most recent'  borderColor="black" size='md' borderRadius="30px" width="200px"
/>
</Box>
<Box  w="25%" h="auto">
<InputGroup bgColor="#fff" mb={4} borderColor="black" borderRadius="10px" mr={2}>
         {/* <InputLeftElement pointerEvents="none"  children={<SearchIcon color="black"/>} />
         <InputRightElement pointerEvents="none"  children={<Text mr="8" fontweight="medium">Search</Text>} /> */}
         <Input type="number" borderRadius="30px"/>
       </InputGroup>
</Box>
</Flex>
 <Flex flexDir="row" mt={2}>
 <Box  w="50%" h="420px" overflow='scroll' overflowX='hidden'>
 <Box  w="full" h="40px" border="1px solid black">
<Flex flexDir="row" justifyContent="space-around" mt={2}>
   <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'> 80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">74 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
  <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executive course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
  <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
  <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
</Box>
<Box maxW='' w="50%" h="380" mx={2}>
<AspectRatio ratio={16 / 9}>
<iframe
 src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
 alt='demo'
/>
</AspectRatio>
</Box>
 </Flex>
 </Box>
</Container>
 <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Round Details</Heading>
   <Box w="100%" border="1px solid black" p={2} mt={2}>
      <Flex flexDir="row">
      <Box w="60%" h="auto">
        <Flex flexDir="column">
        <Flex flexDir="row">
        <Heading fontSize="28px" fontWeight="bold">02.04.2020 </Heading>
       <Heading fontSize="28px" fontweight="bold" className='round-detail' ml={8}>Executivr course balboa park</Heading>
        </Flex>
        <Flex flexDir="row" mt={4}>
        <Heading fontSize="25px" fontWeight="bold" className='rounddetail-par'>Par:</Heading>
       <Heading fontSize="25px" fontweight="bold" className='rounddetail-scor round-detail' ml={8}>Score:</Heading>
        </Flex>
        <Flex flexDir="row" mt={4}>
        <Heading fontSize="18px" fontWeight="normal" className='step-after'>Step:</Heading>
        <Heading fontSize="18px" fontWeight="normal" ml={8} className='distance distance-before'>Distance:</Heading>
       <Heading fontSize="18px" fontWeight="normal" ml={8} className='distance time-after'>Time:</Heading>
       <Button colorScheme='blue' size="sm" bgColor="blackAlpha.900"
     borderRadius="30px" width="150px" fontSize="18px" ml={8} mt="-5px" mb={4} >Delete Round</Button>
        </Flex>
        </Flex>
      </Box>
      <Box w="40%" h="auto">
      <Flex flexDir="row" alignContent="center">
      <Box padding='2'  w="30%" h="150" mx={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Average Puts</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='./saveputs.jpg'
    alt='Dan Abramov'
  />
   </Flex>
  </Box>
  <Box padding='2'  w="30%" h="150" mx={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Fairways Hit</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='./fiarway.jpg'
    alt='Dan Abramov'
    mt={2}
  />
   </Flex>
  </Box>
  <Box padding='2'  w="30%" h="150" mx={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Greens in Regulation</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='greenresolution.jpg'
    alt='Dan Abramov'
  /> 
   </Flex>
  </Box>
      </Flex>
      </Box>
      </Flex>
    </Box>
  </Container>

  <Container maxW="container.2xl">
<Box w="100%" border="1px solid black" p={2}>
<Flex flexDir="row">
<Box w="30%" h="auto" mx={4} mt={4}>
  <Flex flexDir="column">
     <Box w="full" h="135px" border="1px solid black" p={4}>
     <Flex flexDir="row">
       <Box w="50%">
        <Flex flexDir="column">
        <Flex flexDir="row">
        <Heading color="red" fontSize="25px" fontWeight="normal">Flag</Heading>
        <Heading ml={4} fontSize="35px" fontWeight="normal">14</Heading>
        </Flex>
        <Flex flexDir="row" mt={4}>
        <Heading color="red" fontSize="25px" fontWeight="normal">Score</Heading>
        <Heading ml={4} fontSize="35px" fontWeight="normal">4</Heading>
        </Flex>
        </Flex>
       </Box>
       <Box w="50%" ml={8}>
       <Flex flexDir="column">
        <Flex flexDir="row">
        <Heading color="red" fontSize="25px" fontWeight="normal" ml={4}>Par</Heading>
        <Heading ml={10} fontSize="35px" fontWeight="normal">4</Heading>
        </Flex>
        <Flex flexDir="row" mt={4}>
        <Heading color="red" fontSize="25px" fontWeight="normal" ml={4}>Puts</Heading>
        <Heading ml={8} fontSize="35px" fontWeight="normal">1</Heading>
        </Flex>
        </Flex>
       </Box>
     </Flex>
     </Box>
     <Box w="full" h="auto" border="1px solid black" mt={4} p={4}>
     <Heading fontSize="16px">Select Hole</Heading>
     <Flex flexDir="row" mt={2} my={2}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px">1</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">2</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px"><Text border="2px" h="45px" w="45px">3</Text></Button>
     </Flex>
     <Flex flexDir="row" mt={4}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px"><Text border="2px" h="45px" w="45px" borderRadius="30px">4</Text></Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px"><Text h="45px" w="45px" borderRadius="30px" className='double'>5</Text></Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">6</Button>
     </Flex>
     <Flex flexDir="row" mt={4}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px">7</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">8</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">9</Button>
     </Flex>
     <Flex flexDir="row" mt={4}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px"><Text border="2px" h="45px" w="45px" borderRadius="30px">10</Text></Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">11</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">12</Button>
     </Flex>
     <Flex flexDir="row" mt={4}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px">13</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px" bg="red" color="white">14</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px"><Text border="2px" h="45px" w="45px">15</Text></Button>
     </Flex>
     <Flex flexDir="row" mt={4}>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" fontSize="30px">16</Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px"><Text h="45px" w="45px" className='double'>17</Text></Button>
     <Button colorScheme="gray" borderRadius="none" width="90px" height="60px" ml={4} fontSize="30px">18</Button>
     </Flex>
     </Box>
  </Flex>
</Box>
<Box w="30%" h="auto" border="1px solid black" mx={4} p={2} mt={4}>
<Image
    boxSize='580px'
    objectFit='cover'
    src='./map.jpg'
    alt='Dan Abramov'
  />
</Box>
<Box w="40%" h='auto' border="1px solid black" mx={4} mt={4}>
<Image
    boxSize='650px'
    objectFit='cover'
    src='./3d.jpg'
    alt='Dan Abramov'
  />
</Box>
</Flex>
 </Box>
</Container>
<Footer/>
</>
)
}
export default Roundhistory;
