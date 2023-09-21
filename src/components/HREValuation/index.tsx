import { Box } from "@mui/material";
import HREButton from "../atoms/HREButton";
import { useNavigate } from 'react-router-dom';
import HRETitle from '../atoms/HRETitle';
import HRESubtitle from '../atoms/HRESubtitle';

export default function HREValuation() {

  const navigate = useNavigate();

  return (
    <Box sx={{
      backgroundColor: '#afac9b',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      minHeight: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}
      >
      <HRETitle
        value='Get a free valuation'
        color='#646257'
      />
      <HRESubtitle
        value={'Highlight specific services or products here. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.'}
        color={'#fffef7'}
        fontWeight={'bold'}
        textAlign={'justify'}
        
      />
      <HREButton
        value={'FIND OUT HOW'}
        onClick={() => navigate('/contact')}
      />
    </Box>
  )
}