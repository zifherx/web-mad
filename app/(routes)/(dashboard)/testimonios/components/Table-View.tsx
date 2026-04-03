"use client";

import { useState } from "react";
import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  GroupingState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { columnTestimonios } from "@/lib/columns/columnsTestimonials";
import { TestimonialResponseDTO } from "@/types/models/testimonial.types";
import { Card, CardContent } from "@/components/ui/card";
import {
  formatTime,
  getDayFromDate,
  groupSessionsByTime,
} from "@/utils/GlobalFunctions";

export const listaHorariosDinamicos = [
  {
    session: {
      fecha_session: "2025-10-15",
      session_hora_inicio: "13:00:00",
      session_hora_fin: "14:00:00",
      _metadata: {
        uid: "abc1",
      },
    },
  },
  {
    session: {
      fecha_session: "2025-10-16",
      session_hora_inicio: "15:00:00",
      session_hora_fin: "16:00:00",
      _metadata: {
        uid: "abc2",
      },
    },
  },
  {
    session: {
      fecha_session: "2025-10-17",
      session_hora_inicio: "10:00:00",
      session_hora_fin: "11:00:00",
      _metadata: {
        uid: "abc3",
      },
    },
  },
  {
    session: {
      fecha_session: "2025-10-18",
      session_hora_inicio: "10:00:00",
      session_hora_fin: "11:00:00",
      _metadata: {
        uid: "abc4",
      },
    },
  },
];

interface ListViewProps {
  filteredTestimonials: TestimonialResponseDTO[];
  authorFilter: string;
  onEdit: (testimonio: TestimonialResponseDTO) => void;
  onDelete: (testimonio: TestimonialResponseDTO) => void;
}

export function TableView({
  filteredTestimonials,
  authorFilter,
  onEdit,
  onDelete,
}: ListViewProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [grouping, setGrouping] = useState<GroupingState>([]);

  const table = useReactTable({
    data: filteredTestimonials,
    columns: columnTestimonios,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGroupingChange: setGrouping,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getGroupedRowModel: getGroupedRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      grouping,
      globalFilter: authorFilter,
    },
    meta: {
      onEdit,
      onDelete,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      const title = row.original.title.toLowerCase();
      const position = row.original.position.toLowerCase();
      const company = row.original.company?.toLowerCase() || "";
      const searchValue = filterValue.toLowerCase();

      return (
        title.includes(searchValue) ||
        position.includes(searchValue) ||
        company.includes(searchValue)
      );
    },
  });

  const groupedSessions = groupSessionsByTime(listaHorariosDinamicos);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-2">
      {/* <Card>
        <CardContent>
          <div className="space-y-2">
            {groupedSessions.map(({ dias, horaFin, horaInicio }, index) => {
              const hourInicio = formatTime(horaInicio);
              const hourFin = formatTime(horaFin);
              const diaText = dias.map((a) => a.dia).join(" y ");

              return (
                <div key={index} className="p-2 border rounded-lg">
                  <div className="text-xl text-gray-600 capitalize">
                    Día: {diaText}{" "}
                    <span className="lowercase">
                      de {hourInicio} a {hourFin}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card> */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(({ id, headers }) => (
            <TableRow key={id}>
              {headers.map(({ id, isPlaceholder, column, getContext }) => (
                <TableHead key={id}>
                  {isPlaceholder
                    ? null
                    : flexRender(column.columnDef.header, getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table
              .getRowModel()
              .rows.map(
                ({
                  id,
                  getIsSelected,
                  getVisibleCells,
                  getIsExpanded,
                  getToggleExpandedHandler,
                  subRows,
                }) => (
                  <TableRow key={id} data-state={getIsSelected() && "selected"}>
                    {getVisibleCells().map(
                      ({
                        id,
                        column,
                        getContext,
                        getIsGrouped,
                        getIsAggregated,
                        getIsPlaceholder,
                      }) => (
                        <TableCell key={id}>
                          {getIsGrouped() ? (
                            <>
                              <Button
                                variant="ghost"
                                className="mr-2"
                                onClick={() => getToggleExpandedHandler()()}
                              >
                                {getIsExpanded() ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                              {flexRender(column.columnDef.cell, getContext())}{" "}
                              ({subRows.length})
                            </>
                          ) : getIsAggregated() ? (
                            flexRender(
                              column.columnDef.aggregatedCell ??
                                column.columnDef.cell,
                              getContext()
                            )
                          ) : getIsPlaceholder() ? null : (
                            flexRender(column.columnDef.cell, getContext())
                          )}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                )
              )
          ) : (
            <TableRow>
              <TableCell
                colSpan={columnTestimonios.length}
                className="h-24 text-center"
              >
                No se encontraron testimonios.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} fila(s) seleccionadas.
        </div>
        <div className="flex space-x-2 items-center">
          <Button
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="flex items-center gap-2"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
