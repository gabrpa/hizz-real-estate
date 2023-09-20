import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './HRETestimonials.module.scss'
import useListTestimonials from '../../state/hooks/useListTestimonials';

export default function HRETestimonials() {

  const testimonials = useListTestimonials()

  return (
    <section className={styles.section}>
      <Box sx={{
        backgroundColor: '#e4e2d7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
      }}>
        <Box sx={{
          margin: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Typography
            padding={'50px'}
            variant='h3'
            component={'h3'}
            fontFamily={'Playfair Display, serif'}
            color={'#646257'}
          >
            Client Testimonials
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
        }}>
        {testimonials.map(testimonial => (
            <Box
              sx={{
                padding: '50px 50px',
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                height: 300,
                textAlign: 'left',
                border: '1px solid #646257',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              >   
              <Typography 
                sx={{ fontSize: 14 }}
                color="text.secondary" gutterBottom
                >
                {testimonial.testimonial}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 - {testimonial.name}
              </Typography>
            </Box>
          ))}
        </Box>
        </Box>
    </section>
  );
}