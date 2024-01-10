import { PlayerProps } from '@/Utils/Props'

export const PlayerMock: PlayerProps[] = [
  {
    id: 'asdasd',
    name: 'Sara',
    points: 500,
    characters: [
      {
        id: 'sh',
        name: 'Sara Hope',
        photoplayer: 'Sayuri Mattar',
        picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGGKWy8iJgrbBUiqnsanCrjhfmBDmy6vMuwxOg8WUNcl1btvSHqTZsdmpG8h9QwAnbMQ&usqp=CAU`,
        registeredAt: new Date('2022-12-25 12:25:50'),
        sheetLink: ''
      },

      {
        id: 'ah',
        name: 'Albert Hope',
        photoplayer: 'Luke Hemmings',
        picture: `https://www.j-14.com/wp-content/uploads/2021/07/Luke-hemmings.jpg?resize=1080%2C1200&quality=86&strip=all`,
        registeredAt: new Date('2022-12-25 12:25:50'),
        sheetLink: ''
      }
    ]
  },

  {
    id: 'ronny',
    name: 'Ronny',
    points: 1648746,
    characters: [
      {
        id: 'hg',
        name: 'Hano Grassly',
        photoplayer: 'Jessica Jung',
        picture: `https://image.yoble.us/avatar/hanograssly659487691374d.png`,
        registeredAt: new Date('2022-12-25 12:25:50'),
        sheetLink: ''
      }
    ]
  }
]
