import { Box } from '@mui/material'
import HRETitle from '../atoms/HRETitle'
import HRESubtitle from '../atoms/HRESubtitle'

export default function HREAwards() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      maxWidth: '100vw',
      textAlign: 'center',
      backgroundColor: '#e4e2d7',
    }}>
      <HRETitle
        value='Our Milestones'
        color='#646257'/>
      <HRESubtitle
        value='Share your credentials, affiliations, or awards here. 
        You can use the icons below to share logos or seals you want to highlight.'
        color='#646257'
        />
      <HRETitle
        value='Awards'
        color='#646257'
        fontSize='35px'
        />
        <ul>
          <li>
            <img src='assets/images/award1.png' alt='diversity award'></img>
          </li>
          <li>
            <img src='assets/images/award2.png' alt='real estate award'></img>
          </li>
          <img src='assets/images/award3.png' alt='admired company award'></img>
        </ul>
    </Box>
  )
}