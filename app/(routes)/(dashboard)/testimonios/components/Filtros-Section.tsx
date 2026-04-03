"use client";

import { Dispatch, SetStateAction } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FiltrosSectionProps {
  view: "grid" | "list";
  setView: Dispatch<SetStateAction<"grid" | "list">>;
  authorFilter: string;
  onAuthorFilterChange: (author: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
}

export function FiltrosSection({
  setView,
  view,
  authorFilter,
  onAuthorFilterChange,
  statusFilter,
  onStatusFilterChange,
}: FiltrosSectionProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-between gap-4">
      <div className="relative flex">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-6 text-gray-400" />
        <Input
          className="w-[250px] pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus-visible:ring-redCustom focus:border-transparent"
          placeholder="Filtro de búsqueda"
          value={authorFilter}
          onChange={(e) => onAuthorFilterChange(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="cursor-pointer w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 bg-white">
            <SelectValue placeholder="Seleccione un estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Estados</SelectLabel>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="published">Publicados</SelectItem>
              <SelectItem value="draft">Borradores</SelectItem>
              <SelectItem value="archived">Archivados</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          onClick={() => setView(view === "grid" ? "list" : "grid")}
          variant="outline"
          className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-redCustom/10 hover:border-redCustom transition-colors"
        >
          {view === "grid" ? "📋 Tabla" : "📱 Tarjetas"}
        </Button>
      </div>
    </div>
  );
}
