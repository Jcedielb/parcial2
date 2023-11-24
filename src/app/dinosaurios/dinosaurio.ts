export class Dinosaurio {
    
    id: number;
    name: string;
    scientificName: string;
    description: number;
    shortDescription: string;
    era: string;
    feeding: string;
    discoveryCountry: string;
    image: string;

    constructor(id: number, name: string, scientificName: string, description: number, shortDescription: string,
      era: string,
      feeding: string,
      discoveryCountry: string,
      image: string) {
      this.id = id;
      this.name = name;
      this.scientificName = scientificName;
      this.description = description;
      this.shortDescription = shortDescription;
      this.era = era;
      this.feeding = feeding;
      this.discoveryCountry = discoveryCountry;
      this.image = image;
    }
   }