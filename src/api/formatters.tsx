import { PaniniFormData, SandwichPayload } from "../components/enumFaces/enumFaces";



export function formatData(data: PaniniFormData) {
    const returnObject: SandwichPayload = {
      sandwichName: data.sandwichName.toString(),
      cutlery: data.cutlery[0] ? true : false,
      napkins: data.napkins[0] ? true : false,
      base: {
        bread: data.bread.toString(),
        cheese: data.cheese,
        meat: data.meat,
        dressing: data.dressing,
        vegetables: data.vegetables.filter(value => value != ""),
      },
      extras: {
        egg: data.egg,
        spreads: data.spreads.filter(value => value != ""),
        serving: data.serving.toString(),
        topping: data.topping[0] ? data.topping[0] : null,
      },
    };
  
    return returnObject;
  }