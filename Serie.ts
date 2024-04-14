export class Serie {
    id: number;
    name: string;
    channel: String;
    seasons: number;
    description: string;
    link: string;
    img: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, link: string, img: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.img = img;
    }
  }