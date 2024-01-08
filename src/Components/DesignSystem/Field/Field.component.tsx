import { FC, useState } from 'react'
import { Eye, EyeOff } from '@styled-icons/heroicons-solid'
import { Question } from '@styled-icons/bootstrap/Question'

import { FieldProps } from './Field.props'

import { Button } from '@/Components/DesignSystem'

import * as Styled from './Field.style'

export const Field: FC<FieldProps> = ({
  helpText,
  label,
  warning,
  warningVisible,
  options,
  small,
  ...props
}) => {
  const { id, type, placeholder } = props

  const [displayPassword, setDisplayPassword] = useState(false)

  const toggleDisplayPassword = () => {
    setDisplayPassword(!displayPassword)
  }

  return (
    <Styled.FieldWrapper small={small}>
      <Styled.WarningWrapper visible={warningVisible}>
        {<Styled.Warning htmlFor={id}>{warning}</Styled.Warning>}
      </Styled.WarningWrapper>

      {type === 'password' && (
        <>
          <Button onClick={toggleDisplayPassword} transparent>
            {displayPassword ? <EyeOff /> : <Eye />}
          </Button>

          <input {...props} type={displayPassword ? 'text' : 'password'} />
        </>
      )}

      {type === 'select' && (
        <select {...props}>
          <option value="" disabled>
            {placeholder}
          </option>

          {options?.map((optionItem: string) => {
            return (
              <option key={optionItem} value={optionItem}>
                {optionItem}
              </option>
            )
          })}
        </select>
      )}

      {type === 'textarea' && <textarea {...props} />}

      {!['select', 'password', 'textarea'].includes(type as string) && (
        <input {...props} type={type || 'text'} />
      )}

      {id && (
        <Styled.Label htmlFor={id}>
          <>{label}</>

          {helpText && (
            <Styled.Help>
              <Styled.HelpIcon>
                <Question />
              </Styled.HelpIcon>

              <Styled.HelpText>{helpText}</Styled.HelpText>
            </Styled.Help>
          )}
        </Styled.Label>
      )}
    </Styled.FieldWrapper>
  )
}
