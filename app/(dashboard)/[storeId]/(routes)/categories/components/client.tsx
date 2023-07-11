'use client';

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { CategoryColumn, columns } from "./columns";

interface CategoryClientProps {
  data: CategoryColumn[]
}

export default function CategoryClient({ data }: CategoryClientProps) {

  const router = useRouter();
  const params = useParams();

  const onAddNew = () => {
    router.push(`/${params.storeId}/categories/new`);
  }
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
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
        description="API calls for categories"
      />
      <Separator />
      <ApiList
        entityIdName="categoryId"
        entityName="categories"
      />
    </>
  )
}