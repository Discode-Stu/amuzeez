export const activities = {
  AM: {
    id: 0,
    activities: [
      "Do sunrise 🌅",
      "Let's do brunch",
      "Eat breakfast out",
      "Try something new today",
      "Pay it forward",
      "Take an AM walk",
      "Make breakfast in",
      "Give someone a compliment or thank them for their service",
    ],
    display: "AM",
    type: "AM",
  },
  MID: {
    id: 1,
    activities: [
      "Find a park",
      "Explore a museum",
      "Find some town history about the town you're in",
      "Go to a brewery/pub",
      "Have lunch by water",
      "Have a picnic",
      "Hand  lunch (eat with hands)",
      "Local yocal (eat at a local spot)",
      "Mini or disk golf",
      "Find pinball machine or old video game to play",
      "Set a alarm clock to go off at a store",
    ],
    display: "Mid day",
    type: "MID",
  },
  PM: {
    id: 2,
    activities: [
      "Iron Chef night",
      "Go to a winery",
      "Have a game night",
      "Create a themed dinner",
      "Movie night",
      "Dinner out",
      "Mini golf or some outdoor game",
      "Watch sunset",
      "Take a hike/walk",
      "S'more night",
    ],
    display: "PM",
    type: "PM",
  },
  FUN: {
    id: 3,
    activities: [
      "Get a card game going",
      "Scavenger hunt",
      "Science project ",
      "Pool/beach party",
      "Secret santa",
      "Minute to win it",
      "Music trivia",
      "Movie trivia",
      "Photo op (dress up in silly hats, glasses etc and take pictures)",
      "Me time (set a timer and just chill)",
      "Build something from household items",
      "Pictionary",
      "Charades",
      "Yankee swap",
    ],
    display: "Just for fun",
    type: "FUN",
  },
}

const activityTypes = Object.keys(activities)
export const activityTypeMap = Object.assign(
  {},
  ...activityTypes.map((type) => ({ [type]: type }))
)

export const FAQ = {
  IRON_CHEF:
    "Friends meet up in the AM. Randomly pick food names out of a hat and bring a dish to dinner that night made with their ingredients.",
  PHOTO_OP:
    "Find some crazy clothes, hats and glasses. Put them all in a box and give them 30 seconds to dress then take pictures",
  BUILD_HOUSE_ITEMS:
    "Use paper plates, cups, straws, toothpicks,  etc. Set a time limit and see what they can build.",
  ME_TIME: "Set a time limit to just chill",
  YANKEE_SWAP: "Everyone brings a wrapped gift with a cost limit",
  HAND_LUNCH: "Everything you eat has to be with hands, no silverware",
  LOCAL_YOCAL: "Have lunch at a spot where all the locals go",
}
