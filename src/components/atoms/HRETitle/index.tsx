import { Box, Slide, Typography } from "@mui/material";
import { makeStyles } from '@mui/material/styles';

export default function HRETitle(props: any) {
  return (
    <Box>
      {/* <Slide direction="down" appear={true} in={true} timeout={2000} > */}
        <Typography
          variant='h3'
          component={'h3'}
          fontFamily={'Playfair Display, serif'}
          fontSize={props.fontSize}
          color={props.color}
          textAlign={props.textAlign}
          padding={'0px 50px'}
          paddingTop={'50px'}
          paddingY={props.paddingY}
          >
            {props.value}
        </Typography>
      {/* </Slide> */}
    </Box>
  )
}