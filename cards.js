var CARDS = {
  "1": {
    "id": "1",
    "name": "Oda the Guardian",
    "desc": "Oda was born in a far away land, shipwrecked, and raised on a remote island temple. He's ventured in search of spellstones as a pilgrimage for his order and honor.",
    "picture": "portrait_templeguardian",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 8,
    "maxLevel": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "2": {
    "id": "2",
    "name": "Yuriel the Owl Mystic",
    "desc": "The Grand Library of the Aether has been curated by the Owl Mystics for hundreds of years. Their knowledge is accumulated in Yuriel through their ancestral bloodline.",
    "picture": "portrait_owlmystic",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 15,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "all": "1",
          },
        ],
      },
    }
  },
  "3": {
    "id": "3",
    "name": "Samael",
    "desc": "Samael is the powerful and stoic leader of the Aether faction of magic. Don't ask him about the difference between bird wings and angel wings.",
    "picture": "portrait_seraph",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 22,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "6",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 53,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "6",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "4": {
    "id": "4",
    "name": "Aria the Necromancer",
    "desc": "Aria is a powerful necromancer who aligns herself with Chaos magic. She likes long walks by moonlight and 'making' new friends.",
    "picture": "portrait_necromancer",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 8,
    "maxLevel": 4,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "5": {
    "id": "5",
    "name": "Decim the Firebringer",
    "desc": "Decim has always had an affinity for fire magic, even before being exiled from his village after it mysteriously burned down. An accident with a stolen spellstone imbued him with powerful abilities while also taking most of his sanity.",
    "picture": "portrait_flamebender",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 16,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "6": {
    "id": "6",
    "name": "Tarian the Lich Lord",
    "desc": "Wrapped in the cold winds of death, Tarian sits upon his throne as the center of the Chaos. Well respected, and well feared. He's a skeleton after all.",
    "picture": "portrait_lichking",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 22,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "leech",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 43,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "7": {
    "id": "7",
    "name": "Elyse the Ranger",
    "desc": "Elyse lived a simple life on the edge of civilization until adulthood, giving her a burning spirit for adventure and the tools to track it.",
    "picture": "portrait_elyse",
    "rarity": "2",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 8,
    "maxLevel": 4,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "8": {
    "id": "8",
    "name": "Commander Ursurio",
    "desc": "Ursurio is a respected representative of the Wyld despite his often aloof attitude and outlook. And hunger cravings.",
    "picture": "portrait_bearcommander",
    "rarity": "3",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 22,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "3",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
    }
  },
  "9": {
    "id": "9",
    "name": "Groc the Hammer",
    "desc": "An ancient being of living stone, Groc wanders the wilderness in search of wisdom. You don't want to be between him and a hard place.",
    "picture": "portrait_groc",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 25,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 62,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "10": {
    "id": "10",
    "name": "Rayne the Wavecrasher",
    "desc": "A master of water and wind magic, Rayne is the prime guardian of water life on Arcantica. She really knows how to rain on a parade.",
    "picture": "portrait_elementalhero",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 21,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "5",
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "5",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "11": {
    "id": "11",
    "name": "Orgoth the Hex Fist",
    "desc": "A respected leader of the Salt Waste tribes, Orgoth gained strange magical powers once buried deep in the Wastes. If he tries to give you a handshake you should probably decline.",
    "picture": "portrait_orchero",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 23,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "pierce",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 36,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 53,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "12": {
    "id": "12",
    "name": "Ol' Cedric",
    "desc": "Cedric is the former First Sword of the Emperor, High Commander of Dawnglow. Since retirement he spends much of his time training younger generations, advising the emperor, and catching flies for recreation.",
    "picture": "portrait_froghero",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 20,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "4",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "4",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "4",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
          },
        ],
      },
      "6": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
        ],
      },
    }
  },
  "13": {
    "id": "13",
    "name": "Oda the Aegis",
    "desc": "Oda has taken his place as the Keeper of Seastone Temple's artifact, transcending his abilities. Unfortunately the upgrades don't come with a new outfit.",
    "picture": "portrait_odaupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 31,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 51,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
    }
  },
  "14": {
    "id": "14",
    "name": "Yuriel the Manashifter",
    "desc": "The true potential of the ancestral bloodline of Owl Mystics has been realized in Yuriel. After years of study, he has stumbled upon the secrets of Manashifting. He's also collected a lot of late fines.",
    "picture": "portrait_yurielupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 45,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "armored",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 48,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "1",
            "s": "nullify",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "1",
            "s": "nullify",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 56,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "1",
            "s": "nullify",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "all": "1",
          },
        ],
      },
    }
  },
  "15": {
    "id": "15",
    "name": "Aria the Nightwielder",
    "desc": "Aria's close call with The Void pushed her to the brink of her abilities. She learned new powers, and intends to use them to make new friends.",
    "picture": "portrait_ariaupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "16": {
    "id": "16",
    "name": "Decim the Pyrokinetic",
    "desc": "Decim's training and close contact with dragons has taught him new heights to his abilities. Which shouldn't be a surprise as he's always enjoyed finding new ways to burn things.",
    "picture": "portrait_decimupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 42,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "2",
        "s": "burn",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [],
      },
      "3": {
        "health": 49,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "2",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "2",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "17": {
    "id": "17",
    "name": "Elyse the Truestriker",
    "desc": "Elyse has embraced the magic of the Wyld, becoming one with the world around her. She even sometimes leaves her books at home.",
    "picture": "portrait_elyseupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 29,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "18": {
    "id": "18",
    "name": "General Ursurio",
    "desc": "After countless years of dedicated laziness and a sloth-like attitude, Ursurio has gotten the promotion he barely wanted. If only it came with free sides.",
    "picture": "portrait_ursurioupgrade",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 45,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 48,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 52,
        "skill": [],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
    }
  },
  "19": {
    "id": "19",
    "name": "Scyer the Fury Mecha",
    "desc": "Once a smelter of steel, this Mecha learned how to feel. What he found was endless rage, so it was war he came to wage. Now with his mind restored, he fights of his own accord.",
    "picture": "portrait_chaos_mecha_hero",
    "rarity": "4",
    "set": "7000",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 44,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "enrage",
        "x": 1,
        "y": "16",
      },
    ],
    "upgrades": {
      "2": {
        "health": 47,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enrage",
            "x": 1,
            "y": "16",
          },
          {
            "id": "enrage",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enrage",
            "x": 1,
            "y": "16",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enrage",
            "x": 2,
            "y": "16",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 55,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "y": "16",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "200": {
    "id": "200",
    "name": "Undead Horde",
    "desc": "A horde of risen creatures and skeletons, mindlessly attacking anything within reach.",
    "picture": "portrait_skeletonwarrior",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 6,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "201": {
    "id": "201",
    "name": "Wyld Wolf",
    "desc": "The Wyldwood does not take kindly to strangers, and its creatures vigorously defend its borders.",
    "picture": "portrait_wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 9,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "3",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "3",
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "202": {
    "id": "202",
    "name": "Elaria Captain",
    "desc": "The Elaria Captain is the first line of defense for the researchers of the Elaria encampment. Part of his responsibilities is taking new arrivals and training them.",
    "picture": "portrait_ranger",
    "rarity": "0",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 8,
    "maxLevel": 1,
    "skill": [],
    "upgrades": {}
  },
  "203": {
    "id": "203",
    "name": "Luminis Angel",
    "desc": "A native of Luminis and a natural defender of the realm.",
    "picture": "portrait_angelknight",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 11,
    "maxLevel": 4,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "204": {
    "id": "204",
    "name": "Will O' Wisp",
    "desc": "Manifestations of the raw energy of the world around them.",
    "picture": "portrait_lightwisp",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 8,
    "maxLevel": 4,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
    }
  },
  "205": {
    "id": "205",
    "name": "Mermaid Augurer",
    "desc": "The rivers of Luminis run deeper than they appear, housing many of the sea's dangers.",
    "picture": "portrait_mermaid",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 12,
    "maxLevel": 4,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [],
      },
    }
  },
  "206": {
    "id": "206",
    "name": "Grim Titan",
    "desc": "A flood of demons and monsters, centered around a large titan at their head.",
    "picture": "portrait_firetitan",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 17,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
    }
  },
  "207": {
    "id": "207",
    "name": "Void Assassin",
    "desc": "\"They came right through the walls.\" - Marr, Blacksmith",
    "picture": "portrait_invisibleassassin",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 16,
    "maxLevel": 5,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 40,
        "skill": [],
      },
    }
  },
  "208": {
    "id": "208",
    "name": "Void Minions",
    "desc": "Primal forces of the void, manifested as the nightmares of the living.",
    "picture": "portrait_voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 20,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 40,
        "skill": [],
      },
    }
  },
  "209": {
    "id": "209",
    "name": "Orobas of the Void",
    "desc": "\"The Orobas is possibly the most frightening creature in all of Karthos. Or at least the biggest.\" - Magi Neyaroi",
    "picture": "portrait_balrog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 25,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "210": {
    "id": "210",
    "name": "Lava Crab Gang",
    "desc": "Don't make them crabby.",
    "picture": "portrait_lavacrab",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 13,
    "maxLevel": 4,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
            "all": "1",
          },
        ],
      },
    }
  },
  "211": {
    "id": "211",
    "name": "Wraith Den",
    "desc": "In the untamed wasteland of Karthos, wraiths tend to congregate and create dangerous dens that lure other powerful beasts.",
    "picture": "portrait_wraithden",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 17,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "weaken",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
    }
  },
  "212": {
    "id": "212",
    "name": "Caverns of Crossing",
    "desc": "The dangerous and only path to The Void.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 18,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [],
      },
    }
  },
  "213": {
    "id": "213",
    "name": "Grand Hermit Malchior",
    "desc": "The father of spellstone research, he is the greatest mind in his field. Even with some of it missing.",
    "picture": "portrait_grandexcavator",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 23,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "rally",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "rally",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "rally",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "rally",
            "all": "1",
          },
        ],
      },
    }
  },
  "214": {
    "id": "214",
    "name": "Tremor Wurm",
    "desc": "The wurm breaks out of the ground suddenly, spraying rock in all directions as it bellows a sound like a thousand trumpets.",
    "picture": "portrait_tremorwurm",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 23,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 47,
        "skill": [],
      },
    }
  },
  "215": {
    "id": "215",
    "name": "Void Abomination",
    "desc": "The ground shatters to reveal a huge anomaly made of shadows and smoke. Eyes peer out at the adventurers below as its massive form swings and crushes stone.",
    "picture": "portrait_void",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [],
      },
      "3": {
        "health": 50,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 55,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 65,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "216": {
    "id": "216",
    "name": "Trainee Elyse",
    "desc": "Elyse is a new adventurer like yourself. She's training with the Captain, though she seems more than eager to be out on her own.",
    "picture": "portrait_elyse",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 2,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "217": {
    "id": "217",
    "name": "Trainee Oda",
    "desc": "Oda is a new adventurer like yourself. He trains alongside you, but seems very reserved and quiet.",
    "picture": "portrait_templeguardian",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 6,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
    }
  },
  "218": {
    "id": "218",
    "name": "Tainted Wolf",
    "desc": "A long wolf lurks throughout the woods. Its movements unnatural, the look in its eyes dangerous.",
    "picture": "portrait_wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 11,
    "maxLevel": 4,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "219": {
    "id": "219",
    "name": "Maniac General",
    "desc": "A former leader of a Chaos faction, his mind has been tainted by some foul magic that causes him to act dangerously against the other factions and his own.",
    "picture": "portrait_maniacgeneral",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 11,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "strike",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 29,
        "skill": [],
      },
      "5": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "220": {
    "id": "220",
    "name": "Cursed Voidlings",
    "desc": "Incarnations of the Void itself, manifested into small servants of mayhem.",
    "picture": "portrait_voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 25,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "221": {
    "id": "221",
    "name": "Alpha Wisp",
    "desc": "And you thought my COUSIN was mean?",
    "picture": "portrait_lightwisp",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 29,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
        ],
      },
    }
  },
  "222": {
    "id": "222",
    "name": "Titan Twins",
    "desc": "A pair of unusually large fire titan twins, Jar and Mar.",
    "picture": "portrait_firetitan",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 20,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 55,
        "skill": [],
      },
    }
  },
  "223": {
    "id": "223",
    "name": "Escaped Angel",
    "desc": "An Aether creature freed when the undead ravaged the researchers' camp in Elaria.",
    "picture": "portrait_angelknight",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 6,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
    }
  },
  "224": {
    "id": "224",
    "name": "Consumed Undead",
    "desc": "These undead move with purpose and in unity. They are not like the shambling undead that wander the camp.",
    "picture": "portrait_skeletonwarrior",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 7,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [],
      },
    }
  },
  "231": {
    "id": "231",
    "name": "Skeletal Army",
    "desc": "An army of undead warriors, their glowing eyes shine in the night and their blades drag on the ground.",
    "picture": "portrait_skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 17,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
    }
  },
  "225": {
    "id": "225",
    "name": "Wasteland Wolf Pack",
    "desc": "In the wastes, no one can hear you howl.",
    "picture": "portrait_wolf",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 12,
    "maxLevel": 4,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "pierce",
          },
        ],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
        ],
      },
    }
  },
  "226": {
    "id": "226",
    "name": "Lost Lava Crab",
    "desc": "You idley wonder how this little crab got here, right before it snips your finger.",
    "picture": "portrait_lavacrab",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 12,
    "maxLevel": 4,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "227": {
    "id": "227",
    "name": "Wasteland Wraiths",
    "desc": "The shadows of night cloak that which lurks in the wastes.",
    "picture": "portrait_wraithden",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 14,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "leech",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "228": {
    "id": "228",
    "name": "Voidlings",
    "desc": "Creatures of pure corruption. They rise from the ground like shadows given life.",
    "picture": "portrait_voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 18,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "229": {
    "id": "229",
    "name": "Skeleton Familiar",
    "desc": "Aria's favorite skeleton companion and possibly only friend. His name is Little Tarian.",
    "picture": "portrait_skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 17,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "weaken",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "230": {
    "id": "230",
    "name": "Aria, Void Consumed",
    "desc": "Aria has fallen to the corruption of the Void.",
    "picture": "portrait_necromancer",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 18,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "232": {
    "id": "232",
    "name": "Frenzied Dragon",
    "desc": "The dragons of Tarragon Peak have gone into a frenzy after a series of earthquakes around the mountain.",
    "picture": "portrait_moltendragon",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 18,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "burn",
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "9",
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
    }
  },
  "233": {
    "id": "233",
    "name": "Orobas, Raging Beast",
    "desc": "An ancient beast that lives deep in the earth. Rarely seen above ground. Considered extremely dangerous by most adventurers.",
    "picture": "portrait_balrog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 18,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "enfeeble",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "234": {
    "id": "234",
    "name": "Decim, Flame Incarnate",
    "picture": "portrait_flamebender",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 18,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "235": {
    "id": "235",
    "name": "Obsidian Claw",
    "picture": "portrait_lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 17,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "strike",
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
    }
  },
  "236": {
    "id": "236",
    "name": "Aerie Guardian",
    "picture": "portrait_angelknight",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 19,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [],
      },
    }
  },
  "237": {
    "id": "237",
    "name": "Kerlor, Ice Dragon",
    "picture": "portrait_icedragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 24,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 10,
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 8,
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "238": {
    "id": "238",
    "name": "Lantern Guardian",
    "picture": "portrait_lanternguardian",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 19,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "239": {
    "id": "239",
    "name": "Groc, Vault Ancient",
    "picture": "portrait_groc",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 24,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "240": {
    "id": "240",
    "name": "Molten Crab",
    "picture": "portrait_lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 19,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "counter",
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
        ],
      },
      "5": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "counter",
          },
        ],
      },
    }
  },
  "241": {
    "id": "241",
    "name": "Gold Monstrosity",
    "picture": "portrait_goldelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 25,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "242": {
    "id": "242",
    "name": "Coral Hunter",
    "picture": "portrait_carl",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 23,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 56,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "243": {
    "id": "243",
    "name": "Windstorm Avatar",
    "picture": "portrait_windstormelemental",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 24,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "c": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 6,
            "c": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "244": {
    "id": "244",
    "name": "Celestial Grotto",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "245": {
    "id": "245",
    "name": "Vault Titan",
    "picture": "portrait_firetitan",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 22,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "c": 6,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "c": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "246": {
    "id": "246",
    "name": "Darkwater Mermaid",
    "picture": "portrait_mermaid",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 23,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "weaken",
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 44,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "weaken",
          },
        ],
      },
    }
  },
  "247": {
    "id": "247",
    "name": "Canopy Hunter",
    "picture": "portrait_canopyhunter",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "enfeeble",
          },
        ],
      },
    }
  },
  "248": {
    "id": "248",
    "name": "Swamp Swarm",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 42,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
        ],
      },
    }
  },
  "249": {
    "id": "249",
    "name": "Lone Frog Scout",
    "picture": "portrait_frogscout",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 32,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
    }
  },
  "250": {
    "id": "250",
    "name": "Tainted Coral Elemental",
    "picture": "portrait_carl",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 27,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 39,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 44,
        "skill": [],
      },
      "6": {
        "health": 47,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "251": {
    "id": "251",
    "name": "Guardian  Wurm",
    "picture": "portrait_tremorwurm",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
    }
  },
  "252": {
    "id": "252",
    "name": "Berserk Emperor",
    "picture": "portrait_frogemperor",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [],
      },
      "6": {
        "health": 59,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "fervor",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "253": {
    "id": "253",
    "name": "Frostbite",
    "picture": "portrait_frostbite",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 55,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 62,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 70,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 77,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 86,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 93,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "254": {
    "id": "254",
    "name": "Atlas",
    "picture": "portrait_wyldguardian",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "3",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "3",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 46,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "3",
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 54,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "3",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 63,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "3",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "3",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 88,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "3",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 6,
            "y": "3",
          },
          {
            "id": "heal",
            "x": 5,
            "y": "3",
            "all": "1",
          },
        ],
      },
    }
  },
  "255": {
    "id": "255",
    "name": "Solaron",
    "picture": "portrait_aetherguardian",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 37,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "1",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "health": 48,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 59,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "health": 70,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 80,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 89,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "1",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "256": {
    "id": "256",
    "name": "Vulcanos",
    "picture": "portrait_chaosguardian",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 45,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 53,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 62,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 85,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "257": {
    "id": "257",
    "name": "Golden Lava Lord",
    "picture": "portrait_goldelemental",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 25,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 52,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "258": {
    "id": "258",
    "name": "Winterback Ape",
    "picture": "portrait_wintercreature",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "259": {
    "id": "259",
    "name": "Iceback Dragon",
    "picture": "portrait_icedragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 43,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 47,
        "skill": [],
      },
      "3": {
        "health": 51,
        "skill": [],
      },
      "4": {
        "health": 57,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 64,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 69,
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "260": {
    "id": "260",
    "name": "Ice Abomination",
    "picture": "portrait_winterbigbad",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 64,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 69,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "261": {
    "id": "261",
    "name": "Coldspirit Wisp",
    "picture": "portrait_lightwisp",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 25,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
        ],
      },
    }
  },
  "262": {
    "id": "262",
    "name": "Frostwhip Storm",
    "picture": "portrait_windstormelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "263": {
    "id": "263",
    "name": "Snow Assassin",
    "picture": "portrait_invisibleassassin",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 27,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "264": {
    "id": "264",
    "name": "Vapor Hunters",
    "picture": "portrait_winteradventurers",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [],
      },
      "3": {
        "health": 48,
        "skill": [],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 59,
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 65,
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "265": {
    "id": "265",
    "name": "Void Warrior",
    "picture": "portrait_skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "leech",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "266": {
    "id": "266",
    "name": "Shade Gang",
    "picture": "portrait_voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 27,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "267": {
    "id": "267",
    "name": "Wandering Wraith",
    "picture": "portrait_wraithden",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 29,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
            "all": "1",
          },
        ],
      },
    }
  },
  "268": {
    "id": "268",
    "name": "Spine Coil",
    "picture": "portrait_undeadsnake",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 62,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
          },
        ],
      },
    }
  },
  "269": {
    "id": "269",
    "name": "Arcane Turret",
    "picture": "portrait_arcaneturret",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 34,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [],
      },
      "5": {
        "health": 55,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 63,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "270": {
    "id": "270",
    "name": "Feral Scientists",
    "picture": "portrait_undeadscientists",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "fervor",
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "fervor",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [],
      },
      "6": {
        "health": 61,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "fervor",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
    }
  },
  "271": {
    "id": "271",
    "name": "Dr. Oppenhinder",
    "picture": "portrait_madscientist",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [],
      },
      "3": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 55,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 62,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "272": {
    "id": "272",
    "name": "Highfire Dragon",
    "picture": "portrait_moltendragon",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 23,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 45,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "273": {
    "id": "273",
    "name": "Swooning Angel",
    "picture": "portrait_angelknight",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 22,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 34,
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 40,
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "274": {
    "id": "274",
    "name": "Sleepy Mail Man",
    "picture": "portrait_sleepymailman",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "275": {
    "id": "275",
    "name": "Icewind Dragon",
    "picture": "portrait_icedragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 26,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 56,
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "276": {
    "id": "276",
    "name": "Sky Beast",
    "picture": "portrait_skybeast",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 28,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "evade",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 63,
        "skill": [
          {
            "id": "enhance",
            "x": 5,
            "s": "evade",
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "277": {
    "id": "277",
    "name": "Royal Engineer",
    "picture": "portrait_royalengineer",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 21,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "armored",
      },
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 5,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 6,
          },
        ],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 5,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "278": {
    "id": "278",
    "name": "Skyhaven Queen",
    "picture": "portrait_angelqueen",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "legion",
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 43,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 67,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "279": {
    "id": "279",
    "name": "Nethergore",
    "picture": "portrait_nethergore",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": ["7"],
    "health": 30,
    "maxLevel": 7,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "7",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 60,
        "skill": [],
      },
      "5": {
        "health": 70,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 80,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "7": {
        "health": 90,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "7",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "280": {
    "id": "280",
    "name": "Void Infected Mermaid",
    "picture": "portrait_mermaid",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "281": {
    "id": "281",
    "name": "Dark Coral",
    "picture": "portrait_carl",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "armored",
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "enfeeble",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "enfeeble",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "enfeeble",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "enfeeble",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 57,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "enfeeble",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "282": {
    "id": "282",
    "name": "Swamp Wurm",
    "picture": "portrait_tremorwurm",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "283": {
    "id": "283",
    "name": "Void Viper",
    "picture": "portrait_undeadsnake",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "heal",
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
          },
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "heal",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "heal",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "heal",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
        ],
      },
    }
  },
  "284": {
    "id": "284",
    "name": "Creepy Crawlies",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 36,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "poison",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 52,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 68,
        "skill": [
          {
            "id": "enhance",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "285": {
    "id": "285",
    "name": "Corruptlings",
    "picture": "portrait_dawnglowbabies",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 23,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "legion",
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "legion",
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "286": {
    "id": "286",
    "name": "Corruptrex",
    "picture": "portrait_dawnglowmonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 46,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 61,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "287": {
    "id": "287",
    "name": "Crab Striker",
    "picture": "portrait_lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 38,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "pierce",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "288": {
    "id": "288",
    "name": "Targetback Hill",
    "picture": "portrait_groundelemental",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "strike",
      },
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [],
      },
      "3": {
        "health": 51,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "strike",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
        ],
      },
      "4": {
        "health": 58,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "strike",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
        ],
      },
      "5": {
        "health": 66,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "strike",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
        ],
      },
      "6": {
        "health": 75,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "strike",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "5",
          },
        ],
      },
    }
  },
  "289": {
    "id": "289",
    "name": "Treetop Stalker",
    "picture": "portrait_skybeast",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "leech",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "leech",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 56,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "290": {
    "id": "290",
    "name": "Rebellious Frog Scout",
    "picture": "portrait_frogscout",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 33,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "armored",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "fervor",
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
        ],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
        ],
      },
      "5": {
        "health": 59,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "pierce",
          },
        ],
      },
    }
  },
  "291": {
    "id": "291",
    "name": "Feral Bird",
    "picture": "portrait_feralbird",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 36,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 55,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 64,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 74,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
    }
  },
  "292": {
    "id": "292",
    "name": "Goldtop Hunter",
    "picture": "portrait_canopyhunter",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 31,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 59,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "293": {
    "id": "293",
    "name": "Fireback Dragon",
    "picture": "portrait_moltendragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "legion",
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 57,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 65,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "294": {
    "id": "294",
    "name": "Avian Soldiers",
    "picture": "portrait_aviansoldier2",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 37,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "legion",
      },
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 48,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 55,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 63,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 71,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "295": {
    "id": "295",
    "name": "Thing In The Lake",
    "desc": "Well, at least if this is the end I don't need to file my taxes.",
    "picture": "portrait_aprilmonser",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 50,
    "maxLevel": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 60,
        "skill": [],
      },
      "3": {
        "health": 70,
        "skill": [],
      },
      "4": {
        "health": 80,
        "skill": [],
      },
      "5": {
        "health": 90,
        "skill": [],
      },
      "6": {
        "health": 99,
        "skill": [],
      },
    }
  },
  "296": {
    "id": "296",
    "name": "The Maddest Bomber",
    "desc": "Bombs are actually a very delicate art. At least, as delicate as massive explosions can be.",
    "picture": "portrait_aprilbomber",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 40,
        "skill": [],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [],
      },
      "6": {
        "health": 55,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "297": {
    "id": "297",
    "name": "Chicken Enthusiast",
    "desc": "\"BAWK BAWK BAWK\"",
    "picture": "portrait_aprilchicken",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 22,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 39,
        "skill": [],
      },
      "5": {
        "health": 44,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "10",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 49,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "10",
            "all": "1",
          },
        ],
      },
    }
  },
  "298": {
    "id": "298",
    "name": "Seaside Windstorm",
    "picture": "portrait_windstormelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 32,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "heal",
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "heal",
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "heal",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "heal",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "heal",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
    }
  },
  "299": {
    "id": "299",
    "name": "Beachscamp",
    "picture": "portrait_skybeast",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 31,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "300": {
    "id": "300",
    "name": "Waterbomber Avian",
    "picture": "portrait_feralbird",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 35,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 39,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 57,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
    }
  },
  "301": {
    "id": "301",
    "name": "Salty Fire Titan",
    "picture": "portrait_firetitan",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 37,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 41,
        "skill": [],
      },
      "3": {
        "health": 46,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 52,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 59,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 67,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "302": {
    "id": "302",
    "name": "First Order Monk",
    "picture": "portrait_oldmonk",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 36,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "armored",
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "counter",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
    }
  },
  "303": {
    "id": "303",
    "name": "Sealed First Order Demon",
    "picture": "portrait_octopusmonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 38,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 47,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "frost",
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "frost",
          },
        ],
      },
      "6": {
        "health": 68,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "frost",
          },
        ],
      },
    }
  },
  "304": {
    "id": "304",
    "name": "Skyward Bird",
    "picture": "portrait_feralbird",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 29,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "evade",
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 5,
          },
        ],
      },
    }
  },
  "305": {
    "id": "305",
    "name": "Red Feather Hippogriff",
    "picture": "portrait_avianlion",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 32,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 2,
        "s": "poison",
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
        ],
      },
    }
  },
  "306": {
    "id": "306",
    "name": "Lost Angel",
    "picture": "portrait_angelknight",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "307": {
    "id": "307",
    "name": "Red Feather Soldier",
    "picture": "portrait_aviansoldier2",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "3",
        "s": "armored",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "3",
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "3",
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "3",
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "3",
            "s": "armored",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "308": {
    "id": "308",
    "name": "Red Feather Magistrate",
    "picture": "portrait_avianmagistrate",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 34,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "3": {
        "health": 43,
        "skill": [],
      },
      "4": {
        "health": 49,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "5": {
        "health": 56,
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "6": {
        "health": 64,
        "skill": [
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
    }
  },
  "309": {
    "id": "309",
    "name": "Fortune's Favor",
    "picture": "portrait_raid_003_portrait",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 7,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "legion",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "imbue",
            "c": 4,
            "s": "flurry",
          },
        ],
      },
      "4": {
        "health": 52,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "imbue",
            "c": 4,
            "s": "flurry",
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "legion",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "imbue",
            "c": 3,
            "s": "flurry",
          },
        ],
      },
      "6": {
        "health": 72,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "legion",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "imbue",
            "c": 3,
            "s": "flurry",
          },
        ],
      },
      "7": {
        "health": 85,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "legion",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 7,
          },
          {
            "id": "imbue",
            "c": 2,
            "s": "flurry",
          },
        ],
      },
    }
  },
  "310": {
    "id": "310",
    "name": "Ivytail Dragon",
    "picture": "portrait_greenbackdragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "leech",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "leech",
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 5,
            "s": "leech",
          },
        ],
      },
    }
  },
  "311": {
    "id": "311",
    "name": "Goblin Footgang",
    "picture": "portrait_goblinfootmen",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 25,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "imbue",
        "x": 2,
        "s": "poison",
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "4": {
        "health": 40,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 4,
            "s": "poison",
          },
        ],
      },
    }
  },
  "312": {
    "id": "312",
    "name": "Goblin Ringleader",
    "picture": "portrait_goblinringleader",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "nullify",
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
        ],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [],
      },
      "6": {
        "health": 62,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
        ],
      },
    }
  },
  "313": {
    "id": "313",
    "name": "High Flying Hippogriff",
    "picture": "portrait_avianlion",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [],
      },
      "6": {
        "health": 62,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "314": {
    "id": "314",
    "name": "Fireproof Snipper",
    "picture": "portrait_lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 41,
        "skill": [],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "315": {
    "id": "315",
    "name": "Ravaging Canine",
    "picture": "portrait_wolf",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 27,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "berserk",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
        ],
      },
      "3": {
        "health": 36,
        "skill": [],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "berserk",
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
    }
  },
  "316": {
    "id": "316",
    "name": "Greenleaf Sky Beast",
    "picture": "portrait_skybeast",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 31,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "poison",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 53,
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
        ],
      },
    }
  },
  "317": {
    "id": "317",
    "name": "Raging Hippogrif",
    "picture": "portrait_avianlion",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
          },
        ],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
          },
        ],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
          },
        ],
      },
    }
  },
  "318": {
    "id": "318",
    "name": "Tamed Fire Dragon",
    "picture": "portrait_moltendragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 36,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "burn",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
        ],
      },
    }
  },
  "319": {
    "id": "319",
    "name": "Rabid Jumper",
    "picture": "portrait_feralbug",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 27,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "poison",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "3": {
        "health": 36,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 49,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
        ],
      },
    }
  },
  "320": {
    "id": "320",
    "name": "Cackling Henchmen",
    "picture": "portrait_goblinfootmen",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 30,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "fervor",
      },
      {
        "id": "imbue",
        "x": 2,
        "s": "nullify",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "fervor",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "fervor",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
        ],
      },
    }
  },
  "321": {
    "id": "321",
    "name": "Looting Footmen",
    "picture": "portrait_goblinraider",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 34,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 43,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "5": {
        "health": 56,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
        ],
      },
      "6": {
        "health": 64,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
        ],
      },
    }
  },
  "322": {
    "id": "322",
    "name": "Dragon Master",
    "picture": "portrait_dragonridingringleader",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 36,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 2,
        "s": "burn",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "4": {
        "health": 52,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
          },
        ],
      },
    }
  },
  "323": {
    "id": "323",
    "name": "Goblin Captain",
    "picture": "portrait_goblin_captain",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
          },
        ],
      },
      "3": {
        "health": 41,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
          },
        ],
      },
      "6": {
        "health": 62,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
          },
        ],
      },
    }
  },
  "324": {
    "id": "324",
    "name": "Thunderstrike Beast",
    "picture": "portrait_skybeast",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 34,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "frost",
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "frost",
          },
        ],
      },
      "3": {
        "health": 43,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "frost",
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "frost",
          },
        ],
      },
      "5": {
        "health": 56,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "frost",
          },
        ],
      },
      "6": {
        "health": 64,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "frost",
          },
        ],
      },
    }
  },
  "325": {
    "id": "325",
    "name": "Avian Explorer",
    "picture": "portrait_aviansoldier2",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 33,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "5": {
        "health": 55,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
      "6": {
        "health": 63,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
        ],
      },
    }
  },
  "326": {
    "id": "326",
    "name": "Dirt Digger",
    "picture": "portrait_feralbug",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
    }
  },
  "327": {
    "id": "327",
    "name": "Highwind Stalker",
    "picture": "portrait_avianlion",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "leech",
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "leech",
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "leech",
          },
        ],
      },
    }
  },
  "328": {
    "id": "328",
    "name": "Plateau Monster",
    "picture": "portrait_oasismonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 33,
    "maxLevel": 6,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 40,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
          },
        ],
      },
      "4": {
        "health": 45,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
          },
        ],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
          },
        ],
      },
    }
  },
  "329": {
    "id": "329",
    "name": "Reks",
    "picture": "portrait_king_goblin",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 49,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 53,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
        ],
      },
      "5": {
        "health": 56,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
        ],
      },
    }
  },
  "330": {
    "id": "330",
    "name": "Undead Brute Boss",
    "picture": "portrait_undeadbrute",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 58,
        "skill": [
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "331": {
    "id": "331",
    "name": "Void Infected General",
    "picture": "portrait_maniacgeneral",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 28,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "strike",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 39,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "strike",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "332": {
    "id": "332",
    "name": "Cavern Wisp",
    "desc": "In the darkest depths the light can shine brightest.",
    "picture": "portrait_lightwisp",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "7",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "7",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "7",
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
          {
            "id": "heal",
            "x": 1,
            "y": "7",
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "7",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
    }
  },
  "333": {
    "id": "333",
    "name": "Risen Warrior",
    "desc": "A rattling can be heard in the darkness, bones and metal scrapping across the stone.",
    "picture": "portrait_skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 16,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "imbue",
        "x": 1,
        "y": "7",
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "pierce",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 3,
            "y": "7",
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 4,
            "y": "7",
            "s": "pierce",
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "334": {
    "id": "334",
    "name": "Underhill Caverns",
    "desc": "The darkest corners of the Underhill dungeons hide unfathomable dangers.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 15,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "evade",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "evade",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "335": {
    "id": "335",
    "name": "Ascetic Scientists",
    "desc": "Withdrawing from society, these undead continue their scientific work even after their bodies have given up.",
    "picture": "portrait_undeadscientists",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "y": "7",
        "s": "nullify",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "7",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 1,
            "y": "7",
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "7",
          },
        ],
      },
      "3": {
        "health": 38,
        "skill": [],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 3,
            "y": "7",
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "7",
            "all": "1",
          },
        ],
      },
    }
  },
  "336": {
    "id": "336",
    "name": "Hornslice Fiend",
    "desc": "\"The last thing the adventurers heard was the wooshing crack of its fire whip from the darkness.\" - Collection of Bardic Tales IV",
    "picture": "portrait_balrog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 27,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 2,
        "y": "7",
        "s": "burn",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "y": "7",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 36,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "y": "7",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 4,
            "y": "7",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 42,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "imbue",
            "x": 5,
            "y": "7",
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "337": {
    "id": "337",
    "name": "Dark Dweller",
    "desc": "\"No one understands what lurks in the furthest depths of the earth. Things beyond imagination.\" - Arcanists Scrolls of Prophecy",
    "picture": "portrait_octopusmonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "evade",
      },
      {
        "id": "weaken",
        "x": 3,
        "c": 4,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 4,
            "c": 4,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 4,
            "c": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 55,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 5,
            "c": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 5,
            "c": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "338": {
    "id": "338",
    "name": "Ruler of the Depths",
    "desc": "\"In the farthest shadows of the Underhill lurks a beast over 2000 years old. It preys on death itself and fears nothing.\" - J.L. Montrello",
    "picture": "portrait_undeadsnake",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 72,
    "maxLevel": 7,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "7",
        "all": "1",
      },
      {
        "id": "imbue",
        "x": 4,
        "y": "7",
        "s": "berserk",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 79,
        "skill": [],
      },
      "3": {
        "health": 81,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 5,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 84,
        "skill": [],
      },
      "5": {
        "health": 87,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "7",
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 6,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 90,
        "skill": [],
      },
      "7": {
        "health": 94,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "7",
            "all": "1",
          },
          {
            "id": "imbue",
            "x": 7,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "339": {
    "id": "339",
    "name": "Marrowsworn the Tyrant",
    "desc": "\"Marrowsworn was bound to the depths of the Underhill, forever kept from tormenting the living.\" - Tarian the Lich Lord",
    "picture": "portrait_nethergore",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 76,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "7",
        "s": "burn",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 79,
        "skill": [],
      },
      "3": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "burn",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 84,
        "skill": [],
      },
      "5": {
        "health": 87,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "7",
            "s": "burn",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 90,
        "skill": [],
      },
      "7": {
        "health": 94,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "7",
            "s": "burn",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "340": {
    "id": "340",
    "name": "Wind-Up Dragons",
    "picture": "portrait_windupdragons",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "pierce",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 47,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 52,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 57,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "pierce",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "341": {
    "id": "341",
    "name": "Goblin Mechanic",
    "picture": "portrait_mechanicgoblin",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 25,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "counter",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "342": {
    "id": "342",
    "name": "Treat Trickmaster",
    "picture": "portrait_pumpkingportrait",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 50,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "counter",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 53,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 56,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 59,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
    }
  },
  "343": {
    "id": "343",
    "name": "Whirling Devil",
    "desc": "A former servant of Solaron, the whirling devil was banished into the dungeon's depths.",
    "picture": "portrait_windstormelemental",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "5",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "5",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
    }
  },
  "344": {
    "id": "344",
    "name": "Magma Clipper",
    "desc": "When a Magma Clipper dies, its form dissolves into a puddle of lava.",
    "picture": "portrait_lavacrab",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 16,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "imbue",
        "x": 1,
        "s": "pierce",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "imbue",
            "x": 2,
            "s": "pierce",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 3,
            "s": "pierce",
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 4,
            "s": "pierce",
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "345": {
    "id": "345",
    "name": "Coral Stinger",
    "desc": "When exposed to the magical properties of a spellstone, some stalactites transform into beasts.",
    "picture": "portrait_carl",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 15,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enfeeble",
        "x": 2,
      },
      {
        "id": "imbue",
        "x": 1,
        "y": "5",
        "s": "armored",
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
          {
            "id": "imbue",
            "x": 1,
            "y": "5",
            "s": "armored",
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
          {
            "id": "imbue",
            "x": 2,
            "y": "5",
            "s": "armored",
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "imbue",
            "x": 3,
            "y": "5",
            "s": "armored",
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "346": {
    "id": "346",
    "name": "Null Darkness",
    "desc": "Those who stare into the eyes of darkness feel their strength and spirit slowly ebb away.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 40,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "nullify",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "347": {
    "id": "347",
    "name": "Deep Titan",
    "desc": "\"A creature of the dungeon's darkness, it turns into stone when exposed to light.\" - Collection of Bardic Tales III",
    "picture": "portrait_firetitan",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 27,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 36,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 42,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "348": {
    "id": "348",
    "name": "Earthen Guardian",
    "desc": "A manufactured construct that turned upon its own creator, the Earthen Guardian wanders the dungeon without purpose.",
    "picture": "portrait_oasismonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "c": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "c": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 45,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "c": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 50,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "c": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 55,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "c": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "c": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "349": {
    "id": "349",
    "name": "World Light",
    "desc": "Once revered as a deity, the World Light is nothing more than a powerful elemental that seeks the souls of adventurers.",
    "picture": "portrait_lightwisp",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 70,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "5",
        "s": "frost",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "5",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 74,
        "skill": [],
      },
      "3": {
        "health": 78,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "5",
            "s": "frost",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "4": {
        "health": 82,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "5",
            "s": "frost",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "5",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "5": {
        "health": 86,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "5",
            "s": "frost",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "6": {
        "health": 90,
        "skill": [],
      },
      "7": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "5",
            "s": "frost",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "5",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "350": {
    "id": "350",
    "name": "Gorvo, Mountain King",
    "desc": "Once, Gorvo ruled a kingdom of earth elementals beneath the earth's surface, but was lost in the sands of time.",
    "picture": "portrait_groundelemental2",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 72,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 76,
        "skill": [],
      },
      "3": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 90,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 94,
        "skill": [],
      },
      "7": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "351": {
    "id": "351",
    "name": "Wind Drake",
    "picture": "portrait_sailing_drake",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 42,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 48,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 54,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "352": {
    "id": "352",
    "name": "Brine Bringer",
    "picture": "portrait_kraken_portrait",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 42,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 58,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "353": {
    "id": "353",
    "name": "Mechanical Drakes",
    "picture": "portrait_windupdragons",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "354": {
    "id": "354",
    "name": "Skyward Beast",
    "picture": "portrait_skybeast",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 15,
    "maxLevel": 5,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "rally",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
    }
  },
  "355": {
    "id": "355",
    "name": "Ice Dragon",
    "picture": "portrait_icedragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 38,
    "maxLevel": 6,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "protect",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [],
      },
      "5": {
        "health": 47,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 50,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
    }
  },
  "356": {
    "id": "356",
    "name": "Molten Dragon",
    "picture": "portrait_moltendragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 32,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "9",
        "s": "burn",
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 36,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 40,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "9",
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 42,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "9",
            "s": "burn",
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "357": {
    "id": "357",
    "name": "Frostbite, Winter's End",
    "picture": "portrait_frostbite",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 76,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "9",
        "s": "frost",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "9",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 79,
        "skill": [],
      },
      "3": {
        "health": 83,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "9",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 86,
        "skill": [],
      },
      "5": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "9",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 92,
        "skill": [],
      },
      "7": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "9",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "9",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "358": {
    "id": "358",
    "name": "Nojuma, the Mountainbane",
    "picture": "portrait_greenbackdragon",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 72,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 3,
        "y": "9",
        "s": "berserk",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "c": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 78,
        "skill": [],
      },
      "3": {
        "health": 82,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "9",
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "c": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 86,
        "skill": [],
      },
      "5": {
        "health": 90,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "9",
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "c": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 94,
        "skill": [],
      },
      "7": {
        "health": 98,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "y": "9",
            "s": "berserk",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "c": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "359": {
    "id": "359",
    "name": "Oracle of Lady Scylla",
    "picture": "portrait_earthquake_hammer",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 58,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "c": 6,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "c": 5,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "c": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "c": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 67,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "c": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "c": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "360": {
    "id": "360",
    "name": "Scylla",
    "picture": "portrait_mythic_seafolk",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 58,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "nullify",
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 60,
        "skill": [],
      },
      "3": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 77,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "nullify",
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "361": {
    "id": "361",
    "name": "The Assassin",
    "desc": "The same assassin who tried to kill you and Tarian in Karthos, he seeks revenge with the new talents given to him by The Void.",
    "picture": "portrait_invisibleassassin",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 46,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "imbue",
        "c": 6,
        "s": "flurry",
      },
    ],
    "upgrades": {
      "2": {
        "health": 50,
        "skill": [
          {
            "id": "enhance",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 1,
            "c": 5,
            "all": "1",
          },
          {
            "id": "imbue",
            "c": 6,
            "s": "flurry",
          },
        ],
      },
      "3": {
        "health": 52,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 1,
            "c": 4,
            "all": "1",
          },
          {
            "id": "imbue",
            "c": 5,
            "s": "flurry",
          },
        ],
      },
      "4": {
        "health": 54,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 1,
            "c": 3,
            "all": "1",
          },
          {
            "id": "imbue",
            "c": 4,
            "s": "flurry",
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 3,
            "all": "1",
          },
          {
            "id": "imbue",
            "c": 3,
            "s": "flurry",
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "evade",
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 2,
            "all": "1",
          },
          {
            "id": "imbue",
            "c": 3,
            "s": "flurry",
          },
        ],
      },
    }
  },
  "362": {
    "id": "362",
    "name": "Skyhaven Agent",
    "desc": "You get the feeling that you could have been friends with this Agent, if only you'd met under different circumstances.",
    "picture": "portrait_spy_angel",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 58,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 59,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 61,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 64,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "363": {
    "id": "363",
    "name": "Samael of White-Hilt",
    "desc": "Are you fighting the angel and his sword, or the sword and its angel?",
    "picture": "portrait_samaelwithfiresword",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 49,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "armored",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 53,
        "skill": [],
      },
      "3": {
        "health": 57,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 61,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "armored",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "364": {
    "id": "364",
    "name": "Dyrnwyn's Spirit",
    "picture": "portrait_samaelwithfiresword",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 79,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 83,
        "skill": [],
      },
      "3": {
        "health": 87,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "365": {
    "id": "365",
    "name": "Valkyrie Guardian",
    "picture": "portrait_angelknight",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 40,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 46,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "366": {
    "id": "366",
    "name": "Tomb Tunneler",
    "picture": "portrait_feralbug",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 38,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "pierce",
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 42,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "pierce",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "pierce",
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "pierce",
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "367": {
    "id": "367",
    "name": "Tomb Raiders",
    "picture": "portrait_winteradventurers",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 42,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [],
      },
      "3": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 48,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "poison",
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "368": {
    "id": "368",
    "name": "Soul of the Brave",
    "picture": "portrait_lightwisp",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 52,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "nullify",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 53,
        "skill": [],
      },
      "3": {
        "health": 55,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 56,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 68,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "369": {
    "id": "369",
    "name": "Guardian Constructs",
    "picture": "portrait_windupdragons",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 62,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 63,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 65,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 66,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 78,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 82,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "370": {
    "id": "370",
    "name": "Spirit of the Beast",
    "picture": "portrait_winterbigbad",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 62,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "c": 4,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 65,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "c": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 69,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "c": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 72,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "c": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "c": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 80,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "c": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
        ],
      },
    }
  },
  "371": {
    "id": "371",
    "name": "Spirit of the Lost",
    "picture": "portrait_lanternguardian",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 75,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "6",
        "s": "berserk",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "6",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 78,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 88,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "7": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "6",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "6",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "372": {
    "id": "372",
    "name": "Catacomb Sentinel",
    "picture": "portrait_undeadbrute",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 72,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "6",
        "s": "counter",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 76,
        "skill": [],
      },
      "3": {
        "health": 80,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "6",
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 93,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "6",
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "7": {
        "health": 98,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "6",
            "s": "counter",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "373": {
    "id": "373",
    "name": "Shadow Garrick",
    "picture": "portrait_maniacgeneral",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 38,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "7",
        "s": "berserk",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 43,
        "skill": [],
      },
      "3": {
        "health": 49,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 54,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 8,
            "y": "7",
            "s": "berserk",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "374": {
    "id": "374",
    "name": "Mermod",
    "desc": "MerMod is the Community Manager for Spellstone, always bringing the community the latest in what's happening in the game!",
    "picture": "portrait_mermod",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": ["12"],
    "health": 38,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "legion",
      },
    ],
    "upgrades": {
      "2": {
        "health": 43,
        "skill": [],
      },
      "3": {
        "health": 49,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "legion",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 54,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "legion",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "legion",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "375": {
    "id": "375",
    "name": "Obyto14",
    "desc": "Obyto14 is a Designer for Spellstone. He's also the one who wrote this text. It's weird writing about yourself.",
    "picture": "portrait_obyto14",
    "rarity": "2",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": ["11"],
    "health": 50,
    "maxLevel": 4,
    "skill": [
      {
        "id": "imbue",
        "s": "silence",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "s": "silence",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "s": "silence",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 80,
        "skill": [
          {
            "id": "imbue",
            "s": "silence",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "376": {
    "id": "376",
    "name": "TyrantShiva",
    "desc": "TyrantShiva runs Support for Spellstone! She is the one that will help you out if you ever have a problem in game!",
    "picture": "portrait_tyrantshiva",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": ["14"],
    "health": 38,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 43,
        "skill": [
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 49,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 54,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 60,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 70,
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
    }
  },
  "377": {
    "id": "377",
    "name": "Well-Dressed Skeleton",
    "picture": "portrait_baronskeleton",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 55,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 59,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 63,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 67,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "378": {
    "id": "378",
    "name": "Bluefire, Void Master",
    "picture": "portrait_bluefirevoiddragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 79,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "counter",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 83,
        "skill": [],
      },
      "3": {
        "health": 87,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 2,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "c": 2,
          },
        ],
      },
    }
  },
  "379": {
    "id": "379",
    "name": "Elyse's Shadow",
    "picture": "portrait_elyseupgrade",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 59,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 64,
        "skill": [],
      },
      "3": {
        "health": 68,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 72,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 78,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 5,
          },
        ],
      },
    }
  },
  "380": {
    "id": "380",
    "name": "Oda's Shadow",
    "picture": "portrait_odaupgrade",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 61,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "protect",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 65,
        "skill": [],
      },
      "3": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "protect",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "protect",
            "x": 6,
          },
        ],
      },
      "6": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "protect",
            "x": 8,
          },
        ],
      },
    }
  },
  "381": {
    "id": "381",
    "name": "Bluefire, Heartless",
    "picture": "portrait_bluefirevoiddragon",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 79,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 83,
        "skill": [],
      },
      "3": {
        "health": 87,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 2,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "c": 2,
          },
        ],
      },
    }
  },
  "382": {
    "id": "382",
    "name": "Bluefire, Mythic Master",
    "picture": "portrait_mythicconglomerate",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 60,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 5,
        "s": "poison",
      },
      {
        "id": "protect",
        "x": 7,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 67,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "protect",
            "x": 8,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "protect",
            "x": 8,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 83,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "protect",
            "x": 9,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "poison",
          },
          {
            "id": "protect",
            "x": 10,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 7,
            "s": "poison",
          },
          {
            "id": "protect",
            "x": 10,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "383": {
    "id": "383",
    "name": "Vengeful Bones",
    "picture": "portrait_skeletonwarrior",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 13,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "frost",
      },
      {
        "id": "counter",
        "x": 25,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "frost",
          },
          {
            "id": "counter",
            "x": 25,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "frost",
          },
          {
            "id": "counter",
            "x": 25,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
    }
  },
  "384": {
    "id": "384",
    "name": "Shadowdusk Minions",
    "picture": "portrait_voidminions",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 24,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 3,
        "s": "corrosive",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "corrosive",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "corrosive",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "385": {
    "id": "385",
    "name": "Glowtooth Pack",
    "picture": "portrait_dawnglowbabies",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 26,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 3,
        "s": "poison",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [],
      },
    }
  },
  "386": {
    "id": "386",
    "name": "Stompglow Beast",
    "picture": "portrait_dawnglowmonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 49,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "8",
        "s": "nullify",
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "8",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 54,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "8",
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "8",
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 57,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "8",
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "8",
            "s": "nullify",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "8",
            "all": "1",
          },
        ],
      },
    }
  },
  "387": {
    "id": "387",
    "name": "Deep Tremors",
    "picture": "portrait_tremorwurm",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 55,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 5,
        "y": "8",
        "s": "leech",
      },
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 58,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "y": "8",
            "s": "leech",
          },
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "y": "8",
            "s": "leech",
          },
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 6,
          },
        ],
      },
      "5": {
        "health": 61,
        "skill": [
          {
            "id": "imbue",
            "x": 7,
            "y": "8",
            "s": "leech",
          },
          {
            "id": "rally",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 7,
          },
        ],
      },
      "6": {
        "health": 64,
        "skill": [
          {
            "id": "imbue",
            "x": 7,
            "y": "8",
            "s": "leech",
          },
          {
            "id": "rally",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 8,
          },
        ],
      },
    }
  },
  "388": {
    "id": "388",
    "name": "Strangle Beak",
    "picture": "portrait_octopusmonster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 42,
    "maxLevel": 6,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 46,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 50,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 54,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "389": {
    "id": "389",
    "name": "Void's Shadow",
    "picture": "portrait_void2",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 79,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 6,
        "s": "counter",
      },
      {
        "id": "enfeeble",
        "x": 3,
        "all": "1",
      },
      {
        "id": "enrage",
        "x": 2,
        "y": "8",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 82,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 3,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 84,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 4,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 88,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 4,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "7": {
        "health": 92,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "counter",
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 4,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 5,
            "y": "8",
            "all": "1",
          },
        ],
      },
    }
  },
  "390": {
    "id": "390",
    "name": "Bluefire Enraged",
    "picture": "portrait_bluefirevoiddragon",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "8",
    "sub_type": [],
    "health": 82,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "8",
        "s": "berserk",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 3,
        "s": "berserk",
      },
      {
        "id": "heal",
        "x": 4,
        "y": "8",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 85,
        "skill": [],
      },
      "3": {
        "health": 88,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "8",
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 5,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 92,
        "skill": [],
      },
      "6": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "8",
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 6,
            "y": "8",
            "all": "1",
          },
        ],
      },
      "7": {
        "health": 98,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "8",
            "s": "berserk",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "berserk",
          },
          {
            "id": "heal",
            "x": 7,
            "y": "8",
            "all": "1",
          },
        ],
      },
    }
  },
  "391": {
    "id": "391",
    "name": "Scarab Scrapper",
    "picture": "portrait_steampunk_scarab",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 30,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "counter",
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "corrosive",
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [],
      },
      "3": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "corrosive",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 51,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "corrosive",
          },
          {
            "id": "protect",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 58,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "corrosive",
          },
          {
            "id": "protect",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 66,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "counter",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "corrosive",
          },
          {
            "id": "protect",
            "x": 6,
          },
        ],
      },
    }
  },
  "392": {
    "id": "392",
    "name": "The Enraged Assassin",
    "picture": "portrait_invisibleassassin",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 66,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "poison",
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 72,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 79,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 85,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 92,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "393": {
    "id": "393",
    "name": "Gobatron",
    "desc": "The most advanced contraption to ever be conceived by goblin kind! Meet your doom!",
    "picture": "portrait_raid_004",
    "rarity": "5",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": ["7"],
    "health": 32,
    "maxLevel": 7,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "strike",
      },
      {
        "id": "barrage",
        "x": 2,
      },
      {
        "id": "enrage",
        "x": 2,
        "y": "11",
      },
    ],
    "upgrades": {
      "2": {
        "health": 42,
        "skill": [],
      },
      "3": {
        "health": 52,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "strike",
          },
          {
            "id": "barrage",
            "x": 3,
          },
          {
            "id": "enrage",
            "x": 2,
            "y": "11",
          },
        ],
      },
      "4": {
        "health": 62,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "strike",
          },
          {
            "id": "barrage",
            "x": 3,
          },
          {
            "id": "enrage",
            "x": 3,
            "y": "11",
          },
        ],
      },
      "5": {
        "health": 72,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "strike",
          },
          {
            "id": "barrage",
            "x": 4,
          },
          {
            "id": "enrage",
            "x": 3,
            "y": "11",
          },
        ],
      },
      "6": {
        "health": 82,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "strike",
          },
          {
            "id": "barrage",
            "x": 5,
          },
          {
            "id": "enrage",
            "x": 3,
            "y": "11",
          },
        ],
      },
      "7": {
        "health": 92,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "strike",
          },
          {
            "id": "barrage",
            "x": 6,
          },
          {
            "id": "enrage",
            "x": 3,
            "y": "11",
            "all": "1",
          },
        ],
      },
    }
  },
  "394": {
    "id": "394",
    "name": "Xerkahn, the Vengeant",
    "picture": "portrait_skypirateladygoblin",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 55,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "counterburn",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
      {
        "id": "enrage",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "counterburn",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counterburn",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counterburn",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "counterburn",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 82,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "counterburn",
          },
          {
            "id": "enfeeble",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "395": {
    "id": "395",
    "name": "Goblin Diver",
    "picture": "portrait_portraits_goblin_diver",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 50,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "counter",
      },
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 55,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "counter",
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "396": {
    "id": "396",
    "name": "King Proteus",
    "picture": "portrait_portraits_seafolk_king",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 60,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 65,
        "skill": [],
      },
      "3": {
        "health": 70,
        "skill": [],
      },
      "4": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 80,
        "skill": [],
      },
      "6": {
        "health": 86,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "397": {
    "id": "397",
    "name": "Brine Singer",
    "picture": "portrait_kraken_portrait",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 42,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 44,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 46,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 49,
        "skill": [],
      },
      "5": {
        "health": 51,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 58,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "398": {
    "id": "398",
    "name": "Xerkahn, the Avenger",
    "picture": "portrait_skypirateladygoblin",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 78,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "enrage",
        "x": 2,
        "all": "1",
      },
      {
        "id": "barrage",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 82,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 3,
            "all": "1",
          },
          {
            "id": "barrage",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 86,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 4,
            "all": "1",
          },
          {
            "id": "barrage",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 90,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 4,
            "all": "1",
          },
          {
            "id": "barrage",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 5,
            "all": "1",
          },
          {
            "id": "barrage",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enrage",
            "x": 5,
            "all": "1",
          },
          {
            "id": "barrage",
            "x": 6,
          },
        ],
      },
    }
  },
  "399": {
    "id": "399",
    "name": "Viracocha, Titan Aspirer",
    "picture": "portrait_portraits_ancient_titan_mecha",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 75,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 4,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 79,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 84,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 5,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 6,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 6,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "400": {
    "id": "400",
    "name": "Dawnglow Hunter",
    "picture": "portrait_portraits_tribal_frog",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 69,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "enfeeble",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 71,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 74,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 76,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 79,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 82,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "enfeeble",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "401": {
    "id": "401",
    "name": "Mining Cydroid",
    "picture": "portrait_portraits_miner_droid",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 68,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 72,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 9,
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 10,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "402": {
    "id": "402",
    "name": "Scyer of Fire",
    "desc": "The name is Scyer, the Warden of Fire, prepare to expire!",
    "picture": "portrait_chaos_mecha_hero",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 59,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "burn",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "burn",
      },
      {
        "id": "enrage",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 62,
        "skill": [],
      },
      "3": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 68,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "burn",
          },
          {
            "id": "enrage",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "burn",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 5,
            "s": "burn",
          },
          {
            "id": "enrage",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "403": {
    "id": "403",
    "name": "Fireshard's Giant",
    "picture": "portrait_giantmechaboss",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 76,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 4,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 80,
        "skill": [],
      },
      "3": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "404": {
    "id": "404",
    "name": "Fireshard's Slumbering Giant",
    "picture": "portrait_giantmechaboss",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 56,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "evade",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 60,
        "skill": [],
      },
      "3": {
        "health": 65,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 74,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 79,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "evade",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "405": {
    "id": "405",
    "name": "Crimsonwing Apostle",
    "picture": "portrait_avian_cultist",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 65,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 67,
        "skill": [],
      },
      "3": {
        "health": 70,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 79,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "406": {
    "id": "406",
    "name": "Hero's Blessed, Yakov",
    "desc": "\"Xi raxeh ruoy ecixov morf rafa, tey hxtiw rehxtien eman ron mrof nac Xi rewsna hxcus reyarp, kees em txen nix Nevahyks.\"",
    "picture": "portrait_avian_cultist",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 75,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "rally",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 79,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "rally",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 84,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "rally",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "rally",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "rally",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "rally",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "407": {
    "id": "407",
    "name": "Unsung Guardian Angel",
    "picture": "portrait_royalengineer",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 65,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 67,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 70,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 72,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 75,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 78,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "408": {
    "id": "408",
    "name": "Razi, Whisper Worshipper",
    "desc": "Erats otnix ehxt Syba, dna ehxt Syba serats kcab ta uxoy. Rewop sesir nix ehxt nerab senredliw.",
    "picture": "portrait_portraits_crimson_winged_angel",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 76,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 3,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "rally",
        "x": 3,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 80,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 5,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "rally",
            "x": 4,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 6,
            "all": "1",
          },
        ],
      },
    }
  },
  "409": {
    "id": "409",
    "name": "Toknight",
    "picture": "portrait_knight_001",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 45,
        "skill": [],
      },
      "4": {
        "health": 50,
        "skill": [],
      },
      "5": {
        "health": 55,
        "skill": [],
      },
      "6": {
        "health": 60,
        "skill": [],
      },
    }
  },
  "410": {
    "id": "410",
    "name": "Knight of Representation",
    "picture": "portrait_knight_002",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 45,
        "skill": [],
      },
      "4": {
        "health": 50,
        "skill": [],
      },
      "5": {
        "health": 55,
        "skill": [],
      },
      "6": {
        "health": 60,
        "skill": [],
      },
    }
  },
  "411": {
    "id": "411",
    "name": "Knight of Vengeance",
    "picture": "portrait_knight_003",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 35,
    "maxLevel": 6,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "health": 45,
        "skill": [],
      },
      "4": {
        "health": 50,
        "skill": [],
      },
      "5": {
        "health": 55,
        "skill": [],
      },
      "6": {
        "health": 60,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "17",
            "s": "counter",
            "all": "1",
          },
        ],
      },
    }
  },
  "412": {
    "id": "412",
    "name": "Boldur, the Bravest",
    "picture": "portrait_portraits_boldur",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 81,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 2,
        "y": "11",
        "s": "berserk",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 84,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "11",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 88,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "11",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 91,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "11",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "5": {
        "health": 95,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "y": "11",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "y": "11",
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "413": {
    "id": "413",
    "name": "Mechanical Giant",
    "picture": "portrait_giantmechaboss",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 75,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 3,
        "s": "burn",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 77,
        "skill": [],
      },
      "3": {
        "health": 79,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 83,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 86,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "burn",
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "414": {
    "id": "414",
    "name": "Boldur, the Unbreakable",
    "picture": "portrait_portraits_boldur",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 76,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "berserk",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 78,
        "skill": [],
      },
      "3": {
        "health": 81,
        "skill": [],
      },
      "4": {
        "health": 84,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 87,
        "skill": [],
      },
      "6": {
        "health": 90,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "berserk",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "415": {
    "id": "415",
    "name": "Typhoeus, Ship Devourer",
    "picture": "portrait_sky_sea_monster",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 70,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "y": "12",
        "s": "frost",
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 75,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "y": "12",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 81,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "12",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 87,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "12",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 93,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "y": "12",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "y": "12",
            "s": "frost",
          },
          {
            "id": "protect",
            "x": 5,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "416": {
    "id": "416",
    "name": "Cave Writings",
    "desc": "Xi evah detrats ot etirw nix sihxt edoc hxtiw ehxt egdelwonk tahxt ym yreve evom six ylekil gnieb dehxctaw. Neve ym sthxguohxt yam ton eb efas, dna Xi evil gniwonknu tsuj woh hxcum Ehxt Diov sah deretla ym dnim.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 67,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "poison",
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "417": {
    "id": "417",
    "name": "Cave Writings",
    "desc": "Erifeulb six ton ehxt redael fo Ehxt Diov, tub stix nesohxc ratava. Ehxt Diov six raf retaerg nahxt a elgnis ytitne. Tix six ehxt wolf fo seiromem dna smaerd; a revir fo senkrad tahxt slop nix ehxt mlaer tix slac Ehxt Syba.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 67,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "burn",
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "burn",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "burn",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "burn",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 5,
            "s": "burn",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "418": {
    "id": "418",
    "name": "Cave Writings",
    "desc": "Xi raef ym snoinapmoc dluow riapsed fix yehxt wenk Exht S'diov eurt erutan: gnicneulfni smaerd dna slaedix hxcihxw eripsnix su ot thxgif. Hxtiw S'erifeulb Treah, Ix nac retne Ehxt Syba. Stix noitcurtsed liw tneverp Exht Diov morf gniretne smaerd.",
    "picture": "portrait_cavernsofcrossings",
    "rarity": "3",
    "set": "9999",
    "card_type": "1",
    "type": "2",
    "sub_type": [],
    "health": 67,
    "maxLevel": 5,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "armored",
        "all": "1",
      },
      {
        "id": "enhance",
        "x": 1,
        "s": "nullify",
      },
      {
        "id": "rally",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 69,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 2,
            "s": "nullify",
          },
          {
            "id": "rally",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 71,
        "skill": [
          {
            "id": "imbue",
            "x": 2,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "nullify",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 73,
        "skill": [
          {
            "id": "imbue",
            "x": 3,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "nullify",
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 76,
        "skill": [
          {
            "id": "imbue",
            "x": 4,
            "s": "armored",
            "all": "1",
          },
          {
            "id": "enhance",
            "x": 5,
            "s": "nullify",
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "419": {
    "id": "419",
    "name": "Kachina, Transcended",
    "desc": "A dream begotten from a life forgotten...",
    "picture": "portrait_dream_catcher_wings",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 76,
    "maxLevel": 6,
    "skill": [
      {
        "id": "enhance",
        "x": 2,
        "s": "corrosive",
      },
      {
        "id": "heal",
        "x": 3,
        "y": "4",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 80,
        "skill": [
          {
            "id": "enhance",
            "x": 2,
            "s": "corrosive",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 85,
        "skill": [
          {
            "id": "enhance",
            "x": 3,
            "s": "corrosive",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "enhance",
            "x": 4,
            "s": "corrosive",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 93,
        "skill": [
          {
            "id": "enhance",
            "x": 5,
            "s": "corrosive",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "4",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "enhance",
            "x": 6,
            "s": "corrosive",
          },
          {
            "id": "heal",
            "x": 5,
            "y": "4",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
            "all": "1",
          },
        ],
      },
    }
  },
  "420": {
    "id": "420",
    "name": "Tanit, First Dreamer",
    "desc": "A shared dream, once forgotten, begged us to remember: we have nothing to fear in sweet harmony.",
    "picture": "portrait_avian_priest",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "1",
    "sub_type": [],
    "health": 95,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 1,
        "s": "silence",
      },
      {
        "id": "heal",
        "x": 40,
        "c": 8,
      },
      {
        "id": "strike",
        "x": 25,
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "silence",
          },
          {
            "id": "heal",
            "x": 51,
            "c": 8,
          },
          {
            "id": "strike",
            "x": 25,
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 96,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "silence",
          },
          {
            "id": "heal",
            "x": 63,
            "c": 7,
          },
          {
            "id": "strike",
            "x": 29,
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 97,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "silence",
          },
          {
            "id": "heal",
            "x": 75,
            "c": 5,
          },
          {
            "id": "strike",
            "x": 31,
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 98,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "silence",
          },
          {
            "id": "heal",
            "x": 87,
            "c": 5,
          },
          {
            "id": "strike",
            "x": 33,
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 1,
            "s": "silence",
          },
          {
            "id": "heal",
            "x": 99,
            "c": 5,
          },
          {
            "id": "strike",
            "x": 35,
          },
        ],
      },
    }
  },
  "421": {
    "id": "421",
    "name": "Agonized Amarok",
    "picture": "portrait_emeraldwolf",
    "rarity": "4",
    "set": "9999",
    "card_type": "1",
    "type": "3",
    "sub_type": [],
    "health": 76,
    "maxLevel": 6,
    "skill": [
      {
        "id": "imbue",
        "x": 4,
        "s": "poison",
      },
      {
        "id": "enhance",
        "x": 2,
        "s": "regenerate",
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 80,
        "skill": [],
      },
      "3": {
        "health": 85,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "regenerate",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 89,
        "skill": [
          {
            "id": "imbue",
            "x": 5,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 3,
            "s": "regenerate",
          },
          {
            "id": "heal",
            "x": 6,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 94,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 4,
            "s": "regenerate",
          },
          {
            "id": "heal",
            "x": 6,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 99,
        "skill": [
          {
            "id": "imbue",
            "x": 6,
            "s": "poison",
          },
          {
            "id": "enhance",
            "x": 5,
            "s": "regenerate",
          },
          {
            "id": "heal",
            "x": 7,
            "all": "1",
          },
        ],
      },
    }
  },
  "5000": {
    "id": "5000",
    "name": "Azure Sphinx",
    "picture": "Marble_Sphinx_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 24,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15000": {
    "id": "15000",
    "name": "Marble Sphinx",
    "picture": "Marble_Sphinx_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 28,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25000": {
    "id": "25000",
    "name": "Alabaster Sphinx",
    "picture": "Marble_Sphinx_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 32,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 6,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 35,
        "skill": [],
      },
    }
  },
  "5001": {
    "id": "5001",
    "name": "Aven Skypiercer",
    "picture": "Eagle_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 12,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15001": {
    "id": "15001",
    "name": "Feather Skypiercer",
    "picture": "Eagle_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 15,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25001": {
    "id": "25001",
    "name": "Fierce Skypiercer",
    "picture": "Eagle_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 19,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5002": {
    "id": "5002",
    "name": "Twilight Mirror",
    "picture": "Twilight_Mirror_Warrior_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "attack": 0,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 1,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 2,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
    }
  },
  "15002": {
    "id": "15002",
    "name": "Twilight Reflector",
    "picture": "Twilight_Mirror_Warrior_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 17,
    "attack": 2,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
    }
  },
  "25002": {
    "id": "25002",
    "name": "Twilight Specular",
    "picture": "Twilight_Mirror_Warrior_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 20,
    "attack": 3,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 7,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
            "all": "1",
          },
        ],
      },
    }
  },
  "5003": {
    "id": "5003",
    "name": "White Knight",
    "picture": "White_Knight_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 22,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15003": {
    "id": "15003",
    "name": "Ivory Knight",
    "picture": "White_Knight_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 25,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "25003": {
    "id": "25003",
    "name": "Opal Knight",
    "picture": "White_Knight_C",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 31,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 6,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5004": {
    "id": "5004",
    "name": "Lightning Lord",
    "picture": "Lighting_Lord_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 9,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
    }
  },
  "15004": {
    "id": "15004",
    "name": "Lightning Baron",
    "picture": "Lighting_Lord_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 13,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "25004": {
    "id": "25004",
    "name": "Lightning Demigod",
    "picture": "Lighting_Lord_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5005": {
    "id": "5005",
    "name": "Storm Giant",
    "picture": "Storm_Giant_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 20,
    "attack": 6,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15005": {
    "id": "15005",
    "name": "Thunderhead Giant",
    "picture": "Storm_Giant_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 24,
    "attack": 7,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25005": {
    "id": "25005",
    "name": "Windtempest Giant",
    "picture": "Storm_Giant_C",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 30,
    "attack": 8,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "5": {
        "attack": 9,
        "health": 34,
        "skill": [],
      },
    }
  },
  "5006": {
    "id": "5006",
    "name": "Arms Enforcer",
    "desc": "Champion of the people, master of all armaments.",
    "picture": "Chariot_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 10,
    "attack": 2,
    "cost": 4,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
    }
  },
  "15006": {
    "id": "15006",
    "name": "Arms Gladiator",
    "picture": "Chariot_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 11,
    "attack": 3,
    "cost": 4,
    "maxLevel": 4,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "25006": {
    "id": "25006",
    "name": "Arms Champion",
    "picture": "Chariot_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 13,
    "attack": 4,
    "cost": 4,
    "maxLevel": 4,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "5007": {
    "id": "5007",
    "name": "Arcane Scroll",
    "desc": "\"Brushing your finger along the wrong rune can unleash its stored magic to disastrous effects.\" - Last Lesson of Magi Neyaroi",
    "picture": "Floating_Word_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 2,
    "attack": 4,
    "cost": 1,
    "maxLevel": 4,
    "skill": [],
    "upgrades": {
      "2": {
        "health": 3,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15007": {
    "id": "15007",
    "name": "Ancient Scroll",
    "picture": "Floating_Word_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 3,
    "attack": 5,
    "cost": 1,
    "maxLevel": 4,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 4,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 5,
        "skill": [],
      },
    }
  },
  "25007": {
    "id": "25007",
    "name": "Ancient Manuscript",
    "picture": "Floating_Word_C",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 6,
    "attack": 5,
    "cost": 1,
    "maxLevel": 4,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 7,
        "skill": [],
      },
    }
  },
  "5008": {
    "id": "5008",
    "name": "Ice Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 21,
    "attack": 5,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15008": {
    "id": "15008",
    "name": "Blizzard Dragon",
    "picture": "Ice_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 26,
    "attack": 6,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "25008": {
    "id": "25008",
    "name": "Hailstone Dragon",
    "picture": "Ice_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 30,
    "attack": 7,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5009": {
    "id": "5009",
    "name": "Royal Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 13,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15009": {
    "id": "15009",
    "name": "Majestic Guardian",
    "picture": "Royal_Guardian_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 16,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
    }
  },
  "25009": {
    "id": "25009",
    "name": "High Guardian",
    "picture": "Royal_Guardian_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 17,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "5010": {
    "id": "5010",
    "name": "Concealed Dragon",
    "desc": "\"Concealed dragons create their own clouds in which to hide.\" - Researcher Notes",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 9,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "15010": {
    "id": "15010",
    "name": "Lurking Dragon",
    "desc": "\"If they can't see our sentries they can't defend against them!\" - Yuriel, Owl Mystic",
    "picture": "Concealed_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 13,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25010": {
    "id": "25010",
    "name": "Veiled Dragon",
    "desc": "\"Wait. Where did they go?\" - Yuriel, Owl Mystic",
    "picture": "Concealed_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "health": 22,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 7,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5011": {
    "id": "5011",
    "name": "Sky Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 28,
    "attack": 5,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "health": 29,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "15011": {
    "id": "15011",
    "name": "Soaring Whale",
    "picture": "Sky_Whale_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 30,
    "attack": 7,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 33,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "25011": {
    "id": "25011",
    "name": "Celestial Whale",
    "picture": "Sky_Whale_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 35,
    "attack": 9,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 6,
      },
      {
        "id": "weaken",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 38,
        "skill": [],
      },
      "4": {
        "attack": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5012": {
    "id": "5012",
    "name": "Static Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 7,
    "attack": 2,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "attack": 3,
        "health": 9,
        "skill": [],
      },
    }
  },
  "15012": {
    "id": "15012",
    "name": "Lightning Drake",
    "picture": "Static_Drake_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 9,
    "attack": 3,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25012": {
    "id": "25012",
    "name": "Thunder Drake",
    "picture": "Static_Drake_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "5013": {
    "id": "5013",
    "name": "Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 17,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "15013": {
    "id": "15013",
    "name": "Shining Radiance",
    "picture": "Light_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 21,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "25013": {
    "id": "25013",
    "name": "Brilliant Radiance",
    "picture": "Light_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 23,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "5014": {
    "id": "5014",
    "name": "Winged Raptor",
    "desc": "Application for Avian classification approved. The time has come!",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 7,
    "attack": 2,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 3,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15014": {
    "id": "15014",
    "name": "Charging Raptor",
    "picture": "Raptor_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 9,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 13,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25014": {
    "id": "25014",
    "name": "Swift Raptor",
    "picture": "Raptor_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 14,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5015": {
    "id": "5015",
    "name": "Gravity Swell",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 21,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 25,
        "skill": [
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15015": {
    "id": "15015",
    "name": "Gravity Tide",
    "picture": "Gravity_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 27,
    "attack": 6,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25015": {
    "id": "25015",
    "name": "Gravity Bender",
    "picture": "Gravity_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 31,
    "attack": 6,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 33,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5016": {
    "id": "5016",
    "name": "Fowl Swarm",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 7,
    "attack": 2,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "15016": {
    "id": "15016",
    "name": "Fowl Drove",
    "picture": "Flock_of_Birds_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 10,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "25016": {
    "id": "25016",
    "name": "Fowl Horde",
    "picture": "Flock_of_Birds_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 15,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 7,
      },
      {
        "id": "heal",
        "x": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 9,
          },
          {
            "id": "heal",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
        ],
      },
    }
  },
  "5017": {
    "id": "5017",
    "name": "Steam Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 4,
    "attack": 1,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "15017": {
    "id": "15017",
    "name": "Piping Tempest",
    "picture": "Steam_Elemental_A",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 7,
    "attack": 2,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25017": {
    "id": "25017",
    "name": "Scalding Tempest",
    "picture": "Steam_Elemental_B",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 9,
    "attack": 4,
    "cost": 2,
    "maxLevel": 4,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 11,
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "5018": {
    "id": "5018",
    "name": "Grand Knight Frog",
    "picture": "High_Knight_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 7,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15018": {
    "id": "15018",
    "name": "High Knight Frog",
    "picture": "High_Knight_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 10,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "25018": {
    "id": "25018",
    "name": "Supreme Knight Frog",
    "picture": "High_Knight_Frog_B",
    "hidden_until": "1445529600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 13,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 7,
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "5019": {
    "id": "5019",
    "name": "Vivid Aurora",
    "picture": "Great_Aurora_A",
    "hidden_until": "1446739200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 16,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15019": {
    "id": "15019",
    "name": "Brilliant Aurora",
    "picture": "Great_Aurora_A",
    "hidden_until": "1446739200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 20,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25019": {
    "id": "25019",
    "name": "Blazing Aurora",
    "picture": "Great_Aurora_B",
    "hidden_until": "1446739200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 24,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5020": {
    "id": "5020",
    "name": "Frost Frog",
    "picture": "Frozen_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 13,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15020": {
    "id": "15020",
    "name": "Frozen Frog",
    "picture": "Frozen_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 23,
    "attack": 7,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 8,
        "health": 27,
        "skill": [],
      },
    }
  },
  "25020": {
    "id": "25020",
    "name": "Arctic Frog",
    "picture": "Frozen_Frog_B",
    "hidden_until": "1445529600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 29,
    "attack": 8,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 10,
        "health": 33,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5021": {
    "id": "5021",
    "name": "Tower Spirit",
    "picture": "Tower_Spirit_A",
    "hidden_until": "1447344000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 9,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15021": {
    "id": "15021",
    "name": "Spire Spirit",
    "picture": "Tower_Spirit_A",
    "hidden_until": "1447344000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25021": {
    "id": "25021",
    "name": "Citadel Spirit",
    "picture": "Tower_Spirit_B",
    "hidden_until": "1447344000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 20,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5022": {
    "id": "5022",
    "name": "Webfoot Raider",
    "picture": "Bombardier_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 6,
    "attack": 1,
    "cost": 1,
    "maxLevel": 4,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15022": {
    "id": "15022",
    "name": "Webfoot Bombardier",
    "picture": "Bombardier_Frog_A",
    "hidden_until": "1445529600000",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 9,
    "attack": 1,
    "cost": 1,
    "maxLevel": 4,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "25022": {
    "id": "25022",
    "name": "Webfoot Marauder",
    "picture": "Bombardier_Frog_B",
    "hidden_until": "1445529600000",
    "rarity": "2",
    "set": "2000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 10,
    "attack": 2,
    "cost": 1,
    "maxLevel": 4,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "5023": {
    "id": "5023",
    "name": "Nightfall Dragon",
    "picture": "Night_Dragon_A",
    "hidden_until": "1449162000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 12,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15023": {
    "id": "15023",
    "name": "Nighttide Dragon",
    "picture": "Night_Dragon_A",
    "hidden_until": "1449162000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25023": {
    "id": "25023",
    "name": "Twilight Dragon",
    "picture": "Night_Dragon_B",
    "hidden_until": "1449162000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 20,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 4,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "6": {
        "health": 25,
        "skill": [
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5024": {
    "id": "5024",
    "name": "Cloudtop Dragon",
    "picture": "Sky_Dragon_A",
    "hidden_until": "1449766800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 14,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "9",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
          },
        ],
      },
    }
  },
  "15024": {
    "id": "15024",
    "name": "Billowtop Dragon",
    "picture": "Sky_Dragon_A",
    "hidden_until": "1449766800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 18,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "25024": {
    "id": "25024",
    "name": "Skytop Dragon",
    "picture": "Sky_Dragon_B",
    "hidden_until": "1449766800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 29,
    "attack": 7,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "9",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 5,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "attack": 10,
        "health": 34,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "9",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 6,
          },
        ],
      },
    }
  },
  "5025": {
    "id": "5025",
    "name": "Steelskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 16,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "9",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
          },
        ],
      },
    }
  },
  "15025": {
    "id": "15025",
    "name": "Plateskin Dragon",
    "picture": "Steel_Dragon_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 18,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "9",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [],
      },
    }
  },
  "25025": {
    "id": "25025",
    "name": "Silverskin Dragon",
    "picture": "Steel_Dragon_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 20,
    "attack": 8,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
        ],
      },
    }
  },
  "5026": {
    "id": "5026",
    "name": "Frostfire Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 7,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15026": {
    "id": "15026",
    "name": "Frostflame Wyrm",
    "picture": "Frost_Wyrm_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 10,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25026": {
    "id": "25026",
    "name": "Frostscour Wyrm",
    "picture": "Frost_Wyrm_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 15,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5027": {
    "id": "5027",
    "name": "Northern War-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 15,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15027": {
    "id": "15027",
    "name": "Northern Clash-kin",
    "picture": "Polar_Bear_Warrior_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 19,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 23,
        "skill": [],
      },
    }
  },
  "25027": {
    "id": "25027",
    "name": "Northern Strife-kin",
    "picture": "Polar_Bear_Warrior_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 23,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
        "all": "1",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5028": {
    "id": "5028",
    "name": "Winter Blacksmith",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 9,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15028": {
    "id": "15028",
    "name": "Winter Armorer",
    "picture": "Winter_Blacksmith_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 11,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
    }
  },
  "25028": {
    "id": "25028",
    "name": "Winter Bladesmith",
    "picture": "Winter_Blacksmith_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "5029": {
    "id": "5029",
    "name": "Snowback Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 16,
    "attack": 2,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15029": {
    "id": "15029",
    "name": "Snowmasked Dragon",
    "picture": "Snowhidden_Dragon_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 19,
    "attack": 3,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25029": {
    "id": "25029",
    "name": "Snowcloaked Dragon",
    "picture": "Snowhidden_Dragon_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 29,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 30,
        "skill": [],
      },
      "3": {
        "health": 32,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 34,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "health": 36,
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
    }
  },
  "5030": {
    "id": "5030",
    "name": "Loxphas Mage",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 11,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "15030": {
    "id": "15030",
    "name": "Loxphas Sorcerer",
    "picture": "Mastodon_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 14,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
    }
  },
  "25030": {
    "id": "25030",
    "name": "Loxphas Wizard",
    "picture": "Mastodon_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": [],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
    }
  },
  "5031": {
    "id": "5031",
    "name": "Frostlance Valkyrie",
    "picture": "Winter_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 6,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 8,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15031": {
    "id": "15031",
    "name": "Snowlance Valkyrie",
    "picture": "Winter_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 9,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25031": {
    "id": "25031",
    "name": "Icelance Valkyrie",
    "picture": "Winter_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 12,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5032": {
    "id": "5032",
    "name": "Hail Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 18,
    "attack": 0,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15032": {
    "id": "15032",
    "name": "Iceblock Hurler",
    "picture": "Hail_Hurler_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 22,
    "attack": 0,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25032": {
    "id": "25032",
    "name": "Frostshard Hurler",
    "picture": "Hail_Hurler_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 26,
    "attack": 0,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "5033": {
    "id": "5033",
    "name": "Lost Soul",
    "picture": "Lost_Soul_A",
    "hidden_until": "1452790800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 7,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "7",
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
        ],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "7",
          },
        ],
      },
    }
  },
  "15033": {
    "id": "15033",
    "name": "Wandering Soul",
    "picture": "Lost_Soul_A",
    "hidden_until": "1452790800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 10,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "7",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "7",
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
          },
        ],
      },
    }
  },
  "25033": {
    "id": "25033",
    "name": "Dread Soul",
    "picture": "Lost_Soul_B",
    "hidden_until": "1452790800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 13,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "7",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "7",
          },
        ],
      },
    }
  },
  "5034": {
    "id": "5034",
    "name": "Skyward Guardian",
    "picture": "Skyward_Guardian_A",
    "hidden_until": "1453395600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 20,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15034": {
    "id": "15034",
    "name": "Skyward Defender",
    "picture": "Skyward_Guardian_A",
    "hidden_until": "1453395600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 25,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 28,
        "skill": [],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "25034": {
    "id": "25034",
    "name": "Skyward Sentinel",
    "picture": "Skyward_Guardian_B",
    "hidden_until": "1453395600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 30,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "health": 33,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5035": {
    "id": "5035",
    "name": "Vapor Guard",
    "picture": "Vapor_Ghost_A",
    "hidden_until": "1454000400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 10,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "7",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15035": {
    "id": "15035",
    "name": "Vapor Defender",
    "picture": "Vapor_Ghost_A",
    "hidden_until": "1454000400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 13,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "7",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 15,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25035": {
    "id": "25035",
    "name": "Vapor Warden",
    "picture": "Vapor_Ghost_B",
    "hidden_until": "1454000400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 5,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "7",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5036": {
    "id": "5036",
    "name": "Winter Tail",
    "picture": "Fox_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 7,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "15036": {
    "id": "15036",
    "name": "Spring Tail",
    "picture": "Fox_Spirit_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 10,
    "attack": 2,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "attack": 3,
        "health": 14,
        "skill": [],
      },
    }
  },
  "25036": {
    "id": "25036",
    "name": "Summer Tail",
    "picture": "Fox_Spirit_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 16,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 5,
        "y": "1",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 6,
            "y": "1",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 7,
            "y": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5037": {
    "id": "5037",
    "name": "Dauntless Baneblade",
    "picture": "Phantom_Swordsman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 10,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "7",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15037": {
    "id": "15037",
    "name": "Dauntless Claymore",
    "picture": "Phantom_Swordsman_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "7",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25037": {
    "id": "25037",
    "name": "Dauntless Deathknell",
    "picture": "Phantom_Swordsman_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 22,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "7",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 4,
            "y": "7",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5038": {
    "id": "5038",
    "name": "Celestial Monarch",
    "picture": "Angel_Queen_A",
    "hidden_until": "1454950800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 18,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "15038": {
    "id": "15038",
    "name": "Celestial Empress",
    "picture": "Angel_Queen_A",
    "hidden_until": "1454950800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 21,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "health": 30,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "25038": {
    "id": "25038",
    "name": "Celestial Queen",
    "picture": "Angel_Queen_B",
    "hidden_until": "1454950800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 31,
    "attack": 9,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "attack": 10,
        "skill": [],
      },
      "5": {
        "health": 35,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5039": {
    "id": "5039",
    "name": "Ethereal Knight",
    "picture": "Ethereal_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 12,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "2",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
        ],
      },
    }
  },
  "15039": {
    "id": "15039",
    "name": "Ethereal Paladin",
    "picture": "Ethereal_Angel_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 15,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "2",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "3",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "3",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
          },
        ],
      },
    }
  },
  "25039": {
    "id": "25039",
    "name": "Ethereal Champion",
    "picture": "Ethereal_Angel_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 18,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "2",
      },
      {
        "id": "rally",
        "x": 3,
        "y": "3",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "3",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "2",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "3",
          },
        ],
      },
    }
  },
  "5040": {
    "id": "5040",
    "name": "Winged Trumpeter",
    "picture": "Angel_Trumpetier_A",
    "hidden_until": "1455814800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 19,
    "attack": 3,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15040": {
    "id": "15040",
    "name": "Celestial Trumpeter",
    "picture": "Angel_Trumpetier_A",
    "hidden_until": "1455814800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 22,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 4,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "25040": {
    "id": "25040",
    "name": "Divine Trumpeter",
    "picture": "Angel_Trumpetier_B",
    "hidden_until": "1455814800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 26,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 5,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "6",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "6",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5041": {
    "id": "5041",
    "name": "Skylance Raiders",
    "picture": "Swiftlance_Raiders_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15041": {
    "id": "15041",
    "name": "Divelance Raiders",
    "picture": "Swiftlance_Raiders_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 17,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25041": {
    "id": "25041",
    "name": "Swiftlance Raiders",
    "picture": "Swiftlance_Raiders_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 21,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5042": {
    "id": "5042",
    "name": "Tinkerer",
    "picture": "The_Tinkerer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["16"],
    "health": 11,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "1",
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
    }
  },
  "15042": {
    "id": "15042",
    "name": "Wingspan Tinkerer",
    "picture": "The_Tinkerer_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["16"],
    "health": 13,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
    }
  },
  "25042": {
    "id": "25042",
    "name": "Steelfeather Tinkerer",
    "picture": "The_Tinkerer_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["16"],
    "health": 16,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "all": "1",
      },
      {
        "id": "heal",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "1",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "heal",
            "x": 7,
          },
        ],
      },
    }
  },
  "5043": {
    "id": "5043",
    "name": "Empyrean",
    "picture": "Firewing_Warrior_A",
    "hidden_until": "1457024400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 7,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15043": {
    "id": "15043",
    "name": "Empyrean Flame",
    "picture": "Firewing_Warrior_A",
    "hidden_until": "1457024400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25043": {
    "id": "25043",
    "name": "Empyrean Fire",
    "picture": "Firewing_Warrior_B",
    "hidden_until": "1457024400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 14,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "5044": {
    "id": "5044",
    "name": "Telepathic Magi",
    "picture": "Telepathic_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 8,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "15044": {
    "id": "15044",
    "name": "Clairvoyant Magi",
    "picture": "Telepathic_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25044": {
    "id": "25044",
    "name": "Ascended Magi",
    "picture": "Telepathic_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 13,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 16,
        "skill": [],
      },
    }
  },
  "5045": {
    "id": "5045",
    "name": "Echo Elemental",
    "picture": "Sound_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 23,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
        ],
      },
    }
  },
  "15045": {
    "id": "15045",
    "name": "Echo Essence",
    "picture": "Sound_Elemental_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 27,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "5",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
        ],
      },
    }
  },
  "25045": {
    "id": "25045",
    "name": "Echo Incarnate",
    "picture": "Sound_Elemental_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 33,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 5,
        "y": "5",
      },
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "5",
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
        ],
      },
    }
  },
  "5046": {
    "id": "5046",
    "name": "Dawn",
    "picture": "Dawn_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 15,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "5",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "5",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
          },
        ],
      },
    }
  },
  "15046": {
    "id": "15046",
    "name": "Dawnset",
    "picture": "Dawn_Elemental_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "5",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "5",
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "5",
          },
        ],
      },
    }
  },
  "25046": {
    "id": "25046",
    "name": "Dawnrise",
    "picture": "Dawn_Elemental_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 22,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "5",
      },
      {
        "id": "legion",
        "x": 4,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 24,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 4,
            "y": "5",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "5",
          },
          {
            "id": "legion",
            "x": 5,
            "y": "5",
          },
        ],
      },
    }
  },
  "5047": {
    "id": "5047",
    "name": "Sky Fisher",
    "picture": "Sky_Picker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 14,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15047": {
    "id": "15047",
    "name": "Sky Picker",
    "picture": "Sky_Picker_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 28,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25047": {
    "id": "25047",
    "name": "Sky Angler",
    "picture": "Sky_Picker_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 33,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 37,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "health": 38,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5048": {
    "id": "5048",
    "name": "Highborn Rose",
    "picture": "Rose_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 16,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15048": {
    "id": "15048",
    "name": "Noble Rose",
    "picture": "Rose_Elemental_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 19,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "5",
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25048": {
    "id": "25048",
    "name": "Royal Rose",
    "picture": "Rose_Elemental_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 23,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "5",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5049": {
    "id": "5049",
    "name": "Joryl",
    "desc": "The boy Amiri always had an affinity for magic involving stone, even at a very young age.",
    "picture": "Marble_Golem_A",
    "hidden_until": "1459184400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 35,
    "attack": 10,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "attack": 11,
        "health": 37,
        "skill": [],
      },
      "4": {
        "attack": 12,
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 3,
          },
        ],
      },
      "6": {
        "attack": 13,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
        ],
      },
    }
  },
  "15049": {
    "id": "15049",
    "name": "Joryl of Marble",
    "desc": "The marble that Amiri used to awaken Joryl was the very bedrock of his home.",
    "picture": "Marble_Golem_A",
    "hidden_until": "1459184400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 40,
    "attack": 14,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 41,
        "skill": [],
      },
      "3": {
        "attack": 15,
        "health": 42,
        "skill": [],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 6,
          },
        ],
      },
      "5": {
        "attack": 16,
        "health": 44,
        "skill": [],
      },
      "6": {
        "health": 45,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 7,
          },
        ],
      },
    }
  },
  "25049": {
    "id": "25049",
    "name": "Joryl of Onyx Marble",
    "desc": "Joryl followed Amiri, defending their land from invaders and becoming a living legend.",
    "picture": "Marble_Golem_B",
    "hidden_until": "1459184400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 46,
    "attack": 16,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 5,
      },
      {
        "id": "counter",
        "x": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 48,
        "skill": [],
      },
      "3": {
        "attack": 17,
        "health": 50,
        "skill": [],
      },
      "4": {
        "attack": 18,
        "health": 52,
        "skill": [],
      },
      "5": {
        "health": 53,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "counter",
            "x": 8,
          },
        ],
      },
      "6": {
        "attack": 19,
        "health": 54,
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "counter",
            "x": 9,
          },
        ],
      },
    }
  },
  "5050": {
    "id": "5050",
    "name": "Cloud Spear",
    "picture": "Cloud_Pike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 7,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15050": {
    "id": "15050",
    "name": "Soaring Spear",
    "picture": "Cloud_Pike_Frog_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 11,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "25050": {
    "id": "25050",
    "name": "Lightning Spear",
    "picture": "Cloud_Pike_Frog_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 16,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [
          {
            "id": "rally",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "rally",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 18,
        "skill": [
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "5051": {
    "id": "5051",
    "name": "Amphibious Digger",
    "picture": "Shinning_Explorer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 10,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "4",
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "15051": {
    "id": "15051",
    "name": "Amphibious Explorer",
    "picture": "Shinning_Explorer_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 15,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "4",
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "leech",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 4,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 5,
          },
        ],
      },
    }
  },
  "25051": {
    "id": "25051",
    "name": "Amphibious Spelunker",
    "picture": "Shinning_Explorer_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 21,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "4",
      },
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "leech",
        "x": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 7,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "leech",
            "x": 8,
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "4",
          },
          {
            "id": "nullify",
            "x": 3,
          },
          {
            "id": "leech",
            "x": 9,
          },
        ],
      },
    }
  },
  "5052": {
    "id": "5052",
    "name": "Paradise Avian",
    "picture": "Paradise_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 10,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15052": {
    "id": "15052",
    "name": "Wonder Avian",
    "picture": "Paradise_Bird_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 15,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25052": {
    "id": "25052",
    "name": "Utopia Avian",
    "picture": "Paradise_Bird_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 24,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "1",
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 4,
            "y": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "5053": {
    "id": "5053",
    "name": "Anura Witch",
    "desc": "\"Owl's wing, bat's fur, a touch of baboon blood and... TOAD?!\"",
    "picture": "Frog_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 10,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15053": {
    "id": "15053",
    "name": "Anura Sorceress",
    "picture": "Frog_Mage_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 12,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25053": {
    "id": "25053",
    "name": "Anuramancer",
    "picture": "Frog_Mage_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 21,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "health": 24,
        "skill": [
          {
            "id": "strike",
            "x": 7,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5054": {
    "id": "5054",
    "name": "Reckless Ballista",
    "picture": "Reckless_Ballista_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 9,
    "attack": 2,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15054": {
    "id": "15054",
    "name": "Intrepid Ballista",
    "picture": "Reckless_Ballista_A",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 12,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "25054": {
    "id": "25054",
    "name": "Fearless Ballista",
    "picture": "Reckless_Ballista_B",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 15,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "5055": {
    "id": "5055",
    "name": "Galewing",
    "picture": "Wind_Puffer_A",
    "hidden_until": "1462208400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 12,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15055": {
    "id": "15055",
    "name": "Galewing Blast",
    "picture": "Wind_Puffer_A",
    "hidden_until": "1462208400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25055": {
    "id": "25055",
    "name": "Galewing Tempest",
    "picture": "Wind_Puffer_B",
    "hidden_until": "1462208400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 19,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5056": {
    "id": "5056",
    "name": "Kaliri the Foremost",
    "picture": "Avian_Highborn_A",
    "hidden_until": "1463418000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "10",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15056": {
    "id": "15056",
    "name": "Kaliri the Champion",
    "picture": "Avian_Highborn_A",
    "hidden_until": "1463418000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 16,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "10",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "25056": {
    "id": "25056",
    "name": "Kaliri the Paramount",
    "picture": "Avian_Highborn_B",
    "hidden_until": "1463418000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 24,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "10",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 7,
        "health": 26,
        "skill": [],
      },
      "5": {
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "10",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5057": {
    "id": "5057",
    "name": "Skystriker",
    "picture": "Avian_General_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "10",
        "all": "1",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
      "6": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
    }
  },
  "15057": {
    "id": "15057",
    "name": "Great Skystriker",
    "picture": "Avian_General_A",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 16,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "10",
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
          },
        ],
      },
    }
  },
  "25057": {
    "id": "25057",
    "name": "Imperial Skystriker",
    "picture": "Avian_General_B",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 24,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "10",
        "all": "1",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "10",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
          },
        ],
      },
    }
  },
  "5058": {
    "id": "5058",
    "name": "Crescent Moon Owl",
    "picture": "Owl_Knight_A",
    "hidden_until": "1463072400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 25,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "legion",
        "x": 2,
        "y": "10",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15058": {
    "id": "15058",
    "name": "Crescent Moon Guard",
    "picture": "Owl_Knight_A",
    "hidden_until": "1463072400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 28,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 3,
        "y": "10",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 30,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 5,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25058": {
    "id": "25058",
    "name": "Crescent Moon Sentry",
    "picture": "Owl_Knight_B",
    "hidden_until": "1463072400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 32,
    "attack": 7,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 6,
        "y": "10",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 7,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "health": 35,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "legion",
            "x": 8,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5059": {
    "id": "5059",
    "name": "Bemola",
    "desc": "\"Winter is coming.\"",
    "picture": "Ice_Bird_A",
    "hidden_until": "1463677200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","5"],
    "health": 10,
    "attack": 1,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "6": {
        "attack": 2,
        "skill": [],
      },
    }
  },
  "15059": {
    "id": "15059",
    "name": "Bemola the Wind",
    "picture": "Ice_Bird_A",
    "hidden_until": "1463677200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","5"],
    "health": 21,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "6": {
        "attack": 3,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "25059": {
    "id": "25059",
    "name": "Bemola the Frost",
    "picture": "Ice_Bird_B",
    "hidden_until": "1463677200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","5"],
    "health": 24,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
    }
  },
  "5060": {
    "id": "5060",
    "name": "Quack Apprentice",
    "picture": "Avian_Scientist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 10,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15060": {
    "id": "15060",
    "name": "Quack Researcher",
    "picture": "Avian_Scientist_A",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 13,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
    }
  },
  "25060": {
    "id": "25060",
    "name": "Quack Arcanist",
    "picture": "Avian_Scientist_B",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 19,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "nullify",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
    }
  },
  "5061": {
    "id": "5061",
    "name": "Thunderfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_A",
    "hidden_until": "1465837200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 13,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 16,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "15061": {
    "id": "15061",
    "name": "Flashfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_A",
    "hidden_until": "1465837200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 16,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 8,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 8,
          },
        ],
      },
    }
  },
  "25061": {
    "id": "25061",
    "name": "Boltfist Rex",
    "picture": "Legendary_Lightning_Fist_Dragon_B",
    "hidden_until": "1465837200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 26,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 10,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 11,
          },
        ],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 12,
          },
        ],
      },
    }
  },
  "5062": {
    "id": "5062",
    "name": "Cliffhanger Wyrm",
    "picture": "Spike_Blade_Dragon_A",
    "hidden_until": "1464879600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 13,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15062": {
    "id": "15062",
    "name": "Cliffrider Wyrm",
    "picture": "Spike_Blade_Dragon_A",
    "hidden_until": "1464879600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 18,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 29,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25062": {
    "id": "25062",
    "name": "Cliffgazer Wyrm",
    "picture": "Spike_Blade_Dragon_B",
    "hidden_until": "1464879600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 30,
    "attack": 6,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 32,
        "skill": [],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5063": {
    "id": "5063",
    "name": "Runic Dragon",
    "picture": "Rune_Dragon_A",
    "hidden_until": "1465491600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 11,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 14,
        "skill": [],
      },
    }
  },
  "15063": {
    "id": "15063",
    "name": "Runeworn Dragon",
    "picture": "Rune_Dragon_A",
    "hidden_until": "1465491600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 18,
        "skill": [],
      },
    }
  },
  "25063": {
    "id": "25063",
    "name": "Runeglow Dragon",
    "picture": "Rune_Dragon_B",
    "hidden_until": "1465491600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 23,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 3,
        "y": "9",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 4,
            "y": "9",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "legion",
            "x": 5,
            "y": "9",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5064": {
    "id": "5064",
    "name": "Anshar",
    "picture": "Airship_Stalker_A",
    "hidden_until": "1466096400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 18,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "15064": {
    "id": "15064",
    "name": "Anshar, the Airbane",
    "picture": "Airship_Stalker_A",
    "hidden_until": "1466096400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 23,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25064": {
    "id": "25064",
    "name": "Anshar, the Skybane",
    "picture": "Airship_Stalker_B",
    "hidden_until": "1466096400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 26,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "9",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 29,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 30,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "9",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5065": {
    "id": "5065",
    "name": "Hive Guard",
    "desc": "The members of a colony charged with its defense have often evolved precisely for that task.",
    "picture": "Hive_Guard_A",
    "hidden_until": "1466701200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 14,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "13",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "13",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "13",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15065": {
    "id": "15065",
    "name": "Hive Defender",
    "picture": "Hive_Guard_A",
    "hidden_until": "1466701200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 17,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "13",
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25065": {
    "id": "25065",
    "name": "Hive Sentry",
    "picture": "Hive_Guard_B",
    "hidden_until": "1466701200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 20,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "13",
      },
      {
        "id": "protect",
        "x": 5,
        "y": "1",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "13",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5070": {
    "id": "5070",
    "name": "Hornslicer",
    "picture": "Horn_Head_Warrior_A",
    "hidden_until": "1467046800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 21,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15070": {
    "id": "15070",
    "name": "Horncutter",
    "picture": "Horn_Head_Warrior_A",
    "hidden_until": "1467046800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 27,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "health": 29,
        "skill": [],
      },
      "5": {
        "health": 30,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 31,
        "skill": [],
      },
    }
  },
  "25070": {
    "id": "25070",
    "name": "Hornsaber",
    "picture": "Horn_Head_Warrior_B",
    "hidden_until": "1467046800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 32,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 6,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 35,
        "skill": [],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
    }
  },
  "5066": {
    "id": "5066",
    "name": "Scarab Beast",
    "picture": "MultiWeapon_Fat_Stack_A",
    "hidden_until": "1467306000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 28,
    "attack": 5,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 32,
        "skill": [],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15066": {
    "id": "15066",
    "name": "Scarab Brute",
    "picture": "MultiWeapon_Fat_Stack_A",
    "hidden_until": "1467306000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 35,
    "attack": 6,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "pierce",
        "x": 6,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 37,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 41,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25066": {
    "id": "25066",
    "name": "Scarab Barbarian",
    "picture": "MultiWeapon_Fat_Stack_B",
    "hidden_until": "1467306000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 46,
    "attack": 8,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "pierce",
        "x": 7,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "pierce",
            "x": 8,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "pierce",
            "x": 8,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "4": {
        "attack": 9,
        "health": 48,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "pierce",
            "x": 10,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "6": {
        "attack": 12,
        "health": 50,
        "skill": [
          {
            "id": "armored",
            "x": 7,
          },
          {
            "id": "pierce",
            "x": 12,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5067": {
    "id": "5067",
    "name": "Squito Roamer",
    "picture": "Stinger_Fist_A",
    "hidden_until": "1467910800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 14,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15067": {
    "id": "15067",
    "name": "Squito Bandit",
    "picture": "Stinger_Fist_A",
    "hidden_until": "1467910800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "attack": 7,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25067": {
    "id": "25067",
    "name": "Bansquito",
    "picture": "Stinger_Fist_B",
    "hidden_until": "1467910800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 20,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "5068": {
    "id": "5068",
    "name": "Aht-Aht Carrier",
    "picture": "Longleg_Mountain_Nomad_A",
    "hidden_until": "1468515600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 9,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "13",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15068": {
    "id": "15068",
    "name": "Aht-Aht Transporter",
    "picture": "Longleg_Mountain_Nomad_A",
    "hidden_until": "1468515600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 13,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "13",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "25068": {
    "id": "25068",
    "name": "Aht-Aht Trekker",
    "picture": "Longleg_Mountain_Nomad_B",
    "hidden_until": "1468515600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 16,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "13",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "13",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "5069": {
    "id": "5069",
    "name": "Heralidae",
    "picture": "Mysterious_Wing_Cloak_A",
    "hidden_until": "1469120400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 17,
    "attack": 0,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "13",
      },
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15069": {
    "id": "15069",
    "name": "Heralidae Aegis",
    "picture": "Mysterious_Wing_Cloak_A",
    "hidden_until": "1469120400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 22,
    "attack": 0,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 7,
        "y": "13",
      },
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [
          {
            "id": "heal",
            "x": 8,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 30,
        "skill": [
          {
            "id": "heal",
            "x": 9,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 31,
        "skill": [],
      },
    }
  },
  "25069": {
    "id": "25069",
    "name": "Heralidae Bastion",
    "picture": "Mysterious_Wing_Cloak_B",
    "hidden_until": "1469120400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 33,
    "attack": 0,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 10,
        "y": "13",
      },
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 36,
        "skill": [
          {
            "id": "heal",
            "x": 11,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 12,
            "y": "13",
          },
          {
            "id": "heal",
            "x": 5,
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5071": {
    "id": "5071",
    "name": "Stoic Watcher",
    "picture": "Void_Conqueror_A",
    "hidden_until": "1469725200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 19,
    "attack": 2,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [],
      },
    }
  },
  "15071": {
    "id": "15071",
    "name": "Stoic Onlooker",
    "picture": "Void_Conqueror_A",
    "hidden_until": "1469725200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 23,
    "attack": 3,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 27,
        "skill": [],
      },
      "6": {
        "health": 28,
        "skill": [],
      },
    }
  },
  "25071": {
    "id": "25071",
    "name": "Fray the Stoic",
    "picture": "Void_Conqueror_B",
    "hidden_until": "1469725200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 28,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5072": {
    "id": "5072",
    "name": "Blind Seer",
    "picture": "Feather_Eyes_A",
    "hidden_until": "1470330000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
    }
  },
  "15072": {
    "id": "15072",
    "name": "Blind Sage",
    "picture": "Feather_Eyes_A",
    "hidden_until": "1470330000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "6",
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
    }
  },
  "25072": {
    "id": "25072",
    "name": "Blind Enlightened",
    "picture": "Feather_Eyes_B",
    "hidden_until": "1470330000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 20,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 2,
        "y": "6",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "legion",
            "x": 2,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 23,
        "skill": [
          {
            "id": "legion",
            "x": 3,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 7,
          },
        ],
      },
      "5": {
        "attack": 7,
        "health": 24,
        "skill": [
          {
            "id": "legion",
            "x": 4,
            "y": "6",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 8,
          },
        ],
      },
    }
  },
  "5073": {
    "id": "5073",
    "name": "Shell Invader",
    "picture": "Crustacean_Hell_Bringer_A",
    "hidden_until": "1470934800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 20,
    "attack": 3,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "15073": {
    "id": "15073",
    "name": "Shell Emerger",
    "picture": "Crustacean_Hell_Bringer_A",
    "hidden_until": "1470934800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 24,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 27,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "25073": {
    "id": "25073",
    "name": "Shell Buckler",
    "picture": "Crustacean_Hell_Bringer_B",
    "hidden_until": "1470934800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 28,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 4,
          },
        ],
      },
    }
  },
  "5074": {
    "id": "5074",
    "name": "Godfried the Hunter",
    "desc": "\"And in the face of the beast Godfried sang the song of his death, proudly and with a smile on his face.\" - The Tales of Luminis",
    "picture": "Beast_Slayer_Angel_A",
    "hidden_until": "1471539600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 14,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 8,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15074": {
    "id": "15074",
    "name": "Godfried the Slayer",
    "picture": "Beast_Slayer_Angel_A",
    "hidden_until": "1471539600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25074": {
    "id": "25074",
    "name": "Godfried Goldfyre",
    "picture": "Beast_Slayer_Angel_B",
    "hidden_until": "1471539600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 22,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5075": {
    "id": "5075",
    "name": "Arith",
    "picture": "Blind_Justice_A",
    "hidden_until": "1469466000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 8,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 11,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15075": {
    "id": "15075",
    "name": "Arith the Justicar",
    "picture": "Blind_Justice_A",
    "hidden_until": "1469466000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 12,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "25075": {
    "id": "25075",
    "name": "Arith, Grand Justicar",
    "picture": "Blind_Justice_B",
    "hidden_until": "1469466000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 14,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5076": {
    "id": "5076",
    "name": "Sorath, the Valkyrie",
    "picture": "Ice_Head_Angel_A",
    "hidden_until": "1471280400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 19,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "15076": {
    "id": "15076",
    "name": "Sorath, the Champion",
    "picture": "Ice_Head_Angel_A",
    "hidden_until": "1471280400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 24,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "attack": 5,
        "health": 28,
        "skill": [],
      },
      "6": {
        "attack": 6,
        "health": 30,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "25076": {
    "id": "25076",
    "name": "Sorath, the Frostedge",
    "picture": "Ice_Head_Angel_B",
    "hidden_until": "1471280400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 35,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 37,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 38,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "attack": 9,
        "health": 39,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "5077": {
    "id": "5077",
    "name": "Everspark Ace",
    "desc": "When Everspark enters the battlefield it tends to shock the opposition.",
    "picture": "Lightning_Angel_A",
    "hidden_until": "1471712400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 10,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "15077": {
    "id": "15077",
    "name": "Everbolt Ace",
    "picture": "Lightning_Angel_A",
    "hidden_until": "1471712400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 13,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 2,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "25077": {
    "id": "25077",
    "name": "Everstorm Ace",
    "picture": "Lightning_Angel_B",
    "hidden_until": "1471712400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 16,
    "attack": 2,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "5078": {
    "id": "5078",
    "name": "Asariel",
    "picture": "Cannon_Angel_A",
    "hidden_until": "1470243600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 16,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 6,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15078": {
    "id": "15078",
    "name": "Asariel the Arbalest",
    "picture": "Cannon_Angel_A",
    "hidden_until": "1470243600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 20,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "attack": 7,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25078": {
    "id": "25078",
    "name": "Asariel the Wrath Engine",
    "picture": "Cannon_Angel_B",
    "hidden_until": "1470243600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 24,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 8,
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5079": {
    "id": "5079",
    "name": "Cyclopnid",
    "picture": "Steel_Elemental_A",
    "hidden_until": "1472058000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 26,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "1",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 5,
        "health": 29,
        "skill": [],
      },
      "5": {
        "health": 30,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
    }
  },
  "15079": {
    "id": "15079",
    "name": "Cyclopnid Alloyborn",
    "picture": "Steel_Elemental_A",
    "hidden_until": "1472058000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 31,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "1",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 33,
        "skill": [],
      },
      "5": {
        "health": 34,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
    }
  },
  "25079": {
    "id": "25079",
    "name": "Cyclopnid Oreborn",
    "picture": "Steel_Elemental_B",
    "hidden_until": "1472058000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 35,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "1",
        "all": "1",
      },
      {
        "id": "strike",
        "x": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 7,
          },
        ],
      },
      "3": {
        "attack": 7,
        "health": 37,
        "skill": [],
      },
      "4": {
        "health": 38,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 7,
          },
        ],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 8,
          },
        ],
      },
      "6": {
        "attack": 8,
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "1",
            "all": "1",
          },
          {
            "id": "strike",
            "x": 9,
          },
        ],
      },
    }
  },
  "5080": {
    "id": "5080",
    "name": "Djinnflame Brawler",
    "picture": "Blue_Flame_Fighter_Elemental_A",
    "hidden_until": "1472749200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 10,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "5",
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "5",
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
    }
  },
  "15080": {
    "id": "15080",
    "name": "Djinnflame Fighter",
    "picture": "Blue_Flame_Fighter_Elemental_A",
    "hidden_until": "1472749200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 15,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "5",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "health": 19,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "25080": {
    "id": "25080",
    "name": "Djinnflame Master",
    "picture": "Blue_Flame_Fighter_Elemental_B",
    "hidden_until": "1472749200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 20,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 5,
        "y": "5",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 23,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 24,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 6,
            "y": "5",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "5081": {
    "id": "5081",
    "name": "Brahzee",
    "desc": "\"... an' that cloud looks like a... long legged... sheep... thing... Hey, is it looking at us?\" - Klepplo Goblin Trader",
    "picture": "Giant_Cloud_Sheep_A",
    "hidden_until": "1473354000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 8,
    "attack": 1,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15081": {
    "id": "15081",
    "name": "Cumulus Brahzee",
    "picture": "Giant_Cloud_Sheep_A",
    "hidden_until": "1473354000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 11,
    "attack": 1,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 2,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "evade",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25081": {
    "id": "25081",
    "name": "Nimbus Brahzee",
    "picture": "Giant_Cloud_Sheep_B",
    "hidden_until": "1473354000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 14,
    "attack": 2,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "evade",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "evade",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5082": {
    "id": "5082",
    "name": "Memory",
    "picture": "Mist_Stalker_A",
    "hidden_until": "1473958800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 14,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 5,
        "health": 17,
        "skill": [],
      },
    }
  },
  "15082": {
    "id": "15082",
    "name": "Wistful Memory",
    "picture": "Mist_Stalker_A",
    "hidden_until": "1473958800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 18,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "5",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "4": {
        "attack": 6,
        "health": 19,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
        ],
      },
    }
  },
  "25082": {
    "id": "25082",
    "name": "Vindictive Memory",
    "picture": "Mist_Stalker_B",
    "hidden_until": "1473958800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 20,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "5",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "health": 21,
        "skill": [],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 24,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "5",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 5,
          },
        ],
      },
    }
  },
  "5083": {
    "id": "5083",
    "name": "Honor Risen",
    "desc": "In death their soul is consumed by the blade, walking the land as a spirit.",
    "picture": "Winter_Wretch_A",
    "hidden_until": "1474563600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 4,
    "attack": 1,
    "cost": 0,
    "maxLevel": 6,
    "skill": [
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 5,
        "skill": [],
      },
      "3": {
        "health": 6,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
      "5": {
        "health": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
    }
  },
  "15083": {
    "id": "15083",
    "name": "Honor Fulfiller",
    "desc": "The blade seeks more souls, carrying the corpse of its last victim in its quest.",
    "picture": "Winter_Wretch_A",
    "hidden_until": "1474563600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 8,
    "attack": 2,
    "cost": 0,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "health": 10,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "25083": {
    "id": "25083",
    "name": "Honor Bound",
    "picture": "Winter_Wretch_B",
    "hidden_until": "1474563600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 11,
    "attack": 3,
    "cost": 0,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 4,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 13,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "5084": {
    "id": "5084",
    "name": "Dotora Spirit",
    "desc": "Spirits of long lost warriors of the Dotora civilization, they roam the Salt Wastes without purpose.",
    "picture": "Torsoless_Warrior_A",
    "hidden_until": "1475168400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 7,
    "attack": 2,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 8,
          },
        ],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 7,
          },
        ],
      },
    }
  },
  "15084": {
    "id": "15084",
    "name": "Dotora Specter",
    "picture": "Torsoless_Warrior_A",
    "hidden_until": "1475168400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 9,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "5": {
        "health": 12,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25084": {
    "id": "25084",
    "name": "Dotora Shadow",
    "picture": "Torsoless_Warrior_B",
    "hidden_until": "1475168400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 13,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5085": {
    "id": "5085",
    "name": "Haunting Heir",
    "picture": "Kimono_Ghost_A",
    "hidden_until": "1475773200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15085": {
    "id": "15085",
    "name": "Vindictive Heir",
    "picture": "Kimono_Ghost_A",
    "hidden_until": "1475773200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 16,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 19,
        "skill": [],
      },
    }
  },
  "25085": {
    "id": "25085",
    "name": "Avenging Heir",
    "picture": "Kimono_Ghost_B",
    "hidden_until": "1475773200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 20,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5086": {
    "id": "5086",
    "name": "Spirit Blades",
    "picture": "Haunted_Arsenal_A",
    "hidden_until": "1476378000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 20,
    "attack": 4,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 23,
        "skill": [],
      },
    }
  },
  "15086": {
    "id": "15086",
    "name": "Possessed Blades",
    "picture": "Haunted_Arsenal_A",
    "hidden_until": "1476378000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 24,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 27,
        "skill": [],
      },
    }
  },
  "25086": {
    "id": "25086",
    "name": "Jester's Blades",
    "picture": "Haunted_Arsenal_B",
    "hidden_until": "1476378000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 28,
    "attack": 6,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 6,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 6,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "attack": 7,
        "health": 29,
        "skill": [],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 7,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5087": {
    "id": "5087",
    "name": "Apollyon",
    "desc": "Apollyon's sacrifice saved hundreds, but the full cost of his death was never understood until his return.",
    "picture": "Undead_Angel_A",
    "hidden_until": "1476118800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 18,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 1,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15087": {
    "id": "15087",
    "name": "Apollyon the Sinful",
    "picture": "Undead_Angel_A",
    "hidden_until": "1476118800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 23,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 1,
        "y": "7",
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "25087": {
    "id": "25087",
    "name": "Apollyon the Ruin",
    "picture": "Undead_Angel_B",
    "hidden_until": "1476118800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 32,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "all": "1",
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 37,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "all": "1",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5088": {
    "id": "5088",
    "name": "Betrayal",
    "picture": "Demon_Skull_Goblin_Angel_A",
    "hidden_until": "1476982800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 9,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "valor",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15088": {
    "id": "15088",
    "name": "Harsh Betrayal",
    "picture": "Demon_Skull_Goblin_Angel_A",
    "hidden_until": "1476982800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 12,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25088": {
    "id": "25088",
    "name": "Fatal Betrayal",
    "picture": "Demon_Skull_Goblin_Angel_B",
    "hidden_until": "1476982800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 14,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5089": {
    "id": "5089",
    "name": "Gomblit",
    "desc": "Drawing Death in Goblin Tarot is quite literal.",
    "picture": "Astrological_Goblin_A",
    "hidden_until": "1477587600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15089": {
    "id": "15089",
    "name": "Gomblit Soothsayer",
    "picture": "Astrological_Goblin_A",
    "hidden_until": "1477587600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 13,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
    }
  },
  "25089": {
    "id": "25089",
    "name": "Gomblit Soothslayer",
    "picture": "Astrological_Goblin_B",
    "hidden_until": "1477587600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 15,
    "attack": 6,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "5090": {
    "id": "5090",
    "name": "Reks' Faithful",
    "picture": "Cleric_Goblin_A",
    "hidden_until": "1478192400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 19,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "11",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 23,
        "skill": [],
      },
    }
  },
  "15090": {
    "id": "15090",
    "name": "Reks' Devoted",
    "picture": "Cleric_Goblin_A",
    "hidden_until": "1478192400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 23,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 3,
        "y": "11",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 30,
        "skill": [],
      },
      "6": {
        "health": 32,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "25090": {
    "id": "25090",
    "name": "Reks' Diviner",
    "picture": "Cleric_Goblin_B",
    "hidden_until": "1478192400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 35,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "all": "1",
      },
      {
        "id": "heal",
        "x": 5,
        "y": "11",
      },
      {
        "id": "jam",
        "c": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 6,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "3": {
        "attack": 8,
        "health": 36,
        "skill": [],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 7,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
      "6": {
        "attack": 9,
        "health": 39,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "all": "1",
          },
          {
            "id": "heal",
            "x": 8,
            "y": "11",
          },
          {
            "id": "jam",
            "c": 2,
          },
        ],
      },
    }
  },
  "5091": {
    "id": "5091",
    "name": "Armor Thief",
    "picture": "Knight_Goblin_A",
    "hidden_until": "1478797200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 8,
    "attack": 2,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "11",
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "11",
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "attack": 3,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "11",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15091": {
    "id": "15091",
    "name": "Armor Bandit",
    "picture": "Knight_Goblin_A",
    "hidden_until": "1478797200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 11,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "11",
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "11",
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "25091": {
    "id": "25091",
    "name": "Armor Swindler",
    "picture": "Knight_Goblin_B",
    "hidden_until": "1478797200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 13,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "11",
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 14,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "health": 17,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "11",
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5092": {
    "id": "5092",
    "name": "Tundra Reaver",
    "picture": "Tundra_Goblin_A",
    "hidden_until": "1477933200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 14,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 17,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15092": {
    "id": "15092",
    "name": "Tundra Berserker",
    "picture": "Tundra_Goblin_A",
    "hidden_until": "1477933200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "health": 21,
        "skill": [],
      },
    }
  },
  "25092": {
    "id": "25092",
    "name": "Tundra Battlemaster",
    "picture": "Tundra_Goblin_B",
    "hidden_until": "1477933200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 21,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 23,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5093": {
    "id": "5093",
    "name": "Scaly Newborn",
    "desc": "\"...and the whistling sound they make when they first hatch is SO ADORABLE!\" - Elaria Researcher",
    "picture": "Wind_Dragonling_A",
    "hidden_until": "1479402000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 5,
    "attack": 1,
    "cost": 0,
    "maxLevel": 5,
    "skill": [
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 6,
        "skill": [],
      },
      "3": {
        "health": 7,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "skill": [],
      },
      "5": {
        "health": 8,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15093": {
    "id": "15093",
    "name": "Breezy Newborn",
    "desc": "\"Even at a young age the force which they can expell wind can knock a grown man in armor from his feet.\" - Elaria Researcher",
    "picture": "Wind_Dragonling_A",
    "hidden_until": "1479402000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 9,
    "attack": 2,
    "cost": 0,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "attack": 3,
        "skill": [],
      },
      "5": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "25093": {
    "id": "25093",
    "name": "Gusty Newborn",
    "picture": "Wind_Dragonling_B",
    "hidden_until": "1479402000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 12,
    "attack": 3,
    "cost": 0,
    "maxLevel": 5,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5094": {
    "id": "5094",
    "name": "Luminesce Dragon",
    "picture": "Prism_Dragon_A",
    "hidden_until": "1480006800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 14,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15094": {
    "id": "15094",
    "name": "Luminesce Serpentine",
    "picture": "Prism_Dragon_A",
    "hidden_until": "1480006800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [],
      },
    }
  },
  "25094": {
    "id": "25094",
    "name": "Luminesce Scalelord",
    "picture": "Prism_Dragon_B",
    "hidden_until": "1480006800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 23,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "valor",
            "x": 9,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "valor",
            "x": 10,
          },
          {
            "id": "protect",
            "x": 8,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5095": {
    "id": "5095",
    "name": "Silurigon",
    "picture": "Catfish_Dragon_A",
    "hidden_until": "1480611600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","12"],
    "health": 7,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
        ],
      },
    }
  },
  "15095": {
    "id": "15095",
    "name": "Shepherd Silurigon",
    "picture": "Catfish_Dragon_A",
    "hidden_until": "1480611600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","12"],
    "health": 11,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
        ],
      },
    }
  },
  "25095": {
    "id": "25095",
    "name": "Overseer Silurigon",
    "picture": "Catfish_Dragon_B",
    "hidden_until": "1480611600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","12"],
    "health": 15,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 6,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "9",
          },
        ],
      },
    }
  },
  "5096": {
    "id": "5096",
    "name": "Enclave Dragon",
    "desc": "\"Jonan thought he had outsmarted the army by using the caverns. Little did he know they had anticipated such a move.\" - The Tales of Luminis",
    "picture": "Enclave_Guard_Dragon-01",
    "hidden_until": "1481216400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 16,
    "attack": 2,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
    }
  },
  "15096": {
    "id": "15096",
    "name": "Enclave Guardian",
    "picture": "Enclave_Guard_Dragon-01",
    "hidden_until": "1481216400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 18,
    "attack": 2,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "25096": {
    "id": "25096",
    "name": "Enclave Scalelord",
    "picture": "Enclave_Guard_Dragon_B",
    "hidden_until": "1481216400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 20,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5097": {
    "id": "5097",
    "name": "Sierra Dweller",
    "picture": "Hydra_Dragon_A",
    "hidden_until": "1479142800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 28,
    "attack": 4,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [],
      },
    }
  },
  "15097": {
    "id": "15097",
    "name": "Sierra Stomper",
    "picture": "Hydra_Dragon_A",
    "hidden_until": "1479142800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 35,
    "attack": 4,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 36,
        "skill": [],
      },
      "3": {
        "health": 37,
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 38,
        "skill": [],
      },
      "5": {
        "health": 39,
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 40,
        "skill": [],
      },
    }
  },
  "25097": {
    "id": "25097",
    "name": "Sierra Crusher",
    "picture": "Hydra_Dragon_B",
    "hidden_until": "1479142800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 42,
    "attack": 4,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 43,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 44,
        "skill": [],
      },
      "4": {
        "health": 45,
        "skill": [],
      },
      "5": {
        "health": 46,
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 48,
        "skill": [
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5098": {
    "id": "5098",
    "name": "Skybound United",
    "picture": "Angel_and_Drakes_A",
    "hidden_until": "1480352400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","9"],
    "health": 18,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 1,
        "y": "9",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 1,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15098": {
    "id": "15098",
    "name": "Skybound Concord",
    "picture": "Angel_and_Drakes_A",
    "hidden_until": "1480352400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","9"],
    "health": 23,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "9",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "health": 26,
        "skill": [],
      },
      "5": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25098": {
    "id": "25098",
    "name": "Skybound Alliance",
    "picture": "Angel_and_Drakes_B",
    "hidden_until": "1480352400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","9"],
    "health": 28,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 5,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "9",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "9",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5099": {
    "id": "5099",
    "name": "Croak Dropper",
    "picture": "Hot_Air_Balloon_Frog_A",
    "hidden_until": "1481821200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 12,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "desc": "\"Everyone looks like ants from up here... now I'm hungry.\"",
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
          },
        ],
      },
    }
  },
  "15099": {
    "id": "15099",
    "name": "Croak Ace",
    "picture": "Hot_Air_Balloon_Frog_A",
    "hidden_until": "1481821200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 16,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 2,
          },
        ],
      },
    }
  },
  "25099": {
    "id": "25099",
    "name": "Croak Bomber",
    "picture": "Hot_Air_Balloon_Frog_B",
    "hidden_until": "1481821200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 20,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "health": 22,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
    }
  },
  "5100": {
    "id": "5100",
    "name": "Lifegiver Augur",
    "picture": "Frog_Wizard_A",
    "hidden_until": "1482426000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 11,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "6": {
        "health": 15,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "15100": {
    "id": "15100",
    "name": "Bestower Augur",
    "picture": "Frog_Wizard_A",
    "hidden_until": "1482426000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 16,
    "attack": 8,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 18,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "5": {
        "attack": 9,
        "health": 19,
        "skill": [],
      },
      "6": {
        "health": 20,
        "skill": [],
      },
    }
  },
  "25100": {
    "id": "25100",
    "name": "Genesis Augur",
    "picture": "Frog_Wizard_B",
    "hidden_until": "1482426000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 24,
    "attack": 9,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 6,
        "y": "4",
      },
      {
        "id": "strike",
        "x": 6,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 10,
        "skill": [
          {
            "id": "protect",
            "x": 7,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "attack": 11,
        "health": 26,
        "skill": [],
      },
      "5": {
        "health": 28,
        "skill": [
          {
            "id": "protect",
            "x": 8,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 7,
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 9,
            "y": "4",
          },
          {
            "id": "strike",
            "x": 8,
          },
          {
            "id": "weaken",
            "x": 7,
          },
        ],
      },
    }
  },
  "5101": {
    "id": "5101",
    "name": "Sycophant",
    "picture": "Frog_Casanova_A",
    "hidden_until": "1483030800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 8,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "6": {
        "health": 11,
        "skill": [],
      },
    }
  },
  "15101": {
    "id": "15101",
    "name": "Alluring Sycophant",
    "picture": "Frog_Casanova_A",
    "hidden_until": "1483030800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 11,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "4",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "25101": {
    "id": "25101",
    "name": "Adored Sycophant",
    "picture": "Frog_Casanova_B",
    "hidden_until": "1483030800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 14,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "4",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "4",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "4",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "4",
          },
        ],
      },
    }
  },
  "5102": {
    "id": "5102",
    "name": "Tribe Tracker",
    "picture": "Double_Bola_Frog_A",
    "hidden_until": "1483635600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 13,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15102": {
    "id": "15102",
    "name": "Tribe Sleuth",
    "picture": "Double_Bola_Frog_A",
    "hidden_until": "1483635600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [
          {
            "id": "weaken",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25102": {
    "id": "25102",
    "name": "Tribe Upriser",
    "picture": "Double_Bola_Frog_B",
    "hidden_until": "1483635600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 18,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "weaken",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "weaken",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5103": {
    "id": "5103",
    "name": "Mother of Solars",
    "picture": "Frog_Space_Mom_A",
    "hidden_until": "1481821200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 14,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "y": "4",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15103": {
    "id": "15103",
    "name": "Mother of Galaxies",
    "picture": "Frog_Space_Mom_A",
    "hidden_until": "1481821200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 25,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "4",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 28,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "25103": {
    "id": "25103",
    "name": "Mother of the Universe",
    "picture": "Frog_Space_Mom_B",
    "hidden_until": "1481821200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4"],
    "health": 32,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "4",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 35,
        "skill": [
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "counter",
            "x": 9,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 38,
        "skill": [
          {
            "id": "counter",
            "x": 10,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "4",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5104": {
    "id": "5104",
    "name": "Pisces",
    "picture": "Flying_Fish_A",
    "hidden_until": "1484586000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","12"],
    "health": 24,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15104": {
    "id": "15104",
    "name": "Pisces in Flight",
    "picture": "Flying_Fish_A",
    "hidden_until": "1484586000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","12"],
    "health": 28,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "attack": 9,
        "skill": [],
      },
      "6": {
        "health": 31,
        "skill": [],
      },
    }
  },
  "25104": {
    "id": "25104",
    "name": "Pisces Ascending",
    "picture": "Flying_Fish_B",
    "hidden_until": "1484586000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10","12"],
    "health": 32,
    "attack": 9,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "attack": 10,
        "skill": [],
      },
      "4": {
        "health": 34,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5105": {
    "id": "5105",
    "name": "Sea Whisperer",
    "desc": "\"Sweet nothings.\"",
    "picture": "Goldfish_Tamer_A",
    "hidden_until": "1486400400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 8,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "legion",
        "x": 1,
        "y": "12",
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 9,
        "skill": [],
      },
      "3": {
        "health": 10,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "12",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "12",
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15105": {
    "id": "15105",
    "name": "Sea Caller",
    "picture": "Goldfish_Tamer_A",
    "hidden_until": "1486400400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 12,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "12",
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "12",
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "12",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "12",
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25105": {
    "id": "25105",
    "name": "Sea Summoner",
    "picture": "Goldfish_Tamer_B",
    "hidden_until": "1486400400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 16,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "12",
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "12",
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "12",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "12",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "12",
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "12",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5106": {
    "id": "5106",
    "name": "Acuro, Sea Captain",
    "picture": "Seafolk_Merfolk_Warlord_A",
    "hidden_until": "1484240400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "12",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "12",
            "all": "1",
          },
        ],
      },
    }
  },
  "15106": {
    "id": "15106",
    "name": "Acuro, Sea Lord",
    "picture": "Seafolk_Merfolk_Warlord_A",
    "hidden_until": "1484240400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 18,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "12",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "12",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "12",
            "all": "1",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "12",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "12",
            "all": "1",
          },
        ],
      },
    }
  },
  "25106": {
    "id": "25106",
    "name": "Acuro, Sea King",
    "picture": "Seafolk_Merfolk_Warlord_B",
    "hidden_until": "1484240400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 22,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "12",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "12",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 24,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "12",
            "all": "1",
          },
        ],
      },
      "6": {
        "attack": 8,
        "health": 26,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "12",
          },
          {
            "id": "rally",
            "x": 4,
            "y": "12",
            "all": "1",
          },
        ],
      },
    }
  },
  "5107": {
    "id": "5107",
    "name": "Thrumming Beacon",
    "picture": "Guardian_Dolphin_A",
    "hidden_until": "1484845200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 8,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "12",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "12",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "12",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "12",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "attack": 4,
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "12",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "12",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15107": {
    "id": "15107",
    "name": "Reverberating Beacon",
    "picture": "Guardian_Dolphin_A",
    "hidden_until": "1484845200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "12",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "12",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "12",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "12",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "12",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "12",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25107": {
    "id": "25107",
    "name": "Aided Beacon",
    "picture": "Guardian_Dolphin_B",
    "hidden_until": "1484845200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 13,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "12",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "12",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "12",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "12",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5108": {
    "id": "5108",
    "name": "Aurora Skimmer",
    "picture": "Sky_Manta_Rays_A",
    "hidden_until": "1485450000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 16,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "15108": {
    "id": "15108",
    "name": "Aurora Grazer",
    "picture": "Sky_Manta_Rays_A",
    "hidden_until": "1485450000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 21,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "heal",
        "x": 5,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 6,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 6,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 7,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 25,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "heal",
            "x": 7,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
    }
  },
  "25108": {
    "id": "25108",
    "name": "Aurora Shaver",
    "picture": "Sky_Manta_Rays_B",
    "hidden_until": "1485450000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 26,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "valor",
        "x": 7,
      },
      {
        "id": "heal",
        "x": 7,
        "y": "12",
      },
      {
        "id": "frost",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 8,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 28,
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 8,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 29,
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 9,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 31,
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "heal",
            "x": 9,
            "y": "12",
          },
          {
            "id": "frost",
            "x": 4,
          },
        ],
      },
    }
  },
  "5109": {
    "id": "5109",
    "name": "Cyclospout",
    "picture": "Sky_Jellyfish_A",
    "hidden_until": "1486054800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 22,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "12",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 23,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 24,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 25,
        "skill": [],
      },
      "6": {
        "health": 26,
        "skill": [
          {
            "id": "protect",
            "x": 1,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "15109": {
    "id": "15109",
    "name": "Whirlospout",
    "picture": "Sky_Jellyfish_A",
    "hidden_until": "1486054800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 27,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "12",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 28,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 29,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 30,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "health": 31,
        "skill": [],
      },
      "6": {
        "health": 32,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "25109": {
    "id": "25109",
    "name": "Tetraspout",
    "picture": "Sky_Jellyfish_B",
    "hidden_until": "1486054800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["12"],
    "health": 33,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "12",
        "all": "1",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "3": {
        "attack": 7,
        "health": 34,
        "skill": [],
      },
      "4": {
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "12",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 2,
          },
        ],
      },
    }
  },
  "5110": {
    "id": "5110",
    "name": "Alectryon",
    "picture": "Stormcloud_Rooster_A",
    "hidden_until": "1487005200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 26,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 29,
        "skill": [],
      },
      "6": {
        "health": 30,
        "skill": [],
      },
    }
  },
  "15110": {
    "id": "15110",
    "name": "Alectryon, Sky Regent",
    "picture": "Stormcloud_Rooster_A",
    "hidden_until": "1487005200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 31,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 32,
        "skill": [],
      },
      "6": {
        "health": 33,
        "skill": [],
      },
    }
  },
  "25110": {
    "id": "25110",
    "name": "Alectryon, Arc Regent",
    "picture": "Stormcloud_Rooster_B",
    "hidden_until": "1487005200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 34,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 6,
          },
        ],
      },
    }
  },
  "5111": {
    "id": "5111",
    "name": "Bennu",
    "picture": "Guardian_Angel_Dove_A",
    "hidden_until": "1488214800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","10"],
    "health": 10,
    "attack": 2,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "10",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "6": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "15111": {
    "id": "15111",
    "name": "Shining Bennu",
    "picture": "Guardian_Angel_Dove_A",
    "hidden_until": "1488214800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","10"],
    "health": 13,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "10",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 15,
        "skill": [],
      },
      "6": {
        "health": 16,
        "skill": [],
      },
    }
  },
  "25111": {
    "id": "25111",
    "name": "Brilliant Bennu",
    "picture": "Guardian_Angel_Dove_B",
    "hidden_until": "1488214800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","10"],
    "health": 16,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 1,
        "y": "10",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 1,
            "y": "10",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "10",
            "all": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5112": {
    "id": "5112",
    "name": "Cloudwing Chaser",
    "picture": "Bird_Cloud_Chaser_A",
    "hidden_until": "1486659600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 18,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "15112": {
    "id": "15112",
    "name": "Cloudwing Seeker",
    "picture": "Bird_Cloud_Chaser_A",
    "hidden_until": "1486659600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 21,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 22,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 23,
        "skill": [],
      },
      "5": {
        "health": 24,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "25112": {
    "id": "25112",
    "name": "Cloudwing Deadeye",
    "picture": "Bird_Cloud_Chaser_B",
    "hidden_until": "1486659600000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 25,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "5113": {
    "id": "5113",
    "name": "Bishop Rook",
    "picture": "Crow_Knight_A",
    "hidden_until": "1487264400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 6,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 7,
        "skill": [],
      },
      "3": {
        "health": 8,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "10",
          },
        ],
      },
      "5": {
        "health": 9,
        "skill": [],
      },
    }
  },
  "15113": {
    "id": "15113",
    "name": "Knight Rook",
    "picture": "Crow_Knight_A",
    "hidden_until": "1487264400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 10,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "10",
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "25113": {
    "id": "25113",
    "name": "King Rook",
    "picture": "Crow_Knight_B",
    "hidden_until": "1487264400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 14,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "10",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "protect",
            "x": 5,
            "y": "10",
          },
        ],
      },
    }
  },
  "5114": {
    "id": "5114",
    "name": "Wingward",
    "picture": "Wing_Shield_Avian_A",
    "hidden_until": "1487869200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 18,
    "attack": 5,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
    }
  },
  "15114": {
    "id": "15114",
    "name": "Stout Wingward",
    "picture": "Wing_Shield_Avian_A",
    "hidden_until": "1487869200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 22,
    "attack": 6,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 1,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "10",
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 1,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "10",
          },
        ],
      },
    }
  },
  "25114": {
    "id": "25114",
    "name": "Gallant Wingward",
    "picture": "Wing_Shield_Avian_B",
    "hidden_until": "1487869200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 30,
    "attack": 8,
    "cost": 3,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 2,
        "all": "1",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "10",
      },
    ],
    "upgrades": {
      "2": {
        "health": 32,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "protect",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 4,
            "y": "10",
          },
        ],
      },
      "4": {
        "health": 35,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "all": "1",
          },
          {
            "id": "legion",
            "x": 5,
            "y": "10",
          },
        ],
      },
    }
  },
  "5115": {
    "id": "5115",
    "name": "Papyrus Crane",
    "desc": "Friends come with some assembly required.",
    "picture": "Paper_Crane_Flock_A",
    "hidden_until": "1488474000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 9,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "10",
      },
      {
        "id": "heal",
        "x": 1,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 5,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 2,
            "y": "1",
          },
        ],
      },
    }
  },
  "15115": {
    "id": "15115",
    "name": "Parchment Crane",
    "picture": "Paper_Crane_Flock_A",
    "hidden_until": "1488474000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 11,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "10",
      },
      {
        "id": "heal",
        "x": 2,
        "y": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 3,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 4,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
    }
  },
  "25115": {
    "id": "25115",
    "name": "Origami Crane",
    "picture": "Paper_Crane_Flock_B",
    "hidden_until": "1488474000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["10"],
    "health": 14,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 5,
        "y": "10",
      },
      {
        "id": "heal",
        "x": 4,
        "y": "1",
      },
      {
        "id": "frost",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 6,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 5,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 7,
            "y": "10",
          },
          {
            "id": "heal",
            "x": 6,
            "y": "1",
          },
          {
            "id": "frost",
            "x": 2,
          },
        ],
      },
    }
  },
  "5116": {
    "id": "5116",
    "name": "Justice",
    "picture": "Justice_A",
    "hidden_until": "1489078800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 16,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 19,
        "skill": [],
      },
    }
  },
  "15116": {
    "id": "15116",
    "name": "Resolute Justice",
    "picture": "Justice_A",
    "hidden_until": "1489078800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 19,
    "attack": 2,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 3,
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "5": {
        "health": 21,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "25116": {
    "id": "25116",
    "name": "Indomitable Justice",
    "picture": "Justice_B",
    "hidden_until": "1489078800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 22,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 5,
      },
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "4": {
        "attack": 4,
        "skill": [],
      },
      "5": {
        "health": 25,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5117": {
    "id": "5117",
    "name": "Spark Chronicler",
    "picture": "Fortune_Angel_A",
    "hidden_until": "1489683600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 12,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 14,
        "skill": [],
      },
      "5": {
        "health": 15,
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "15117": {
    "id": "15117",
    "name": "Bolt Chronicler",
    "picture": "Fortune_Angel_A",
    "hidden_until": "1489683600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
    }
  },
  "25117": {
    "id": "25117",
    "name": "Fulmination Chronicler",
    "picture": "Fortune_Angel_B",
    "hidden_until": "1489683600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 18,
    "attack": 7,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "health": 21,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 7,
          },
          {
            "id": "jam",
            "c": 3,
          },
        ],
      },
    }
  },
  "5118": {
    "id": "5118",
    "name": "Chalice Courier",
    "picture": "Chalice_Angel_A",
    "hidden_until": "1490288400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 14,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 1,
          },
        ],
      },
    }
  },
  "15118": {
    "id": "15118",
    "name": "Chalice Bearer",
    "picture": "Chalice_Angel_A",
    "hidden_until": "1490288400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 17,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 2,
          },
        ],
      },
    }
  },
  "25118": {
    "id": "25118",
    "name": "Chalice Evangelist",
    "picture": "Chalice_Angel_B",
    "hidden_until": "1490288400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 21,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 25,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 4,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 5,
          },
        ],
      },
    }
  },
  "5119": {
    "id": "5119",
    "name": "Dyrnwyn's Chosen",
    "picture": "Sword_Spirit_Angel_Undead_A",
    "hidden_until": "1490893200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 10,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "6",
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15119": {
    "id": "15119",
    "name": "Dyrnwyn's Promise",
    "picture": "Sword_Spirit_Angel_Undead_A",
    "hidden_until": "1490893200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 14,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 4,
        "y": "6",
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 17,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 6,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
    }
  },
  "25119": {
    "id": "25119",
    "name": "Dyrnwyn's Burden",
    "picture": "Sword_Spirit_Angel_Undead_B",
    "hidden_until": "1490893200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","7"],
    "health": 18,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 7,
        "y": "6",
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 8,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 2,
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 9,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 10,
            "y": "6",
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
    }
  },
  "5120": {
    "id": "5120",
    "name": "Seraph of Stone Rise",
    "picture": "Angel_Mountain_Cleaver_Angel_A",
    "hidden_until": "1489424400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 25,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 5,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "6",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "health": 28,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "6",
            "all": "1",
          },
        ],
      },
    }
  },
  "15120": {
    "id": "15120",
    "name": "Seraph of Stone Summit",
    "picture": "Angel_Mountain_Cleaver_Angel_A",
    "hidden_until": "1489424400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 29,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 7,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "6",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 8,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "6",
            "all": "1",
          },
        ],
      },
    }
  },
  "25120": {
    "id": "25120",
    "name": "Seraph of Stone Fall",
    "picture": "Angel_Mountain_Cleaver_Angel_B",
    "hidden_until": "1489424400000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 32,
    "attack": 9,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 5,
      },
      {
        "id": "rally",
        "x": 8,
        "y": "1",
      },
      {
        "id": "protect",
        "x": 4,
        "y": "6",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 33,
        "skill": [],
      },
      "3": {
        "health": 34,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 9,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 10,
        "skill": [],
      },
      "5": {
        "health": 35,
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 9,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "6",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 10,
            "y": "1",
          },
          {
            "id": "protect",
            "x": 5,
            "y": "6",
            "all": "1",
          },
        ],
      },
    }
  },
  "5121": {
    "id": "5121",
    "name": "Cauterizing Psalm",
    "picture": "Fire_Book_Angel_A",
    "hidden_until": "1490634000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 11,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "heal",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15121": {
    "id": "15121",
    "name": "Cauterizing Hymn",
    "picture": "Fire_Book_Angel_A",
    "hidden_until": "1490634000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 14,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "health": 16,
        "skill": [],
      },
    }
  },
  "25121": {
    "id": "25121",
    "name": "Cauterizing Palm",
    "picture": "Fire_Book_Angel_B",
    "hidden_until": "1490634000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6"],
    "health": 16,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 5,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 18,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 6,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5122": {
    "id": "5122",
    "name": "Crow King",
    "picture": "Undead_Crow_Lord_A",
    "hidden_until": "1491498000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 26,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "rally",
        "x": 2,
        "y": "7",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 27,
        "skill": [],
      },
      "3": {
        "health": 28,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 2,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 29,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "all": "1",
          },
        ],
      },
    }
  },
  "15122": {
    "id": "15122",
    "name": "Flock King",
    "picture": "Undead_Crow_Lord_A",
    "hidden_until": "1491498000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 30,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "7",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 31,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 3,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "4": {
        "health": 32,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "all": "1",
          },
        ],
      },
    }
  },
  "25122": {
    "id": "25122",
    "name": "Murder King",
    "picture": "Undead_Crow_Lord_B",
    "hidden_until": "1491498000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7","10"],
    "health": 33,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "counter",
        "x": 7,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "7",
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "attack": 8,
        "health": 35,
        "skill": [],
      },
      "4": {
        "health": 36,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "7",
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "counter",
            "x": 8,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "7",
            "all": "1",
          },
        ],
      },
    }
  },
  "5123": {
    "id": "5123",
    "name": "Shadow Stalker",
    "picture": "Shadow_Ghost_A",
    "hidden_until": "1492102800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 15,
    "attack": 2,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "attack": 3,
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15123": {
    "id": "15123",
    "name": "Shadow Chaser",
    "picture": "Shadow_Ghost_A",
    "hidden_until": "1492102800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 19,
    "attack": 3,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 4,
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
    }
  },
  "25123": {
    "id": "25123",
    "name": "Shadow Trapper",
    "picture": "Shadow_Ghost_B",
    "hidden_until": "1492102800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 23,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 3,
      },
      {
        "id": "nullify",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "health": 26,
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
      "5": {
        "health": 27,
        "skill": [
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
    }
  },
  "5124": {
    "id": "5124",
    "name": "Sylph Drifter",
    "picture": "Wind_Ghost_A",
    "hidden_until": "1492707600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","7"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "valor",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "valor",
            "x": 4,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
        ],
      },
    }
  },
  "15124": {
    "id": "15124",
    "name": "Sylph Runner",
    "picture": "Wind_Ghost_A",
    "hidden_until": "1492707600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","7"],
    "health": 12,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "25124": {
    "id": "25124",
    "name": "Sylph Slider",
    "picture": "Wind_Ghost_B",
    "hidden_until": "1492707600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","7"],
    "health": 15,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "valor",
        "x": 6,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5125": {
    "id": "5125",
    "name": "Banshee",
    "picture": "Banshee_A",
    "hidden_until": "1493312400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 7,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 8,
        "skill": [],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 1,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
    }
  },
  "15125": {
    "id": "15125",
    "name": "Banshee Vengeant",
    "picture": "Banshee_A",
    "hidden_until": "1493312400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 11,
    "attack": 1,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "attack": 2,
        "health": 13,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "6": {
        "attack": 3,
        "skill": [
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "25125": {
    "id": "25125",
    "name": "Banshee Enflamed",
    "picture": "Banshee_B",
    "hidden_until": "1493312400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 17,
    "attack": 3,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "5126": {
    "id": "5126",
    "name": "Ominous Canvas",
    "picture": "Picture_Frame_Ghost_A",
    "hidden_until": "1493053200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 16,
        "skill": [],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15126": {
    "id": "15126",
    "name": "Haunted Canvas",
    "picture": "Picture_Frame_Ghost_A",
    "hidden_until": "1493053200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 19,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "attack": 6,
        "skill": [],
      },
      "6": {
        "health": 22,
        "skill": [],
      },
    }
  },
  "25126": {
    "id": "25126",
    "name": "Pernicious Canvas",
    "picture": "Picture_Frame_Ghost_B",
    "hidden_until": "1493053200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["7"],
    "health": 23,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5127": {
    "id": "5127",
    "name": "Dynamo Drake",
    "picture": "Lightning_Dragon_A",
    "hidden_until": "1493917200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 33,
    "attack": 6,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 34,
        "skill": [],
      },
      "3": {
        "health": 35,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "15127": {
    "id": "15127",
    "name": "Dynamo Dragon",
    "picture": "Lightning_Dragon_A",
    "hidden_until": "1493917200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 37,
    "attack": 7,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 3,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 38,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
      "4": {
        "attack": 8,
        "health": 39,
        "skill": [],
      },
      "5": {
        "health": 40,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 6,
          },
        ],
      },
    }
  },
  "25127": {
    "id": "25127",
    "name": "Dynamo Elder",
    "picture": "Lightning_Dragon_B",
    "hidden_until": "1493917200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 40,
    "attack": 8,
    "cost": 4,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 4,
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 7,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 9,
        "health": 41,
        "skill": [],
      },
      "3": {
        "health": 42,
        "skill": [],
      },
      "4": {
        "health": 43,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 7,
          },
        ],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 5,
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 8,
          },
        ],
      },
    }
  },
  "5128": {
    "id": "5128",
    "name": "Torchrime Terrorizer",
    "picture": "Double_Headed_Dragon_A",
    "hidden_until": "1494522000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 22,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [
          {
            "id": "valor",
            "x": 3,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15128": {
    "id": "15128",
    "name": "Torchrime Demolisher",
    "picture": "Double_Headed_Dragon_A",
    "hidden_until": "1494522000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 28,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 4,
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 30,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25128": {
    "id": "25128",
    "name": "Torchrime Menace",
    "picture": "Double_Headed_Dragon_B",
    "hidden_until": "1494522000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 34,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "valor",
        "x": 6,
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "3": {
        "health": 36,
        "skill": [
          {
            "id": "valor",
            "x": 7,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 39,
        "skill": [
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5129": {
    "id": "5129",
    "name": "Shackled Gatekeeper",
    "picture": "Chained_Gatekeeper_Dragon_A",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 17,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 1,
      },
      {
        "id": "rally",
        "x": 3,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 1,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 1,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 1,
            "y": "9",
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 4,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
        ],
      },
    }
  },
  "15129": {
    "id": "15129",
    "name": "Chained Gatekeeper",
    "picture": "Chained_Gatekeeper_Dragon_A",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 21,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "rally",
        "x": 4,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 2,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 6,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 2,
            "y": "9",
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "rally",
            "x": 5,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "9",
          },
        ],
      },
    }
  },
  "25129": {
    "id": "25129",
    "name": "Bound Gatekeeper",
    "picture": "Chained_Gatekeeper_Dragon_B",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9"],
    "health": 23,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "rally",
        "x": 6,
        "y": "9",
      },
      {
        "id": "legion",
        "x": 3,
        "y": "9",
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 6,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 3,
            "y": "9",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "rally",
            "x": 7,
            "y": "9",
          },
          {
            "id": "legion",
            "x": 4,
            "y": "9",
          },
        ],
      },
    }
  },
  "5130": {
    "id": "5130",
    "name": "Drakeling Fosterer",
    "picture": "Bird_Adopted_Dragon_A",
    "hidden_until": "1495731600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","10"],
    "health": 7,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 8,
      },
      {
        "id": "weaken",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 7,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
      "3": {
        "attack": 4,
        "health": 8,
        "skill": [],
      },
      "4": {
        "health": 9,
        "skill": [],
      },
      "5": {
        "health": 10,
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 6,
          },
          {
            "id": "weaken",
            "x": 2,
          },
        ],
      },
    }
  },
  "15130": {
    "id": "15130",
    "name": "Drake Fosterer",
    "picture": "Bird_Adopted_Dragon_A",
    "hidden_until": "1495731600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","10"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 6,
      },
      {
        "id": "weaken",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 5,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 5,
          },
          {
            "id": "weaken",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "25130": {
    "id": "25130",
    "name": "Dragon Fosterer",
    "picture": "Bird_Adopted_Dragon_B",
    "hidden_until": "1495731600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","10"],
    "health": 13,
    "attack": 6,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 4,
        "y": "9",
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 4,
          },
        ],
      },
      "3": {
        "health": 15,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "protect",
            "x": 5,
            "y": "9",
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 5,
          },
        ],
      },
    }
  },
  "5131": {
    "id": "5131",
    "name": "Steelscale, Sky's Domain",
    "picture": "Portable_City_Dragon_A",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 34,
    "attack": 9,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "protect",
        "x": 5,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 36,
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "protect",
            "x": 6,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "attack": 10,
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 6,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
    }
  },
  "15131": {
    "id": "15131",
    "name": "Steelscale, Sky's Home",
    "picture": "Portable_City_Dragon_A",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 39,
    "attack": 10,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 7,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 40,
        "skill": [],
      },
      "3": {
        "attack": 11,
        "health": 41,
        "skill": [],
      },
      "4": {
        "health": 42,
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "protect",
            "x": 8,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 43,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 8,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 3,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 8,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "25131": {
    "id": "25131",
    "name": "Steelscale, Sky's Realm",
    "picture": "Portable_City_Dragon_B",
    "hidden_until": "1495126800000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["9","16"],
    "health": 44,
    "attack": 12,
    "cost": 4,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 4,
      },
      {
        "id": "protect",
        "x": 8,
        "y": "1",
      },
      {
        "id": "weaken",
        "x": 4,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 45,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 9,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 46,
        "skill": [],
      },
      "4": {
        "attack": 13,
        "health": 47,
        "skill": [],
      },
      "5": {
        "health": 48,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 9,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 10,
            "y": "1",
          },
          {
            "id": "weaken",
            "x": 5,
            "all": "1",
          },
        ],
      },
    }
  },
  "5132": {
    "id": "5132",
    "name": "Whirlwinder",
    "picture": "Gusty_A",
    "hidden_until": "1496336400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 15,
    "attack": 3,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 2,
        "y": "5",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "heal",
            "x": 2,
            "y": "5",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "health": 18,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
          },
          {
            "id": "frost",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15132": {
    "id": "15132",
    "name": "Gusty Whirlwinder",
    "picture": "Gusty_A",
    "hidden_until": "1496336400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 18,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 3,
        "y": "5",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [
          {
            "id": "heal",
            "x": 3,
            "y": "5",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 21,
        "skill": [],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
      "6": {
        "attack": 5,
        "skill": [
          {
            "id": "heal",
            "x": 4,
            "y": "5",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25132": {
    "id": "25132",
    "name": "Gale Whirlwinder",
    "picture": "Gusty_B",
    "hidden_until": "1496336400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 22,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "heal",
        "x": 4,
        "y": "5",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 23,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "health": 24,
        "skill": [],
      },
      "4": {
        "health": 25,
        "skill": [],
      },
      "5": {
        "health": 26,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "heal",
            "x": 5,
            "y": "5",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5133": {
    "id": "5133",
    "name": "Magnetic Elemental",
    "picture": "Magnet_Elemental_A",
    "hidden_until": "1496941200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 9,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 1,
        "y": "5",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15133": {
    "id": "15133",
    "name": "Magnetic Controller",
    "picture": "Magnet_Elemental_A",
    "hidden_until": "1496941200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 12,
    "attack": 5,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 2,
        "y": "5",
      },
      {
        "id": "strike",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "protect",
            "x": 2,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "health": 13,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
    }
  },
  "25133": {
    "id": "25133",
    "name": "Magnetic Master",
    "picture": "Magnet_Elemental_B",
    "hidden_until": "1496941200000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 14,
    "attack": 6,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "protect",
        "x": 3,
        "y": "5",
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "protect",
            "x": 3,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 16,
        "skill": [
          {
            "id": "protect",
            "x": 4,
            "y": "5",
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
    }
  },
  "5137": {
    "id": "5137",
    "name": "Forgesoul Construct",
    "picture": "Metal_Golem_A",
    "hidden_until": "1496682000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 17,
    "attack": 8,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "health": 20,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "6": {
        "attack": 9,
        "skill": [],
      },
    }
  },
  "15137": {
    "id": "15137",
    "name": "Forgesoul Steelslayer",
    "picture": "Metal_Golem_A",
    "hidden_until": "1496682000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 21,
    "attack": 9,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "health": 24,
        "skill": [],
      },
    }
  },
  "25137": {
    "id": "25137",
    "name": "Forgesoul Titanslayer",
    "picture": "Metal_Golem_B",
    "hidden_until": "1496682000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","16"],
    "health": 25,
    "attack": 9,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 10,
        "skill": [],
      },
      "3": {
        "health": 26,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
      "5": {
        "attack": 11,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 27,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "burn",
            "x": 5,
          },
          {
            "id": "nullify",
            "x": 5,
          },
        ],
      },
    }
  },
  "5134": {
    "id": "5134",
    "name": "Ocotillo",
    "picture": "Cactus_Elemental_A",
    "hidden_until": "1497546000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 28,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "5",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [],
      },
      "3": {
        "health": 30,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 31,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "15134": {
    "id": "15134",
    "name": "Ocotillo Shredder",
    "picture": "Cactus_Elemental_A",
    "hidden_until": "1497546000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 32,
    "attack": 7,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "heal",
        "x": 3,
        "y": "5",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 8,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 33,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "5": {
        "health": 34,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "25134": {
    "id": "25134",
    "name": "Ocotillo Ravager",
    "picture": "Cactus_Elemental_B",
    "hidden_until": "1497546000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 34,
    "attack": 8,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 6,
      },
      {
        "id": "heal",
        "x": 4,
        "y": "5",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 9,
        "health": 35,
        "skill": [],
      },
      "3": {
        "health": 36,
        "skill": [],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 4,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "heal",
            "x": 5,
            "y": "5",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
    }
  },
  "5135": {
    "id": "5135",
    "name": "Shatterwind",
    "picture": "Glass_Elemental_A",
    "hidden_until": "1498150800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 15,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "5",
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15135": {
    "id": "15135",
    "name": "Shatterblades",
    "picture": "Glass_Elemental_A",
    "hidden_until": "1498150800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 17,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "attack": 6,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "nullify",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
    }
  },
  "25135": {
    "id": "25135",
    "name": "Shatterstorm",
    "picture": "Glass_Elemental_B",
    "hidden_until": "1498150800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5"],
    "health": 20,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "5",
      },
      {
        "id": "nullify",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 21,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "5",
          },
          {
            "id": "nullify",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5136": {
    "id": "5136",
    "name": "Lapis",
    "picture": "Water_Wing_Angel_A",
    "hidden_until": "1497891600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","5"],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 5,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "skill": [],
      },
      "6": {
        "health": 20,
        "skill": [],
      },
    }
  },
  "15136": {
    "id": "15136",
    "name": "Lapis, Wavewaker",
    "picture": "Water_Wing_Angel_A",
    "hidden_until": "1497891600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","5"],
    "health": 21,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "jam",
        "c": 4,
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 1,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 4,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "attack": 8,
        "health": 24,
        "skill": [],
      },
    }
  },
  "25136": {
    "id": "25136",
    "name": "Lapis, Wavebreaker",
    "picture": "Water_Wing_Angel_B",
    "hidden_until": "1497891600000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","5"],
    "health": 25,
    "attack": 8,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "frost",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 3,
      },
      {
        "id": "weaken",
        "x": 3,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "attack": 9,
        "skill": [],
      },
      "5": {
        "health": 28,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "frost",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 3,
          },
          {
            "id": "weaken",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5138": {
    "id": "5138",
    "name": "Geyser Rocva",
    "picture": "Armored_Larva_A",
    "hidden_until": "1500570000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 23,
    "attack": 4,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "13",
        "all": "1",
      },
      {
        "id": "protect",
        "x": 1,
        "y": "13",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 24,
        "skill": [],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "rally",
            "x": 1,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 5,
        "health": 27,
        "skill": [],
      },
      "6": {
        "health": 28,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 1,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 3,
          },
        ],
      },
    }
  },
  "15138": {
    "id": "15138",
    "name": "Gush Rocva",
    "picture": "Armored_Larva_A",
    "hidden_until": "1500570000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 28,
    "attack": 5,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "13",
        "all": "1",
      },
      {
        "id": "protect",
        "x": 2,
        "y": "13",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 29,
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "3": {
        "attack": 6,
        "health": 30,
        "skill": [],
      },
      "4": {
        "health": 31,
        "skill": [],
      },
      "5": {
        "health": 32,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 2,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
      "6": {
        "health": 33,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 4,
          },
        ],
      },
    }
  },
  "25138": {
    "id": "25138",
    "name": "Abyss Rocva",
    "picture": "Armored_Larva_B",
    "hidden_until": "1500570000000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 34,
    "attack": 6,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "13",
        "all": "1",
      },
      {
        "id": "protect",
        "x": 3,
        "y": "13",
        "all": "1",
      },
      {
        "id": "burn",
        "x": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 35,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
      "3": {
        "attack": 7,
        "health": 36,
        "skill": [],
      },
      "4": {
        "health": 37,
        "skill": [],
      },
      "5": {
        "health": 38,
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 3,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 5,
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "13",
            "all": "1",
          },
          {
            "id": "protect",
            "x": 4,
            "y": "13",
            "all": "1",
          },
          {
            "id": "burn",
            "x": 6,
          },
        ],
      },
    }
  },
  "5139": {
    "id": "5139",
    "name": "Loyal Guard",
    "picture": "Ladybug_Guard_A",
    "hidden_until": "1500570000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 10,
    "attack": 5,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "13",
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "13",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 6,
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 1,
            "y": "13",
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
    }
  },
  "15139": {
    "id": "15139",
    "name": "Devoted Guard",
    "picture": "Ladybug_Guard_A",
    "hidden_until": "1500570000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 13,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "legion",
        "x": 1,
        "y": "13",
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "health": 14,
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "13",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "legion",
            "x": 2,
            "y": "13",
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
    }
  },
  "25139": {
    "id": "25139",
    "name": "Decorated Guard",
    "picture": "Ladybug_Guard_B",
    "hidden_until": "1500570000000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 18,
    "attack": 8,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "legion",
        "x": 4,
        "y": "13",
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 19,
        "skill": [],
      },
      "3": {
        "attack": 9,
        "health": 20,
        "skill": [],
      },
      "4": {
        "health": 22,
        "skill": [],
      },
      "5": {
        "health": 24,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "legion",
            "x": 5,
            "y": "13",
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5140": {
    "id": "5140",
    "name": "Copperhorn Beetle",
    "picture": "Rhino_Beetle_A",
    "hidden_until": "1499965200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 10,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 3,
      },
      {
        "id": "protect",
        "x": 2,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 11,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 2,
            "y": "1",
          },
        ],
      },
      "4": {
        "health": 12,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "valor",
            "x": 4,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
      "6": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "15140": {
    "id": "15140",
    "name": "Bronzehorn Beetle",
    "picture": "Rhino_Beetle_A",
    "hidden_until": "1499965200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 13,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "valor",
        "x": 5,
      },
      {
        "id": "protect",
        "x": 3,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 14,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 5,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
      "4": {
        "health": 15,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 3,
            "y": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 6,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
        ],
      },
    }
  },
  "25140": {
    "id": "25140",
    "name": "Steelhorn Beetle",
    "picture": "Rhino_Beetle_B",
    "hidden_until": "1499965200000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13"],
    "health": 16,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "valor",
        "x": 7,
      },
      {
        "id": "protect",
        "x": 4,
        "y": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "valor",
            "x": 8,
          },
          {
            "id": "protect",
            "x": 4,
            "y": "1",
          },
        ],
      },
      "3": {
        "health": 17,
        "skill": [],
      },
      "4": {
        "health": 19,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "valor",
            "x": 9,
          },
          {
            "id": "protect",
            "x": 6,
            "y": "1",
          },
        ],
      },
      "6": {
        "health": 20,
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "valor",
            "x": 10,
          },
          {
            "id": "protect",
            "x": 7,
            "y": "1",
          },
        ],
      },
    }
  },
  "5141": {
    "id": "5141",
    "name": "Nimbocaster",
    "picture": "Cloud_Insect_Elemental_A",
    "hidden_until": "1499360400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","13"],
    "health": 9,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 1,
        "y": "5",
      },
      {
        "id": "rally",
        "x": 1,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 10,
        "skill": [],
      },
      "3": {
        "attack": 4,
        "skill": [],
      },
      "4": {
        "health": 11,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
          },
          {
            "id": "rally",
            "x": 1,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
    }
  },
  "15141": {
    "id": "15141",
    "name": "Nimboreader",
    "picture": "Cloud_Insect_Elemental_A",
    "hidden_until": "1499360400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","13"],
    "health": 11,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "5",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "3": {
        "health": 12,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 13,
        "skill": [],
      },
    }
  },
  "25141": {
    "id": "25141",
    "name": "Nimbochanneler",
    "picture": "Cloud_Insect_Elemental_B",
    "hidden_until": "1499360400000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["5","13"],
    "health": 16,
    "attack": 6,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "5",
      },
      {
        "id": "rally",
        "x": 2,
        "y": "13",
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "rally",
            "x": 2,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "attack": 7,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "5",
          },
          {
            "id": "rally",
            "x": 3,
            "y": "13",
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5142": {
    "id": "5142",
    "name": "Buzzblade",
    "picture": "Steampunk_Scarab_A",
    "hidden_until": "1499101200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13","16"],
    "health": 10,
    "attack": 4,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 6,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "3": {
        "health": 11,
        "skill": [],
      },
      "4": {
        "attack": 5,
        "skill": [],
      },
      "5": {
        "health": 12,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
    }
  },
  "15142": {
    "id": "15142",
    "name": "Buzzblade Mk II",
    "picture": "Steampunk_Scarab_A",
    "hidden_until": "1499101200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13","16"],
    "health": 12,
    "attack": 5,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "burn",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "health": 13,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "4": {
        "attack": 6,
        "skill": [],
      },
      "5": {
        "health": 14,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "burn",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "25142": {
    "id": "25142",
    "name": "Buzzblade Mk III",
    "picture": "Steampunk_Scarab_B",
    "hidden_until": "1499101200000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["13","16"],
    "health": 14,
    "attack": 6,
    "cost": 1,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "burn",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 3,
      },
    ],
    "upgrades": {
      "2": {
        "health": 15,
        "skill": [],
      },
      "3": {
        "attack": 7,
        "skill": [],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
      "6": {
        "health": 19,
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "burn",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 3,
          },
        ],
      },
    }
  },
  "5143": {
    "id": "5143",
    "name": "Cedric's Battlesnail",
    "picture": "Snail_Tank_A",
    "hidden_until": "1499706000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","13"],
    "health": 17,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 18,
        "skill": [],
      },
      "3": {
        "health": 19,
        "skill": [],
      },
      "4": {
        "attack": 7,
        "skill": [],
      },
      "5": {
        "health": 20,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
        ],
      },
    }
  },
  "15143": {
    "id": "15143",
    "name": "Cedric's Warsnail",
    "picture": "Snail_Tank_A",
    "hidden_until": "1499706000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","13"],
    "health": 21,
    "attack": 7,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "3": {
        "health": 22,
        "skill": [],
      },
      "4": {
        "attack": 8,
        "skill": [],
      },
      "5": {
        "health": 23,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
    }
  },
  "25143": {
    "id": "25143",
    "name": "Cedric's Rocketsnail",
    "picture": "Snail_Tank_B",
    "hidden_until": "1499706000000",
    "rarity": "4",
    "set": "4000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","13"],
    "health": 24,
    "attack": 9,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "armored",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 1,
        "all": "1",
      },
      {
        "id": "strike",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 25,
        "skill": [],
      },
      "3": {
        "attack": 10,
        "skill": [],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "skill": [
          {
            "id": "armored",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 1,
            "all": "1",
          },
          {
            "id": "strike",
            "x": 4,
            "all": "1",
          },
        ],
      },
    }
  },
  "5144": {
    "id": "5144",
    "name": "Wee Sparkcaster",
    "picture": "Goblin_Lightning_Master_A",
    "hidden_until": "1501174800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 15,
    "attack": 4,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "strike",
        "x": 3,
      },
      {
        "id": "jam",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 16,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 3,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "4": {
        "health": 17,
        "skill": [],
      },
      "5": {
        "health": 18,
        "skill": [
          {
            "id": "counter",
            "x": 4,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 6,
          },
        ],
      },
      "6": {
        "attack": 5,
        "skill": [],
      },
    }
  },
  "15144": {
    "id": "15144",
    "name": "Lil' Sparkcaster",
    "picture": "Goblin_Lightning_Master_A",
    "hidden_until": "1501174800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 19,
    "attack": 5,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 4,
      },
      {
        "id": "strike",
        "x": 4,
      },
      {
        "id": "jam",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 20,
        "skill": [],
      },
      "3": {
        "health": 21,
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 4,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "4": {
        "skill": [
          {
            "id": "counter",
            "x": 5,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 5,
          },
        ],
      },
      "5": {
        "attack": 6,
        "health": 22,
        "skill": [],
      },
      "6": {
        "health": 23,
        "skill": [],
      },
    }
  },
  "25144": {
    "id": "25144",
    "name": "Sparkcaster",
    "picture": "Goblin_Lightning_Master_B",
    "hidden_until": "1501174800000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 24,
    "attack": 6,
    "cost": 2,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 5,
      },
      {
        "id": "strike",
        "x": 5,
      },
      {
        "id": "jam",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 5,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "3": {
        "health": 25,
        "skill": [
          {
            "id": "counter",
            "x": 6,
          },
          {
            "id": "strike",
            "x": 6,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
      "4": {
        "health": 26,
        "skill": [],
      },
      "5": {
        "attack": 7,
        "health": 27,
        "skill": [],
      },
      "6": {
        "skill": [
          {
            "id": "counter",
            "x": 7,
          },
          {
            "id": "strike",
            "x": 7,
          },
          {
            "id": "jam",
            "c": 4,
          },
        ],
      },
    }
  },
  "5145": {
    "id": "5145",
    "name": "Gobsnout Piercer",
    "picture": "Goblin_Heavenly_Crusader_A",
    "hidden_until": "1501174800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 8,
    "attack": 2,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 1,
      },
      {
        "id": "flurry",
        "c": 7,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 1,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "3": {
        "health": 9,
        "skill": [],
      },
      "4": {
        "health": 10,
        "skill": [
          {
            "id": "armored",
            "x": 1,
          },
          {
            "id": "pierce",
            "x": 2,
          },
          {
            "id": "flurry",
            "c": 6,
          },
        ],
      },
      "5": {
        "attack": 3,
        "skill": [],
      },
    }
  },
  "15145": {
    "id": "15145",
    "name": "Gobsnout Dullblade",
    "picture": "Goblin_Heavenly_Crusader_A",
    "hidden_until": "1501174800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 11,
    "attack": 3,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 1,
      },
      {
        "id": "pierce",
        "x": 2,
      },
      {
        "id": "flurry",
        "c": 5,
      },
    ],
    "upgrades": {
      "2": {
        "health": 12,
        "skill": [],
      },
      "3": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 3,
          },
          {
            "id": "flurry",
            "c": 5,
          },
        ],
      },
      "4": {
        "health": 13,
        "skill": [],
      },
      "5": {
        "attack": 4,
        "skill": [],
      },
    }
  },
  "25145": {
    "id": "25145",
    "name": "Gobsnout Ascender",
    "picture": "Goblin_Heavenly_Crusader_B",
    "hidden_until": "1501174800000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["6","11"],
    "health": 14,
    "attack": 4,
    "cost": 1,
    "maxLevel": 5,
    "skill": [
      {
        "id": "armored",
        "x": 2,
      },
      {
        "id": "pierce",
        "x": 3,
      },
      {
        "id": "flurry",
        "c": 4,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "armored",
            "x": 2,
          },
          {
            "id": "pierce",
            "x": 4,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
      "3": {
        "attack": 5,
        "health": 15,
        "skill": [],
      },
      "4": {
        "health": 16,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "armored",
            "x": 3,
          },
          {
            "id": "pierce",
            "x": 5,
          },
          {
            "id": "flurry",
            "c": 4,
          },
        ],
      },
    }
  },
  "5146": {
    "id": "5146",
    "name": "Lullmage Whisperer",
    "picture": "Goblin_Frog_Dark_Magic_Team_A",
    "hidden_until": "1501779600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","11"],
    "health": 16,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "11",
      },
      {
        "id": "frost",
        "x": 1,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "health": 17,
        "skill": [],
      },
      "3": {
        "health": 18,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 2,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "5": {
        "health": 19,
        "skill": [],
      },
    }
  },
  "15146": {
    "id": "15146",
    "name": "Lullmage Divulger",
    "picture": "Goblin_Frog_Dark_Magic_Team_A",
    "hidden_until": "1501779600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","11"],
    "health": 20,
    "attack": 4,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 2,
        "y": "11",
      },
      {
        "id": "frost",
        "x": 2,
      },
      {
        "id": "nullify",
        "x": 1,
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 1,
          },
        ],
      },
      "3": {
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 2,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "4": {
        "health": 21,
        "skill": [
          {
            "id": "rally",
            "x": 3,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "health": 22,
        "skill": [],
      },
    }
  },
  "25146": {
    "id": "25146",
    "name": "Lullmage Evoker",
    "picture": "Goblin_Frog_Dark_Magic_Team_B",
    "hidden_until": "1501779600000",
    "rarity": "3",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["4","11"],
    "health": 23,
    "attack": 6,
    "cost": 2,
    "maxLevel": 5,
    "skill": [
      {
        "id": "rally",
        "x": 3,
        "y": "11",
      },
      {
        "id": "frost",
        "x": 3,
      },
      {
        "id": "nullify",
        "x": 2,
      },
    ],
    "upgrades": {
      "2": {
        "attack": 7,
        "skill": [],
      },
      "3": {
        "health": 24,
        "skill": [],
      },
      "4": {
        "skill": [
          {
            "id": "rally",
            "x": 4,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 3,
          },
          {
            "id": "nullify",
            "x": 2,
          },
        ],
      },
      "5": {
        "attack": 8,
        "skill": [
          {
            "id": "rally",
            "x": 5,
            "y": "11",
          },
          {
            "id": "frost",
            "x": 4,
          },
          {
            "id": "nullify",
            "x": 3,
          },
        ],
      },
    }
  },
  "5147": {
    "id": "5147",
    "name": "Bard of Gobsburg",
    "picture": "Goblin_Bard_A",
    "hidden_until": "1502384400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 25,
    "attack": 3,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 2,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "11",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 1,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "health": 26,
        "skill": [],
      },
      "3": {
        "health": 27,
        "skill": [],
      },
      "4": {
        "health": 28,
        "skill": [],
      },
      "5": {
        "skill": [
          {
            "id": "counter",
            "x": 2,
          },
          {
            "id": "heal",
            "x": 2,
            "y": "11",
            "all": "1",
          },
          {
            "id": "weaken",
            "x": 2,
            "all": "1",
          },
        ],
      },
      "6": {
        "health": 29,
        "skill": [],
      },
    }
  },
  "15147": {
    "id": "15147",
    "name": "Minstrel of Gobsburg",
    "picture": "Goblin_Bard_A",
    "hidden_until": "1502384400000",
    "rarity": "4",
    "set": "3000",
    "card_type": "2",
    "type": "1",
    "sub_type": ["11"],
    "health": 29,
    "attack": 3,
    "cost": 3,
    "maxLevel": 6,
    "skill": [
      {
        "id": "counter",
        "x": 3,
      },
      {
        "id": "heal",
        "x": 2,
        "y": "11",
        "all": "1",
      },
      {
        "id": "weaken",
        "x": 2,
        "all": "1",
      },
    ],
    "upgrades": {
      "2": {
        "skill": [
          {
            "id": "counter",
            "x": 3,
          },
          {
            "id": "heal",
            "x": 3,
            "y": "11",
            "all": "1",
          },
          {
        ],