import HREAwards from "../../HREAwards";
import HREHeader from "../../HREHeader";
import HREProperties from "../../HREProperties";
import HREReasons from "../../HREReasons";
import HRETestimonials from "../../HRETestimonials";
import HREValuation from "../../HREValuation";
import HREInfo from "../../HREInfo";
import styles from './HREPage.module.scss'

export default function HREPage() {
  return (
    <>
      <header className={styles.header}>
        <HREHeader/>
      </header>
      <main>
        <HREAwards/>
        <HREProperties/>
        <HREValuation/>
        <HREReasons/>
        <HRETestimonials/>
      </main>
      <footer>
        <HREInfo/>
      </footer>
    </>
  )
}