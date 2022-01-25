import {VStack,Heading,Text,SimpleGrid, GridItem,FormControl,FormLabel,Input, Center, Button,Link} from "@chakra-ui/react";

 function Carts() {
    return (
        <VStack 
        w="50"
        h="full"
        p={10} 
        spacing={10}
        align-item="flex-start"
        bg="red.100"
         
        >

<VStack spacing={3} my="auto">
         
         <Heading size="md">Sign in to your account</Heading>
         <Text fontWeight="medium">Enter your phone number</Text>
         <SimpleGrid columns={1} columnGap={1} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl textAlign="center">
              <Input placeholder="Phone Number" variant='flushed' textAlign="center" w="25"/>
              <Button colorScheme="black"  m="4" borderRadius="3xl" height="40px" width="200px" mt="4" className="submit">Submit</Button>
              <Text fontSize="xs" pt="2" fontWeight="medium">Already have an account? <Link href="/"><span className="signin">Sign in here</span></Link></Text>
            </FormControl>
          </GridItem>
         </SimpleGrid>
         </VStack>

         <VStack mt="auto">

         <Text fontSize="medium" color="red">Contact Supprort</Text>
         </VStack>

       </VStack>
    )
}
export default Carts;