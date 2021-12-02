export class LoginRepository {
  private accessTokenKey = 'accessToken';

  private refreshTokenKey = 'refreshToken';

  client = localStorage;

  setAccessToken(token: string) {
    this.client.setItem(this.accessTokenKey, token);
    return this;
  }

  getAccessToken() {
    return this.client.getItem(this.accessTokenKey) || '';
  }

  setRefreshToken(token: string) {
    this.client.setItem(this.refreshTokenKey, token);
    return this;
  }

  removeAccessToken() {
    this.client.removeItem(this.accessTokenKey);
    return this;
  }

  getRefreshToken() {
    return this.client.getItem(this.refreshTokenKey);
  }
}

export const loginRepository = new LoginRepository();
