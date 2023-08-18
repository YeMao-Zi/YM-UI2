export type buttonTypes = "info" | "primary" | "success" | "warning" | "error" | "danger";
export type sizeTypes = "default" | "large" | "small";
export type myButtonProps = {
  type?: buttonTypes;
  icon?: string;
  loading?: boolean;
  size?: sizeTypes;
  link?: boolean;
  text?: boolean;
  raduis?: Array<[]>;
};

export const sizeEnum = {
  large: 1.2,
  small: 0.8,
} as const;
