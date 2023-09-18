import HREButton from '../HREButton'
import styles from './HREHeader.module.scss'

export default function HREHeader() {
  return (  
    <section className={styles.introductionSection}>
      <div>
        <h1>
          <p>The best commercial</p>
          <p>real estate in and</p>
          <p>around Buckville Park</p>
        </h1>
        <h2>
          <p>We are a full-service brokerage firm in the Buckville Park area.</p>
          <p>Our team of experts is ready to help you with any questions</p>
          <p>you have.</p>
        </h2>
        <HREButton
        value={'TAKE A LOOK!'}
        />
      </div>
    </section>
  )
}