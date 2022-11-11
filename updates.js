export class Updates {
  update(event, func, index) {
    if (event.currentTarget.checked) {
      func.items[index].completed = true;
      func.store();
    } else {
      func.items[index].completed = true;
      func.store();
    }
  }
}
