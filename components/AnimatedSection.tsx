'use client';

import { motion } from 'framer-motion';
import { Children, isValidElement, type PropsWithChildren } from 'react';

type AnimatedSectionProps = PropsWithChildren<{ 
  className?: string; 
  id?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  stagger?: boolean;
}>;

export function AnimatedSection({ children, className, id, direction = 'left', stagger = true }: AnimatedSectionProps) {
  const childrenArray = Children.toArray(children);

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child;

        const xOffset = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
        const yOffset = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

        return (
          <motion.div
            key={index}
            variants={{
              hidden: { 
                opacity: 0, 
                x: xOffset,
                y: yOffset,
                filter: 'blur(2px)' 
              },
              show: { 
                opacity: 1, 
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                transition: { 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: stagger ? index * 0.15 : 0 
                } 
              }
            }}
            className="h-full w-full"
          >
            {child}
          </motion.div>
        );
      })}
    </motion.section>
  );
}