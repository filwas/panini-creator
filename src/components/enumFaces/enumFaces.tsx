export enum SelectorType {
  Carousel = "carousel",
  Dropdown = "dropdown",
  Multiselect = "multiselect",
  Checkbox = "checkbox",
  Radial = "radial",
  Textinput = "textinput",
}

export enum Direction {
  Left = "left",
  Right = "right",
}

export enum FormDataType {
  Name = "sandwichName",
  Cutlery = "cutlery",
  Napkins = "napkins",
  Bread = "bread",
  Cheese = "cheese",
  Meat = "meat",
  Dressing = "dressing",
  Vegetables = "vegetables",
  Egg = "egg",
  Spreads = "spreads",
  Serving = "serving",
  Topping = "topping",
}

export interface PaniniFormData {
  sandwichName: string[];
  cutlery: string[];
  napkins: string[];
  bread: string[];
  cheese: string[];
  meat: string[];
  dressing: string[];
  vegetables: string[];
  egg: string[];
  spreads: string[];
  serving: string[];
  topping: string[];
}

