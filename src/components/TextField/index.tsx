import React from 'react'
import { Field } from 'redux-form'
import { TextBox } from './text'

export const TextField: React.FC<{
  name: string,
  type: string,
  placeHolder: string
}> = ({ name, type, placeHolder }) => (
  <Field
    name={name}
    type={type}
    placeHolder={placeHolder}
    component={TextBox} 
  />
)