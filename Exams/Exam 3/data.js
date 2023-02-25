let data = [
    {
        "id": 1,
        "year": "1988",
        "title": "Beetlejuice",
        "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
        "genres": [
            "Comedy",
            "Fantasy"
        ],
        "director": "Tim Burton",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
        "description": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house."
    },
    {
        "id": 2,
        "year": "1984",
        "title": "The Cotton Club",
        "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
        "genres": [
            "Crime",
            "Drama",
            "Music"
        ],
        "director": "Francis Ford Coppola",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
        "description": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous."
    },
    {
        "id": 3,
        "year": "1994",
        "title": "The Shawshank Redemption",
        "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Frank Darabont",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "id": 4,
        "year": "1986",
        "title": "Crocodile Dundee",
        "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
        "genres": [
            "Adventure",
            "Comedy"
        ],
        "director": "Peter Faiman",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
        "description": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City."
    },
    {
        "id": 5,
        "year": "2008",
        "title": "Valkyrie",
        "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
        "genres": [
            "Drama",
            "History",
            "Thriller"
        ],
        "director": "Bryan Singer",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
        "description": "A dramatization of the 20 July assassination and political coup description by desperate renegade German Army officers against Hitler during World War II."
    },
    {
        "id": 6,
        "year": "2007",
        "title": "Ratatouille",
        "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
        "genres": [
            "Animation",
            "Comedy",
            "Family"
        ],
        "director": "Brad Bird, Jan Pinkava",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
        "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant."
    },
    {
        "id": 7,
        "year": "2002",
        "title": "City of God",
        "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Fernando Meirelles, Kátia Lund",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
        "description": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer."
    },
    {
        "id": 8,
        "year": "2000",
        "title": "Memento",
        "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "director": "Christopher Nolan",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle."
    },
    {
        "id": 9,
        "year": "2011",
        "title": "The Intouchables",
        "actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
        "genres": [
            "Biography",
            "Comedy",
            "Drama"
        ],
        "director": "Olivier Nakache, Eric Toledano",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
        "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
    },
    {
        "id": 10,
        "year": "2007",
        "title": "Stardust",
        "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
        "genres": [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        "director": "Matthew Vaughn",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
        "description": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm."
    },
    {
        "id": 11,
        "year": "2006",
        "title": "Apocalypto",
        "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "director": "Mel Gibson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
        "description": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate."
    },
    {
        "id": 12,
        "year": "1976",
        "title": "Taxi Driver",
        "actors": "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Martin Scorsese",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process."
    },
    {
        "id": 13,
        "year": "2007",
        "title": "No Country for Old Men",
        "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Ethan Coen, Joel Coen",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
        "description": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande."
    },
    {
        "id": 14,
        "year": "2009",
        "title": "Planet 51",
        "actors": "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Jorge Blanco, Javier Abad, Marcos Martínez",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg",
        "description": "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him."
    },
    {
        "id": 15,
        "year": "2012",
        "title": "Looper",
        "actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
        "genres": [
            "Action",
            "Crime",
            "Drama"
        ],
        "director": "Rian Johnson",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg",
        "description": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination."
    },
    {
        "id": 16,
        "year": "2005",
        "title": "Corpse Bride",
        "actors": "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
        "genres": [
            "Animation",
            "Drama",
            "Family"
        ],
        "director": "Tim Burton, Mike Johnson",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
        "description": "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her."
    },
    {
        "id": 17,
        "year": "1949",
        "title": "The Third Man",
        "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
        "genres": [
            "Film-Noir",
            "Mystery",
            "Thriller"
        ],
        "director": "Carol Reed",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
        "description": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime."
    },
    {
        "id": 18,
        "year": "2000",
        "title": "The Beach",
        "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
        "genres": [
            "Adventure",
            "Drama",
            "Romance"
        ],
        "director": "Danny Boyle",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it."
    },
    {
        "id": 19,
        "year": "1983",
        "title": "Scarface",
        "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Brian De Palma",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
        "description": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed."
    },
    {
        "id": 20,
        "year": "1986",
        "title": "Sid and Nancy",
        "actors": "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
        "genres": [
            "Biography",
            "Drama",
            "Music"
        ],
        "director": "Alex Cox",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg",
        "description": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ..."
    },
    {
        "id": 21,
        "year": "2010",
        "title": "Black Swan",
        "actors": "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "director": "Darren Aronofsky",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
        "description": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity."
    },
    {
        "id": 22,
        "year": "2010",
        "title": "Inception",
        "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "director": "Christopher Nolan",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "description": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
    },
    {
        "id": 23,
        "year": "1978",
        "title": "The Deer Hunter",
        "actors": "Robert De Niro, John Cazale, John Savage, Christopher Walken",
        "genres": [
            "Drama",
            "War"
        ],
        "director": "Michael Cimino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "description": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania."
    },
    {
        "id": 24,
        "year": "1997",
        "title": "Chasing Amy",
        "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "director": "Kevin Smith",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay."
    },
    {
        "id": 25,
        "year": "2012",
        "title": "Django Unchained",
        "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
        "genres": [
            "Drama",
            "Western"
        ],
        "director": "Quentin Tarantino",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
        "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
    },
    {
        "id": 26,
        "year": "1991",
        "title": "The Silence of the Lambs",
        "actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Jonathan Demme",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg",
        "description": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims."
    },
    {
        "id": 27,
        "year": "1999",
        "title": "American Beauty",
        "actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Sam Mendes",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SX300.jpg",
        "description": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
    },
    {
        "id": 28,
        "year": "2000",
        "title": "Snatch",
        "actors": "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
        "genres": [
            "Comedy",
            "Crime"
        ],
        "director": "Guy Ritchie",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond."
    },
    {
        "id": 29,
        "year": "1978",
        "title": "Midnight Express",
        "actors": "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Alan Parker",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg",
        "description": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison."
    },
    {
        "id": 30,
        "year": "1994",
        "title": "Pulp Fiction",
        "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Quentin Tarantino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
        "description": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        "id": 31,
        "year": "1998",
        "title": "Lock, Stock and Two Smoking Barrels",
        "actors": "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
        "genres": [
            "Comedy",
            "Crime"
        ],
        "director": "Guy Ritchie",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns."
    },
    {
        "id": 32,
        "year": "2006",
        "title": "Lucky Number Slevin",
        "actors": "Josh Hartnett, Bruce Willis, Lucy Liu, Morgan Freeman",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "director": "Paul McGuigan",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg",
        "description": "A case of mistaken identity lands Slevin into the middle of a war being descriptionted by two of the city's most rival crime bosses: The Rabbi and The Boss. Slevin is under constant surveillance by relentless Detective Brikowski as well as the infamous assassin Goodkat and finds himself having to hatch his own ingenious description to get them before they get him."
    },
    {
        "id": 33,
        "year": "1954",
        "title": "Rear Window",
        "actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "director": "Alfred Hitchcock",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder."
    },
    {
        "id": 34,
        "year": "2006",
        "title": "Pan's Labyrinth",
        "actors": "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
        "genres": [
            "Drama",
            "Fantasy",
            "War"
        ],
        "director": "Guillermo del Toro",
        "imageUrl": "",
        "description": "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world."
    },
    {
        "id": 35,
        "year": "2010",
        "title": "Shutter Island",
        "actors": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
        "genres": [
            "Mystery",
            "Thriller"
        ],
        "director": "Martin Scorsese",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
        "description": "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane."
    },
    {
        "id": 36,
        "year": "1992",
        "title": "Reservoir Dogs",
        "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Quentin Tarantino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
        "description": "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant."
    },
    {
        "id": 37,
        "year": "1980",
        "title": "The Shining",
        "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
        "genres": [
            "Drama",
            "Horror"
        ],
        "director": "Stanley Kubrick",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg",
        "description": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future."
    },
    {
        "id": 38,
        "year": "2011",
        "title": "Midnight in Paris",
        "actors": "Owen Wilson, Rachel McAdams, Kurt Fuller, Mimi Kennedy",
        "genres": [
            "Comedy",
            "Fantasy",
            "Romance"
        ],
        "director": "Woody Allen",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg",
        "description": "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s everyday at midnight."
    },
    {
        "id": 39,
        "year": "2012",
        "title": "Les Misérables",
        "actors": "Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried",
        "genres": [
            "Drama",
            "Musical",
            "Romance"
        ],
        "director": "Tom Hooper",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg",
        "description": "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever."
    },
    {
        "id": 40,
        "year": "1997",
        "title": "L.A. Confidential",
        "actors": "Kevin Spacey, Russell Crowe, Guy Pearce, James Cromwell",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "director": "Curtis Hanson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice."
    },
    {
        "id": 41,
        "year": "2011",
        "title": "Moneyball",
        "actors": "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
        "genres": [
            "Biography",
            "Drama",
            "Sport"
        ],
        "director": "Bennett Miller",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg",
        "description": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players."
    },
    {
        "id": 42,
        "year": "2009",
        "title": "The Hangover",
        "actors": "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
        "genres": [
            "Comedy"
        ],
        "director": "Todd Phillips",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg",
        "description": "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding."
    },
    {
        "id": 43,
        "year": "2013",
        "title": "The Great Beauty",
        "actors": "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
        "genres": [
            "Drama"
        ],
        "director": "Paolo Sorrentino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg",
        "description": "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty."
    },
    {
        "id": 44,
        "year": "2008",
        "title": "Gran Torino",
        "actors": "Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her",
        "genres": [
            "Drama"
        ],
        "director": "Clint Eastwood",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg",
        "description": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino."
    },
    {
        "id": 45,
        "year": "2009",
        "title": "Mary and Max",
        "actors": "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
        "genres": [
            "Animation",
            "Comedy",
            "Drama"
        ],
        "director": "Adam Elliot",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg",
        "description": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York."
    },
    {
        "id": 46,
        "year": "2012",
        "title": "Flight",
        "actors": "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "director": "Robert Zemeckis",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg",
        "description": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling."
    },
    {
        "id": 47,
        "year": "1975",
        "title": "One Flew Over the Cuckoo's Nest",
        "actors": "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
        "genres": [
            "Drama"
        ],
        "director": "Milos Forman",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "description": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients."
    },
    {
        "id": 48,
        "year": "2000",
        "title": "Requiem for a Dream",
        "actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        "genres": [
            "Drama"
        ],
        "director": "Darren Aronofsky",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg",
        "description": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep."
    },
    {
        "id": 49,
        "year": "1998",
        "title": "The Truman Show",
        "actors": "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        "genres": [
            "Comedy",
            "Drama",
            "Sci-Fi"
        ],
        "director": "Peter Weir",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "An insurance salesman/adjuster discovers his entire life is actually a television show."
    },
    {
        "id": 50,
        "year": "2011",
        "title": "The Artist",
        "actors": "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "director": "Michel Hazanavicius",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg",
        "description": "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions."
    },
    {
        "id": 51,
        "year": "1994",
        "title": "Forrest Gump",
        "actors": "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "director": "Robert Zemeckis",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "description": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him."
    },
    {
        "id": 52,
        "year": "2013",
        "title": "The Hobbit: The Desolation of Smaug",
        "actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        "genres": [
            "Adventure",
            "Fantasy"
        ],
        "director": "Peter Jackson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg",
        "description": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
    },
    {
        "id": 53,
        "year": "2008",
        "title": "Vicky Cristina Barcelona",
        "actors": "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Woody Allen",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg",
        "description": "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture."
    },
    {
        "id": 54,
        "year": "2008",
        "title": "Slumdog Millionaire",
        "actors": "Dev Patel, Saurabh Shukla, Anil Kapoor, Rajendranath Zutshi",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Danny Boyle, Loveleen Tandan",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_SX300.jpg",
        "description": "A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of \"Who Wants to be a Millionaire?\""
    },
    {
        "id": 55,
        "year": "2003",
        "title": "Lost in Translation",
        "actors": "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
        "genres": [
            "Drama"
        ],
        "director": "Sofia Coppola",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg",
        "description": "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo."
    },
    {
        "id": 56,
        "year": "2005",
        "title": "Match Point",
        "actors": "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
        "genres": [
            "Drama",
            "Romance",
            "Thriller"
        ],
        "director": "Woody Allen",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg",
        "description": "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law."
    },
    {
        "id": 57,
        "year": "1960",
        "title": "Psycho",
        "actors": "Anthony Perkins, Vera Miles, John Gavin, Janet Leigh",
        "genres": [
            "Horror",
            "Mystery",
            "Thriller"
        ],
        "director": "Alfred Hitchcock",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
    },
    {
        "id": 58,
        "year": "1959",
        "title": "North by Northwest",
        "actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
        "genres": [
            "Action",
            "Adventure",
            "Crime"
        ],
        "director": "Alfred Hitchcock",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SX300.jpg",
        "description": "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive."
    },
    {
        "id": 59,
        "year": "2008",
        "title": "Madagascar: Escape 2 Africa",
        "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        "genres": [
            "Animation",
            "Action",
            "Adventure"
        ],
        "director": "Eric Darnell, Tom McGrath",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg",
        "description": "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents."
    },
    {
        "id": 60,
        "year": "2013",
        "title": "Despicable Me 2",
        "actors": "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Pierre Coffin, Chris Renaud",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg",
        "description": "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness."
    },
    {
        "id": 61,
        "year": "2004",
        "title": "Downfall",
        "actors": "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
        "genres": [
            "Biography",
            "Drama",
            "History"
        ],
        "director": "Oliver Hirschbiegel",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg",
        "description": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII."
    },
    {
        "id": 62,
        "year": "2005",
        "title": "Madagascar",
        "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Eric Darnell, Tom McGrath",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg",
        "description": "Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs"
    },
    {
        "id": 63,
        "year": "2012",
        "title": "Madagascar 3: Europe's Most Wanted",
        "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Eric Darnell, Tom McGrath, Conrad Vernon",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg",
        "description": "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style."
    },
    {
        "id": 64,
        "year": "2011",
        "title": "God Bless America",
        "actors": "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
        "genres": [
            "Comedy",
            "Crime"
        ],
        "director": "Bobcat Goldthwait",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg",
        "description": "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy."
    },
    {
        "id": 65,
        "year": "2010",
        "title": "The Social Network",
        "actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
        "genres": [
            "Biography",
            "Drama"
        ],
        "director": "David Fincher",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg",
        "description": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business."
    },
    {
        "id": 66,
        "year": "2002",
        "title": "The Pianist",
        "actors": "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
        "genres": [
            "Biography",
            "Drama",
            "War"
        ],
        "director": "Roman Polanski",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg",
        "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
    },
    {
        "id": 67,
        "year": "1993",
        "title": "Alive",
        "actors": "Ethan Hawke, Vincent Spano, Josh Hamilton, Bruce Ramsay",
        "genres": [
            "Adventure",
            "Biography",
            "Drama"
        ],
        "director": "Frank Marshall",
        "imageUrl": "",
        "description": "Uruguayan rugby team stranded in the snow swept Andes are forced to use desperate measures to survive after a plane crash."
    },
    {
        "id": 68,
        "year": "1942",
        "title": "Casablanca",
        "actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
        "genres": [
            "Drama",
            "Romance",
            "War"
        ],
        "director": "Michael Curtiz",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX300.jpg",
        "description": "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications."
    },
    {
        "id": 69,
        "year": "2007",
        "title": "American Gangster",
        "actors": "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "director": "Ridley Scott",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg",
        "description": "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East."
    },
    {
        "id": 70,
        "year": "2002",
        "title": "Catch Me If You Can",
        "actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "director": "Steven Spielberg",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
        "description": "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor."
    },
    {
        "id": 71,
        "year": "1998",
        "title": "American History X",
        "actors": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Tony Kaye",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
    },
    {
        "id": 72,
        "year": "1995",
        "title": "Casino",
        "actors": "Robert De Niro, Sharon Stone, Joe Pesci, James Woods",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "director": "Martin Scorsese",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "description": "Greed, deception, money, power, and murder occur between two best friends, a mafia underboss and a casino owner, for a trophy wife over a gambling empire."
    },
    {
        "id": 73,
        "year": "2007",
        "title": "Pirates of the Caribbean: At World's End",
        "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "director": "Gore Verbinski",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
        "description": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle."
    },
    {
        "id": 74,
        "year": "2011",
        "title": "Pirates of the Caribbean: On Stranger Tides",
        "actors": "Johnny Depp, Penélope Cruz, Geoffrey Rush, Ian McShane",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "director": "Rob Marshall",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
        "description": "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too."
    },
    {
        "id": 75,
        "year": "2004",
        "title": "Crash",
        "actors": "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "director": "Paul Haggis",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg",
        "description": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption."
    },
    {
        "id": 76,
        "year": "2003",
        "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "director": "Gore Verbinski",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg",
        "description": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
    },
    {
        "id": 77,
        "year": "2003",
        "title": "The Lord of the Rings: The Return of the King",
        "actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "director": "Peter Jackson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg",
        "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
        "id": 78,
        "year": "2003",
        "title": "Oldboy",
        "actors": "Min-sik Choi, Ji-tae Yu, Hye-jeong Kang, Dae-han Ji",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "director": "Chan-wook Park",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        "description": "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days."
    },
    {
        "id": 79,
        "year": "2000",
        "title": "Chocolat",
        "actors": "Alfred Molina, Carrie-Anne Moss, Aurelien Parent Koenig, Antonio Gil",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Lasse Hallström",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg",
        "description": "A woman and her daughter open a chocolate shop in a small French village that shakes up the rigid morality of the community."
    },
    {
        "id": 80,
        "year": "2006",
        "title": "Casino Royale",
        "actors": "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
        "genres": [
            "Action",
            "Adventure",
            "Thriller"
        ],
        "director": "Martin Campbell",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg",
        "description": "Armed with a licence to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem."
    },
    {
        "id": 81,
        "year": "2008",
        "title": "WALL·E",
        "actors": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "director": "Andrew Stanton",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg",
        "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
    },
    {
        "id": 82,
        "year": "2013",
        "title": "The Wolf of Wall Street",
        "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        "genres": [
            "Biography",
            "Comedy",
            "Crime"
        ],
        "director": "Martin Scorsese",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "description": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
    },
    {
        "id": 83,
        "year": "2008",
        "title": "Hellboy II: The Golden Army",
        "actors": "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "director": "Guillermo del Toro",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg",
        "description": "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures."
    },
    {
        "id": 84,
        "year": "1950",
        "title": "Sunset Boulevard",
        "actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
        "genres": [
            "Drama",
            "Film-Noir",
            "Romance"
        ],
        "director": "Billy Wilder",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SX300.jpg",
        "description": "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity."
    },
    {
        "id": 85,
        "year": "2006",
        "title": "I-See-You.Com",
        "actors": "Beau Bridges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
        "genres": [
            "Comedy"
        ],
        "director": "Eric Steven Stahl",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg",
        "description": "A 17-year-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down...."
    },
    {
        "id": 86,
        "year": "2014",
        "title": "The Grand Budapest Hotel",
        "actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
        "genres": [
            "Adventure",
            "Comedy",
            "Crime"
        ],
        "director": "Wes Anderson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
        "description": "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend."
    },
    {
        "id": 87,
        "year": "2005",
        "title": "The Hitchhiker's Guide to the Galaxy",
        "actors": "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey",
        "genres": [
            "Adventure",
            "Comedy",
            "Sci-Fi"
        ],
        "director": "Garth Jennings",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjEwOTk4NjU2MF5BMl5BanBnXkFtZTYwMDA3NzI3._V1_SX300.jpg",
        "description": "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\""
    },
    {
        "id": 88,
        "year": "1984",
        "title": "Once Upon a Time in America",
        "actors": "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Sergio Leone",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "description": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life."
    },
    {
        "id": 89,
        "year": "2013",
        "title": "Oblivion",
        "actors": "Tom Cruise, Morgan Freeman, Olga Kurylenko, Andrea Riseborough",
        "genres": [
            "Action",
            "Adventure",
            "Mystery"
        ],
        "director": "Joseph Kosinski",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg",
        "description": "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself."
    },
    {
        "id": 90,
        "year": "2005",
        "title": "V for Vendetta",
        "actors": "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
        "genres": [
            "Action",
            "Drama",
            "Thriller"
        ],
        "director": "James McTeigue",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
        "description": "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V\", descriptions to overthrow it with the help of a young woman."
    },
    {
        "id": 91,
        "year": "1997",
        "title": "Gattaca",
        "actors": "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
        "genres": [
            "Drama",
            "Sci-Fi",
            "Thriller"
        ],
        "director": "Andrew Niccol",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel."
    },
    {
        "id": 92,
        "year": "2012",
        "title": "Silver Linings Playbook",
        "actors": "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "director": "David O. Russell",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg",
        "description": "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own."
    },
    {
        "id": 93,
        "year": "2010",
        "title": "Alice in Wonderland",
        "actors": "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
        "genres": [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        "director": "Tim Burton",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg",
        "description": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror."
    },
    {
        "id": 94,
        "year": "1982",
        "title": "Gandhi",
        "actors": "Ben Kingsley, Candice Bergen, Edward Fox, John Gielgud",
        "genres": [
            "Biography",
            "Drama"
        ],
        "director": "Richard Attenborough",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "description": "Gandhi's character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed."
    },
    {
        "id": 95,
        "year": "2013",
        "title": "Pacific Rim",
        "actors": "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
        "genres": [
            "Action",
            "Adventure",
            "Sci-Fi"
        ],
        "director": "Guillermo del Toro",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
        "description": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse."
    },
    {
        "id": 96,
        "year": "2005",
        "title": "Kiss Kiss Bang Bang",
        "actors": "Robert Downey Jr., Val Kilmer, Michelle Monaghan, Corbin Bernsen",
        "genres": [
            "Comedy",
            "Crime",
            "Mystery"
        ],
        "director": "Shane Black",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_SX300.jpg",
        "description": "A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor."
    },
    {
        "id": 97,
        "year": "2002",
        "title": "The Quiet American",
        "actors": "Michael Caine, Brendan Fraser, Do Thi Hai Yen, Rade Serbedzija",
        "genres": [
            "Drama",
            "Mystery",
            "Romance"
        ],
        "director": "Phillip Noyce",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg",
        "description": "An older British reporter vies with a young U.S. doctor for the affections of a beautiful Vietnamese woman."
    },
    {
        "id": 98,
        "year": "2012",
        "title": "Cloud Atlas",
        "actors": "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
        "genres": [
            "Drama",
            "Sci-Fi"
        ],
        "director": "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
        "description": "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution."
    },
    {
        "id": 99,
        "year": "2012",
        "title": "The Impossible",
        "actors": "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "director": "J.A. Bayona",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg",
        "description": "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami."
    },
    {
        "id": 100,
        "year": "1930",
        "title": "All Quiet on the Western Front",
        "actors": "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
        "genres": [
            "Drama",
            "War"
        ],
        "director": "Lewis Milestone",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg",
        "description": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I."
    },
    {
        "id": 101,
        "year": "1996",
        "title": "The English Patient",
        "actors": "Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas",
        "genres": [
            "Drama",
            "Romance",
            "War"
        ],
        "director": "Anthony Minghella",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg2OTcxNDE0OF5BMl5BanBnXkFtZTgwOTg2MDM0MDE@._V1_SX300.jpg",
        "description": "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair."
    },
    {
        "id": 102,
        "year": "2013",
        "title": "Dallas Buyers Club",
        "actors": "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
        "genres": [
            "Biography",
            "Drama"
        ],
        "director": "Jean-Marc Vallée",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg",
        "description": "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease."
    },
    {
        "id": 103,
        "year": "2002",
        "title": "Frida",
        "actors": "Salma Hayek, Mía Maestro, Alfred Molina, Antonio Banderas",
        "genres": [
            "Biography",
            "Drama",
            "Romance"
        ],
        "director": "Julie Taymor",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTMyODUyMDY1OV5BMl5BanBnXkFtZTYwMDA2OTU3._V1_SX300.jpg",
        "description": "A biography of artist Frida Kahlo, who channeled the pain of a crippling injury and her tempestuous marriage into her work."
    },
    {
        "id": 104,
        "year": "1995",
        "title": "Before Sunrise",
        "actors": "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Richard Linklater",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg",
        "description": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together."
    },
    {
        "id": 105,
        "year": "2011",
        "title": "The Rum Diary",
        "actors": "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "director": "Bruce Robinson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg",
        "description": "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there."
    },
    {
        "id": 106,
        "year": "2003",
        "title": "The Last Samurai",
        "actors": "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
        "genres": [
            "Action",
            "Drama",
            "History"
        ],
        "director": "Edward Zwick",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg",
        "description": "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle."
    },
    {
        "id": 107,
        "year": "1974",
        "title": "Chinatown",
        "actors": "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
        "genres": [
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "director": "Roman Polanski",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder."
    },
    {
        "id": 108,
        "year": "2014",
        "title": "Calvary",
        "actors": "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
        "genres": [
            "Comedy",
            "Drama"
        ],
        "director": "John Michael McDonagh",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg",
        "description": "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him."
    },
    {
        "id": 109,
        "year": "2004",
        "title": "Before Sunset",
        "actors": "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Richard Linklater",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg",
        "description": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour."
    },
    {
        "id": 110,
        "year": "2001",
        "title": "Spirited Away",
        "actors": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "director": "Hayao Miyazaki",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg",
        "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
    },
    {
        "id": 111,
        "year": "1992",
        "title": "Indochine",
        "actors": "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Régis Wargnier",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg",
        "description": "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A widowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ..."
    },
    {
        "id": 112,
        "year": "2014",
        "title": "Birdman or (The Unexpected Virtue of Ignorance)",
        "actors": "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
        "genres": [
            "Comedy",
            "Drama",
            "Romance"
        ],
        "director": "Alejandro G. Iñárritu",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg",
        "description": "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown."
    },
    {
        "id": 113,
        "year": "2014",
        "title": "Boyhood",
        "actors": "Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater",
        "genres": [
            "Drama"
        ],
        "director": "Richard Linklater",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg",
        "description": "The life of Mason, from early childhood to his arrival at college."
    },
    {
        "id": 114,
        "year": "1957",
        "title": "12 Angry Men",
        "actors": "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Sidney Lumet",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg",
        "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
    },
    {
        "id": 115,
        "year": "2014",
        "title": "The Imitation Game",
        "actors": "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
        "genres": [
            "Biography",
            "Drama",
            "Thriller"
        ],
        "director": "Morten Tyldum",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg",
        "description": "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians."
    },
    {
        "id": 116,
        "year": "2014",
        "title": "Interstellar",
        "actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "director": "Christopher Nolan",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        "id": 117,
        "year": "2006",
        "title": "Big Nothing",
        "actors": "David Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
        "genres": [
            "Comedy",
            "Crime",
            "Thriller"
        ],
        "director": "Jean-Baptiste Andrea",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg",
        "description": "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme."
    },
    {
        "id": 118,
        "year": "1981",
        "title": "Das Boot",
        "actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
        "genres": [
            "Adventure",
            "Drama",
            "Thriller"
        ],
        "director": "Wolfgang Petersen",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5._V1_SX300.jpg",
        "description": "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror."
    },
    {
        "id": 119,
        "year": "2004",
        "title": "Shrek 2",
        "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Andrew Adamson, Kelly Asbury, Conrad Vernon",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
        "description": "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres."
    },
    {
        "id": 120,
        "year": "2005",
        "title": "Sin City",
        "actors": "Jessica Alba, Devon Aoki, Alexis Bledel, Powers Boothe",
        "genres": [
            "Crime",
            "Thriller"
        ],
        "director": "Frank Miller, Robert Rodriguez, Quentin Tarantino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "description": "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption."
    },
    {
        "id": 121,
        "year": "2013",
        "title": "Nebraska",
        "actors": "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
        "genres": [
            "Adventure",
            "Comedy",
            "Drama"
        ],
        "director": "Alexander Payne",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg",
        "description": "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize."
    },
    {
        "id": 122,
        "year": "2001",
        "title": "Shrek",
        "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Andrew Adamson, Vicky Jenson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg",
        "description": "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back."
    },
    {
        "id": 123,
        "year": "2005",
        "title": "Mr. & Mrs. Smith",
        "actors": "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
        "genres": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "director": "Doug Liman",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg",
        "description": "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other."
    },
    {
        "id": 124,
        "year": "2001",
        "title": "Original Sin",
        "actors": "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
        "genres": [
            "Drama",
            "Mystery",
            "Romance"
        ],
        "director": "Michael Cristofer",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg",
        "description": "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him."
    },
    {
        "id": 125,
        "year": "2010",
        "title": "Shrek Forever After",
        "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, Antonio Banderas",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Mike Mitchell",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_SX300.jpg",
        "description": "Rumpelstiltskin tricks a mid-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpel rules supreme."
    },
    {
        "id": 126,
        "year": "2013",
        "title": "Before Midnight",
        "actors": "Ethan Hawke, Julie Delpy, Seamus Davey-Fitzpatrick, Jennifer Prior",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Richard Linklater",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg",
        "description": "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna."
    },
    {
        "id": 127,
        "year": "2010",
        "title": "Despicable Me",
        "actors": "Steve Carell, Jason Segel, Russell Brand, Julie Andrews",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Pierre Coffin, Chris Renaud",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
        "description": "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better."
    },
    {
        "id": 128,
        "year": "2004",
        "title": "Troy",
        "actors": "Julian Glover, Brian Cox, Nathan Jones, Adoni Maropis",
        "genres": [
            "Adventure"
        ],
        "director": "Wolfgang Petersen",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg",
        "description": "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved."
    },
    {
        "id": 129,
        "year": "2012",
        "title": "The Hobbit: An Unexpected Journey",
        "actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
        "genres": [
            "Adventure",
            "Fantasy"
        ],
        "director": "Peter Jackson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
        "description": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
    },
    {
        "id": 130,
        "year": "2013",
        "title": "The Great Gatsby",
        "actors": "Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley",
        "genres": [
            "Drama",
            "Romance"
        ],
        "director": "Baz Luhrmann",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
        "description": "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby."
    },
    {
        "id": 131,
        "year": "2002",
        "title": "Ice Age",
        "actors": "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "director": "Chris Wedge, Carlos Saldanha",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg",
        "description": "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe."
    },
    {
        "id": 132,
        "year": "2001",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "director": "Peter Jackson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg",
        "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron."
    },
    {
        "id": 133,
        "year": "2002",
        "title": "The Lord of the Rings: The Two Towers",
        "actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
        "genres": [
            "Action",
            "Adventure",
            "Drama"
        ],
        "director": "Peter Jackson",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg",
        "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
    },
    {
        "id": 134,
        "year": "2015",
        "title": "Ex Machina",
        "actors": "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
        "genres": [
            "Drama",
            "Mystery",
            "Sci-Fi"
        ],
        "director": "Alex Garland",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg",
        "description": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I."
    },
    {
        "id": 135,
        "year": "2014",
        "title": "The Theory of Everything",
        "actors": "Eddie Redmayne, Felicity Jones, Tom Prior, Sophie Perry",
        "genres": [
            "Biography",
            "Drama",
            "Romance"
        ],
        "director": "James Marsh",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg",
        "description": "A look at the relationship between the famous physicist Stephen Hawking and his wife."
    },
    {
        "id": 136,
        "year": "1980",
        "title": "Shogun",
        "actors": "Richard Chamberlain, Toshirô Mifune, Yôko Shimada, Furankî Sakai",
        "genres": [
            "Adventure",
            "Drama",
            "History"
        ],
        "director": "N/A",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1ODI4NzYxMl5BMl5BanBnXkFtZTcwNDA4MzUxMQ@@._V1_SX300.jpg",
        "description": "A English navigator becomes both a player and pawn in the complex political games in feudal Japan."
    },
    {
        "id": 137,
        "year": "2015",
        "title": "Spotlight",
        "actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
        "genres": [
            "Biography",
            "Crime",
            "Drama"
        ],
        "director": "Tom McCarthy",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg",
        "description": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core."
    },
    {
        "id": 138,
        "year": "1958",
        "title": "Vertigo",
        "actors": "James Stewart, Kim Novak, Barbara Bel Geddes, Tom Helmore",
        "genres": [
            "Mystery",
            "Romance",
            "Thriller"
        ],
        "director": "Alfred Hitchcock",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BNzY0NzQyNzQzOF5BMl5BanBnXkFtZTcwMTgwNTk4OQ@@._V1_SX300.jpg",
        "description": "A San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her."
    },
    {
        "id": 139,
        "year": "2014",
        "title": "Whiplash",
        "actors": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        "genres": [
            "Drama",
            "Music"
        ],
        "director": "Damien Chazelle",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg",
        "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
    },
    {
        "id": 140,
        "year": "2006",
        "title": "The Lives of Others",
        "actors": "Martina Gedeck, Ulrich Mühe, Sebastian Koch, Ulrich Tukur",
        "genres": [
            "Drama",
            "Thriller"
        ],
        "director": "Florian Henckel von Donnersmarck",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX300.jpg",
        "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives."
    },
    {
        "id": 141,
        "year": "2004",
        "title": "Hotel Rwanda",
        "actors": "Xolani Mali, Don Cheadle, Desmond Dube, Hakeem Kae-Kazim",
        "genres": [
            "Drama",
            "History",
            "War"
        ],
        "director": "Terry George",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3._V1_SX300.jpg",
        "description": "Paul Rusesabagina was a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda."
    },
    {
        "id": 142,
        "year": "2015",
        "title": "The Martian",
        "actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
        "genres": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "director": "Ridley Scott",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg",
        "description": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."
    },
    {
        "id": 143,
        "year": "1962",
        "title": "To Kill a Mockingbird",
        "actors": "Gregory Peck, John Megna, Frank Overton, Rosemary Murphy",
        "genres": [
            "Crime",
            "Drama"
        ],
        "director": "Robert Mulligan",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg",
        "description": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice."
    },
    {
        "id": 144,
        "year": "2015",
        "title": "The Hateful Eight",
        "actors": "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
        "genres": [
            "Crime",
            "Drama",
            "Mystery"
        ],
        "director": "Quentin Tarantino",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
        "description": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters."
    },
    {
        "id": 145,
        "year": "2011",
        "title": "A Separation",
        "actors": "Peyman Moaadi, Leila Hatami, Sareh Bayat, Shahab Hosseini",
        "genres": [
            "Drama",
            "Mystery"
        ],
        "director": "Asghar Farhadi",
        "imageUrl": "http://ia.media-imdb.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SX300.jpg",
        "description": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease."
    },
    {
        "id": 146,
        "year": "2015",
        "title": "The Big Short",
        "actors": "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
        "genres": [
            "Biography",
            "Comedy",
            "Drama"
        ],
        "director": "Adam McKay",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        "description": "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight."
    }
]