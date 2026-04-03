import { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { SidebarApp } from "./components/Sidebar-App";
import { NavigationApp } from "./components/Navigation-App";

import { REACT_CHILDREN_TYPE } from "@/types";

export const metadata: Metadata = {
  title: {
    default: "CMS Dashboard",
    template: "",
  },
};

export default function LayoutDashboard({ children }: REACT_CHILDREN_TYPE) {
  return (
    <SidebarProvider>
      <SidebarApp />
      <SidebarInset>
        <NavigationApp />
        <main className="flex flex-col gap-4 p-4 pt-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
