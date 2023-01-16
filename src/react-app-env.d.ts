declare namespace NodeJS {
  interface Process {
    readonly NODE_ENV: 'development';
  }
}
declare module '*.png' {
  const src: string;
  export default src;
}
