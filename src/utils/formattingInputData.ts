import {v1} from "uuid";
import {inputDataElementType} from "../store/layer1-reducer";

export const formattingInputData = (arr: inputDataElementType[]): inputDataElementType[] => {
  arr.forEach(el => {
    el.id = v1()
    el.geometry.coordinates.reverse()
  })
  return arr
}