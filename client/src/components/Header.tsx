import React from 'react';
import {Flex, Box, Heading, Spacer, Button, Center} from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header>
            <Flex p='5'bg='green.200'>
                <Link to='/'>
                    <Flex  direction='column' p='2'>
                        <Heading as='h1' size='lg'>Harc Base</Heading>
                        <Heading as='h2' size='sm' textAlign='start' color='green.700'>Wyszukaj idealną bazę na obóz Twojej drużyny!</Heading>
                    </Flex>
                </Link>                
                <Spacer />
                <Box display='flex' alignItems='center'>
                    <nav>
                        <Flex as='ul' direction='row' listStyleType='none'>
                            <Center as='li' p='4'><Link to='/wyszukaj'>Wyszukiwarka baz</Link></Center>
                            <Center as='li' p='4'><Link to='/lista-baz'>Lista baz</Link></Center>
                            <Center as='li' p='4'><Link to='/o-projekcie'>O projekcie</Link></Center>
                        </Flex>
                    </nav>                    
                    <Button colorScheme='green' mr='4'>Zaloguj</Button>
                </Box>
            </Flex>            
        </header>
    );
}
export default Header