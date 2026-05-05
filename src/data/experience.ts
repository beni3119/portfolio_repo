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
    role: "AI/ML Engineer",
    company: "Resolve Tech Solutions (RTS)",
    companyUrl: "https://www.resolvetech.com/",
    location: "Bengaluru, India",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Designed and shipped an end-to-end anomaly-detection platform (Isolation Forest + LSTM Autoencoders), reducing false-positive alerts by ~35% across 50+ metrics and processing 2M+ telemetry events/day.",
      "Built a RAG engine for IT-ticket summarisation and recommendation on AWS Bedrock + OpenSearch + Streamlit; indexed 80K+ tickets, cutting mean resolution time by ~40% for 30+ support engineers.",
      "Productionised real-time ML services on AWS (SageMaker, ECS, ECR, SQS) serving 200+ req/s at <120 ms p95 with 99.9% uptime; CI/CD via Docker, GitHub Actions, MLflow, DVC; cut infra spend by ~25%.",
      "Recognised with the company-wide Townhall Award for production-grade AI delivery within the first 6 months.",
    ],
    tags: ["AWS", "Bedrock", "RAG", "SageMaker", "MLOps", "Anomaly Detection"],
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
