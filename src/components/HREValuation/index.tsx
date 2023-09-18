import styles from './HREValuation.module.scss'
import { Typography } from "@mui/material";
import HREButton from "../HREButton";

export default function HREValuation() {
  return (
    <section className={styles.valuation}>
      <div>
        <h2 className={styles.valuation__title}>
          Get a free valuation
        </h2>
      </div>
      <div>
        <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'DM Sans, serif',
          fontSize: '25px',
          color: '#fffef7',
          fontWeight: 'bold',
          margin: '30px'
        }}
        >
        <p>Highlight specific services or products here. It can be a property</p>
        <p>appraisal service, a consultation, or something uniquely yours.</p>
        <p>Give it room to shine here.</p>
        </Typography>
      </div>
      <HREButton
        value={'FIND OUT HOW'}
      />
    </section>
  )
}