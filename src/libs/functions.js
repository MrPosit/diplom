export const addflower = (
  id,
  input,
  name,
  price,
  img,
  setFlower,
  setInput
) => {
  const currentUser = JSON.parse(localStorage.getItem("Current user"));
  const users = JSON.parse(localStorage.getItem("Users"));

  const isFlowerThere = currentUser.cart.find(
    (cartPizza) => cartPizza.id === id
  );

  if (isFlowerThere) {
    isFlowerThere.count += parseInt(input);
    users
      .find((user) => currentUser.username === user.username)
      .cart.find((cartPizza) => cartPizza.id === id).count += parseInt(input);
  } else {
    currentUser.cart.push({
      id: id,
      count: parseInt(input),
      name: name,
      price: price,
      img: img,
    });
    users
      .find((user) => currentUser.username === user.username)
      .cart.push({
        id: id,
        count: parseInt(input),
        name: name,
        price: price,
        img: img,
      });
  }
  localStorage.setItem("Current user", JSON.stringify(currentUser));
  localStorage.setItem("Users", JSON.stringify(users));
  setFlower("");
  setInput(1);
};
