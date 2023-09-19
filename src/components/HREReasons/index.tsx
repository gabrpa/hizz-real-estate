import styles from './HREReasons.module.scss'
import { Typography } from "@mui/material";

export default function HREReasons() {
  return (
    <section className={styles.reasons}>
        <div>
          <Typography 
            variant='h3'
            component={'h3'}
            fontFamily={'Playfair Display, serif'}
            color={'#646257'}
            >
            <p>Why choose</p> 
            <p>Hizz Real Estate</p>
          </Typography>
        </div>
        <div>
          <ul className={styles.reasons__ul}>
            <li>
              <img src='/assets/images/reasons1.png' alt='reason number 1'></img>
            </li>
            <li>
            <img src='/assets/images/reasons2.png' alt='reason number 2'></img>
            </li>
            <li>
            <img src='/assets/images/reasons3.png' alt='reason number 3'></img>
            </li>
            <li>
            <img src='/assets/images/reasons4.png' alt='reason number 4'></img>
            </li>
          </ul>
        </div>
    </section>
  )
}