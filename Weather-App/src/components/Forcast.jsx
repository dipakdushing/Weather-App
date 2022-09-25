import { Box, Icon, Text } from "@chakra-ui/react";
import { ForcastBox } from "./SmallComponents";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import { dateFormat } from "../helpers/extraFunctions";
import { setItem } from "../helpers/sessionStorage";
import { ForcastModal } from "./ForcastModal";

export const Forcast = ({ data }) => {

    const { date, day } = dateFormat(data.dt);

    return (
        <Box>
            <ForcastBox >

                <Box p={'5px'} >
                    
                    <Text fontWeight={500} color={'black'} fontSize={'25px'}>{day}</Text>
                </Box>

                <ForcastModal data={data} />

            </ForcastBox>
        </Box>
    );
};