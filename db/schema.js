const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    character(_id: ID): Character
    characters(page: Int, filter: FilterCharacter): Characters!
    location(_id: ID!): Location
    locations(page: Int, filter: FilterLocation): Locations!
    episode(_id: ID!): Episode
    episodes(page: Int, filter: FilterEpisode): Episodes!
  }

  type Character {
    _id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    location: Location
    image: String
    episode: [Episode]
    created: String
  }

  type Characters {
    info: Info
    results: [Character]
  }

  type Location {
    _id: ID
    name: String
    type: String
    dimension: String
    residents: [Character]
    created: String
  }

  type Locations {
    info: Info
    results: [Location]
  }

  type Episode {
    _id: ID
    name: String
    air_date: String
    episode: String
    characters: [Character]
    created: String
  }

  type Episodes {
    info: Info
    results: [Episode]
  }

  type Info {
    count: Int
    pages: Int
    prev: Int
    next: Int
  }

  input FilterCharacter {
    name: String
    status: String
    species: String
    type: String
    gender: String
  }

  input FilterLocation {
    name: String
    type: String
    dimension: String
  }

  input FilterEpisode {
    name: String
    episode: String
  }
`);

export default schema;
