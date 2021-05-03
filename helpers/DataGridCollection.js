import { idGetter } from '../utils';

class DataGridCollection {
  constructor() {
    this._collection = { rows: [], columns: [] };
  }

  getValue(value) {
    const typeValue = typeof value;
    if (typeValue == 'null') return;
    if (typeValue == 'string' || typeValue == 'number') {
      return value;
    } else if (Array.isArray(value)) {
      return value?.length;
    } else {
      return idGetter(value);
    }
  }

  async fill(collection) {
    if (collection.length > 0) {
      await collection.map(async (element, index) => {
        this._collection.rows[index] = [];
        Object.keys(element).map((key, index2) => {
          this._collection.rows[index][index2] = this.getValue(element[key]);
          if (index == 0) this._collection.columns.push(key);
        });
      });
    }
    return this._collection;
  }
}

export default DataGridCollection;
