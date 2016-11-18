function shoppingList(grocery){
  var foodList = grocery.split(',');
  for (var i = 0; i < foodList.length; i++) {
    console.log(foodList[i]);

  }

    return foodList[i];
}

shoppingList('1x bread, 6x sausages, 2x 2L Coke');
