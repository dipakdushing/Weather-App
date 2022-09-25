import { Button, Center, Flex, Icon, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";

export const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Flex p={'35px'} minH={'100px'} bg={'#d7defa'} justifyContent={'center'} flexDirection={['column', 'row']} gap={['5px', '0px']}>
           
            <Center px={'10px'}>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'10px 0px 0px 10px'}
                    width={'400px'}
                    height={'60px'}
                    border={'2px solid black'}
                    bg={'white'}
                    // _focus={{ 'border': 'none' }}
                    placeholder=" Enter City"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'0px 10px 10px 0px'}
                    color={'white'}
                    bg={'#354a83'}
                    _hover={{ 'bg': '5e82f4' }}
                    height={'60px'}
                >
                    Search
                </Button>
            </Center>
            <Center px={'10px'}>
                <Button
                    bg={'#354a83'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'white'}
                    w={'100%'}
                    height={'60px'}
                    borderRadius={'10px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                > Location
                    
                </Button>
            </Center>
            
        </Flex >
    );
};