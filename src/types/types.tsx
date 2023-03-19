type Card = {
  id: number;
  amount: number;
  name: string;
  expirationDate: string;
  cvv: string;
  transactions: Array<Transaction>;
};

type Transaction = {
  amount: number;
  date: string;
  description: string;
};

type Cards = Array<Card>;

export type UserType = {
  id: string;
  name: string;
  lastName: string;
  description: string;
  cards: Cards;
  imgUrl: string;
};

export type UsersType = Array<UserType>;
