export class AppSettings {
  constructor(
    public title: string,
    public theme: {
      showMenu: boolean;
      skin: string;
    }
  ) {}
}
