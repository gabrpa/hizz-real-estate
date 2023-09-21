import { Box } from "@mui/material";

export default function HREBox(props: any) {

  

  return (
    <Box 
      display={'flex'}
      flexWrap={'wrap'}
      flexDirection={props.flexDirection}
      textAlign={props.textAlign}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      height={props.height}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      width={props.width}
      minWidth={props.minWidth}
      maxWidth={props.maxWidth}
      padding={props.padding}
      margin={props.margin}
      gap={props.gap}
    >
      {props.value}
    </Box>
  )
}