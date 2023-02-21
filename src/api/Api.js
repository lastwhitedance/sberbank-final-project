class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
    this.token = "";
  }

  getAuthorizationHeader() {
    return `Bearer ${this.token}`;
  }

  setToken(token) {
    this.token = token;
  }

  checkToken() {
    if (!this.token) throw new Error("Отсутствует токен");
  }

  async signIn(values) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (res.status === 401) {
      throw new Error("Неверные логин или пароль");
    }
    if (res.status === 404) {
      throw new Error("Пользователь с указанным email не найден");
    }
    if (res.status >= 300) {
      throw new Error(`Ошибка! ${res.status}`);
    }

    return res.json();
  }

  async signUp(values) {
    const res = await fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.status === 409) {
      throw new Error("Пользователь с указанным email уже существует");
    }
    if (res.status === 400) {
      throw new Error("Некорректно заполнено одно из полей");
    }
    if (res.status >= 300) {
      throw new Error(`Ошибка! ${res.status}`);
    }
  }

  async getAllProducts() {
    this.checkToken();
    const res = await fetch(`${this.baseUrl}/products`, {
      headers: {
        authorization: this.getAuthorizationHeader(),
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }

  async getProductById(id) {
    this.checkToken();
    const res = await fetch(`${this.baseUrl}/products/${id}`, {
      headers: {
        authorization: this.getAuthorizationHeader(),
      },
    });
    return res.json();
  }

  async getProductsByIds() {}
}

export const productsApi = new Api({
  baseUrl: "https://api.react-learning.ru",
});
