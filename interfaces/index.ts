import { IconProp, ImagePositionProp } from "@/types";
import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

export interface SubmenuFooter {
  id: number;
  titleOption: string;
  linkOption: string;
}

export interface LinkIcon {
  text: string;
  icon: IconProp;
  href: string;
}

export interface CarouselBannerItem {
  id: number;
  title: string;
  description: string;
  btnCTA1: ButtonI;
  btnCTA2: ButtonI;
  positionImage: ImagePositionProp;
  imageItem: ImageI;
  motionDivImage: ParameterMotion;
  motionDivText: ParameterMotion;
}

export interface ImageI {
  id?: number;
  imageSource: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ButtonI {
  id?: number;
  buttonText: string;
  buttonHref: string;
  buttonIcon?: IconProp;
}

export interface ParameterMotion {
  initial: boolean | TargetAndTransition | VariantLabels | undefined;
  animate: AnimationControls | VariantLabels | TargetAndTransition;
  transition: Transition | undefined;
}

export interface ITitle {
  text: string;
  description: string;
}

export interface ICardCounter {
  id: number;
  finalNumber: number | string;
  title: string;
  description: string;
}

export interface NumerParseResult {
  isNumber: boolean;
  numericValue: number;
  symbol?: string;
  originalValue: string | number;
}

export interface SlideItem {
  id: number;
  image: string;
  title: string;
  description: string;
  btnCTA1: ButtonI;
  btnCTA2: ButtonI;
  gradient: string;
  layout: ImagePositionProp;
}

export interface IServiceCard {
  id: number;
  icon: IconProp;
  slug: string;
  titleService: string;
  descriptionService: string;
}

export interface ITestimonialCard {
  id: number;
  title: string;
  quote: string;
  position: string;
  imageSource: string;
}

export interface IContentItem extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: ReactNode;
  image?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  variant?: "default" | "card" | "simple";
}

export interface IServiceMenu {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export interface InfoItem {
  id: number;
  icon: IconProp;
  text: string;
  value: string;
}
