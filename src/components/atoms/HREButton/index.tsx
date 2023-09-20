import { Button } from "@mui/material";

export default function HREButton(props: any) {
  return (
    <Button
      variant="outlined"
      size="large"
      sx={{
        margin: '30px',
        color: '#e4e2d7',
        borderColor: '#e4e2d7',
      }}
      onClick={props.onClick}
      >
      {props.value}
    </Button>
  )
}