import { Box } from "@mui/material";

export default function HRECards(props: any) {
  return (
    <Box sx={{
      padding: '50px 50px',
      border: '1px solid #646257',
                '&:hover': {
                  opacity: [0.5, 0.8, 0.7],
                },
    }}
    height={props.height}
    width={props.width}
    minHeight={props.minHeight}
    minWidth={props.minWidth}
    textAlign={props.textAlign}
    alignItems={props.alignItems}
    justifyContent={props.justifyContent}
    display={'flex'}
    >
      {props.value}
    </Box>
  )
}