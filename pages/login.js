import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Flex, VStack} from '@chakra-ui/react'
import Details from './details'
import Carts from './carts'

 function Login() {
  return (
    <Container maxWidth="container.2xl" p={0}>
       <Flex h="100vh" py={5}>
       <Details/>
       <Carts/>
       </Flex>
    </Container>
    
  )
}
export default Login;
