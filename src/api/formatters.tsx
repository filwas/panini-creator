import { PaniniFormData, SandwichPayload } from "../components/enumFaces/enumFaces";



export function formatData(data: PaniniFormData) {
    const returnObject: SandwichPayload = {
      sandwichName: data.sandwichName.toString(),
      cutlery: data.cutlery[0] ? true : false,
      napkins: data.napkins[0] ? true : false,
      base: {
        bread: data.bread.toString(),
        cheese: data.cheese.filter(value => value != ""),
        meat: data.meat.filter(value => value != ""),
        dressing: data.dressing,
        vegetables: data.vegetables.filter(value => value != ""),
      },
      extras: {
        egg: data.egg.filter(value => value != ""),
        spreads: data.spreads.filter(value => value != ""),
        serving: data.serving.toString(),
        topping: data.topping[0] ? data.topping[0] : null,
      },
    };
  
    return returnObject;
  }