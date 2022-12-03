import {formattingInputData} from "../utils/formattingInputData";
import {LatLngTuple} from "leaflet";

const inputDataFromFile: inputDataElementType[] = formattingInputData([
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.039882,
        38.898321
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "The Exchange",
      "address": "1719 G St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.038193,
        38.901345
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Blackfin",
      "address": "1620 I St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.03195,
        38.907826
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Churchkey",
      "address": "1337 14th St NW",
      "note": "Ask the bartender for the password"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.018728,
        38.902708
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Busboys and Poets",
      "address": "1025 5th St NW, Washington DC, 20001"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.047745,
        38.909637
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "SoHo Cafe",
      "address": "2150 P St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.018627,
        38.899924
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Chinatown Coffee Company",
      "address": "475 H St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.04345,
        38.905342
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Science Club",
      "address": "1136 19th St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.027744,
        38.929675
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Wonderland Ballroom",
      "address": "  1101 Kenyon St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.031888,
        38.930366
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Sticky Fingers Bakery",
      "address": "1370 Park Rd NW, Washington, DC 20010"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -76.940028,
        38.954998
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Busboys and Poets",
      "address": "5331 Baltimore Ave, Hyattsville, MD 20781"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.031863,
        38.917992
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Busboys and Poets",
      "address": "2021 14th St NW, Washington, DC 20009"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.042438,
        38.921894
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Tryst",
      "address": "2459 18th St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.09089599999999,
        38.88924
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Arlington Pub at Whole Foods Market",
      "address": "2700 Wilson Blvd, Arlington, VA 22201"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.1080128,
        38.8801218
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Buzz Bakery Coffee & Lounge",
      "address": "818 N Quincy St, Arlington, VA 22203"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.097225,
        38.8859
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Northside Social",
      "address": "3211 Wilson Blvd, Arlington, VA 22201"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.1080128,
        38.8801218
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Buzz Bakery Coffee & Lounge",
      "address": "818 N Quincy St, Arlington, VA 22203"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.0866120204082,
        38.8627485306122
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Twisted Vines Bottleshop & Bistro",
      "address": "2803 Columbia Pike, Arlington, VA 22204"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.089559,
        38.841205
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Busboys and Poets",
      "address": "4251 Campbell Ave, Arlington, VA 22206"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.045067,
        38.821598
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Buzz Bakery Coffee & Lounge",
      "address": "901 Slaters Lane, Alexandria, VA 22314"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.012659,
        38.915561
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Boundary Stone Public House",
      "address": "116 Rhode Island Ave NW"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "marker-symbol": "bar",
      "name": "Bistro Bohem",
      "address": "600 Florida Ave Nw"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.02017903327942,
        38.91535424264446
      ]
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.011702,
        38.915533
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Rustik Neighborhood Tavern",
      "address": "84 T St. NW"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "marker-symbol": "bar",
      "name": "Old Ebbitt",
      "address": "675 15th St NW",
      "note": "Ask the bartender for the WiFi password"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.033644,
        38.898077
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {
      "marker-symbol": "bar",
      "name": "BlackJack",
      "address": "1612 14th St NW",
      "note": "WiFi password is blackjack"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.031950,
        38.911532
      ]
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.0276460,
        38.9007690
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Capitol City Brewing Company",
      "address": "1100 New York Ave NW",
      "note": "Ask the bartender for the password"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.036554,
        38.900201
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Off The Record",
      "address": "800 16th St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.071309,
        38.919986
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "breadsoda",
      "address": "2233 Wisconsin Ave NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.042084,
        38.906459
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "St. Arnold's on Jefferson",
      "address": "1827 Jefferson Pl NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.028620,
        38.931821
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "Meridian Pint",
      "address": "3400 11th St NW"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -77.070275,
        38.906094
      ]
    },
    "properties": {
      "marker-symbol": "bar",
      "name": "The Tombs",
      "address": "1226 36th St NW"
    }
  }
]);
const inputDataForConverting = JSON.stringify(inputDataFromFile)
console.log(inputDataForConverting)

export const initialState: InitialStateType = {
  inputData: [],
  search: '',
  filteredData: [],
  defaultMapParams: {
    center: [38.9, -77.02],
    zoom: 11,
  },
  currentPointId: '',
  layer: 'layer1',
}

export const layer1Reducer = (state: InitialStateType = initialState, action: Layer1ReducerActionsType): InitialStateType => {
  switch (action.type) {
    case 'LAYER1/SET-INITIAL-STATE':
    case 'LAYER1/SET-CURRENT-POINT-ID':
    case 'LAYER1/SET-LAYER-VALUE':
      return {
        ...state, ...action.payload,
      }
    case 'LAYER1/SET-DATA-SEARCHED-BY-NAME':
      return {
        ...state, filteredData: state.inputData.filter(el => el.properties.name
          .toLowerCase().indexOf(action.payload.search.toLowerCase()) > -1),
        ...action.payload,
      }
    default:
      return state
  }
}

//action creators
export const setInitialStateAC = (inputData: inputDataElementType[]) => ({
  type: 'LAYER1/SET-INITIAL-STATE',
  payload: {inputData}
} as const)

export const setSearchedDataAC = (search: string) =>
  ({type: 'LAYER1/SET-DATA-SEARCHED-BY-NAME', payload: {search}} as const);

export const toggleViewMarkerDataAC = (mapParams: MapParamsType) =>
  ({type: 'LAYER1/TOGGLE-VIEW-MARKER', payload: mapParams} as const)

export const setCurrentPointIdAC = (currentPointId: string) => ({
  type: 'LAYER1/SET-CURRENT-POINT-ID',
  payload: {currentPointId}
} as const)

export const setLayerAC = (layer: LayerType) => ({type: 'LAYER1/SET-LAYER-VALUE', payload: {layer}} as const)

//types
export type LayerType = 'layer1' | 'layer2'
export type inputDataElementType = {
  "id"?: string
  "type": string,
  "geometry": {
    "type": string,
    "coordinates": LatLngTuple
  },
  "properties": {
    "marker-symbol": string,
    "name": string,
    "address": string,
    "note"?: string
  }
}
export type InitialStateType = {
  inputData: inputDataElementType[]
  search: string
  filteredData: inputDataElementType[]
  defaultMapParams: MapParamsType
  currentPointId: string
  layer: LayerType
};
export type MapParamsType = {
  center: LatLngTuple
  zoom: number
}

type SetInitialStateACType = ReturnType<typeof setInitialStateAC>
type SetSearchedDataACType = ReturnType<typeof setSearchedDataAC>
type SetCurrentPointIdACType = ReturnType<typeof setCurrentPointIdAC>
type SetLayerACType = ReturnType<typeof setLayerAC>

export type Layer1ReducerActionsType =
  SetInitialStateACType
  | SetSearchedDataACType
  | SetCurrentPointIdACType
  | SetLayerACType