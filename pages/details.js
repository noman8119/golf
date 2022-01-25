import {VStack,Heading, Text,SimpleGrid, GridItem,FormControl,FormLabel,Input,Select} from "@chakra-ui/react";

 function Details() {
    return (
        <VStack 
        w="full"
        h="full"
        p={10} 
        spacing={10}
        align-item="flex-start"
        bg="gray.100"
        >
        <VStack spacing={3} alignItems="flex-start" my="auto">
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
         </VStack>
       </VStack>
    )
}
export default Details;
