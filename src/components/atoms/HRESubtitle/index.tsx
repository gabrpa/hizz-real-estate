import { Box, Typography } from "@mui/material";

export default function HRESubtitle(props: any) {
  return (
    <Box>
      <Typography
        variant='h5'
        component={'h5'}
        fontFamily={'DM Sans, sans-serif'}
        fontWeight={props.fontWeight}
        color={props.color}
        textAlign={props.textAlign}
        padding={'0px 50px'}
        >
          {props.value}
      </Typography>
    </Box>
  )
}