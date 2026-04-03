import {
  Dispatch,
  HTMLAttributeAnchorTarget,
  ReactNode,
  SetStateAction,
} from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

import {
  CarouselBannerItem,
  ICardCounter,
  ICardStatIndicator,
  ICMS_USER,
  IEspecialidad,
  IEspecialista,
  IEspecialistaModal,
  IFeature,
  IFiltroEspecialita,
  IGridSpecialist,
  IHeroSpecialist,
  ILegal,
  ImageI,
  IMenuSidebar,
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
import { CurrentServerUser } from "@stackframe/stack";

export type REACT_CHILDREN_TYPE = {
  children: ReactNode;
};

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

export type MobileMenuType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleLinkClick: () => void;
  openSubmenu: string | null;
  setOpenSubmenu: Dispatch<SetStateAction<string | null>>;
  toggleSubmenu: (menu: string) => void;
};

export type CMS_USER_PROP = {
  usuarioConnected: ICMS_USER;
};

export type SIDEBAR_MENU_PROP = {
  menu: IMenuSidebar[];
};

export type SIDEBAR_ITEMS_PROP = {
  items: IMenuSidebar;
};

export type TYPE_VALUE_STAT = "NUMBER" | "CURRENCY" | "PERCENT";

export type TYPE_TREND = "UP" | "DOWN" | "NEUTRAL";

export type TYPE_VARIANT = "DEFAULT" | "GRADIENT" | "MINIMAL" | "VIBRANT";

export type FILTER_DTO_TYPE = "createdAt" | "updatedAt" | "order" | "rating";

export type CARD_INDICATOR_STAT_PROP = {
  item: ICardStatIndicator;
};

export const TYPE_VALUE_STAT_MAPPER: Record<TYPE_VALUE_STAT, number> = {
  NUMBER: 1,
  CURRENCY: 2,
  PERCENT: 3,
};

export type STATUS_TYPE_ENTRY_CMS = "published" | "archived" | "draft";
