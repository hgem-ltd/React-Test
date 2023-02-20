import store from "./store";
import { addItem, removeItem } from "./basket";

test("Tests the store is initialised as an empty object", () => {
  const state = store.getState().basket;
  expect(state).toEqual({});
});

test("Tests an item is added to the store with a quantity", () => {
  const state = store.getState().basket;
  let item = state.basket.find(
    (i: any) => i.id === "5057c32a-1fc8-4f5b-bfa7-630ef28b3746"
  );
  expect(item).toBeUndefined();
  store.dispatch(
    addItem({
      id: "5057c32a-1fc8-4f5b-bfa7-630ef28b3746",
      name: "Françoise",
      price: 29,
      vegetarian: true,
    })
  );
  item = state.basket.find(
    (i: any) => i.id === "5057c32a-1fc8-4f5b-bfa7-630ef28b3746"
  );
  expect(item.id).toEqual("5057c32a-1fc8-4f5b-bfa7-630ef28b3746");
  expect(item.quantity).toEqual(1);
});

test("Tests an item is removed from the store", () => {
  const state = store.getState().basket;
  store.dispatch(
    addItem({
      id: "d3f00a74-edf4-464a-bf82-d62170635c77",
      name: "Léonore",
      price: 18,
      vegetarian: true,
    })
  );
  store.dispatch(
    addItem({
      id: "d3f00a74-edf4-464a-bf82-d62170635c77",
      name: "Léonore",
      price: 18,
      vegetarian: true,
    })
  );
  let item = state.basket.find(
    (i: any) => i.id === "d3f00a74-edf4-464a-bf82-d62170635c77"
  );
  expect(item.quantity).toEqual(2);
  store.dispatch(
    removeItem({
      id: "d3f00a74-edf4-464a-bf82-d62170635c77",
      name: "Léonore",
      price: 18,
      vegetarian: true,
    })
  );
  item = state.basket.find(
    (i: any) => i.id === "d3f00a74-edf4-464a-bf82-d62170635c77"
  );
  expect(item.quantity).toEqual(1);
  store.dispatch(
    removeItem({
      id: "d3f00a74-edf4-464a-bf82-d62170635c77",
      name: "Léonore",
      price: 18,
      vegetarian: true,
    })
  );
  item = state.basket.find(
    (i: any) => i.id === "d3f00a74-edf4-464a-bf82-d62170635c77"
  );
  expect(item).toBeUndefined();
});
