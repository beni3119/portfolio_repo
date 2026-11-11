export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: "AI and Machine Learning Engineer",
    company: "Zenteiq",
    location: "Bengaluru, India",
    start: "Aug 2026",
    end: "Present",
    bullets: [
      "Evaluated the AhamX RAG pipeline on quantitative and qualitative metrics; raised content-coverage accuracy from ~50% to >70% by tuning the model's mode and parameters.",
      "Building the agentic architecture of KogneX, a platform that lets customers run scientific foundation models for inference and simulation.",
    ],
    tags: ["Agentic AI", "RAG Evaluation", "LLMs", "Scientific Foundation Models"],
  },
  {
    role: "AI/ML Engineer",
    company: "Resolve Tech Solutions (RTS)",
    companyUrl: "https://www.resolvetech.com/",
    location: "Bengaluru, India",
    start: "Aug 2025",
    end: "Aug 2026",
    bullets: [
      "Built an end-to-end AI-driven incident-management platform integrating OpenTelemetry/CloudWatch telemetry with ServiceNow; a confidence engine recommends or auto-creates tickets, and a multi-agent RAG pipeline over 20K+ logs/SOPs enriches incidents, reducing manual triage effort by ~40%.",
      "Built an AI-driven S3 security-remediation platform (AWS Bedrock/Claude 3.5, boto3, Streamlit) with a 3-stage classify → risk → remediate pipeline across 8+ bucket signals, plus human-in-the-loop guardrails and deterministic checks restricting automated fixes to whitelisted, dry-run-safe actions.",
      "Designed and deployed an anomaly-detection platform (Isolation Forest + LSTM Autoencoders), reducing false-positive alerts by ~35% across 10+ metrics while processing 2M+ telemetry events/day.",
      "Engineered an unsupervised alert-deduplication system (HDBSCAN, Node2Vec graph embeddings, GraphSAGE) suppressing ~84% of duplicate SAP monitoring alerts across 11K+ events; deployed on AWS EKS + SageMaker with FastAPI and GitLab CI/CD.",
      "Recognised with the company-wide Townhall Award for production-grade AI delivery within the first 6 months.",
    ],
    tags: ["AWS", "Bedrock", "Multi-Agent RAG", "SageMaker", "EKS", "MLOps", "Anomaly Detection"],
  },
  {
    role: "GenAI Research Intern",
    company: "Bosch",
    companyUrl: "https://www.bosch.com/",
    location: "Bengaluru, India",
    start: "Feb 2025",
    end: "Jul 2025",
    bullets: [
      "Fine-tuned Vision-Language Foundation Models for vehicular automation across encoder-only, decoder-only, layer-freezing, and PEFT (LoRA) setups on a 4× A100 multi-GPU rig.",
      "Benchmarked 5+ VLM variants on internal driving datasets; improved BLEU by ~18%, ROUGE-F1 by ~14%, and METEOR by ~11% over baseline while cutting fine-tuning compute ~60% via PEFT.",
    ],
    tags: ["VLM", "PEFT", "LoRA", "PyTorch", "Multi-GPU"],
  },
  {
    role: "Research Intern",
    company: "Centre for Responsible AI (CeRAI), IIT Madras",
    companyUrl: "https://cerai.iitm.ac.in/",
    location: "Chennai, India",
    start: "Dec 2023",
    end: "Jan 2024",
    bullets: [
      "Contributed to Meta's AI-ethics initiative; analysed FLAN architecture for explainability and authored \u201CEnsuring Ethical Implementation of LLMs in EdTech\u201D.",
    ],
    tags: ["Responsible AI", "Explainability", "LLM"],
  },
  {
    role: "AI Intern",
    company: "Green Aadhaar",
    location: "Remote",
    start: "Jan 2024",
    end: "Mar 2024",
    bullets: [
      "Led a real-time face-recognition attendance system in OpenCV + deep learning, achieving 90%+ recognition accuracy.",
      "Built a real-time waste-detection model and explored AI applications in carbon management.",
    ],
    tags: ["OpenCV", "Computer Vision", "Deep Learning"],
  },
];
