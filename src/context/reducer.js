import { act } from "react-dom/test-utils"

export const initialState = {
  videos: []
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    default: return state;
  }
}