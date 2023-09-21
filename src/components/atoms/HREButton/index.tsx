import { Button } from "@mui/material";

export default function HREButton(props: any) {
  return (
    <Button sx={{
      margin: '30px',
      color: '#e4e2d7',
      borderColor: '#e4e2d7',
    }}
      variant="outlined"
      size="large"
      onClick={props.onClick}
      >
      {props.value}
    </Button>
  )
}