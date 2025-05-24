import { IconProp, ImagePositionProp } from "@/types";
import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";

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
