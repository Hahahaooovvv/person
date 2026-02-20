import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import callouts from "remark-callouts";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeCallout from "./rehypeCallout";
import rehypeStripCalloutStyles from "./rehypeStripCalloutStyles";
import { Divider } from "./customComponent";
import "remark-callouts/styles.css";
import "./index.css";

interface MarkdownRenderProps {
    markdown: string;
}

const MarkdownRender = (props: MarkdownRenderProps) => {
    return (
        <div className="text-[#282828] markdown-render">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkDirective, remarkDirectiveRehype, callouts, remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeStripCalloutStyles, rehypeCallout, rehypeKatex]}
                components={{
                    hr: Divider,
                }}
            >
                {props.markdown}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRender;