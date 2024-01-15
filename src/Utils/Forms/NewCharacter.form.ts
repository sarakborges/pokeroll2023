import { GenericFormStepsProps } from '@/Utils/Props'

export const NEW_CHARACTER_FORM: GenericFormStepsProps = {
  ERROR: `All required fields need to be filled before we can advance.`,

  STEPS: [
    {
      SUBMIT_TEXT: `Criar novo personagem`,

      FIELDS: [
        {
          ID: `character_name`,
          TYPE: `text`,
          LABEL: `Nome do personagem`,
          PLACEHOLDER: `Sara`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha o nome do personagem.`
        },

        {
          ID: `character_photoplayer`,
          TYPE: `text`,
          LABEL: `Photoplayer do personagem`,
          PLACEHOLDER: `Sayuri Mattar`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha o photoplayer do personagem.`
        },

        {
          ID: `character_picture`,
          TYPE: `text`,
          LABEL: `Foto do personagem`,
          PLACEHOLDER: `https://linkdafoto`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha a foto do personagem.`
        },

        {
          ID: `character_sheet`,
          TYPE: `text`,
          LABEL: `Ficha do personagem`,
          PLACEHOLDER: `https://linkdaficha`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha a ficha do personagem.`
        },

        {
          ID: `character_pronouns`,
          TYPE: `text`,
          LABEL: `Pronomes do personagem`,
          PLACEHOLDER: `ela/dela`,
          REQUIRED: true,
          REQUIRED_ERROR: `Preencha os pronomes do personagem.`
        }
      ]
    }
  ]
}
