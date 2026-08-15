export interface Service {
  title: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface PricingItem {
  service: string;
  value: string | null; // null = not yet confirmed; renders nothing until provided
}