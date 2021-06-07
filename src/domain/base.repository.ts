export interface BaseRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(query: any): Promise<T>;
  find(query: any): Promise<T>;
}
