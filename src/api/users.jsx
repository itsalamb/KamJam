export const authenticate = async (token) => {
  if (!token) {
    return false;
  }

  try {
    const response = await fetch("/api/users/authenticate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { user } = await response.json();
    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const login = async (email, password, name) => {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  const { token, message } = await response.json();
  if (!response.ok) {
    throw {
      message,
    };
  }
  return token;
};

export const register = async (email, password) => {
  const response = await fetch("/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const { token, message, name } = await response.json();
  if (!response.ok) {
    throw {
      message,
      name,
    };
  }

  return token;
};
