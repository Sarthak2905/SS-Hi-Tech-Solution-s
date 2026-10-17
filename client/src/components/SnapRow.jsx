import { cn } from '../utils/cn.js';

// Phone: horizontal snap-scroll row that bleeds to the screen edge.
// md and up: becomes a normal grid (pass grid-cols classes via className).
export default function SnapRow({ label, className, children }) {
    return (
        <div
            role="region"
            aria-label={label}
            tabIndex={0}
            className={cn(
                '-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4',
                '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                'sm:-mx-8 sm:px-8 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0',
                className
            )}
        >
            {children}
        </div>
    );
}

export function SnapItem({ children }) {
    return <div className="w-[85%] shrink-0 snap-center sm:w-[60%] md:w-auto">{children}</div>;
}