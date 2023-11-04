export interface AbilityDto {
  name: string;
  text: string;
  type: string;
}

export interface AttackDto {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface WeaknessDto {
  type: string;
  value: string;
}

export interface SetDto {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
    standard: string;
    expanded: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

export interface PriceDto {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface TCGPlayerDto {
  url: string;
  updatedAt: string;
  prices: {
    normal: PriceDto;
    reverseHolofoil: PriceDto;
  };
}

export interface CardMarketDto {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number | null;
    suggestedPrice: number | null;
    reverseHoloSell: number | null;
    reverseHoloLow: number | null;
    reverseHoloTrend: number | null;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number | null;
    reverseHoloAvg7: number | null;
    reverseHoloAvg30: number | null;
  };
}

export interface PokemonDto {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: AbilityDto[];
  attacks: AttackDto[];
  weaknesses: WeaknessDto[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: SetDto;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
    standard: string;
    expanded: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: TCGPlayerDto;
  cardmarket: CardMarketDto;
}
