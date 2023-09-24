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

export enum FormDataType{
    Name = "sandwichName",
    Cutlery = 'cutlery',
    Napkins = 'napkins',
    Bread = 'base.bread',
    Cheese = 'base.cheese',
    Meat = 'base.meat',
    Dressing = 'base.dressing',
    Vegetables = 'base.vegetables',
    Egg = 'extras.egg',
    Spreads = 'extras.spreads',
    Serving = 'extras.serving',
    Topping = 'extras.topping',
}



export interface PaniniFormData {
  sandwichName: string;
  cutlery: boolean;
  napkins: boolean;
  base: {
    bread: string;
    cheese: string[];
    meat: string[];
    dressing: string[];
    vegetables: string[];
  };
  extras: {
    egg: string[];
    spreads: string[];
    serving: string;
    topping?: string[];
  };
}
