import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Edit, Star, Trash2 } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { RatingStar } from "@/components/shared/Rating-Star";
import { StatusBadge } from "@/components/shared/Status-Badge";

import {
  TestimonialResponseDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";

export const columnTestimonios: ColumnDef<TestimonialResponseDTO>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(val) => table.toggleAllRowsSelected(!!val)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(val) => row.toggleSelected(!!val)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableGrouping: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <div className="flex items-center gap-2 text-left text-sm">
        Cliente
        <ArrowUpDown
          className="w-4 h-4 cursor-pointer"
          onClick={() => column.getIsSorted() === "asc"}
        />
      </div>
    ),
    cell: ({ row }) => {
      const { imageSource, title, position, company } = row.original;
      return (
        <div className="flex items-center justify-start gap-5">
          <Avatar className="h-14 w-14 rounded-full">
            <AvatarImage src={imageSource} alt={title} />
            <AvatarFallback>{title}</AvatarFallback>
          </Avatar>
          <div className="block">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "quote",
    header: () => <div className="text-left text-sm">Testimonio</div>,
    cell: ({ row }) => (
      <p className="text-sm text-gray-600 line-clamp-2 max-w-md">
        {row.original.quote}
      </p>
    ),
  },
  {
    accessorKey: "rating",
    header: () => <div className="text-left text-sm">Rating</div>,
    cell: ({ row }) => <RatingStar rating={row.original.rating} />,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left text-sm">Estado</div>,
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <div className="flex gap-2 items-center text-center font-bold">
        Fecha
        <ArrowUpDown
          className="w-4 h-4 cursor-pointer"
          onClick={() => column.getIsSorted() === "asc"}
        />
      </div>
    ),
    cell: ({ row }) => (
      <p className="text-center text-sm">
        {new Date(row.original.createdAt).toLocaleDateString("es-PE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center font-bold">Acciones</div>,
    cell: ({ row, table }) => {
      const meta = table.options.meta as {
        onEdit: (testimonio: UpdateTestimonialDTO) => void;
        onDelete: (testimonio: TestimonialResponseDTO) => void;
      };
      return (
        <div className="flex justify-between space-x-0">
          <Button
            variant="link"
            className="cursor-pointer p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
            onClick={() => console.log("Featured:", row.original.id)}
          >
            <Star className="w-5 h-5" />
          </Button>
          <Button
            variant="link"
            className="cursor-pointer p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => meta.onEdit(row.original)}
          >
            <Edit className="w-5 h-5" />
          </Button>
          <Button
            variant="link"
            className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => meta.onDelete(row.original)}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      );
    },
  },
];
