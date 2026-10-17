import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, className }) {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) return <div className={className}>{children}</div>;

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}