export interface AdminModel {
  id: number;
  login: string;
  password: string;
}

module.exports = class AdminDto {
  login: string;
  id: number;
  password: string;

  constructor(model: AdminModel) {
    this.id = model.id;
    this.login = model.login;
    this.password = model.password;
  }
};
