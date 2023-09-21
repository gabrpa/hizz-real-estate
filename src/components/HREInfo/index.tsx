import { Box, Typography } from "@mui/material";

export default function HREInfo() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'left',
      backgroundColor: '#646257',
      gap: '100px',
      minHeight: '50vh',
      padding: '75px 75px'
    }}>
      <Box sx={{
        height: 300,
        width: 300,
      }}>
        <Typography 
          component={'h4'} 
          variant='h4'
          fontFamily={'Playfair Display, serif'}
          color={'#fffef7'}
          >
          About Us
        </Typography>
        <Typography
          variant="body1"
          fontFamily={'DM Sans, sans-serif'}
          fontWeight={'bold'}
          fontSize={20}
          paddingTop={'20px'}
          color={'#afac9b'}
        >
        <p>123 Anywhere St.</p>
        <p>Any City, ST 12345</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>(123) 456-7890</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>hello@reallygreatsite.com</p>
        </Typography>
      </Box>
      <Box sx={{
        height: 300,
        width: 300,
      }}>
        <Typography
          component={'h4'}
          variant='h4'
          fontFamily={'Playfair Display, serif'}
          color={'#fffef7'}
          >
          Business Hours
        </Typography>
        <Typography
          variant="body1"
          fontFamily={'DM Sans, sans-serif'}
          fontWeight={'bold'}
          fontSize={20}
          paddingTop={'20px'}
          color={'#afac9b'}
        >
        <p>Monday to Friday</p>
        <p>9:00 am to 6:00 pm</p>
        <p>Saturday</p>
        <p>9:00 am to 12 noon</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Sunday by appointment only.</p>
        </Typography>
      </Box>
    </Box>
  )
}