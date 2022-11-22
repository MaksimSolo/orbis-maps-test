import {v1} from "uuid";
import {inputDataElementType} from "../store/layer1-reducer";

export const setIdToInputData = (arr: inputDataElementType[]): inputDataElementType[] => {
   arr.forEach(el => el.id = v1())
   return arr
}