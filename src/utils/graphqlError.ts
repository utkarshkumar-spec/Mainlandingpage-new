export const extractGraphQLError = (error: any): string => {
  // Apollo mutation/query error
  if (error?.graphQLErrors?.length) {
    const err = error.graphQLErrors[0];
    return extractErrorMessage(err);
  }

  // Raw GraphQL response error
  if (error?.errors?.length) {
    const err = error.errors[0];
    return extractErrorMessage(err);
  }

  // Network / fetch error
  if (error?.networkError?.message) {
    return error.networkError.message;
  }

  // Plain error
  if (typeof error?.message === "string") {
    return error.message;
  }

  return "Something went wrong";
};

const extractErrorMessage = (err: any): string => {
  const validation = err?.extensions?.originalError?.message;

  if (Array.isArray(validation) && validation.length) {
    return validation[0];
  }

  if (typeof validation === "string") {
    return validation;
  }

  return err?.message || "Unexpected server error";
};
