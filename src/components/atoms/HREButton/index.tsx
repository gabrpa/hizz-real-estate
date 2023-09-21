import { Button } from "@mui/material";

export default function HREButton(props: any) {
  return (
    <Button sx={{
      color: '#e4e2d7',
      borderColor: '#e4e2d7',
      margin: '30px 0px'
    }}
      variant="outlined"
      size="large"
      onClick={props.onClick}
      >
      {props.value}
    </Button>
  )
}