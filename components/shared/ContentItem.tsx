import { cn } from "@/lib/utils";

import { IContentItem } from "@/interfaces";

export function ContentItem({
  title,
  description,
  icon,
  image,
  footer,
  children,
  className,
  contentClassName,
  headerClassName,
  bodyClassName,
  footerClassName,
  variant = "default",
  ...props
}: IContentItem) {
  const containerClasses = cn(
    "group transition-all duration-300",
    {
      "bg-white rounded-lg shadow-sm hover:shadow-lg": variant === "card",
      "hover:-translate-y-1": variant !== "simple",
    },
    className
  );

  const contentClasses = cn("flex flex-col", contentClassName);

  const headerClasses = cn(
    "flex items-center",
    {
      "mb-4": variant !== "simple",
      "justift-center": variant === "card",
      "space-x-3": variant === "default" && icon,
    },
    headerClassName
  );

  const bodyClasses = cn(
    {
      "space-y-2": variant !== "simple",
      "text-center": variant === "card",
    },
    bodyClassName
  );

  const footerClasses = cn(
    {
      "mt-4": variant !== "simple",
      "text-center": variant === "card",
    },
    footerClassName
  );

  return (
    <div className={containerClasses} {...props}>
      <div className={contentClasses}>
        {(title || icon || image) && (
          <div className={headerClasses}>
            {icon && <div className="shrink-0">{icon}</div>}
            {image && <div className="shrink-0">{image}</div>}
            {title && (
              <h3
                className={cn("font-medium", {
                  "text-lg": variant === "card",
                  "text-base": variant !== "card",
                })}
              >
                {title}
              </h3>
            )}
          </div>
        )}

        <div className={bodyClasses}>
          {description && (
            <p
              className={cn("text-muted-foreground", {
                "text-sm": variant !== "card",
              })}
            >
              {description}
            </p>
          )}
          {children}
        </div>

        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>
  );
}
