import { RollMock } from '@/Assets/Mocks/Roll.mock'

import { RollProps } from '@/Utils/Props'

interface getRollsProps {
  page?: number
  itemsPerPage?: number
}

interface getRollsReturnProps {
  data: RollProps[]
  pages: number
  totalResults: number
}

const getRolls = async (
  props?: getRollsProps
): Promise<getRollsReturnProps> => {
  const page = props?.page || 1
  const itemsPerPage = props?.itemsPerPage || 20

  const rollsData = [...RollMock]

  return {
    data: rollsData
      .sort((a, b) => (a.time < b.time ? 1 : -1))
      .slice((page - 1) * itemsPerPage, itemsPerPage * page),

    pages: Math.ceil(rollsData.length / itemsPerPage),
    totalResults: rollsData.length
  }
}

export { getRolls }
