import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types"; 

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
  Image: (props: ImageProps) => <Image {...props} />,
});
