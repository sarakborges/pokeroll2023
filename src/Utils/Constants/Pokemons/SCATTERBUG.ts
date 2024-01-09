import { PokemonProps } from '@/Utils/Props'

      export const SCATTERBUG: PokemonProps = {
        id: 'SCATTERBUG',
        number: '664',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png',
        name: 'Scatterbug',
        types: ['bug'],
        abilities: ['Shield Dust','Compound Eyes','Friend Guard'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'String Shot',
          level: '1'
        },{
          name: 'Stun Spore',
          level: '6'
        },{
          name: 'Bug Bite',
          level: '15'
        }],
      }