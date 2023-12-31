'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { SizeColumn, columns } from "./columns";

interface SizeClientProps {
  data: SizeColumn[]
}

export default function SizeClient({ data }: SizeClientProps) {

  const router = useRouter();
  const params = useParams();

  const onAddNew = () => {
    router.push(`/${params.storeId}/sizes/new`);
  }
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
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
        description="API calls for sizes"
      />
      <Separator />
      <ApiList
        entityIdName="sizeId"
        entityName="sizes"
      />
    </>
  )
}