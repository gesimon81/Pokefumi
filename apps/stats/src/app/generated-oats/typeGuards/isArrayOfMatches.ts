import { ArrayOfMatches } from '../types/ArrayOfMatches';

export function isArrayOfMatches(input: any): input is ArrayOfMatches {
  return (
    Array.isArray(input) &&
    input.every(
      (item: any) =>
        item !== null &&
        typeof item === 'object' &&
        (item.date === null || item.date === undefined || typeof item.date === 'string') &&
        (item.numberOfMatches === null || item.numberOfMatches === undefined || typeof item.numberOfMatches === 'number'),
    )
  );
}
