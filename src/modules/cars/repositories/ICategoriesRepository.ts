import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  create({ description, name }: ICreateCategoryDTO): void;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
