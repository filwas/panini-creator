import { breadVariants } from "./bread.js";
import { cheeseVariants } from "./cheese.js";
import { meatVariants } from "./meat.js";
import { dressingVariants } from "./dressing.js";
import { vegetableVariants } from "./vegetable.js";
import { eggVariants } from "./egg.js";
import { servingVariants } from "./serving.js";
import { spreadVariants } from "./spread.js";
import { toppingVariants } from "./topping.js";
import { nameVariants } from "./sandwichNames.js";
import { napkinsVariants } from "./napkins.js";
import { cutleryVariants } from "./cutlery.js";

import { FormDataType } from "../../src/components/enumFaces/enumFaces.jsx";

export function data(dataType: FormDataType): string[] {
  switch (dataType) {
    case FormDataType.Bread:
      return breadVariants;
    case FormDataType.Cheese:
      return cheeseVariants;
    case FormDataType.Meat:
      return meatVariants;
    case FormDataType.Dressing:
      return dressingVariants;
    case FormDataType.Vegetables:
      return vegetableVariants;
    case FormDataType.Egg:
      return eggVariants;
    case FormDataType.Serving:
      return servingVariants;
    case FormDataType.Topping:
      return toppingVariants;
    case FormDataType.Spreads:
      return spreadVariants;
    case FormDataType.Name:
      return nameVariants;
    case FormDataType.Napkins:
      return napkinsVariants;
    case FormDataType.Cutlery:
      return cutleryVariants;
    default:
      return [];
  }
}
