import { GenericFormStepsProps } from '@/Utils/Props'

export const NEW_PLAYER_FORM: GenericFormStepsProps = {
  ERROR: `All required fields need to be filled before we can advance.`,

  STEPS: [
    {
      SUBMIT_TEXT: `Criar novo jogador`,

      FIELDS: [
        {
          ID: `player_name`,
          TYPE: `text`,
          LABEL: `Nome do jogador`,
          PLACEHOLDER: `Sara`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha o nome do jogador.`
        }
      ]
    }
  ]
}
