import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavItemMenu } from "./Nav-Item-Menu";

import { SIDEBAR_MENU_PROP } from "@/types";

export function NavMenu({ menu }: SIDEBAR_MENU_PROP) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {menu.map((item, index) => (
            <NavItemMenu key={index} items={item} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
