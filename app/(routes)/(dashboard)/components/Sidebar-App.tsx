"use client";

import { ComponentProps } from "react";
import { useUser } from "@stackframe/stack";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { LogoSidebar } from "./Logo-Sidebar";
import { NavItemUser } from "./Nav-Item-User";

import { MenuItemsSidebar } from "@/data";
import { NavMenu } from "./Nav-Menu";

export function SidebarApp({ ...props }: ComponentProps<typeof Sidebar>) {
  const userLogged = useUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoSidebar />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu menu={MenuItemsSidebar} />
      </SidebarContent>
      <SidebarFooter>
        {userLogged && (
          <NavItemUser
            usuarioConnected={{
              avatar: userLogged.profileImageUrl!,
              email: userLogged.primaryEmail!,
              name: userLogged.displayName!,
              isActive: true,
              cerarSesion: userLogged.signOut,
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
