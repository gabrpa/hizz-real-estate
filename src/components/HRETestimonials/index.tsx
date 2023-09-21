import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useListTestimonials from '../../state/hooks/useListTestimonials';
import HRETitle from '../atoms/HRETitle';
import HRECards from '../atoms/HRECards';

export default function HRETestimonials() {

  const testimonials = useListTestimonials()

  return (
      <Box sx={{
        backgroundColor: '#e4e2d7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        paddingY: '50px'
      }}>
        <Box sx={{
          margin: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <HRETitle
            value={'Client Testimonials'}
            color={'#646257'}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          }}
        >
        {testimonials.map(testimonial => (
            <HRECards
              height={400}
              width={300}
              value={<>
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                        color="#626257"
                      >
                        {testimonial.testimonial}
                      </Typography>
                      <Typography sx={{ 
                        fontSize: 22,
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 'bold'
                        }} 
                      color="#626257">
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                         - {testimonial.name}
                      </Typography>
                    </>}
            >
            </HRECards>
          ))}
        </Box>
        </Box>
  );
}