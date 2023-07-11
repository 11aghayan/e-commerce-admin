'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { BillboardColumn, columns } from "./columns";

interface BillboardClientProps {
  data: BillboardColumn[]
}

export default function BillboardClient({ data }: BillboardClientProps) {

  const router = useRouter();
  const params = useParams();

  const onAddNew = () => {
    router.push(`/${params.storeId}/billboards/new`);
  }
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
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
        searchKey="label"
      />
      <Heading 
        title="API"
        description="API calls for billboards"
      />
      <Separator />
      <ApiList
        entityIdName="billboardId"
        entityName="billboards"
      />
    </>
  )
}