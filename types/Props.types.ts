import { Dispatch, HTMLAttributeAnchorTarget, SetStateAction } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import {
  CarouselBannerItem,
  ICardCounter,
  IEspecialidad,
  IEspecialista,
  IEspecialistaModal,
  IFeature,
  IFiltroEspecialita,
  IGridSpecialist,
  IHeroSpecialist,
  ILegal,
  ImageI,
  InfoItem,
  INoResults,
  IProtectionNotice,
  ISearchAndFilters,
  IService,
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

export type CarouselBannerItemProp = {
  banner: CarouselBannerItem;
};

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

export type ServiceCardProp = Omit<
  IService,
  | "id"
  | "title"
  | "menuDescription"
  | "benefits"
  | "targetAudience"
  | "process"
  | "longDescription"
  | "image"
>;

export type TestimonialCardProp = ITestimonialCard;

export type CarruselProp = {
  limit: number;
  images: ImageI[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export type ItemLogoProp = {
  partner: ImageI;
};

export type CarruselCustomProp = {
  images: ImageI[];
};

export type InfoItemProp = InfoItem;

export type FeatureProp = {
  feature: IFeature;
};

export type ServiceProp = {
  service: IService;
};

export type RelatedServiceProp = {
  relatedServices: IService[];
};

export type OneServiceProp = {
  serviceSlug: string;
};

export type CardEspecialistaProp = {
  index: number;
  specialist: IEspecialista;
  onClick: (specialist: IEspecialista) => void;
};

export type FiltroEspecialistaProp = IFiltroEspecialita & {
  especialidadesFiltradas: IEspecialidad[];
  especialistasFiltrados: IEspecialista[];
};

export type GridEspecialistasProp = ChoiseEspecialistaProp & {
  especialistasFiltrados: IEspecialista[];
};

export type ChoiseEspecialistaProp = {
  especialistaSeleccionado: IEspecialista | null;
  setEspecialistaSeleccionado: Dispatch<SetStateAction<IEspecialista | null>>;
  setBusqueda: Dispatch<SetStateAction<string>>;
  setFiltroActivo: Dispatch<SetStateAction<string>>;
};

export type ModelEspecialistaProp = {
  especialistaSeleccionado: IEspecialista | null;
  setEspecialistaSeleccionado: Dispatch<SetStateAction<IEspecialista | null>>;
};

export type StartModalProp = {
  id: number;
  icon: IconProp;
  value: number | string;
  title: string;
};

export type LegalProp = {
  contenido: ILegal;
};

export type CardProtectionProp = {
  contenido: IProtectionNotice;
};

export type HeroSectionSpecialistProps = {
  kpis: IHeroSpecialist;
};

export type SearchAndFiltersProps = ISearchAndFilters;

export type NoResultsProps = INoResults;

export type GridSpecialistProps = IGridSpecialist & INoResults;

export type SpecialistModalProps = IEspecialistaModal;

declare global {}
