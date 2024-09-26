import * as React from "react";
import { cn } from "@/lib/utils";

// Card Component
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-sm rounded-lg border bg-card text-card-foreground", className)} // Add max width to control the card size
    {...props}
  />
));
Card.displayName = "Card";

// Card Image
const CardImage = React.forwardRef(({ src, alt, className, ...props }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className={cn("h-48 w-full object-cover rounded-t-lg", className)} // Control image height and make it responsive
    {...props}
  />
));
CardImage.displayName = "CardImage";

// Card Header
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-0 p-4", className)} // Adjust padding to make it consistent
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// Card Title
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// Card Description
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Card Content
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} /> // Adjust padding
));
CardContent.displayName = "CardContent";

// Card Footer
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0", className)} // Adjust padding
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Export components
export { Card, CardImage, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
