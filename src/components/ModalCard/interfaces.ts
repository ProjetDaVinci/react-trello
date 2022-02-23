import React, { Dispatch } from "react";
import {
  ICard,
  ICollumnStorage,
  ICommentsData,
} from "../../interfaces/interfaces";

export interface IModalCardProps {
  // setId: Dispatch<React.SetStateAction<number | undefined>>;
  cardId: number;
  // comments: ICommentsData[];
  cards: ICard[];
  // columns: ICollumnStorage[];
  // getCardData: (id: number, cardsData: ICard[]) => ICard[];
  // getComments: (id: number, comments: ICommentsData[]) => ICommentsData[];
  // changeTitle: (id: number, title: string) => void;
  // changeData: (id: number, newData: string) => void;
  // deleteCard: (id: number) => void;
  // deleteComment: (id: number) => void;
  // changeComment: (id: number, newComment: string) => void;
  // addComment: (cardId: number, comment: string) => void;
}
