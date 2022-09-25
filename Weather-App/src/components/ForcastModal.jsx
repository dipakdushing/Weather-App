import { Box, Grid, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { dateFormat } from "../helpers/extraFunctions";
import { NewText } from "./SmallComponents";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";


export const ForcastModal = ({ data }) => {

    const { date, day } = dateFormat(data.dt);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box onClick={onOpen} cursor={'pointer'} mt={'10px'}>
                <Text color={'#131414'} fontWeight={500} fontSize={'27px'}>
                    <Icon as={ImSun} /> {Math.round(data.temp.day)}<sup>o</sup> C
                </Text>
                <Text color={'#131414'} fontWeight={500} fontSize={'27px'}>
                    <Icon as={MdOutlineNightsStay} /> {Math.round(data.temp.night)}<sup>o</sup> C
                </Text>
                <Text color={'#131414'} fontWeight={500} fontSize={'25px'}><b>{data.weather[0].main}</b>
                    
                </Text>
            </Box>

            
        </>
    );
};

