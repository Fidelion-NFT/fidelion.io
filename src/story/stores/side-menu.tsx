import { observable } from "mobx";

interface SideMenuStore {
  backgroundColor: string;
  backgroundColorLock: boolean;
  showMenu: boolean;
}
export const sideMenuStore = observable<SideMenuStore>({
  backgroundColor: "rgba(0,0,0,0)",
  backgroundColorLock: false,
  showMenu: false,
});
