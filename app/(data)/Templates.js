export default [
  {
    name: "Blog Title",
    desc: "AI tool that generates blog title depending on your blog information",
    category: "Blog",
    icon: "/blog-title.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet wise only based on given niche and outline and give me the result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Text Improvement",
    desc: "AI tool that enhances the given text by improving clarity, style, and grammar",
    category: "Text Enhancement",
    icon: "/text-improvement.png",
    aiPrompt:
      "Improve the given text by enhancing grammar, clarity, and style while maintaining the original meaning. Return the result in a Rich text editor format.",
    slug: "improve-text",
    form: [
      {
        label: "Enter text to improve",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Code Block Generator",
    desc: "AI tool that generates code blocks based on the provided programming language and problem description",
    category: "Code Generation",
    icon: "/code-block-generator.png",
    aiPrompt:
      "Generate a block of code based on the given programming language and problem description. Ensure the code is optimized and well-commented and explained and give me the result in Rich text editor format.",
    slug: "generate-code-block",
    form: [
      {
        label: "Enter programming language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Enter problem description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Title",
    desc: "AI tool that generates attention-grabbing titles for YouTube videos",
    category: "Video",
    icon: "/video-title.png",
    aiPrompt:
      "Generate 5 attention-grabbing YouTube video titles based on the provided video topic and keywords and give me the result in Rich text editor format",
    slug: "generate-youtube-video-title",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "input",
        name: "keywords",
      },
    ],
  },
  {
    name: "Email Title",
    desc: "AI tool that generates catchy email titles based on your email content",
    category: "Email",
    icon: "/email-title.png",
    aiPrompt:
      "Generate 5 email subject lines based on the content provided, focusing on engagement and curiosity and give me the result in Rich text editor format",
    slug: "generate-email-title",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "AI tool that generates detailed product descriptions",
    category: "Product",
    icon: "/product-description.png",
    aiPrompt:
      "Generate a detailed product description based on the given product features and target audience and give me the result in Rich text editor format",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Ad Slogan",
    desc: "AI tool that generates catchy advertising slogans",
    category: "Marketing",
    icon: "/ad-slogan.png",
    aiPrompt:
      "Generate 5 advertising slogans based on the product description and target market and give me the result in Rich text editor format",
    slug: "generate-ad-slogan",
    form: [
      {
        label: "Enter product description",
        field: "textarea",
        name: "description",
        required: true,
      },
      {
        label: "Enter target market",
        field: "input",
        name: "market",
      },
    ],
  },
  {
    name: "Interview Questions",
    desc: "AI tool that generates interview questions for a given role",
    category: "HR",
    icon: "/interview-questions.png",
    aiPrompt:
      "Generate 10 interview questions based on the given role and industry and give me the result in Rich text editor format",
    slug: "generate-interview-questions",
    form: [
      {
        label: "Enter role",
        field: "input",
        name: "role",
        required: true,
      },
      {
        label: "Enter industry",
        field: "input",
        name: "industry",
      },
    ],
  },
  {
    name: "Workout Plan",
    desc: "AI tool that generates a workout plan based on the user's fitness goal",
    category: "Fitness",
    icon: "/workout-plan.png",
    aiPrompt:
      "Generate a 7-day workout plan based on the given fitness goal and experience level and give me the result in Rich text editor format",
    slug: "generate-workout-plan",
    form: [
      {
        label: "Enter fitness goal",
        field: "input",
        name: "goal",
        required: true,
      },
      {
        label: "Enter experience level",
        field: "input",
        name: "experience",
      },
    ],
  },
  {
    name: "Biography Generator",
    desc: "AI tool that generates a short biography based on the user's personal information",
    category: "Personal",
    icon: "/biography.png",
    aiPrompt:
      "Generate a short biography in the third person based on the personal information provided and give me the result in Rich text editor format",
    slug: "generate-biography",
    form: [
      {
        label: "Enter personal details",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "AI tool that generates engaging social media posts",
    category: "Social Media",
    icon: "/social-media-post.png",
    aiPrompt:
      "Generate 3 social media posts based on the given topic and tone, focusing on engagement and give me the result in Rich text editor format",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter tone (optional)",
        field: "input",
        name: "tone",
      },
    ],
  },
];
