export type Project = {
  slug: string;
  title: string;
  blurb: string;
  context: string;
  problem: string;
  approach: string[];
  stack: string[];
  results: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "rag-ticket-system",
    title: "RAG Engine for IT-Ticket Summarisation",
    blurb:
      "Production RAG over 80K+ historical tickets on AWS Bedrock — cut mean resolution time by ~40%.",
    context: "Resolve Tech Solutions · 2025",
    problem:
      "Support engineers were resolving each ticket from scratch even when near-identical issues had been resolved before. Knowledge reuse was effectively zero, and average resolution time was high.",
    approach: [
      "Built a Retrieval-Augmented Generation pipeline over historical tickets indexed in OpenSearch with hybrid (BM25 + dense) retrieval.",
      "Used AWS Bedrock for the generation layer with prompt-templated summarisation and recommendation.",
      "Wrapped the system in a Streamlit interface for engineers; latency-optimised with async batching and embedding caching.",
    ],
    stack: ["AWS Bedrock", "OpenSearch", "Streamlit", "Python", "Docker", "FastAPI"],
    results: [
      "Indexed 80K+ historical tickets with sub-second retrieval.",
      "Reduced mean ticket resolution time by ~40% across 30+ engineers.",
      "Top-3 retrieval precision held above target across release cycles.",
    ],
    tags: ["RAG", "GenAI", "AWS"],
    featured: true,
    year: "2025",
  },
  {
    slug: "anomaly-detection-platform",
    title: "Real-Time Anomaly Detection Platform",
    blurb:
      "Hybrid Isolation Forest + LSTM Autoencoder pipeline; ~35% fewer false positives on 2M+ events/day.",
    context: "Resolve Tech Solutions · 2025",
    problem:
      "Existing rule-based monitoring produced too many false-positive alerts across 50+ telemetry metrics, causing alert fatigue and missed real incidents.",
    approach: [
      "Combined Isolation Forest for fast outlier scoring with LSTM Autoencoders for sequence-aware reconstruction-error anomalies.",
      "Deployed on AWS via SageMaker training + ECS inference, with SQS-buffered ingestion handling 2M+ events/day.",
      "Continuous evaluation via MLflow tracking; CI/CD with Docker and GitHub Actions.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "AWS SageMaker",
      "ECS",
      "ECR",
      "SQS",
      "MLflow",
      "DVC",
    ],
    results: [
      "Reduced false-positive alerts by ~35%.",
      "Serving 200+ req/s at <120 ms p95 latency with 99.9% uptime.",
      "Cut infrastructure spend by ~25% via right-sizing and async batching.",
    ],
    tags: ["Anomaly Detection", "MLOps", "AWS", "Time-Series"],
    featured: true,
    year: "2025",
  },
  {
    slug: "vlm-fine-tuning",
    title: "Vision-Language Model Fine-Tuning for Vehicular Automation",
    blurb:
      "PEFT/LoRA fine-tuning on 4× A100s — BLEU +18%, ROUGE-F1 +14%, METEOR +11%, ~60% less compute.",
    context: "Bosch · 2025",
    problem:
      "Off-the-shelf Vision-Language Foundation Models underperformed on internal driving datasets, and full fine-tuning was prohibitively expensive on the available hardware.",
    approach: [
      "Benchmarked 5+ VLM variants under encoder-only, decoder-only, and layer-freezing fine-tuning regimes.",
      "Adopted Parameter-Efficient Fine-Tuning (LoRA) to reduce trainable parameters while preserving downstream performance.",
      "Evaluated rigorously on BLEU, ROUGE-F1, and METEOR for caption-style outputs.",
    ],
    stack: ["PyTorch", "Hugging Face Transformers", "PEFT", "LoRA", "4× A100"],
    results: [
      "BLEU improved by ~18% over baseline.",
      "ROUGE-F1 improved by ~14%, METEOR by ~11%.",
      "Fine-tuning compute reduced ~60% via PEFT.",
    ],
    tags: ["VLM", "PEFT", "Fine-tuning", "Computer Vision"],
    featured: true,
    year: "2025",
  },
  {
    slug: "quantum-bandits",
    title: "Quantum-Enhanced Kernelised Contextual Bandits",
    blurb:
      "MSc dissertation: quantum bandit algorithms in RKHS — improved regret bounds via projector quantum kernels.",
    context: "MSc Dissertation · University of Birmingham · 2024–2025",
    problem:
      "Classical contextual bandit algorithms degrade on high-dimensional data; even kernelised methods struggle when feature spaces become very large or geometrically complex.",
    approach: [
      "Designed Quantum-Enhanced Kernelised Contextual Bandits (QEKCB) blending a projector quantum kernel with the classical SupKernelUCB algorithm.",
      "Implemented quantum kernels in Pennylane / Qiskit using amplitude embedding and the swap-test for similarity.",
      "Benchmarked quantum vs. classical kernels on multi-armed bandit tasks; analysed regret bounds and runtime.",
    ],
    stack: ["Pennylane", "Qiskit", "Python", "NumPy", "PyTorch"],
    results: [
      "Demonstrated improved regret bounds versus classical kernel baselines.",
      "Reduced computational time on synthetic high-dimensional contexts.",
      "Foundation for future synthetic dataset design where quantum kernels shine.",
    ],
    tags: ["Quantum ML", "RKHS", "Research"],
    links: [
      {
        label: "Read the LinkedIn write-up",
        href: "https://www.linkedin.com/pulse/moving-from-pixels-qubits-quantum-leap-decision-making-hardik-beniwal-a2foc/",
      },
    ],
    featured: true,
    year: "2025",
  },
  {
    slug: "melanoma-detection",
    title: "Melanoma Detection on HAM10000",
    blurb:
      "Benchmarked 10 deep-learning architectures on 10K+ dermoscopic images — best model ~92% accuracy, deployed via Streamlit.",
    context: "Personal Project · 2024",
    problem:
      "Skin-cancer diagnosis is time-consuming and unevenly accessible. A fast, screened-image classifier can help triage cases for clinician review.",
    approach: [
      "Trained and benchmarked 10 deep-learning architectures on the HAM10000 dataset (7-class).",
      "Compared CNN families and transfer-learning regimes on accuracy, F1, and inference latency.",
      "Deployed the best model as a Streamlit application for early skin-disease screening.",
    ],
    stack: ["TensorFlow", "Keras", "Streamlit", "HAM10000"],
    results: [
      "~92% accuracy on the held-out test set.",
      "End-to-end app from upload → prediction in seconds.",
    ],
    tags: ["Computer Vision", "Healthcare", "Streamlit"],
    year: "2024",
  },
  {
    slug: "tableau-ipl",
    title: "Tableau — The Story of the Indian Premier League",
    blurb:
      "Interactive dashboards for IPL match performance, player stats, and venue insights.",
    context: "Personal Project · 2024",
    problem:
      "Cricket fans and analysts need a single visual lens on a tournament with thousands of matches and millions of stats.",
    approach: [
      "Cleaned ball-by-ball IPL data; modelled it for visual analysis.",
      "Built a multi-page Tableau dashboard covering matches, players, teams, and venues with cross-filtering.",
    ],
    stack: ["Tableau", "Pandas", "SQL"],
    results: [
      "Storytelling-style dashboards highlighting season-over-season trends.",
    ],
    tags: ["Visualisation", "Data Analytics"],
    year: "2024",
  },
];
