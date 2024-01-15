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
        },

        {
          ID: `player_pronouns`,
          TYPE: `text`,
          LABEL: `Pronomes do jogador`,
          PLACEHOLDER: `ela/dela`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha os pronomes do jogador.`
        },

        {
          ID: `player_points`,
          TYPE: `text`,
          LABEL: `Pontos`,
          PLACEHOLDER: `500`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha quantos pontos o jogador possui.`
        },

        {
          ID: `player_season`,
          TYPE: `select`,
          LABEL: `Estação do ano`,
          PLACEHOLDER: `Estação do ano`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha quantos pontos o jogador possui.`,
          OPTIONS: [`Verão`, `Outono`, `Inverno`, `Primavera`]
        }
      ]
    }
  ]
}
