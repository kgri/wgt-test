export function stringLength(input: string | null | undefined) {
  return input?.length ?? 0;
}

export function objectValueLength(input: Object) {
  return Object.values(input).reduce(
    (previousValue: number, currentValue: any) =>
      typeof currentValue === "string"
        ? previousValue + currentValue.length
        : previousValue,
    0
  );
}

export function safeObjectValueLength(
  input: Object,
  safeLengthFunction = stringLength
) {
  return Object.values(input).reduce(
    (previousValue: number, currentValue: any) =>
      previousValue + safeLengthFunction(currentValue),
    0
  );
}
