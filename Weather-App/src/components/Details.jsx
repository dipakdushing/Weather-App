import { Box, Flex, Grid, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { celsius } from "../helpers/extraFunctions";
import { getItem } from "../helpers/sessionStorage";
import { getWeatherByLocation, syncData } from "../redux/actions";
import { Error } from "./Error";
import { Loading } from "./Loading";
// import { Map } from "./Map";
import { FaSyncAlt } from "react-icons/fa";
import { Newbox, NewText } from "./SmallComponents";
import { Forcast } from "./Forcast";


export const Deatils = () => {

    const { isLoading, weatherData: data, forcastData, isError } = useSelector((state) => state, shallowEqual);
    const [isRotate, setIsRotate] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        let weather = getItem("weather");
        !weather && dispatch(getWeatherByLocation(toast));
    }, []);

    const handleSyncData = () => {
        setIsRotate(true);
        dispatch(syncData(data.name, toast))
    }

    return isLoading ? (
        <Loading />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <Box maxW={'1200px'} m={'20px auto 5px'} p={'20px'} minH={'550px'}>
            <Grid mt={'40px'} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(8, 1fr)']} gap={'20px'}>
                    {forcastData.map((e, i) => <Forcast key={i} data={e} />)}
                </Grid>
                <Grid gridTemplateColumns={['100%', 'repeat(2, 1fr)', 'repeat(2, 1fr)', '30% 27.5% 38%']} gap={'30px'}>
                    <Newbox>
                        <Box color={'#191a1d'} p={'20px'} textAlign={'center'}>
                            <Flex justify={'end'}>
                                <Icon
                                    onClick={handleSyncData}
                                    onAnimationEnd={() => { setIsRotate(false) }}
                                    className={isRotate ? "iconRotate" : undefined}
                                    cursor={'pointer'} w={'23px'} h={'23px'} as={FaSyncAlt}
                                />
                            </Flex>
                            <Heading>{data.name}</Heading>
                            <Heading fontSize={['100px', '120px', '120px', '100px', '120px']}>{Math.round(data.main.temp - 273)}<sup>o</sup>C</Heading>
                            
                        </Box>
                    </Newbox>

                </Grid>
            </Box >
        </>
    );
};






