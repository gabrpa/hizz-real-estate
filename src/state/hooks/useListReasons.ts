import { useRecoilValue } from "recoil"
import { reasonsState } from "../atom"

const useListReasons = () => {
  return useRecoilValue(reasonsState)
}

export default useListReasons;