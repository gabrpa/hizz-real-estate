import { Box } from '@mui/material'
import HREButton from '../atoms/HREButton'
import HRETitle from '../atoms/HRETitle'
import HRESubtitle from '../atoms/HRESubtitle'
import HREBox from '../atoms/HREBox'
import Image from './header.png'

export default function HREHeader() {
  return (  
    <Box sx={{
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxSizing: 'border-box',
    }}>
      <HREBox
        display={'flex'}
        flexDirection={'column'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        minHeight={'100vh'}
        minWidth={'100vw'}
        textAlign={'left'}
        value={<>
                <HRETitle
                  value={'The best commercial real estate in and around Buckville Park'}
                  fontWeight={'bold'}
                  fontSize={50}
                  color={'#e4e2d7'}
                  textAlign={'left'}
                  // padding={'0px 50px'}
                />
                <HRESubtitle
                  value={'We are a full-service brokerage firm in the Buckville Park area. Our team of experts is ready to help you with any questions you have.'}
                  color={'#e4e2d7'}
                  textAlign={'left'}
                  // padding={'0px 50px'}
                />
                <Box 
                  display={'flex'}
                  flexWrap={'wrap'}
                  alignItems={'left'}
                  padding={'0px 50px'}
                >
                  <HREButton
                    value={'TAKE A LOOK!'}
                    />
                </Box>
              </>}
      />
              
    </Box>
  )
}