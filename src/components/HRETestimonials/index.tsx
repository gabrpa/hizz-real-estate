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
        minWidth: '100vw'
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
          paddingY: '50px',
          }}
        >
        {testimonials.map(testimonial => (
            <HRECards
              height={300}
              width={250}
              textAlign={'left'}
              value={<>
                      <Typography
                        sx={{
                          fontSize: 17,
                          fontFamily: 'DM Sans, sans-serif',
                        }}
                        color="#626257"
                      >
                        {testimonial.testimonial}
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        {testimonial.name}
                      </Typography>
                    </>}
            >
            </HRECards>
          ))}
        </Box>
        </Box>
  );
}