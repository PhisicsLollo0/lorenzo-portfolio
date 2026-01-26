import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Lorenzo",
  lastName: "Cavallo",
  name: `Lorenzo Cavallo`,
  role: "Astrophysicist & GenAI Specialist",
  avatar: "/images/avatar.jpg",
  email: "lorenzo.cavallo@example.com", // Update with your actual email
  location: "Europe/Rome", // Modena, Italy
  languages: ["English", "Italian"], // optional: Leave the array empty if you don't want to display languages
};

// ============================================
// WORK IN PROGRESS - Newsletter
// ============================================
// Newsletter feature disabled for now
const newsletter: Newsletter = {
  display: false, // Set to true when ready to launch newsletter
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI, data science, and astrophysics research</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/phisicslollo0", // Update with your actual GitHub
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lorenzo-cavallo", // Update with your actual LinkedIn
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  // Optional: Add Google Scholar, ResearchGate, or ORCID if you have accounts
  // {
  //   name: "Google Scholar",
  //   icon: "scholar",
  //   link: "https://scholar.google.com/citations?user=YOUR_ID",
  //   essential: false,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging Astrophysics and Artificial Intelligence</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Lorenzo, an astrophysicist and AI specialist at <Text as="span" size="xl" weight="strong">Accenture's Center of Excellence for AI</Text> in Modena. I combine my PhD research background in Galactic Archaeology with expertise in <Text as="span" weight="strong">GenAI and Agentic AI</Text> to solve complex data science challenges.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Lorenzo is a GenAI and Agentic AI specialist at <strong>Accenture's Center of Excellence for AI</strong> in Modena, 
        where he develops <strong>end-to-end Agentic AI systems</strong> and multi-agent architectures for industrial and 
        functional decision science. His expertise spans the complete lifecycle: from LLM integration and prompt 
        engineering, through orchestration frameworks and tool development, to production deployment and monitoring.
        <br /><br />
        With a unique background bridging astrophysics research and AI engineering, Lorenzo applies rigorous 
        scientific methodology to building autonomous AI agents that reason, plan, and execute complex tasks. 
        He holds a PhD in Astronomy from the University of Padua, where he pioneered machine learning applications 
        in galactic archaeology, developing neural networks for stellar population analysis.
        <br /><br />
        He is also a proud member of <strong>GiovaniBlu</strong>, an Italian outreach team promoting accurate information 
        about nuclear energy and rational environmentalism.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Accenture",
        timeframe: "2024 - Present",
        role: "Ind & Func AI Decision Science Analyst - Center of Excellence for AI",
        achievements: [
          <>
            Designing and developing <strong>end-to-end Agentic AI systems</strong> from concept to production, 
            including LLM integration, prompt engineering, tool/function calling, orchestration frameworks 
            (LangChain, LangGraph), and deployment pipelines for autonomous decision-making agents.
          </>,
          <>
            Building <strong>multi-agent architectures</strong> with inter-agent communication, task delegation, 
            and collaborative problem-solving capabilities for industrial and functional decision science applications 
            at Accenture's Center of Excellence for AI and GenAI in Modena.
          </>,
          <>
            Implementing production-ready GenAI solutions with robust error handling, monitoring, and evaluation 
            frameworks, leveraging expertise in statistical modeling and rigorous testing methodologies from 
            astrophysics research.
          </>,
        ],
        images: [],
      },
      {
        company: "University of Padua",
        timeframe: "2020 - 2024",
        role: "PhD Researcher in Astronomy",
        achievements: [
          <>
            Conducted cutting-edge research in <strong>Galactic Archaeology</strong>, using machine learning 
            to analyze stellar populations and reconstruct the formation history of the Milky Way.
          </>,
          <>
            Developed neural network architectures for parameter estimation of open clusters, 
            published in The Astronomical Journal (2024).
          </>,
          <>
            Applied advanced statistical methods to model neutron star mergers and chemical evolution 
            of the Galaxy, with publications in MNRAS and A&A.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Padua",
        description: <>PhD in Astronomy (2024) - Research focus: Galactic Archaeology, Machine Learning in Astronomy</>,
      },
      {
        name: "University of Trieste",
        description: <>MSc in Astrophysics (2020) & BSc in Physics (2018)</>,
      },
    ],
  },
  publications: {
    display: true,
    title: "Selected Publications",
    papers: [
      {
        title: "Parameter Estimation for Open Clusters using an Artificial Neural Network with a QuadTree-based Feature Extractor",
        journal: "The Astronomical Journal",
        date: "January 2024",
        authors: "L. Cavallo, L. Spina, G. Carraro, et al.",
        link: "https://ui.adsabs.harvard.edu/abs/2024AJ....167...12C",
      },
      {
        title: "On the hosts of neutron star mergers in the nearby Universe",
        journal: "Monthly Notices of the Royal Astronomical Society",
        date: "July 2023",
        authors: "L. Cavallo, L. Greggio",
        link: "https://ui.adsabs.harvard.edu/abs/2023MNRAS.522.3529C/abstract",
      },
      {
        title: "Europium enrichment and hierarchical formation of the Galactic halo",
        journal: "Astronomy & Astrophysics",
        date: "June 2023",
        authors: "L. Cavallo, G. Cescutti, F. Matteucci",
        link: "https://ui.adsabs.harvard.edu/abs/2023A%26A...674A.130C/abstract",
      },
      {
        title: "Neutron stars mergers in a stochastic chemical evolution model: impact of time delay distributions",
        journal: "Monthly Notices of the Royal Astronomical Society",
        date: "May 2021",
        authors: "L. Cavallo, G. Cescutti, F. Matteucci",
        link: "https://ui.adsabs.harvard.edu/abs/2021MNRAS.503....1C/abstract",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Generative AI & Large Language Models",
        description: (
          <>
            Expert in building GenAI applications using state-of-the-art LLMs. Proficient in prompt engineering, 
            RAG (Retrieval-Augmented Generation) systems, fine-tuning, and deploying production-ready AI solutions. 
            Experience with OpenAI API, Anthropic Claude, and open-source models.
          </>
        ),
        tags: [
          {
            name: "OpenAI",
          },
          {
            name: "LangChain",
          },
          {
            name: "RAG",
          },
          {
            name: "Prompt Engineering",
          },
        ],
        images: [],
      },
      {
        title: "Agentic AI & Multi-Agent Systems",
        description: (
          <>
            Specialized in designing and implementing autonomous AI agents and multi-agent systems for 
            complex decision-making. Building intelligent agents that can reason, plan, and execute tasks 
            with minimal human intervention, using frameworks like LangGraph, MCP (Model Context Protocol), 
            and custom Agent-to-Agent (A2A) communication architectures.
          </>
        ),
        tags: [
          {
            name: "LangGraph",
          },
          {
            name: "MCP",
          },
          {
            name: "A2A Communication",
          },
          {
            name: "Autonomous Agents",
          },
          {
            name: "Multi-Agent Systems",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Experienced in deploying and managing AI solutions on cloud platforms with containerization 
            and orchestration technologies. Proficient in building scalable, production-ready infrastructure 
            for GenAI applications using Azure cloud services, Kubernetes for container orchestration, 
            and Docker for containerization.
          </>
        ),
        tags: [
          {
            name: "Azure",
          },
          {
            name: "Kubernetes",
          },
          {
            name: "Docker",
          },
          {
            name: "MLOps",
          },
        ],
        images: [],
      },
      {
        title: "Machine Learning & Data Science",
        description: (
          <>
            Deep expertise in machine learning, neural networks, and advanced statistical methods. 
            Skilled in developing custom ML models for complex problems, from astronomical data analysis 
            to industrial applications. Proficient with TensorFlow, PyTorch, scikit-learn, and modern MLOps practices.
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "TensorFlow",
          },
          {
            name: "PyTorch",
          },
          {
            name: "scikit-learn",
          },
        ],
        images: [],
      },
      {
        title: "Research & Astrophysics",
        description: (
          <>
            PhD-level expertise in Galactic Archaeology, stellar evolution, and open clusters. 
            Pioneered machine learning applications in astronomy, including neural network-based 
            parameter estimation for stellar populations. Strong background in computational astrophysics 
            and large-scale astronomical data analysis.
          </>
        ),
        tags: [
          {
            name: "Galactic Archaeology",
          },
          {
            name: "Neural Networks",
          },
          {
            name: "Stellar Evolution",
          },
          {
            name: "Big Data",
          },
        ],
        images: [],
      },
    ],
  },
};

// ============================================
// WORK IN PROGRESS - Blog Section
// ============================================
// Coming soon: Technical blog about AI, ML, and astrophysics
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI and tech...",
  description: `Technical insights and thoughts from ${person.name}`,
};

// ============================================
// WORK IN PROGRESS - Projects Section
// ============================================
// Coming soon: Showcase of AI/ML projects and case studies
const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and ML projects by ${person.name}`,
};

// ============================================
// WORK IN PROGRESS - Gallery Section
// ============================================
// Coming soon: Personal photo gallery
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
  // Template images commented out - will be replaced with personal photos
  // images: [
  //   {
  //     src: "/images/gallery/horizontal-1.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/vertical-4.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/horizontal-3.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/vertical-1.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/vertical-2.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/horizontal-2.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/horizontal-4.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/vertical-3.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  // ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
