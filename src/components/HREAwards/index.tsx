import { Box, Typography } from '@mui/material'
import HRETitle from '../atoms/HRETitle'
import HRESubtitle from '../atoms/HRESubtitle'
import HREBox from '../atoms/HREBox'
import HRECards from '../atoms/HRECards'
import useListAwards from '../../state/hooks/useListAwards'

export default function HREAwards() {

  const awards = useListAwards();

  return (
    <Box sx={{
      backgroundColor: '#e4e2d7',
      boxSizing: 'border-box',
    }}>
      <HREBox
        display={'flex'}
        flexDirection={'column'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
        minWidth={'100vw'}
        value={<>
                <HRETitle
                  value='Our Milestones'
                  color='#646257'/>
                <HRESubtitle
                  value='Share your credentials, affiliations, or awards here. 
                  You can use the icons below to share logos or seals you want to highlight.'
                  color='#646257'
                  />
                  <Box 
                    marginY={'100px'}
                    >
                  <HRETitle
                    value='Awards'
                    color='#646257'
                    fontSize='35px'
                    textAlign='center'
                    />
                    <HREBox
                      alignItems={'center'}
                      justifyContent={'center'}
                      padding={'50px 0px'}
                      gap={'50px'}
                      value={<>
                              {awards.map(award => (
                                <HRECards
                                height={100}
                                width={250}
                                justifyContent={'center'}
                                alignItems={'center'}
                                textAlign={'center'}
                                value={<Typography
                                  sx={{
                                    fontSize: 20,
                                    fontFamily: 'DM Sans, sans-serif',
                                  }}
                                  color="#626257"
                                >
                                  {award}
                                </Typography>}
                                />
                              ))}
                            </>}
                    />
                  </Box>
              </>}
      />
      
    </Box>
  )
}