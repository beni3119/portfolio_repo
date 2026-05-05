export type ManualPost = {
  title: string;
  url: string;
  source: "LinkedIn" | "Medium" | "Talk" | "Paper";
  date: string;
  iso: string;
  description: string;
  tags?: string[];
};

export const linkedinArticles: ManualPost[] = [
  {
    title: "Moving from \u201Cpixels\u201D to \u201Cqubits\u201D? A Quantum Leap in Decision Making",
    url:
      "https://www.linkedin.com/pulse/moving-from-pixels-qubits-quantum-leap-decision-making-hardik-beniwal-a2foc/",
    source: "LinkedIn",
    date: "Jan 28, 2025",
    iso: "2025-01-28",
    description:
      "Bridging classical and quantum methods to improve contextual-bandit performance: how Quantum-Enhanced Kernelised Contextual Bandits (QEKCB) use projector quantum kernels and the swap-test to lower regret.",
    tags: ["Quantum ML", "Contextual Bandits", "Research"],
  },
  {
    title: "Vision-Based Pose Estimation",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7194049127255580673/",
    source: "LinkedIn",
    date: "Nov 2024",
    iso: "2024-11-15",
    description:
      "A short explainer on how vision-based pose estimation works and where it shines today \u2014 sports & fitness, AR/VR, accessibility, sign-language recognition \u2014 and the open challenges around occlusion, low light, and generalisability.",
    tags: ["Computer Vision", "Pose Estimation"],
  },
];

export const featuredMediumUrls = [
  "https://medium.com/@hardik31tkd/from-jupyter-to-pipelines-learning-dvc-the-hard-way-so-you-dont-have-to-3e46202d7bb7",
  "https://medium.com/@hardik31tkd/from-college-projects-to-production-the-cloud-deployment-skills-nobody-teaches-y-0432b088ecc8",
];
