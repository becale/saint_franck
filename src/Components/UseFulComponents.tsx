import { Box } from '@chakra-ui/react';
import {Hourglass, InfinitySpin} from 'react-loader-spinner'

const SpinerOverlay = () => {
    return(
        <Box 
            w={'500px'}
            m={'0'}
            position={'absolute'} 
            zIndex={9}  
            left={'50%'} 
            top={'50%'}
            transform={'translate(-50%, -50%)'}
            backgroundColor={'lightcyan'} 

            paddingLeft={'auto'}
            paddingRight={'auto'}
        > 
            <InfinitySpin
                //visible = true
                width="500"
                height="500"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </Box>
    )
}