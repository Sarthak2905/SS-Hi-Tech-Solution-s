import { cn } from '../utils/cn.js';

export default function Container({ className, children, ...props }) {
    return (
        <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)} {...props}>
            {children}
        </div>
    );
}