declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.js" {
  const content: string[];
  export default content;
}
