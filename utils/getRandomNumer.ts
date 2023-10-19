import { random } from "lodash";

// export const getRandomNumer = (): number => Math.floor(Math.random() * 123) + 1;
export const getRandomNumer = (): number => random(1, 123);
