import { ChangeEvent, FC, FormEvent, useEffect } from 'react'

import { slugify } from '@/Utils/Functions'
import { FormItemProps } from '@/Utils/Props'

import { Button, Field, Text } from '@/Components/DesignSystem'

import { FormProps } from './Form.props'

import * as Styled from './Form.style'

export const Form: FC<FormProps> = ({
  form,
  formState,
  step = 0,
  buttonStyles = 'primary',
  setFormState,
  onSubmit,
  ...props
}) => {
  const getValue = (id: string) => {
    return formState?.form?.find((formItem) => formItem.id === id)?.value || ''
  }

  const getWarning = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.warning || ''
    )
  }

  const getWarningVisible = (id: string) => {
    return (
      formState?.form?.find((formItem) => formItem.id === id)?.warningVisible ||
      ''
    )
  }

  const validateForm = () => {
    if (
      form.STEPS[step].FIELDS?.some(
        (fieldItem) =>
          fieldItem.REQUIRED &&
          !formState.form
            .find((formItem) => formItem.id === fieldItem.ID)
            ?.value.trim() &&
          !replaceText(fieldItem.DEFAULT_VALUE || '')?.trim()
      )
    ) {
      const newRegisterForm = formState.form.map((formItem) => {
        const field = form.STEPS[step].FIELDS?.find(
          (fieldItem) => fieldItem.ID === formItem.id
        )

        return {
          ...formItem,
          warningVisible: field?.REQUIRED && !getValue(formItem.id)
        }
      })

      setFormState?.({
        ...formState,
        form: [...newRegisterForm]
      })

      return false
    }

    return true
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState?.({
      ...formState,

      form: [
        ...formState?.form?.filter(
          (formItem) => formItem.id !== e.currentTarget.id
        ),

        {
          id: e.currentTarget.id,
          value: e.currentTarget.value,
          warning: getWarning(e.currentTarget.id),
          warningVisible: false
        }
      ]
    })
  }

  const advanceStep = () => {
    if (step < form?.STEPS.length - 1 && validateForm()) {
      setFormState?.({
        ...formState,
        step: step + 1
      })
    }
  }

  const returnStep = () => {
    setFormState?.({
      ...formState,
      step: step - 1
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (step === form?.STEPS.length - 1) {
      if (!validateForm()) {
        return
      }

      onSubmit?.(e)
      return
    }

    advanceStep()
  }

  const replaceText = (str: string) => {
    const matchFunction = str.match(/\{.*\}\[.*\]/g)

    matchFunction?.forEach((strMatch) => {
      if (matchFunction.toString().match(/\{slug\}/g)?.length) {
        const index = strMatch.replace(/\{slug\}\[|\]/g, '')

        if (index.includes('|')) {
          const indexes = index.split('|')

          indexes.every((indexItem) => {
            const val = slugify(getValue(indexItem))

            if (val) {
              str = str.replace(strMatch, slugify(val))
              return false
            }

            return true
          })

          return
        }

        const val = slugify(getValue(index))
        str = str.replace(strMatch, val)
      }
    })

    const matchText = str.match(/\[.*\]/g)

    matchText?.forEach((strMatch) => {
      const index = strMatch.replace(/\[|\]/g, '')
      const val = getValue(index)
      str = str.replace(strMatch, val)
    })

    return str
  }

  useEffect(() => {
    const newForm: FormItemProps[] = []

    form.STEPS.forEach((stepItem) => {
      stepItem.FIELDS?.forEach((fieldItem) => {
        newForm.push({
          id: fieldItem.ID,
          value:
            formState.form.find((formItem) => formItem.id === fieldItem.ID)
              ?.value || '',
          warning: fieldItem.REQUIRED_ERROR || '',
          warningVisible: false
        })
      })
    })

    setFormState?.({ ...formState, form: [...newForm] })
  }, [])

  return (
    <form {...props} onSubmit={handleSubmit}>
      {!!form.STEPS[step].TITLE && (
        <Text size="lg" semibold color="formTextColor">
          {replaceText(form.STEPS[step].TITLE || '')}
        </Text>
      )}

      {!!form.STEPS[step].TEXT && (
        <Text color="formTextColor">
          {replaceText(form.STEPS[step].TEXT || '')}
        </Text>
      )}

      {!!form.STEPS[step].FIELDS?.length &&
        form.STEPS[step].FIELDS?.map((formItem) => {
          const fields = {
            label: replaceText(formItem.LABEL),
            placeholder: replaceText(formItem.PLACEHOLDER),
            helpText: replaceText(formItem.HELP_TEXT || ''),
            warning: replaceText(getWarning(formItem.ID)),
            warningVisible: getWarningVisible(formItem.ID) || false,
            value:
              getValue(formItem.ID) ||
              replaceText(formItem.DEFAULT_VALUE || ''),
            options: formItem?.OPTIONS || []
          }

          return (
            <Field
              key={formItem.ID}
              id={formItem.ID}
              type={formItem.TYPE}
              onChange={handleChange}
              {...fields}
            />
          )
        })}

      <Styled.Buttons>
        {step === form.STEPS.length - 1 && form.STEPS[step].SUBMIT_TEXT && (
          <Button
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].SUBMIT_TEXT}
          </Button>
        )}

        {step < form.STEPS.length && form.STEPS[step].ADVANCE_TEXT && (
          <Button
            type="submit"
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
          >
            {form.STEPS[step].ADVANCE_TEXT}
          </Button>
        )}

        {step > 0 && form.STEPS[step].RETURN_TEXT && (
          <Button
            primary={buttonStyles === 'primary'}
            secondary={buttonStyles === 'secondary'}
            onClick={returnStep}
          >
            {form.STEPS[step].RETURN_TEXT}
          </Button>
        )}
      </Styled.Buttons>
    </form>
  )
}
