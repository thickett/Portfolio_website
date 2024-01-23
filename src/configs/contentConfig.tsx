export const mediumContent = [
  {
    title:
      "Effortless Insights: Your Guide to Creating LLM-Based AI for Advanced Database Queries and Analysis",
    content:
      "In the ever-evolving landscape of data analysis, a challenge often lies in translating complex data queries into clear, actionable insights. Consider a scenario where a business needs to understand how a particular subset of users are interacting with one of their products. Traditionally, this would involve navigating through intricate database schemas and writing detailed SQL queries — a daunting task for many product-oriented professionals, and thus a dependency is created on the data teams.",
    link: "https://medium.com/p/a9ffdec14025",
    imagesrc: "src/assets/medium_article_image_one.webp",
    imagealt:
      "A medium article I wrote about how to build a conversational chatbot that can interact directly with databases and perform analysis.",
    content_type: "Medium Article",
  },
];

export const gitHubContent = [
  {
    title:
      "conversational AI - Database interactivity and analysis; langchain,Python, prompt engineering",
    content:
      "source code for producing a simple conversational bot that can be used be those with little technical experiance, or time to query any number of databases through natural language, it includes custom langchain tools, an example streamlit GUI, example prompts, instructions on methods to improve AIs understanding of your databases.",
    link: "https://github.com/thickett/Analytics-Bot",
    imagesrc: "src/assets/analytics bot image.png",
    imagealt:
      "An Image of a python terminal mid-way through running the analytics bot. It shows an Action called run_sql being executed.",
    content_type: "Github Repository",
  },
  {
    title:
      "Colon disease classifcation; Computer vision, data augmentation, Transfer learning, genetic algorithms and more.",
    content:
      "A notebook that details the progress of creating a succesfull computer vision framework for colon disease classifcation, most of the work is done in tensor flow, we play around with genetic algorithms and auto-divergent deep learning models, transfer learning, and our own self-built inception models.",
    link: "https://github.com/thickett/data-science-projects/tree/main/Colon%20Disease%20deep%20learning",
    imagesrc: "src/assets/colon_classifcation_images.png",
    imagealt:
      "An image of of a subset of activation layers for each of the 4 groups in the study.",
    content_type: "Github Repository",
  },

  {
    title:
      "Author Identity Prediction: NLP, LDA, hyperopt, webscraping, multi-label classification",
    content:
      "A piece of work that started as a university project where in A aim to see if an author can be identified purely on the content that they have written, more abstractly we are trying to understand whether a persons identity is recorded when they create natural language content in the same way it may be if they were to engage in conversation. \n f1-score: 0.77 across a few dozen BBC authors.",
    link: "https://github.com/thickett/data-science-projects/tree/main/Author_identity_prediction",
    imagesrc: "src/assets/Author Identity Predictions.png",
    imagealt:
      "An image of a performance curve and a learning rate curve for three algorithms; xgboost's implementation of a GBM, sklearn's implementation of a GBM, and naieve bayes.",
    content_type: "Github Repository",
  },

  // {
  //   title:
  //     "Molecular energy predictions: scalable ML pipelines, big data, pyspark, Hadoop, MLlib",
  //   content:
  //     "This was a bit of a throw back project to my chemistry days. I wanted to explore how the world of data science handles big data. What better way is there to do this than to look at chemical space! \n Chemical space exists in the order of 10x^60 so we actually only consdier a subset of it here. the goal though was simple; from a variety of chemical features, both explicit and implicit we aim to predict single point molecular energies.",
  //   link: "https://github.com/thickett/data-science-projects/tree/main/Molecular%20Energy%20predictions",
  //   imagesrc: "src/assets/image_molecular_predictions.png",
  //   imagealt: "An image of a DALL-E generated molecule.",
  //   content_type: "Github Repository",
  // },
];

export const allContent = [...mediumContent, ...gitHubContent];
