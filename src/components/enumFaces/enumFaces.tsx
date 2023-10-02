import { z } from "zod";
import { breadVariants } from "../../data/bread.js";
import { cheeseVariants } from "../../data/cheese.js";
import { meatVariants } from "../../data/meat.js";
import { dressingVariants } from "../../data/dressing.js";
import { vegetableVariants } from "../../data/vegetable.js";
import { eggVariants } from "../../data/egg.js";
import { servingVariants } from "../../data/serving.js";
import { spreadVariants } from "../../data/spread.js";
import { toppingVariants } from "../../data/topping.js";


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

export interface SandwichPayload {
  sandwichName: string;
  cutlery: boolean;
  napkins: boolean;
  base: {
     bread: string
     cheese: string[]
     meat: string[]
     dressing: string[]
     vegetables: string[]
  };
  extras: {
    egg: string[]
    spreads: string[]
    serving: string
    topping: string | null
  };
}

export const paniniSchema = z.object({
  sandwichName: z.string().max(35),
  cutlery: z.boolean(),
  napkins: z.boolean(),
  base: z.object({
    bread: z.enum(breadVariants),
    cheese: z.array(z.enum(cheeseVariants)),
    meat: z.array(z.enum(meatVariants)),
    dressing: z.array(z.enum(dressingVariants)),
    vegetables: z.array(z.enum(vegetableVariants)),
  }),
  extras: z.object({
    egg: z.array(z.enum(eggVariants)),
    spreads: z.array(z.enum(spreadVariants)),
    serving: z.enum(servingVariants),
    topping: z.union([z.enum(toppingVariants), z.null()]),
  }),
});