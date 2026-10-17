import { ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn.js';

export default function ArrowBadge({ className }) {
    return (
        <span
            aria-hidden="true"
            className={cn('inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-black', className)}
        >
            <ArrowUpRight size={15} strokeWidth={2.5} />
        </span>
    );
}