export class AppSettings {
  constructor(
    public name: string,
    public title: string,
    public theme: {
      showMenu: boolean;
      skin: string;
    }
  ) {}
}
