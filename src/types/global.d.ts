declare type Nullable<T> = T | null;

declare module '*.scss' {
  interface IClasses {
    [className: string]: string;
  }
  const classes: IClasses;
  export = classes;
}

declare module '*.svg' {
  const image: string;
  export default image;
}
