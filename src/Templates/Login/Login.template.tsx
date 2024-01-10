import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LOGIN_FORM } from '@/Utils/Forms'
import { BACKOFFICE_ROUTES } from '@/Utils/Constants'
import { GenericFormProps } from '@/Utils/Props'

import { NonAuthedLayout } from '@/Layouts'

import { Form } from '@/Components/DesignSystem'

import * as Styled from './Login.style'

export const LoginTemplate: FC = () => {
  const navigate = useNavigate()

  const [loginFormState, setLoginFormState] = useState<GenericFormProps>({
    step: 0,
    form: []
  })

  const handleLoginSubmit = () => {
    if (
      loginFormState.form[0].value === 'admpdox' &&
      loginFormState.form[1].value === 'saralindadms'
    ) {
      localStorage.setItem('session', 'true')
      navigate(`/backoffice/${BACKOFFICE_ROUTES.HOME.PATH}`)
    }
  }

  return (
    <NonAuthedLayout>
      <Styled.LoginTemplate>
        <Form
          form={LOGIN_FORM}
          formState={loginFormState}
          setFormState={setLoginFormState}
          onSubmit={handleLoginSubmit}
        ></Form>
      </Styled.LoginTemplate>
    </NonAuthedLayout>
  )
}
