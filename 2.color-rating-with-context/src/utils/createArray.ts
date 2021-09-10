type CreateArray = (length: number) => number[];

export const createArray: CreateArray = (length) => [...Array(length)];
