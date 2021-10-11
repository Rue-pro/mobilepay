export const logApiData = (apiFuncName, type, output, input) => {
  console.group("API: " + apiFuncName);
  console.log("Query type: ", type);
  console.log("Input: ", input);
  console.log("Output: ", output);
  console.groupEnd();
};
