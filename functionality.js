export class Functionality {
  constructor() {
    this.items = [];
  }

  popualte(task, index) {
    this.items.push({ description: task, completed: false, index: index });
    this.store();
  }

  remove(index) {
    this.items.splice(index, 1);
    this.store();
  }

  clear() {
    const finished = this.items.filter((i) => {
      return i.completed;
    });
    for (let finish of finished) {
      let index = this.items.indexOf(finish);
      this.remove(index);
    }
  }

  setIndex() {
    for (let i = 0; i < this.items.length; i++) this.items[i].index = i;
    this.store();
  }

  store() {
    localStorage.setItem('My list', JSON.stringify(this.items));
  }
}
