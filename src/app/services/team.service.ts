import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

  getTeams() {
    return [
      {
        'name' : 'U1',
        'position' : '1',
        'goals_score' : '24',
        'goals_taken' : '8',
        'years_in_league' : '5',
        'home_stadium' : 'AJ Katzenmaier',
        'wins' : '8',
        'loses' : '3',
        'ties' : '1',
        'games_played': '12',
        'points' : '25',
        'coach' : 'Steven Spielberg',
        'logo': '../../../assets/img/cas_logo.png'

    },

    {
        'name' : 'U2',
        'position' : '2',
        'goals_score' : '22',
        'goals_taken' : '10',
        'years_in_league' : '3',
        'home_stadium' : 'Greenbay',
        'wins' : '7',
        'loses' : '4',
        'ties' : '1',
        'games_played': '12',
        'points' : '22',
        'coach' : 'Tom Cruise',
        'logo': '../../../assets/img/center.png'
    },

    {
        'name' : 'U3',
        'position' : '3',
        'goals_score' : '20',
        'goals_taken' : '12',
        'years_in_league' : '9',
        'home_stadium' : 'Howard A Yeager',
        'wins' : '6',
        'loses' : '5',
        'ties' : '1',
        'games_played': '12',
        'points' : '19',
        'coach' : 'Arnold Schwartznigger',
        'logo': '../../../assets/img/download.jpg'
    },

    {
        'name' : 'U4',
        'position' : '4',
        'goals_score' : '18',
        'goals_taken' : '14',
        'years_in_league' : '7',
        'home_stadium' : 'Marjorie P Hart',
        'wins' : '5',
        'loses' : '6',
        'ties' : '1',
        'games_played': '12',
        'points' : '16',
        'coach' : 'Jennifer Aniston',
        'logo': '../../../assets/img/fake.png'

    },

    {
        'name' : 'U5',
        'position' : '5',
        'goals_score' : '16',
        'goals_taken' : '16',
        'years_in_league' : '8',
        'home_stadium' : 'North',
        'wins' : '4',
        'loses' : '7',
        'ties' : '1',
        'games_played': '12',
        'points' : '13',
        'coach' : 'Leonardo Dicaprio',
        'logo': '../../../assets/img/us.png'

    },

    {
        'name' : 'U6',
        'position' : '6',
        'goals_score' : '16',
        'goals_taken' : '16',
        'years_in_league' : '11',
        'home_stadium' : 'South',
        'wins' : '3',
        'loses' : '8',
        'ties' : '1',
        'games_played': '12',
        'points' : '10',
        'coach' : 'Tom Hanks',
        'logo': '../../../assets/img/warriors_badge.jpg'
    }
    ];
  }
  getTeam(i: string) {
   const team = this.getTeams();
    //console.log(team[i]);
    return team[i];
  }
}

