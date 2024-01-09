import { PokemonProps } from '@/Utils/Props'

      export const KRICKETOT: PokemonProps = {
        id: 'KRICKETOT',
        number: '401',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png',
        name: 'Kricketot',
        types: ['bug'],
        abilities: ['Shed Skin','Run Away'],
        movepool: [{
          name: 'Pound',
          level: '1'
        },{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Growl',
          level: '1'
        },{
          name: 'Bide',
          level: '1'
        },{
          name: 'Struggle Bug',
          level: '6'
        },{
          name: 'Bug Bite',
          level: '16'
        }],
      }