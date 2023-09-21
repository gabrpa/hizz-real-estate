import { useRecoilValue } from "recoil"
import { awardsState } from "../atom"

const useListAwards = () => {
  return useRecoilValue(awardsState)
}

export default useListAwards;