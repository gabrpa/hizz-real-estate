import { useRecoilValue } from "recoil";
import { testimonialsState } from "../atom";

const useListTestimonials = () => {
  return useRecoilValue(testimonialsState)
}

export default useListTestimonials