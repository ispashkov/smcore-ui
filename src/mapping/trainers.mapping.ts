import { DefaultOptionType } from 'antd/lib/select'

import { isDefAndNotEmpty, Nullable } from '../types/lang.types'
import { TrainersApi } from '../api/types/trainers-api.types'
import { formatFullName } from '../format/text.format'

export function mapTrainersToOptions(trainers: Nullable<TrainersApi.Trainer[]>): DefaultOptionType[] | undefined {
  if (isDefAndNotEmpty(trainers)) {
    return trainers.map((trainer: TrainersApi.Trainer) => {
      const { id, firstName, lastName } = trainer

      return {
        value: id,
        label: formatFullName(firstName, lastName),
      }
    })
  }
}
