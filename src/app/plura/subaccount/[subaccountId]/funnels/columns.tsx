'use client'
import { Badge } from '@/components/plura/ui/badge'
import { FunnelsForSubAccount } from '@/lib/types'
import { ColumnDef } from '@tanstack/react-table'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const columns: ColumnDef<FunnelsForSubAccount>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <Link
          className="flex gap-2 items-center"
          href={`/subaccount/${row.original.subAccountId}/funnels/${row.original.id}`}
        >
          {row.getValue('name')}
          <ExternalLink size={15} />
        </Link>
      )
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Last Updated',
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      const date = updatedAt
        ? ` ${updatedAt.toDateString()} ${updatedAt.toLocaleTimeString()} `
        : 'N/A'; // Handle undefined updatedAt
      return <span className="text-muted-foreground">{date}</span>;
    },
  },
  {
    accessorKey: 'published',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.published;
      return status ? (
        <Badge variant={'default'}>Live - {row.original.subDomainName}</Badge>
      ) : (
        <Badge variant={'secondary'}>Draft</Badge>
      );
    },
  },
]
