import { PokemonProps } from '@/Utils/Props'

      export const SHIELDON: PokemonProps = {
        id: 'SHIELDON',
        number: '410',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png',
        name: 'Shieldon',
        types: ['rock','steel'],
        abilities: ['Sturdy','Soundproof'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Protect',
          level: '1'
        },{
          name: 'Taunt',
          level: '6'
        },{
          name: 'Metal Sound',
          level: '10'
        },{
          name: 'Take Down',
          level: '15'
        },{
          name: 'Iron Defense',
          level: '19'
        },{
          name: 'Swagger',
          level: '24'
        },{
          name: 'Ancient Power',
          level: '28'
        },{
          name: 'Endure',
          level: '33'
        },{
          name: 'Metal Burst',
          level: '37'
        },{
          name: 'Iron Head',
          level: '42'
        },{
          name: 'Heavy Slam',
          level: '46'
        }],
      }