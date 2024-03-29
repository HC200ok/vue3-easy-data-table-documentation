import { Item, ServerOptions } from "vue3-easy-data-table";

export const mockClientItems = (itemsNumber = 100): Item[] => {
  const mockItems: Item[] = [];
  const sports = ["basketball", "football", "running", "swimming"];
  const fruits = ["banana", "apple", "orange", "peach"];

  for (let i = 1; i < itemsNumber + 1; i += 1) {
    mockItems.push({
      name: `name-${i}`,
      address: `address-${i}`,
      height: i,
      weight: i,
      age: i,
      favouriteSport: sports[i % 4],
      favouriteFruits: fruits[i % 4]
    });
  }
  return mockItems;
};

export const mockServerItems = async (
  serverOptions: ServerOptions,
  serverItemsLength = 501
): Promise<{
  serverCurrentPageItems: Item[];
  serverTotalItemsLength: number;
}> => {
  const { page, rowsPerPage, sortBy, sortType } = serverOptions;
  const serverTotalItems = mockClientItems(serverItemsLength);
  if (sortBy && sortType) {
    serverTotalItems.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortType === "desc" ? 1 : -1;
      if (a[sortBy] > b[sortBy]) return sortType === "desc" ? -1 : 1;
      return 0;
    });
  }
  await new Promise((s) => setTimeout(s, 3000));
  return {
    serverCurrentPageItems: serverTotalItems.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    ),
    serverTotalItemsLength: serverItemsLength
  };
};

export const mockItems = [
  {
    id: 1,
    name: "James",
    address: "Cecilia Chapma 711-2880 Nulla St",
    email: "jamesemail@gmail.com",
    age: 28,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    name: "Curry",
    address: "Iris WatsonP.O. Box 283 8562 Fusce Rd.",
    email: "curryemail@gmail.com",
    age: 26,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    name: "Harden",
    address: "Celeste Slater606-3727 Ullamcorper.",
    email: "hardenemail@gmail.com",
    age: 28,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 4,
    name: "Durant",
    address: "Theodore LoweAp #867-859 Sit Rd.",
    email: "durantemail@gmail.com",
    age: 27,
    rank: "⭐⭐⭐⭐⭐"
  },
  {
    id: 5,
    name: "Paul",
    address: "Calista Wise7292 Dictum Av.",
    email: "paulsemail@gmail.com",
    age: 30,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 6,
    name: "Butler",
    address: "Kyla OlsenAp #651-8679 Sodales Av.",
    email: "butleremail@gmail.com",
    age: 26,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 7,
    name: "Tatum",
    address: "Forrest Ray191-103 Integer Rd.",
    email: "tatumemail@gmail.com",
    age: 24,
    rank: "⭐⭐⭐⭐"
  },
  {
    id: 8,
    name: "Tompson",
    address: "Hiroko PotterP.O. Box 887 2508 Dolor. Av.",
    email: "tompsonemail@gmail.com",
    age: 29,
    rank: "⭐⭐⭐⭐⭐"
  }
];


export const mockItemIntroduction = async (name: string): Promise<string> => {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((s) => setTimeout(s, 2000));
  const briefs: Record<string, string> = {
    'Stephen Curry': 'Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).',
    'Lebron James': 'LeBron Raymone James Sr is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).',
    'Kevin Durant': 'Kevin Wayne Durant also known by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).',
    'Giannis Antetokounmpo': 'Giannis Sina Ugo Antetokounmpo (né Adetokunbo; December 6, 1994) is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA).',
    'Stephen Curry JR': 'Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).',
    'Lebron James JR': 'LeBron Raymone James Sr is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).',
    'Kevin Durant JR': 'Kevin Wayne Durant also known by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).',
    'Giannis Antetokounmpo JR': 'Giannis Sina Ugo Antetokounmpo (né Adetokunbo; December 6, 1994) is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA).',
  };
  return briefs[name];
};