export type FormIdsType =
  | 'login_user'
  | 'login_password'
  | 'player_name'
  | 'character_name'
  | 'character_photoplayer'
  | 'character_picture'
  | 'character_sheet'

export interface FieldsProps {
  ID: FormIdsType
  TYPE: 'text' | 'password' | 'select'
  LABEL: string
  PLACEHOLDER: string
  OPTIONS?: string[]
  REQUIRED?: boolean
  REQUIRED_ERROR?: string
  HELP_TEXT?: string
  DEFAULT_VALUE?: string
}

export interface FormItemProps {
  id: FormIdsType
  value: string
  warning: string
  warningVisible?: boolean
}

export interface GenericFormProps {
  step: number
  form: FormItemProps[]
}

export interface GenericFormStepsProps {
  ERROR?: string

  STEPS: {
    TITLE?: string
    TEXT?: string
    ADVANCE_TEXT?: string
    RETURN_TEXT?: string
    SUBMIT_TEXT?: string

    FIELDS?: FieldsProps[]
  }[]
}
