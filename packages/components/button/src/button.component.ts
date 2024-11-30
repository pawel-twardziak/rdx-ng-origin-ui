import { cva, type VariantProps } from "class-variance-authority";
import {Component, computed, input} from "@angular/core";
import {cn} from "@origin-ui/components/utils";


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants>;

type OriButtonSize = NonNullable<ButtonProps['size']>;
type OriButtonVariant = NonNullable<ButtonProps['variant']>;

@Component({
  selector: "ori-button",
  standalone: true,
  template: `
    <button [class]="computedClass()"
            [attr.disabled]="disabled() === true || disabled() === '' ? true : null">
      <ng-content></ng-content>
    </button>`
})
class OriButtonComponent {
  readonly class = input<string>();

  readonly disabled = input<boolean | ''>(false);

  readonly variant = input<OriButtonVariant>('default');

  readonly size = input<OriButtonSize>('default');

  protected computedClass = computed(() =>
    cn(buttonVariants({ variant: this.variant(), size: this.size(), class: this.class() }))
  );
}

export { buttonVariants, OriButtonComponent, OriButtonSize, OriButtonVariant };
