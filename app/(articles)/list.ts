import mdExample from "./md/example.md";
import mdLargeLanguageModel from "./md/largeLanguageModel.md";
import mdLlmEval from "./md/llmEval.md";
import mdLanguageModel from "./md/languageModel.md";


export interface IArticleInfo {
    id: string;
    title: string;
    description: string;
    content: string;
    createdAt: string;
    cover?: string;
    group: string;
    tag: string;
}



export const articleList: IArticleInfo[] = [
    {
        id: "1",
        title: "Example markdown",
        description: "Example markdown",
        content: mdExample,
        createdAt: "2026-02-11",
        group: "Article",
        cover: "/home/image_project.png",
        tag: "Large Language Models",
    },
    {
        id: "2",
        title: "Optimization for Inference of Large Language Model",
        description: "To run the language model faster and especially on the edge devices, we need to optimize the model. This…",
        content: mdLargeLanguageModel,
        createdAt: "2026-02-11",
        group: "Article",
        tag: "Math Theories",
    },
    {
        id: "3",
        title: "Evaluation of Large Language Models",
        description: "Today, the landscape of large language models (LLMs) is rich with diverse evaluation benchmarks. In this blog post, we'll explore the various benchmarks…",
        content: mdLlmEval,
        createdAt: "2026-02-11",
        group: "Article",
        tag: "Large Language Models",
    },
    {
        id: "4",
        title: "Example markdown",
        description: "To run the language model faster and especially on the edge devices, we need to optimize the model. This…",
        content: mdExample,
        createdAt: "2026-02-11",
        group: "News",
        tag: "News",
    },
    {
        id: "5",
        title: "Reinforcement Learning for Large Language Model",
        description: "Reinforcement learning is a common technique applied to the large language model area. This article covers RL fundamentals, value-based and policy-based methods, PPO, and DPO for LLM training.",
        content: mdLanguageModel,
        createdAt: "2026-02-14",
        group: "Article",
        tag: "Large Language Models",
    },
];