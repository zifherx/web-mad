import { IconProp, ImagePositionProp } from "@/types";
import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface IGeneral {
  id: number;
}

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
  category: string;
  description: string;
  btnCTA1: ButtonI;
  btnCTA2: ButtonI;
  imageItem: ImageI;
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

export interface IFeature {
  id: number;
  title: string;
  description: string;
}

export interface IService {
  id: number;
  title: string;
  menuTitle: string;
  menuDescription: string;
  slug: string;
  features: IFeaturing[];
  benefits: iBenefit[];
  targetAudience: ITargetAudience[];
  process: IProcess[];
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: IconProp;
}

export interface IProcess {
  step: number;
  title: string;
  description: string;
}

export interface ITargetAudience extends IGeneral {
  target: string;
}

export interface IFeaturing extends IGeneral {
  feature: string;
}

export interface iBenefit extends IGeneral {
  benefit: string;
  description: string;
}

export interface IFiltroEspecialita {
  busqueda: string;
  setBusqueda: Dispatch<SetStateAction<string>>;
  filtroActivo: string;
  setFiltroActivo: Dispatch<SetStateAction<string>>;
}

export interface IEspecialistaFiltros {
  search: string;
  speciality: string;
}

export interface IEspecialidad {
  id: number;
  nombre: string;
}

export interface IEspecialista {
  id: number;
  slug: string;
  nombre: string;
  especialidad: string;
  pais: string;
  experiencia: string;
  imagen: string;
  resena: string;
  especialidades: IEspecialidad[];
  rating: number;
  proyectos: number;
  color: string;
  descripcionCompleta: string;
  logros: ILogro[];
}

export interface ILogro {
  id: number;
  logro: string;
}

export interface IParrafo {
  id: number;
  parrafo: string;
}

export interface ILegal {
  id: number;
  slug: string;
  title: string;
  icon: IconProp;
  content: IParrafo[];
}

export interface IProtectionNotice {
  id: number;
  title: string;
  content: IParrafo[];
}

export interface IHeroSpecialist {
  totalSpecialists: number;
  totalProjects: number;
  averageRating: number;
}

export interface ISearchAndFilters {
  filters: IEspecialistaFiltros;
  onFiltersChange: (filters: IEspecialistaFiltros) => void;
  specialtyOptions: IEspecialidad[];
  resultsCount: number;
}

export interface INoResults {
  onClearFilters: () => void;
}

export interface IGridSpecialist {
  resultsCount: number;
  specialists: IEspecialista[];
  handleSpecialistClick: (specialist: IEspecialista) => void;
}

export interface IEspecialistaModal {
  specialist: IEspecialista | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface IOrbitalesElement {
  id: number;
  label: string;
  icon: IconProp;
  color: string;
  angle: number;
}
