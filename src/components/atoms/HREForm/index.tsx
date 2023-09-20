import HREButton from '../HREButton';
import styles from './HREForm.module.scss'
import { Box, Container, ListItem, Stack, TextField, Typography } from "@mui/material";

export default function HREForm() {
  return (
    <section className={styles.section}>
      <Box sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#e4e2d7',
      }}>
        <Container sx={{
          height: 600,
          width: 500,
          backgroundColor: '#646257',
          padding: '30px 30px',
    
        }}>
          <Typography
            variant="h4"
            component={'h4'}
            fontFamily={'Playfair Display, serif'}
            textAlign={'center'}
            color={'#fffef7'}
            >
            Leave Us Your Info
          </Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '100%' },
              padding: '30px'
            }}
            noValidate
            autoComplete="off"
          >
              <TextField 
                // fullWidth={true}
                id="outlined-error"
                label="Name"
                defaultValue=''
              />
            

              <TextField
                id="outlined-error-helper-text"
                label="Email Address"
                defaultValue=""
              />
              <TextField
                id="description"
                label="Comment"
                defaultValue=""
              />
          </Box>
          <HREButton
            value={'Submit'}
          />
        </Container>
      </Box>
    </section>
  )
}