interface StatePropInput {
  condition: boolean | undefined | null;
  prop: string;
}

export const useStateProps = (inputArr: StatePropInput[]) => {
  const stateProps: any = {};
  inputArr.forEach(input => {
    if (!input.condition) return;
    stateProps[input.prop] = true;
  });
  return stateProps;
};
