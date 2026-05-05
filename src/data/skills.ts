export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "SQL", "Bash"],
  },
  {
    label: "GenAI & LLMs",
    items: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "AWS Bedrock",
      "OpenAI / Anthropic APIs",
      "Hugging Face Transformers",
      "PEFT",
      "LoRA",
      "QLoRA",
      "Prompt Engineering",
      "Vision-Language Models",
      "Fine-tuning",
    ],
  },
  {
    label: "ML & Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Transformers",
      "CNNs",
      "ViT",
      "LSTM Autoencoders",
      "Isolation Forest",
      "Anomaly Detection",
      "Time-Series",
      "OpenCV",
    ],
  },
  {
    label: "MLOps & Cloud",
    items: [
      "AWS (SageMaker, Bedrock, ECS, ECR, SQS, Lambda, S3, OpenSearch)",
      "Docker",
      "Kubernetes",
      "MLflow",
      "DVC",
      "FastAPI",
      "Streamlit",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    label: "Data & Other",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "OpenSearch (vector)",
      "FAISS",
      "Tableau",
      "Pennylane (Quantum ML)",
      "Responsible AI",
      "Explainability",
    ],
  },
];

export const focusAreas = [
  "Generative AI",
  "Computer Vision",
  "Vision-Language Models",
  "Retrieval-Augmented Generation",
  "MLOps",
  "Quantum Machine Learning",
  "Responsible AI",
];
