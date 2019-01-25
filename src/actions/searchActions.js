export const GET_LOADING_DATA_REQUEST = 'GET_LOADING_DATA_REQUEST'
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'

// export function searchData(text) {
//   console.log(text)
//   return {
//     type: GET_DATA_REQUEST,
//     payload: text
//   }
// }


export function isLoading(value, text) {
  return {
    type: GET_LOADING_DATA_REQUEST,
    payload: {
      text: text,
    }
  }
}

export function getData(text, data, page) {
  return {
    type: GET_DATA_REQUEST,
    payload: {
      text: text,
      data: data,
      page: page
    }
  }
}
