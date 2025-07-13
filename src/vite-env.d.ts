/// <reference types="vite/client" />

// Declare custom elements for Spline viewer
declare namespace JSX {
  interface IntrinsicElements {
    'hana-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
      style?: React.CSSProperties;
    };
  }
}
