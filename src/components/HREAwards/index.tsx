import styles from './HREAwards.module.scss'

export default function HREAwards() {
  return (
    <section className={styles.awardsSection}>
      <div>
        <h2>Our Milestones</h2>
        <h3>
          <p>Share your credentials, affiliations, or awards here. You can use the icons</p>
          <p>below to share logos or seals you want to highlight.</p>
        </h3>
      </div>
      <div>
        <h4>Awards</h4>
        <ul>
          <li>
            <img src='assets/images/award1.png' alt='diversity award'></img>
          </li>
          <li>
          <img src='assets/images/award2.png' alt='real estate award'></img>
          </li>
          <img src='assets/images/award3.png' alt='admired company award'></img>
        </ul>
      </div>
    </section>
  )
}