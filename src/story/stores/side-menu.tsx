import { observable } from "mobx";

interface SideMenuStore {
  backgroundColor: string;
  showMenu: boolean;
}
export const sideMenuStore = observable<SideMenuStore>({
  backgroundColor: "rgba(0,0,0,0)",
  showMenu: true,
});
