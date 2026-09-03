export class BaseService<T extends { id: string; createdAt: string; updatedAt: string }> {
  constructor(private storageKey: string) {}

  protected getItems(): T[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(`Error reading ${this.storageKey} from localStorage`, error);
      return [];
    }
  }

  protected saveItems(items: T[]): void {
    try {
      window.dispatchEvent(new Event('teamflow_update'));
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch (error) {
      console.error(`Error saving ${this.storageKey} to localStorage`, error);
    }
  }

  public getAll(): T[] {
    return this.getItems();
  }

  public getById(id: string): T | null {
    const items = this.getItems();
    return items.find(item => item.id === id) || null;
  }

  public find(predicate: (item: T) => boolean): T[] {
    return this.getItems().filter(predicate);
  }

  public findOne(predicate: (item: T) => boolean): T | null {
    return this.getItems().find(predicate) || null;
  }

  public create(item: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): T {
    const items = this.getItems();
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as T;
    
    items.push(newItem);
    this.saveItems(items);
    return newItem;
  }

  public update(id: string, partial: Partial<Omit<T, 'id' | 'createdAt'>>): T | null {
    const items = this.getItems();
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;

    const updatedItem = {
      ...items[index],
      ...partial,
      updatedAt: new Date().toISOString()
    } as T;

    items[index] = updatedItem;
    this.saveItems(items);
    return updatedItem;
  }

  public delete(id: string): boolean {
    const items = this.getItems();
    const filtered = items.filter(item => item.id !== id);
    if (filtered.length === items.length) return false;
    
    this.saveItems(filtered);
    return true;
  }
}
