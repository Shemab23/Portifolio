import { CodeBlock } from "./CodeBlock";
import { CTA } from "./CTA";
import { VideoLink } from "./VideoLink";

export const mdxComponents = {
  VideoLink,
  CTA,
  pre: (props: any) => <>{props.children}</>,
  code: CodeBlock,
};
