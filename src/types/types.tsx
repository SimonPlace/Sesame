export type CardType = {
  id: number;
  amount: number;
  number: number;
  name: string;
  expirationDate: string;
  cvv: string;
  transactions: Array<Transaction>;
  status: "active" | "inactive" | "blocked";
};

type Transaction = {
  amount: number;
  date: string;
  description: string;
};

type Cards = Array<CardType>;

export type UserType = {
  id: string;
  name: string;
  lastName: string;
  description: string;
  cards: Cards;
  imgUrl: string;
};

export type UsersType = Array<UserType>;
