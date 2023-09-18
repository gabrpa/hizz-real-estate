import { useRecoilValue } from "recoil"
import { propertiesState } from "../atom"


const useListProperties = () => {
  return useRecoilValue(propertiesState)
}

export default useListProperties;