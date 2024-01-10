import { GenericFormStepsProps } from '@/Utils/Props'

export const LOGIN_FORM: GenericFormStepsProps = {
  ERROR: `Preencha todos os campos.`,

  STEPS: [
    {
      TEXT: `Bem vinde de volta, adm!`,
      SUBMIT_TEXT: `Entrar`,

      FIELDS: [
        {
          ID: `login_user`,
          TYPE: `text`,
          LABEL: `Usuário`,
          PLACEHOLDER: `usuário de adm`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha o usuário.`
        },

        {
          ID: `login_password`,
          TYPE: `password`,
          LABEL: `Senha`,
          PLACEHOLDER: `!#0%&g8#4&A`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha a senha.`
        }
      ]
    }
  ]
}
