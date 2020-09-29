import React from 'react';

export function Section({ className, list, ...props }) {
  // Helper to handle section tags
  const classes = [
    'Section',
    list && 'Section--list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}