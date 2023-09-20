import HREAwards from "../../HREAwards";
import HREHeader from "../../HREHeader";
import HREProperties from "../../HREProperties";
import HREReasons from "../../HREReasons";
import HRETestimonials from "../../HRETestimonials";
import HREValuation from "../../HREValuation";
import HREInfo from "../../HREInfo";

export default function HREPage() {
  return (
    <>
      <header>
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