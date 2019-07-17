const films = [
    {
      title: 'The Green Mile',
      creationYear: 1999,
      country: ['USA'],
      budget: '$60 000 000',
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Paul Edgecomb',
        },
        {
          name: 'David Morse',
          age: 65,
          role: 'Brutus Howell',
        },
        {
          name: 'Michael Clarke Duncan',
          age: 54,
          role: 'John Coffey',
        },
      ],
      director: {
        name: 'Frank Darabont',
        age: 60,
        oscarsCount: 0,
      }
    },
    {
      title: 'Inception',
      creationYear: 2010,
      country: ['USA'],
      budget: '$160 000 000',
      actors: [
        {
          name: 'Leonardo DiCaprio',
          age: 44,
          role: 'Cobb',
        },
        {
          name: 'Joseph Gordon-Levitt',
          age: 38,
          role: 'Arthur',
        },
        {
          name: 'Ellen Page',
          age: 32,
          role: 'Ariadne',
        },
        {
          name: 'Tom Hardy',
          age: 41,
          role: 'Eames',
        },
      ],
      director: {
        name: 'Christopher Nolan',
        age: 48,
        oscarsCount: 0,
      }
    },
    {
      title: 'Forrest Gump',
      creationYear: 1994,
      country: ['USA'],
      budget: '$55 000 000',
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Forrest Gump',
        },
        {
          name: 'Robin Wright',
          age: 53,
          role: 'Jenny Curran',
        },
        {
          name: 'Sally Field',
          age: 72,
          role: 'Mrs. Gump',
        },
      ],
      director: {
        name: 'Robert Zemeckis',
        age: 68,
        oscarsCount: 1,
      }
    },
    {
      title: 'Interstellar',
      creationYear: 2014,
      budget: '$165 000 000',
      country: ['USA','Great Britain', 'Canada'],
      actors: [
        {
          name: 'Matthew McConaughey',
          age: 49,
          role: 'Cooper',
        },
        {
          name: 'Anne Hathaway',
          age: 36,
          role: 'Brand',
        },
        {
          name: 'Jessica Chastain',
          age: 42,
          role: 'Murph',
        },
        {
          name: 'Michael Caine',
          age: 86,
          role: 'Professor Brand',
        },
        {
          name: 'Matt Damon',
          age: 48,
          role: 'Mann',
        },
      ],
      director: {
        name: 'Christopher Nolan',
        age: 48,
        oscarsCount: 0,
      }
    },
    {
      title: 'Catch Me If You Can',
      creationYear: 2002,
      budget: '$52 000 000',
      country: ['USA', 'Canada'],
      actors: [
        {
          name: 'Tom Hanks',
          age: 63,
          role: 'Carl Hanratty',
        },
        {
          name: 'Leonardo DiCaprio',
          age: 36,
          role: 'Frank Abagnale Jr.',
        },
        {
          name: 'Christopher Walken',
          age: 76,
          role: 'Frank Abagnale',
        },
        {
          name: 'Amy Adams',
          age: 44,
          role: 'Brenda Strong',
        },
      ],
      director: {
        name: 'Steven Spielberg',
        age: 72,
        oscarsCount: 4,
      }
    },
  ];

  
/**
 * films[{}]:
 *  title
 *  creationYear (int)
 *  country ([str])
 *  budget (str) '$99 999'
 *  actors[{}]:
 *      name
 *      age (int)
 *      role
 *  director{}:
 *      name
 *      age (int)
 *      oscarsCount (int)
 */


function out(str){
    console.log(str);
    //alert(str);
}

function dollarStrToInt(str){
    let new_str = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == '$' || str[i] == ' '){
            continue;
        }else{
            new_str = new_str + str[i];
        }
    }
    return +new_str;
}

function getAverageAgeActors(actors){
    let count_age = 0;
    let sum_age = 0;
    for(let actor in actors){
        sum_age = sum_age + actor.age;
        count_age++;
    }
    return sum_age / count_age;
}

function getArrayDirecorsZeroOscar(films_obj){
    let directors = [];
    for (let film in films_obj){
        console.log(films_obj[film]);
        if(film.director.oscarsCount < 1){
            directors.push(film.director.name);
        }
    }
}

(out(getArrayDirecorsZeroOscar(films)))
