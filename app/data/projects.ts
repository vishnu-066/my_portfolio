export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectTechnology {
  name: string
  color?: string
}

export interface Project {
  id: string
  title: string
  slug: string
  date: string
  description: string
  longDescription: string
  features: string[]
  technologies: ProjectTechnology[]
  githubUrl: string
  liveUrl?: string
  imageSrc: string
  gallery: ProjectImage[]
  category: "data-science" | "web-development" | "algorithm"
  challenges?: string[]
  solutions?: string[]
  learnings?: string[]
}

export const projects: Project[] = [
  {
    id: "bst-visualization",
    title: "Binary Search Tree Visualization",
    slug: "bst-visualization",
    date: "Aug 2024",
    description:
      "An interactive visualization tool for Binary Search Trees, demonstrating insertion, deletion, and traversal operations with animated visual feedback.",
    longDescription:
      "This project is an interactive visualization tool designed to help students and developers understand the fundamental operations of Binary Search Trees (BST). It provides a visual representation of how data is organized in a BST and demonstrates key operations such as insertion, deletion, and various traversal methods (in-order, pre-order, post-order) with step-by-step animations. The visualization helps bridge the gap between theoretical knowledge and practical implementation, making it easier to grasp these important data structure concepts.",
    features: [
      "Interactive BST visualization with node insertion and deletion",
      "Step-by-step animation of tree operations",
      "Multiple traversal methods: in-order, pre-order, post-order",
      "Speed control for animations",
      "Custom input for tree construction",
      "Educational explanations for each operation",
    ],
    technologies: [
      { name: "C++", color: "#00599C" },
      { name: "WebAssembly", color: "#654FF0" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
    githubUrl: "https://github.com/vishnu-066/cipher_schools_project",
    imageSrc: "/images/bst-visualization.png",
    gallery: [
      {
        src: "/images/bst-visualization.png",
        alt: "BST Visualization Main Interface",
        caption: "Main interface showing a balanced binary search tree",
      },
      {
        src: "/images/bst-insertion.png",
        alt: "BST Insertion Operation",
        caption: "Animation of node insertion process",
      },
      {
        src: "/images/bst-deletion.png",
        alt: "BST Deletion Operation",
        caption: "Step-by-step visualization of node deletion",
      },
      {
        src: "/images/bst-traversal.png",
        alt: "BST Traversal Methods",
        caption: "Different traversal methods highlighted on the tree",
      },
    ],
    category: "algorithm",
    challenges: [
      "Implementing smooth animations for tree restructuring during operations",
      "Ensuring the visualization accurately represents the underlying data structure",
      "Creating an intuitive user interface for complex operations",
      "Optimizing performance for large trees",
    ],
    solutions: [
      "Developed a custom animation system with configurable timing",
      "Created a robust C++ implementation compiled to WebAssembly for performance",
      "Designed a clean, intuitive UI with clear visual feedback",
      "Implemented efficient algorithms for tree operations",
    ],
    learnings: [
      "Deepened understanding of BST operations and edge cases",
      "Gained experience with WebAssembly for high-performance web applications",
      "Improved skills in creating educational visualizations",
      "Enhanced knowledge of animation techniques for data structure representation",
    ],
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction Model",
    slug: "diabetes-prediction",
    date: "Nov 2024",
    description:
      "A machine learning model that predicts the likelihood of diabetes based on various health parameters, with an accuracy of 85% on test data.",
    longDescription:
      "This project focuses on developing a predictive model for diabetes risk assessment using machine learning techniques. Leveraging a comprehensive dataset of patient health metrics, the model analyzes various parameters such as glucose levels, BMI, age, and family history to predict the likelihood of diabetes. The project includes extensive data preprocessing, feature engineering, model selection, and evaluation to achieve high accuracy. The final model achieves 85% accuracy on test data, making it a valuable tool for early risk assessment and preventive healthcare.",
    features: [
      "Comprehensive data preprocessing and cleaning",
      "Feature importance analysis and selection",
      "Multiple model comparison (Random Forest, Logistic Regression, SVM)",
      "Cross-validation for robust performance evaluation",
      "Interactive dashboard for result visualization",
      "Detailed statistical analysis of prediction factors",
    ],
    technologies: [
      { name: "R", color: "#276DC3" },
      { name: "ggplot2", color: "#E7553C" },
      { name: "caret", color: "#276DC3" },
      { name: "dplyr", color: "#276DC3" },
    ],
    githubUrl: "https://github.com/vishnu-066/Diabetes-prediction-Model",
    imageSrc: "/images/diabetes-prediction.png",
    gallery: [
      {
        src: "/images/diabetes-prediction.png",
        alt: "Diabetes Prediction Dashboard",
        caption: "Main dashboard showing prediction results",
      },
      {
        src: "/images/diabetes-correlation.png",
        alt: "Feature Correlation Matrix",
        caption: "Correlation matrix of health parameters",
      },
      { src: "/images/diabetes-roc.png", alt: "ROC Curve Analysis", caption: "ROC curve showing model performance" },
      {
        src: "/images/diabetes-features.png",
        alt: "Feature Importance",
        caption: "Visualization of feature importance in prediction",
      },
    ],
    category: "data-science",
    challenges: [
      "Handling imbalanced dataset with more non-diabetic than diabetic cases",
      "Dealing with missing values in critical health parameters",
      "Selecting the most relevant features for prediction",
      "Optimizing model parameters for maximum accuracy",
    ],
    solutions: [
      "Implemented SMOTE for balanced sampling of training data",
      "Developed a robust imputation strategy for missing values",
      "Used recursive feature elimination to identify key predictors",
      "Applied grid search for hyperparameter optimization",
    ],
    learnings: [
      "Gained expertise in healthcare data analysis",
      "Improved understanding of feature engineering for medical predictions",
      "Enhanced skills in model evaluation and validation",
      "Developed better techniques for handling imbalanced datasets",
    ],
  },
  {
    id: "population-analysis",
    title: "Indian Population Analysis",
    slug: "population-analysis",
    date: "Oct 2024",
    description:
      "Analyzed and visualized the population trends of India, offering insights into growth patterns, age distribution, and urbanization.",
    longDescription:
      "This project presents a comprehensive analysis of India's population dynamics over the past several decades. Using data from census reports and demographic surveys, the analysis explores key trends in population growth, age distribution, gender ratios, urbanization, and regional variations. Through advanced data visualization techniques, the project highlights important demographic shifts and their implications for social and economic planning. The analysis provides valuable insights for policymakers, researchers, and anyone interested in understanding India's demographic evolution.",
    features: [
      "Temporal analysis of population growth rates",
      "Demographic pyramid visualizations by age and gender",
      "State-wise population density mapping",
      "Urban vs. rural population trend analysis",
      "Interactive visualizations for exploring demographic data",
      "Predictive models for future population trends",
    ],
    technologies: [
      { name: "Python", color: "#3776AB" },
      { name: "Pandas", color: "#150458" },
      { name: "Matplotlib", color: "#11557C" },
      { name: "Seaborn", color: "#3776AB" },
    ],
    githubUrl: "https://github.com/vishnu-066/population-of-india-_analysis",
    imageSrc: "/images/population-analysis.png",
    gallery: [
      {
        src: "/images/population-analysis.png",
        alt: "Population Growth Trends",
        caption: "Historical population growth trends in India",
      },
      {
        src: "/images/population-pyramid.png",
        alt: "Age-Gender Pyramid",
        caption: "Demographic pyramid showing age and gender distribution",
      },
      {
        src: "/images/population-density.png",
        alt: "Population Density Map",
        caption: "Heat map of population density across Indian states",
      },
      {
        src: "/images/urbanization-trends.png",
        alt: "Urbanization Trends",
        caption: "Analysis of urban vs. rural population changes",
      },
    ],
    category: "data-science",
    challenges: [
      "Integrating data from multiple census periods with varying methodologies",
      "Creating meaningful visualizations for complex demographic patterns",
      "Accounting for administrative boundary changes over time",
      "Developing accurate predictive models for future trends",
    ],
    solutions: [
      "Developed data normalization techniques for consistent analysis across time periods",
      "Created custom visualization templates for demographic data",
      "Implemented geographic reconciliation for changing administrative boundaries",
      "Used ensemble modeling for robust population projections",
    ],
    learnings: [
      "Deepened understanding of demographic analysis techniques",
      "Enhanced skills in geospatial data visualization",
      "Improved methods for time-series analysis of population data",
      "Gained insights into socioeconomic factors affecting population dynamics",
    ],
  },
]
