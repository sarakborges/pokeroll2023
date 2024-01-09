import { PokemonProps } from '@/Utils/Props'

      export const GASTRODON: PokemonProps = {
        id: 'GASTRODON',
        number: '423',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
        name: 'Gastrodon',
        types: ['water','ground'],
        abilities: ['Sticky Hold','Storm Drain','Sand Force'],
        movepool: [{
          name: 'Water Gun',
          level: '1'
        },{
          name: 'Recover',
          level: '1'
        },{
          name: 'Harden',
          level: '1'
        },{
          name: 'Mud Slap',
          level: '1'
        },{
          name: 'Mud Sport',
          level: '2'
        },{
          name: 'Mud Bomb',
          level: '11'
        },{
          name: 'Water Pulse',
          level: '15'
        },{
          name: 'Hidden Power',
          level: '16'
        },{
          name: 'Ancient Power',
          level: '20'
        },{
          name: 'Body Slam',
          level: '25'
        },{
          name: 'Muddy Water',
          level: '33'
        },{
          name: 'Earth Power',
          level: '39'
        },{
          name: 'Rain Dance',
          level: '46'
        },{
          name: 'Memento',
          level: '53'
        }],
      }