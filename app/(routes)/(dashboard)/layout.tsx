import { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { SidebarApp } from "./dashboard/components/Sidebar-App";
import { NavigationApp } from "./dashboard/components/Navigation-App";

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
        <div className="flex flex-col gap-4 p-4 pt-0 border-2 border-cyan-500">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
