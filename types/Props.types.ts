import { HTMLAttributeAnchorTarget } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import { SubmenuFooter } from "@/interfaces";

export type LinkHrefProp = {
  text: string;
  href: string;
  target?: ITargetLink;
  className?: string;
};

export type MenuFooterProp = {
  id: number;
  titleMenu: string;
  childrens: SubmenuFooter[];
};

export type SocialButtonProp = {
  id: number;
  href: string;
  target: HTMLAttributeAnchorTarget | undefined;
  iconName: IconProp;
  srOnly: string;
};

export type ITargetLink = "_blank" | "_parent" | "_self" | "_top";

export type IconProp = LucideIcon | IconType;
