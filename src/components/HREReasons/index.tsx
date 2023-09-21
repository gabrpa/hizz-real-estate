import useListReasons from '../../state/hooks/useListReasons';
import HRECards from '../atoms/HRECards';
import HRETitle from '../atoms/HRETitle';
import { Box, Typography } from "@mui/material";

export default function HREReasons() {

  const reasons = useListReasons();

  return (
    <Box sx={{
      backgroundColor: '#fffef7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      minWidth: '100vw',
      
    }}>
      <Box sx={{
        margin: '100px',
      }}
      >
        <HRETitle
          color={'#646257'}
          value={'Why choose Hizz Real Estate'}
          textAlign={'center'}
        />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          paddingY: '50px',
          }}>
        {reasons.map((reason) => (
          <HRECards
            height={150}
            width={200}
            textAlign={'center'}
            value={<>
                    <Typography
                      sx={{
                        fontSize: 22,
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 'bold',
                      }}
                      color="#626257"
                    >
                      {reason}
                    </Typography>
                  </>}
          />
        ))}
      </Box>
    </Box>
  )
}