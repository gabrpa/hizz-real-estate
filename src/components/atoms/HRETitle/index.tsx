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
        >
          {props.value}
      </Typography>
    </Box>
  )
}