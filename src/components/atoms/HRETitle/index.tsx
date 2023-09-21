import { Box, Typography } from "@mui/material";

export default function HRETitle(props: any) {
  return (
    <Box>
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
    </Box>
  )
}