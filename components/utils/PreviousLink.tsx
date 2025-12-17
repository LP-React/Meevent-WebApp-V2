"use client"

import { Link, usePathname } from '@/i18n/navigations'
import { ComponentProps, ReactNode } from 'react';

type Props = {
    href: string;
    children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">;

export const PreviousLink = ({ href, children, ...props }: Props) => {

    const pathname = usePathname();

    return (
        <Link href={{
            pathname: href,
            query: { redirect: pathname }
        }}
            {...props}
        >
            {children}
        </Link>
    )
}
