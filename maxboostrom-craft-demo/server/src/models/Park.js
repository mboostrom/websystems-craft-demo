import fs from "fs";

const parksPath = "parks.json";

class Park {
  constructor({title, link, linkText, body, image, category}) {
    this.title = title;
    this.link = link;
    this.linkText = linkText;
    this.body = body;
    this.image = image;
    this.category = category;
  }

  static findAll() {
    const parksData = JSON.parse(fs.readFileSync(parksPath)).parks;
    let parks = [];
    parksData.forEach((park) => {
      const newPark = new Park(park);
      parks.push(newPark);
    });
    return parks;
  }
}

export default Park;