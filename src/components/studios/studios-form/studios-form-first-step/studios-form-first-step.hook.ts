import { Form, FormInstance, UploadFile } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { AddressSuggestions } from 'react-dadata'

import { StudiosFormTypes } from '../studios-form-types'
import { isDefAndNotEmpty } from '../../../../types/lang.types'

export function useStudiosFormFirstStep(form: FormInstance<StudiosFormTypes>) {
  const [photos, setPhotos] = useState<UploadFile[]>([])
  const addressRef = useRef<AddressSuggestions>(null)
  const citiesRef = useRef<AddressSuggestions>(null)
  const countryRef = useRef<AddressSuggestions>(null)

  const formPhotos = Form.useWatch('photos', form)

  useEffect(() => {
    if (!isDefAndNotEmpty(photos)) {
      setPhotos(form.getFieldValue('photos'))
    }
  }, [photos, form, formPhotos])

  const onChangePhotos = (photos: UploadFile[]) => {
    form.setFieldValue('photos', photos)
    setPhotos(photos)
  }

  return {
    addressRef,
    citiesRef,
    countryRef,
    photos,
    onChangePhotos,
  }
}
