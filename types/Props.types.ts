import { HTMLAttributeAnchorTarget } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import {
  CarouselBannerItem,
  ICardCounter,
  IServiceCard,
  ITestimonialCard,
  ITitle,
  SlideItem,
  SubmenuFooter,
} from "@/interfaces";

export type LinkHrefProp = {
  text: string;
  href: string;
  target?: ITargetLink;
  className?: string;
};

export type LinkIconProp = {
  text: string;
  icon: IconProp;
  href: string;
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

export type CarouselBannerItemProp = CarouselBannerItem;

export type ITargetLink = "_blank" | "_parent" | "_self" | "_top";

export type ImagePositionProp = "left" | "right" | "top" | "bottom";

export type AlignText = "left" | "center" | "right" | "justify";

export type IconProp = LucideIcon | IconType;

export type TitleProp = ITitle;

export type CardCounterProp = ICardCounter;

export type SlideItemProp = {
  slides: SlideItem[];
};

export type ParrafoProp = {
  text: string;
  align: AlignText;
};

export type ServiceCardProp = IServiceCard;

export type TestimonialCardProp = ITestimonialCard;
