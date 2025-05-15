import axios from 'axios'

export function isExercisesCancelConflict(error: any): boolean {
  return axios.isAxiosError(error) && error.response?.status === 409
}
