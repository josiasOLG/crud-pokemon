import { PokemonDto } from "./pokemon.dto";

export class DeckDto {
  constructor(
    public id: string,
    public name: string,
    public supertypes?: string[],
    public types?: string[],
    public card?: PokemonDto[],
    public enabled?: boolean
  ) {}
}
