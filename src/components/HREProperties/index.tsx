import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import useListProperties from '../../state/hooks/useListProperties'
import HREButton from '../atoms/HREButton';
import HRETitle from '../atoms/HRETitle';
import { useNavigate } from 'react-router-dom';
import HREBox from '../atoms/HREBox';

export default function HREProperties() {

  const properties = useListProperties();
  const navigate = useNavigate();

  return (
    <Box sx={{
      backgroundColor: '#fffef7',
      boxSizing: 'border-box'
    }}
    >
      <HREBox
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
        minWidth={'100vw'}
        value={<>
                <HRETitle
                  color={'#646257'}
                  value={'Properties for Sale'}
                />
                <HREBox
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  padding={'50px 0px'}
                  gap={'50px'}
                  value={<>
                          {properties.map(property => (
                            <Card sx={{ 
                              minWidth: 350,
                              minHeight: 380,
                              }}>
                            <CardMedia
                              component="img"
                              alt="property-description"
                              height="200"
                              image={property.image}
                            />
                            <CardContent>
                              <Typography 
                                gutterBottom 
                                variant="h5" 
                                component="div"
                                fontFamily={'Playfair Display, serif'}
                                >
                                {property.address}
                              </Typography>
                              <Typography 
                                variant="body2"
                                color="text.secondary"
                                fontFamily={'DM Sans, sans-serif'}
                                >
                                {property.type}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                color="text.secondary"
                                fontFamily={'DM Sans, sans-serif'}
                                >
                                {property.price}
                              </Typography>
                            </CardContent>
                            <Box
                              display={'flex'}
                              flexDirection={'column'}
                              alignItems={'center'}
                              justifyContent={'center'}
                            >
                                <HREButton
                                  value={'Click here to make an offer!'}
                                  onClick={() => navigate('/contact')}
                                  />
                            </Box>
                          </Card>
                          ))}
                        </>}
                  />
              </>}
      />
    </Box>
  )
}
