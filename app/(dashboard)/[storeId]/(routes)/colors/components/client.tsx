'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { ColorColumn, columns } from "./columns";

interface ColorClientProps {
  data: ColorColumn[]
}

export default function ColorClient({ data }: ColorClientProps) {

  const router = useRouter();
  const params = useParams();

  const onAddNew = () => {
    router.push(`/${params.storeId}/colors/new`);
  }
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={onAddNew}>
          <Plus className="mr-2 w-4 h-4" />
          <span>Add New</span>
        </Button>
      </div>
      <Separator />
      <DataTable 
        columns={columns}
        data={data}
        searchKey="name"
      />
      <Heading 
        title="API"
        description="API calls for colors"
      />
      <Separator />
      <ApiList
        entityIdName="colorId"
        entityName="colors"
      />
    </>
  )
}