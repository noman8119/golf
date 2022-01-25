import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem,React,Slider,SliderMark ,SliderTrack, SliderFilledTrack,
  Tooltip,showTooltip,sliderValue,SliderThumb,setShowTooltip,Flex,Grid,Heading,Image,Text,GridItem,Wrap,WrapItem,Center,
  VStack,Container,Stack,SocialButton,Box,Button,SimpleGrid,FormControl,Input,FormLabel,Select,Avatar,AspectRatio,Spacer} from '@chakra-ui/react';
  import Link from "next/Link";
import Navbar from './components/Navbar';
 function Index() {
  return (
  <>
    <Box  w='100%' p={4} color='black' mt={2} border="1px solid gray">
          <Navbar/>
</Box>
{/*--recent rounds section ---*/}
<Container maxW="container.2xl" bgColor="#F2F2F2" pb="32px" >
<Box w="100%" p={5}  >
 <Flex flexDir="row" mt={2}>
 <Box w="15%">
 <Flex flexDir="row" justifyContent="center">
 <Button colorScheme="red" size="lg" borderRadius="50px" height='40px' width="120px" mt="120px">
    View
  </Button>
 </Flex>
 </Box>
 <Box  w="55%" h="auto" mt="100px">
 <Box  w="full" h="40px" border="1px solid black">
<Flex flexDir="row" justifyContent="space-around" mt={2}>
   <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontWeight="bold" className='recent-round-h'> 80 </Heading>
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
<Flex flexDir="row" justifyContent="end" mt="100px">
<Link href="/loginform">
 <Button colorScheme="red" size="lg" borderRadius="50px" width="400px">
    Log in
  </Button>
  </Link>
 </Flex>
</Box>
<Box  w="30%" h="380" mx={2}>
<Flex flexDir="row">
<Image
pt="65%"
 src="./mainLogo.png" alt="mainLogo" />
</Flex>
</Box>
 </Flex>
 </Box>
</Container>
{/*----Rad devices--*/}

  </>
  )
}
export default Index;