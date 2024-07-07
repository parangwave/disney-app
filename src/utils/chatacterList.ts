import { ICharacterInfo } from "./characterInfo";

export type ICharacterList = Array<
  Pick<ICharacterInfo, "id" | "name" | "imageUrl">
>;
