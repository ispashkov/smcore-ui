import axios from 'axios'

export function isExercisesTimetableCancelConflict(error: any): boolean {
  return axios.isAxiosError(error) && error.response?.status === 409
}
