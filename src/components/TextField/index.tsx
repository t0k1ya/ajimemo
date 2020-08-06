import React from 'react'
import { Field } from 'redux-form'
import { TextBox } from './text.tsx'

export const TextField: React.FC<{name: string}> = ({ name }) => (
  <Field name={name} component={TextBox} />
)