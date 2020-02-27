import React, { useEffect } from 'react'
import { path } from 'ramda'
import styled from 'styled-components'
import { useFormContext, Controller, FormContextValues, EventFunction } from 'react-hook-form'
import { Input } from 'semantic-ui-react'

const FieldWrapper = styled.div`
  padding: 10px 0;
`

const Label = styled.div``

const ErrorMessage = styled.div`
  height: 20px;
  color: red;
  font-size: 12px;
`

interface ICustomFieldProps {
  label?: string
  required?: boolean
  errorMessage?: string
  children?: React.ReactNode
}

export const InputWrapper = ({ label, required, errorMessage, children }: ICustomFieldProps) => {
  return (
    <FieldWrapper>
      <Label>
        {label || ''}
        {required && ' *'}
      </Label>
      {children}
      <ErrorMessage>{errorMessage || ''}</ErrorMessage>
    </FieldWrapper>
  )
}
