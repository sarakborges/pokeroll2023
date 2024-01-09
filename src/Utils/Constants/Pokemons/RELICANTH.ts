import { PokemonProps } from '@/Utils/Props'

      export const RELICANTH: PokemonProps = {
        id: 'RELICANTH',
        number: '369',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png',
        name: 'Relicanth',
        types: ['water','rock'],
        abilities: ['Swift Swim','Rock Head','Sturdy'],
        movepool: [{
          name: 'Tackle',
          level: '1'
        },{
          name: 'Harden',
          level: '1'
        },{
          name: 'Water Gun',
          level: '5'
        },{
          name: 'Mud Sport',
          level: '6'
        },{
          name: 'Ancient Power',
          level: '10'
        },{
          name: 'Yawn',
          level: '15'
        },{
          name: 'Rock Tomb',
          level: '15'
        },{
          name: 'Dive',
          level: '20'
        },{
          name: 'Take Down',
          level: '25'
        },{
          name: 'Aqua Tail',
          level: '30'
        },{
          name: 'Rest',
          level: '35'
        },{
          name: 'Flail',
          level: '40'
        },{
          name: 'Hydro Pump',
          level: '45'
        },{
          name: 'Double Edge',
          level: '50'
        },{
          name: 'Head Smash',
          level: '55'
        }],
      }