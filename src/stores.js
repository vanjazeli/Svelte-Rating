import { writable } from "svelte/store";

let defaultItems = [
  {
    id: 1,
    rating: 9,
    text: "Text 1",
  },
  {
    id: 2,
    rating: 5,
    text: "Text 2",
  },
  {
    id: 3,
    rating: 7,
    text: "Text 3",
  },
  {
    id: 4,
    rating: 10,
    text: "Text 4",
  },
];

let defaultId = defaultItems.length + 1;

export const items = writable(defaultItems);

export const id = writable(defaultId);

export const tempRating = writable(10);
