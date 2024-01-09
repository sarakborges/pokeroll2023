import { PlayerProps } from '@/Utils/Props'

export const PlayerMock: PlayerProps[] = [
  {
    id: 'asdasd',
    name: 'Sara',
    characters: [
      {
        name: 'Sara Hope',
        photoplayer: 'Sayuri Mattar',
        picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGGKWy8iJgrbBUiqnsanCrjhfmBDmy6vMuwxOg8WUNcl1btvSHqTZsdmpG8h9QwAnbMQ&usqp=CAU`,
        registeredAt: new Date('2022-12-25 12:25:50'),
        sheetLink: ''
      },

      {
        name: 'Albert Hope',
        photoplayer: 'Luke Hemmings',
        picture: `https://www.j-14.com/wp-content/uploads/2021/07/Luke-hemmings.jpg?resize=1080%2C1200&quality=86&strip=all`,
        registeredAt: new Date('2022-12-25 12:25:50'),
        sheetLink: ''
      }
    ]
  }
]
