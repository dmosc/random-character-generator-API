import { Character, Location, Episode } from "./models/index";

const resolvers = {
  character: async ({ _id }) => {
    const count = await Character.countDocuments();
    if (!_id) {
      const character = await Character.find()
        .limit(1)
        .skip(Math.floor(Math.random() * count))
        .populate("location")
        .populate("origin");

      return character[0]; //because .find() returns an array of results
    }

    const character = await Character.findById(_id)
      .populate("location")
      .populate("origin");
    return character;
  },

  characters: async ({ page = 1, filter = {} }) => {
    const characters = await Character.find(filter)
      .populate("location")
      .populate("origin")
      .populate("episode")
      .skip((page - 1) * 10)
      .limit(10);

    const count = await Character.countDocuments();
    const pages = Math.ceil((await Character.countDocuments()) / 10);

    return {
      info: {
        count,
        pages,
        prev: page > 1 ? page - 1 : null,
        next: page < pages ? page + 1 : null
      },
      results: [...characters]
    };
  },

  location: async id => {
    const location = await Location.findById(id).populate("residents");
    return location;
  },

  locations: async ({ page = 1, filter = {} }) => {
    const locations = await Location.find(filter)
      .populate("residents")
      .skip((page - 1) * 10)
      .limit(10);

    const count = await Location.countDocuments();
    const pages = Math.ceil((await Location.countDocuments()) / 10);

    return {
      info: {
        count,
        pages,
        prev: page > 1 ? page - 1 : null,
        next: page < pages ? page + 1 : null
      },
      results: [...locations]
    };
  },

  episode: async id => {
    const episode = await Episode.findById(id).populate("characters");
    return episode;
  },

  episodes: async ({ page = 1, filter = {} }) => {
    const episodes = await Episode.find(filter)
      .populate("characters")
      .skip((page - 1) * 10)
      .limit(10);

    const count = await Episode.countDocuments();
    const pages = Math.ceil((await Episode.countDocuments()) / 10);

    return {
      info: {
        count,
        pages,
        prev: page > 1 ? page - 1 : null,
        next: page < pages ? page + 1 : null
      },
      results: [...episodes]
    };
  }
};

export default resolvers;
