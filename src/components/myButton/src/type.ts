export type buttonTypes = "" | "primary" | "success" | "warning" | "error" | "text";
export type sizeTypes = "" | "large" | "small";
export type myButtonProps = {
  type?: buttonTypes;
  icon?: string;
  loading?: boolean;
  size?: sizeTypes;
};

export const sizeEnum = {
  large: 1.2,
  small: 0.8,
} as const;
