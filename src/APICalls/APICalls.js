const url = 'http://localhost:3001/api/v1/reservations'

export const getReservations = () =>  fetch(url).then(handleErrors)

export const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error("oops something went wrong")
  }
  return response.json()
}
