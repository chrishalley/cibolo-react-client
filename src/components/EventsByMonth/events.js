const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export default [
  {
    title: "April Event One",
    description: "blah blah blah",
    startDateTime: new Date(year, month, 1, 10, 0).getTime(),
    endDateTime: new Date(year, month, 1, 12, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2122170/pexels-photo-2122170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "April Event Two",
    description: "blah blah blah",
    startDateTime: new Date(year, month, 1, 14, 0).getTime(),
    endDateTime: new Date(year, month, 1, 16, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2104140/pexels-photo-2104140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "April Event Three",
    description: "blah blah blah",
    startDateTime: new Date(year, month, 1, 16, 0).getTime(),
    endDateTime: new Date(year, month, 1, 18, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "April Event Four",
    description: "Marshmallow pie candy. Sugar plum liquorice oat cake. Pastry candy canes carrot cake gummies chocolate cake ice cream cake. Carrot cake halvah marshmallow danish cheesecake fruitcake.\n\nFruitcake carrot cake sugar plum lollipop. Gingerbread cake dragée marshmallow liquorice biscuit pie topping. Liquorice croissant bear claw sweet roll. Topping sweet bonbon pie jelly muffin jelly candy canes.\n\nGingerbread tart muffin fruitcake jujubes oat cake. Cake pastry chocolate bar lemon drops toffee pudding. Brownie wafer bear claw lemon drops bonbon bear claw biscuit icing.",
    startDateTime: new Date(year, month, 1, 20, 0).getTime(),
    endDateTime: new Date(year, month, 1, 22, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2100183/pexels-photo-2100183.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "May Event One",
    description: "blah blah blah",
    startDateTime: new Date(year, month + 1, 1, 12, 0).getTime(),
    endDateTime: new Date(year, month + 1, 1, 15, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "May Event Two",
    description: "blah blah blah",
    startDateTime: new Date(year, month + 1, 1, 15, 0).getTime(),
    endDateTime: new Date(year, month + 1, 1, 16, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2125422/pexels-photo-2125422.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  },
  {
    title: "May Event Three",
    description: "blah blah blah",
    startDateTime: new Date(year, month + 1, 1, 17, 0).getTime(),
    endDateTime: new Date(year, month + 1, 1, 19, 0).getTime(),
    imgUrl:
      "https://images.pexels.com/photos/2127465/pexels-photo-2127465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
  }
];