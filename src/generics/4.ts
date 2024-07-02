export type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultUser = {
    name: initialValues.name || "",
    surname: initialValues.surname || "",
    email: initialValues.email || "",
    password: initialValues.password || "",
  };
  return { ...defaultUser, ...initialValues };
}
