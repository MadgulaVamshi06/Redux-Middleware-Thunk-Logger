import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from '../redux/action';
import { Box, Image, Text, VStack, SimpleGrid , Center} from '@chakra-ui/react';

export default function CoffeeData() {
  const dispatch = useDispatch();
  const { coffeeData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  return (
    <VStack spacing={4} align='stretch'>
        <Center>
        <Text fontSize='2xl' fontWeight='bold'>
        Coffee Data
      </Text>
        </Center>
      
      <SimpleGrid columns={5} spacing={4}>
        {coffeeData.map((data, index) => (
          <Box
            key={index}
            p={4}
            shadow='md'
            borderWidth='1px'
            borderRadius='md'
            textAlign='center'
          >
            <Image src={data.image} alt='img' boxSize='150px' mx='auto' />
            <Text mt={2} fontSize='xl' fontWeight='semibold'>
              {data.title}
            </Text>
            <Text>${data.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
