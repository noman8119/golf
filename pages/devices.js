import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem ,Flex,Grid,Heading,Image,
    Text,GridItem,Wrap,WrapItem,Center,
    VStack,Container,Box,Button,SimpleGrid, FormControl,InputGroup,InputLeftElement,
    Input,FormLabel,Select,Avatar,AspectRatio,Spacer,
    InputRightElement,Switch ,AccordionPanel,AccordionButton,AccordionItem,Accordion,} from '@chakra-ui/react';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
import{SearchIcon} from '@chakra-ui/icons';
import {useState} from 'react'
import Link from "next/Link";
import {MinusIcon, AddIcon} from '@chakra-ui/icons'
function Roundhistory() {
return (
 <>
 <Box  w='100%' p={4} color='black' mt={2} border="1px solid gray">
<Navbar/>
</Box>
{/*--Rad devices ---*/}
<Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Rad Devices</Heading>
   <Box w="100%" border="1px solid black" p={2} mt={2}>
      <Flex flexDir="row">
      <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'

    src='./device.jpg'
    alt='Dan Abramov'
  />
         <Heading fontSize="20px" fontWeight="medium" mt={4}>Watch+</Heading>
        <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'

    src='./device1.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Sound+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
   
    src='./device3.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Hand+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
   
    src='./device2.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Sound+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'

    src='./device3.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Watch+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'

    src='./device4.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Lazer+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
  
    src='./device5.png'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Launch+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
      </Flex>
    </Box>
  </Container>

  <Container maxW="container.2xl" mt={4}>
  <Flex flecDir="row">
  <Box w="35%">
  <Heading fontSize="20px" fontWeight="medium">Device Info</Heading>
  </Box>
  <Box w="30%">
  <Heading fontSize="20px" fontWeight="medium">Last Location</Heading>
  </Box>
  <Box w="35%">
  <Heading fontSize="20px" fontWeight="medium">Device Setting</Heading>
  </Box>
  </Flex>
{/* device info section */}
  <Flex flecDir="row" mt={2}>
  <Box w="35%" h="425px" border="1px solid black">
  <Flex flexDir="row" p={4}>
  <Image
  ml={2}
  mt={8}
  width="180px"
  height="270px"
    src='./infodevice.png'
    alt='Dan Abramov'
  />
  <Flex flexDir="column" align="center" mt={16}>
  <Heading fontSize="26px" fontweight="medium">Sound<span className='soundplus'>+</span></Heading>
  <Text align="center" fontSize="12px" fontWeight="medium" mt={4}>Serial Number: 000-00000-00000</Text>
  <Text align="center" fontSize="12px" fontWeight="medium">Registration date: 02.04.2022</Text>
  <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="140px" height="35px">Mark as Lost</Button>
               <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="140px" height="35px">Unregistered</Button>
  </Flex>
  
  </Flex>
  </Box>
  <Box w="30%" h="auto" border="1px solid black" ml={2}>
  <Image
    height="425px"
    src='./lastlocation.png'
    alt='Dan Abramov'
  />
  </Box>
  <Box w="35%" h="auto" border="1px solid black" ml={2}>
 
  <Flex flexDir="row" mt={12} ml={12}>
        <Box w="50%">
           <Flex flexDir="column">
               <Heading fontWeight="bold" fontSize="14px">Mute Phone on Speaker</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Voice (Select one)</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Tee Box Announcement</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Press and Hold</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Heckle Sound</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Device Registration</Heading>
               <Heading fontWeight="bold" fontSize="14px" mt={8}>Units</Heading>
           </Flex>
        </Box>
        <Box w="50%">
           <Flex flexDir="column">
              <Switch size='md' ml={16} colorScheme="red"/>
         <Select placeholder='Aaron(USA)' size='sm' borderRadius="30px" width="150px" height="30px" mt={4} borderColor="gray"/>
         <Switch size='md' ml={16} mt={6} colorScheme="red"/>
          <Select placeholder='Record Score' size='sm' borderRadius="30px" width="150px" height="30px" mt={6} borderColor="gray"/>
          <Select placeholder='Golf Clap' size='sm' borderRadius="30px" width="150px" height="30px" mt={6} borderColor="gray"/>
          <Select placeholder='Unregistered' size='sm' borderRadius="30px" width="150px" height="30px" mt={6} borderColor="gray"/>
              <Switch size='md' ml={16} mt={8} colorScheme="red"/>
           </Flex>
        </Box>
    </Flex>
  </Box>
  </Flex>
  
  </Container>

  {/* Tutorials */}
  <Container maxW="container.2xl" mt={4}>
   <Flex flexDir="row">
   <Box w="50%">
   <Heading fontSize="20px" fontweight="medium">Tutorials</Heading>
   </Box>
   <Box w="50%">
   <Heading fontSize="20px" fontweight="medium" ml={2}>FAQs</Heading>
   </Box>
   </Flex>
   <Flex flexDir="row" mt={2}>
   <Box w="50%" h="665px" border="1px solid gray" p={2}>
   <Flex flexDir="row" p={2}>
   <Box w="50%" h="auto">
     <Flex flexDir="column" ml={4}>
      <AspectRatio  ratio={2}   ml={4}>
      <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<Flex bgColor="gray.300"  ml={4} justifyContent="center">
    <Box p="5px" fontSize="30px" fontWeight="600">Sounds + Tips</Box>
</Flex>
<Text align="center" fontWeight="medium" fontSize="12px" mt={2}> Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut lam quaerat voluptatem.</Text>
      </Flex>
     </Box>
     <Box w="50%" h="auto">
     <Flex flexDir="column" ml={4}>
      <AspectRatio  ratio={2}  ml={4}>
      <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<Flex bgColor="gray.300"  ml={4} justifyContent="center">
    <Box p="5px" fontSize="30px" fontWeight="600">Sounds + Tips</Box>
</Flex>
<Text align="center" fontSize="12px" fontWeight="medium" mt={2}>Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco</Text>
      </Flex>
     </Box>
   </Flex>
   <Flex flexDir="row" p={2}>
   <Box w="50%" h="auto">
     <Flex flexDir="column" ml={4}>
      <AspectRatio  ratio={2}  ml={4}>
      <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<Flex bgColor="gray.300"  ml={4} justifyContent="center">
    <Box p="5px" fontSize="30px" fontWeight="600">Sounds + Tips</Box>
</Flex>
<Text align="center" fontSize="12px" fontWeight="medium" mt={2}>Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco</Text>
      </Flex>
     </Box>
     <Box w="50%" h="auto">
     <Flex flexDir="column" ml={4}>
      <AspectRatio  ratio={2}   ml={4}>
      <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<Flex bgColor="gray.300"  ml={4} justifyContent="center">
    <Box p="5px" fontSize="30px" fontWeight="600">Sounds + Tips</Box>
</Flex>
<Text align="center" fontWeight="medium" fontSize="12px" mt={2}> Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut lam quaerat voluptatem.</Text>
      </Flex>
     </Box>
   </Flex>
    </Box>

    <Box w="50%" h="auto" border="1px solid black" ml={4}>
   <Flex flexDir="column" ml={4} mt={16}>
   <Accordion allowMultiple>
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            {isExpanded ? (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="red">
              <MinusIcon fontSize='12px' />
              </Box>
            ) : (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="black">
              <AddIcon fontSize='12px' />
              </Box>
            )}
            <Box flex='1' fontWeight="bold" textAlign='left' pl="25px">
              My GPs will not power on?
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl="70px"  textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
 <Accordion allowMultiple mt={8}>
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            {isExpanded ? (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="red">
              <MinusIcon fontSize='12px' />
              </Box>
            ) : (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="black">
              <AddIcon fontSize='12px' />
              </Box>
            )}
            <Box flex='1' fontWeight="bold" textAlign='left' pl="25px">
            My GPs watch will not hold on charge?
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl="70px"  textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
 <Accordion allowMultiple mt={8}>
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            {isExpanded ? (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="red">
              <MinusIcon fontSize='12px' />
              </Box>
            ) : (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="black">
              <AddIcon fontSize='12px' />
              </Box>
            )}
            <Box flex='1' fontWeight="bold" textAlign='left' pl="25px">
              Can i cahanged the battery on my GPs?
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl="70px"  textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
 <Accordion allowMultiple mt={8}>
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            {isExpanded ? (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="red">
              <MinusIcon fontSize='12px' />
              </Box>
            ) : (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="black">
              <AddIcon fontSize='12px' />
              </Box>
            )}
            <Box flex='1' fontWeight="bold" textAlign='left' pl="25px">
              My Sound+ will not auto advance holes
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl="70px"  textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
 <Accordion allowMultiple mt={8}>
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton >
            {isExpanded ? (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="red">
              <MinusIcon fontSize='12px' />
              </Box>
            ) : (
              <Box borderRadius="25px" w="27px" h="27px" color="white" bgColor="black">
              <AddIcon fontSize='12px' />
              </Box>
            )}
            <Box flex='1' fontWeight="bold" textAlign='left' pl="25px">
            Can I use the Sound+ with multiple phones at different times?
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pl="70px"  textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
   </Flex>
    </Box>
    </Flex>
  </Container>
<Footer/>
</>
)
}
export default Roundhistory;
