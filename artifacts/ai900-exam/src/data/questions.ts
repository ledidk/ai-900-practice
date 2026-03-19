export interface Question {
  id: number;
  q: string;
  o: string[];
  a: number;
  e: string;
  k: string[];
}

const questions: Record<number, Question> = {};

questions[1] = {
  id: 1,
  q: "A company employs a team of customer service agents to provide telephone and email support to customers. The company develops a webchat bot to provide automated answers to common customer queries. Which business benefit should the company expect as a result of creating the webchat bot solution?",
  o: ["A. increased sales", "B. a reduced workload for the customer service agents", "C. improved product reliability"],
  a: 1,
  e: "Correct answer is B: a reduced workload for the customer service agents. The webchat bot handles common queries automatically, freeing human agents to focus on complex issues.",
  k: ["webchat bot", "customer service", "workload reduction", "automation"]
};

questions[2] = {
  id: 2,
  q: "For a machine learning process, how should you split data for training and evaluation?",
  o: ["A. Use features for training and labels for evaluation.", "B. Randomly split the data into rows for training and rows for evaluation.", "C. Use labels for training and features for evaluation.", "D. Randomly split the data into columns for training and columns for evaluation."],
  a: 1,
  e: "You split rows, not columns. The Split Data module divides the dataset into training and testing sets by rows (typically randomly), so the model can be evaluated on data it has not seen during training.",
  k: ["train/test split", "split data", "rows", "evaluation"]
};

questions[3] = {
  id: 3,
  q: "HOTSPOT - You are developing a model to predict events by using classification. You have a confusion matrix for the model scored on test data. Based on the exhibit, the number of correctly predicted positives (True Positives) is:",
  o: ["A. 11", "B. 1033", "C. 5111", "D. 13951"],
  a: 0,
  e: "TP = True Positive. In the confusion matrix exhibit, TP = 11 (correctly predicted positives). FN = 1033 (false negatives - positives predicted as negative).",
  k: ["confusion matrix", "true positives", "TP", "classification"]
};

questions[4] = {
  id: 4,
  q: "You build a machine learning model by using the automated machine learning user interface (UI). You need to ensure that the model meets the Microsoft transparency principle for responsible AI. What should you do?",
  o: ["A. Set Validation type to Auto.", "B. Enable Explain best model.", "C. Set Primary metric to accuracy.", "D. Set Max concurrent iterations to 0."],
  a: 1,
  e: "Enable Explain best model. Model explainability supports the transparency principle by helping you understand how the model makes decisions and what influenced the outcome.",
  k: ["automated ML", "transparency", "explainability", "responsible AI"]
};

questions[5] = {
  id: 5,
  q: "HOTSPOT - For each statement, select Yes if it is true: (1) Forecasting housing prices is an example of anomaly detection? (2) Identifying suspicious sign-in attempts is anomaly detection? (3) Predicting whether a patient has diabetes is anomaly detection?",
  o: ["A. No / Yes / No", "B. Yes / No / Yes", "C. No / Yes / Yes", "D. Yes / Yes / No"],
  a: 0,
  e: "Forecasting prices is regression. Identifying suspicious sign-ins IS anomaly detection. Predicting diabetes is classification (yes/no). Answer: No/Yes/No.",
  k: ["anomaly detection", "regression", "classification", "fraud detection"]
};

questions[6] = {
  id: 6,
  q: "HOTSPOT - To complete the sentence, select the appropriate option: The handling of unusual or missing values provided to an AI system is a consideration for the Microsoft __________ principle for responsible AI.",
  o: ["inclusiveness", "privacy and security", "reliability and safety", "transparency"],
  a: 2,
  e: "Reliability and safety ensures AI systems operate safely under normal and unexpected conditions, including handling unusual or missing values and edge cases.",
  k: ["reliability and safety", "missing values", "edge cases", "responsible AI"]
};

questions[7] = {
  id: 7,
  q: "DRAG DROP - Match the types of AI workloads to the appropriate scenarios: (1) An automated chat solution for customer support (2) A system that tries to mimic human vision (3) Performing sentiment analysis on product reviews",
  o: ["A. Conversational AI / Computer Vision / NLP", "B. Computer Vision / NLP / Conversational AI", "C. NLP / Computer Vision / Conversational AI", "D. Conversational AI / NLP / Computer Vision"],
  a: 0,
  e: "Automated chat = Conversational AI. Mimicking human vision = Computer Vision. Sentiment analysis = Natural Language Processing (NLP).",
  k: ["conversational AI", "computer vision", "NLP", "sentiment analysis"]
};

questions[8] = {
  id: 8,
  q: "You are designing an AI system that empowers everyone, including people who have hearing, visual, and other impairments. This is an example of which Microsoft guiding principle for responsible AI?",
  o: ["A. fairness", "B. inclusiveness", "C. reliability and safety", "D. accountability"],
  a: 1,
  e: "Inclusiveness: At Microsoft, everyone should benefit from intelligent technology, meaning it must incorporate and address a broad range of human needs and experiences, including the 1 billion people with disabilities around the world.",
  k: ["inclusiveness", "accessibility", "disabilities", "responsible AI"]
};

questions[9] = {
  id: 9,
  q: "DRAG DROP - Match the Microsoft guiding principles for responsible AI: (1) AI systems should be able to respond safely to unanticipated conditions (2) AI systems' decisions can be overridden by humans (3) Controls over the collection, use, and storage of their data",
  o: ["A. Reliability and safety / Accountability / Privacy and security", "B. Transparency / Accountability / Privacy and security", "C. Fairness / Inclusiveness / Transparency", "D. Privacy / Reliability / Accountability"],
  a: 0,
  e: "Reliability & safety: respond safely to unexpected conditions. Accountability: humans can override AI decisions. Privacy & security: controls over data collection, use, and storage.",
  k: ["reliability and safety", "accountability", "privacy and security", "responsible AI"]
};

questions[10] = {
  id: 10,
  q: "HOTSPOT - To complete the sentence: Ensuring consistent operation of an AI system during unexpected circumstances is an example of the Microsoft __________ principle for responsible AI.",
  o: ["fairness", "inclusiveness", "reliability and safety", "transparency"],
  a: 2,
  e: "Reliability and safety ensures AI systems operate reliably, safely, and consistently under normal circumstances and in unexpected conditions.",
  k: ["reliability and safety", "unexpected circumstances", "responsible AI"]
};

questions[11] = {
  id: 11,
  q: "You are building an AI system. Which task should you include to ensure that the service meets the Microsoft transparency principle for responsible AI?",
  o: ["A. Ensure that all visuals have an associated text that can be read by a screen reader.", "B. Enable autoscaling to ensure that a service scales based on demand.", "C. Provide documentation to help developers debug code.", "D. Ensure that a training dataset is representative of the population."],
  a: 2,
  e: "C - Transparency means making AI systems understandable. Documentation helps developers understand how the system works, which supports transparency. A is inclusiveness, B is reliability, D is fairness.",
  k: ["transparency", "documentation", "responsible AI"]
};

questions[12] = {
  id: 12,
  q: "DRAG DROP - Match the types of AI workloads: (1) Identify handwritten letters in an image (2) Perform sentiment analysis on reviews (3) Detect fraudulent credit card payments (4) Predict next month's toy sales figures",
  o: ["A. Computer Vision / NLP / Anomaly Detection / Regression", "B. NLP / Computer Vision / Regression / Anomaly Detection", "C. Computer Vision / Regression / NLP / Anomaly Detection", "D. Anomaly Detection / NLP / Computer Vision / Regression"],
  a: 0,
  e: "Identify letters = Computer Vision. Sentiment analysis = NLP. Fraud detection = Anomaly Detection. Predict sales = Regression (predicting a number).",
  k: ["computer vision", "NLP", "anomaly detection", "regression"]
};

questions[13] = {
  id: 13,
  q: "Your company is exploring the use of voice recognition technologies in its smart home devices. The company wants to identify any barriers that might unintentionally leave out specific user groups. This is an example of which Microsoft guiding principle for responsible AI?",
  o: ["A. accountability", "B. fairness", "C. inclusiveness", "D. privacy and security"],
  a: 2,
  e: "Inclusiveness ensures no user groups are unintentionally excluded (e.g., disabled, different genders, ethnicities). The goal is that no one is left out.",
  k: ["inclusiveness", "voice recognition", "accessibility", "user groups"]
};

questions[14] = {
  id: 14,
  q: "What are three Microsoft guiding principles for responsible AI? Each correct answer presents a complete solution.",
  o: ["A. knowledgeability", "B. decisiveness", "C. inclusiveness", "D. fairness", "E. opinionatedness", "F. reliability and safety"],
  a: 3,
  e: "The six guiding principles are: Fairness, Inclusiveness, Transparency, Privacy and Security, Reliability and Safety, and Accountability. Answer: C, D, F (inclusiveness, fairness, reliability and safety).",
  k: ["responsible AI", "principles", "fairness", "inclusiveness", "reliability and safety"]
};

questions[15] = {
  id: 15,
  q: "HOTSPOT - Returning a bounding box that indicates the location of a vehicle in an image is an example of:",
  o: ["image classification", "object detection", "semantic segmentation", "optical character recognition"],
  a: 1,
  e: "Object detection returns bounding box coordinates for objects in images. Semantic segmentation would classify each pixel. Image classification just labels the whole image.",
  k: ["object detection", "bounding box", "computer vision", "vehicle detection"]
};

questions[16] = {
  id: 16,
  q: "HOTSPOT - To complete the sentence: __________ is used to generate additional features from raw data.",
  o: ["Feature engineering", "Feature selection", "Model evaluation", "Model training"],
  a: 0,
  e: "Feature engineering is applied first to generate additional features from raw data. Feature selection is then used to eliminate irrelevant, redundant, or highly correlated features.",
  k: ["feature engineering", "feature creation", "data preparation"]
};

questions[17] = {
  id: 17,
  q: "You run a charity event that involves posting photos of people wearing sunglasses on Twitter. You need to ensure that you only retweet photos that meet: Include one or more faces; Contain at least one person wearing sunglasses. What should you use to analyze the images?",
  o: ["A. the Verify operation in the Face service", "B. the Detect operation in the Face service", "C. the Describe Image operation in the Computer Vision service", "D. the Analyze Image operation in the Computer Vision service"],
  a: 1,
  e: "Face Detect can detect faces and their attributes including glasses/sunglasses. The Detect operation returns face bounding boxes plus attributes like glasses.",
  k: ["Face API", "detect", "sunglasses", "face attributes", "face detection"]
};

questions[18] = {
  id: 18,
  q: "When you design an AI system to assess whether loans should be approved, the factors used to make the decision should be explainable. This is an example of which Microsoft guiding principle for responsible AI?",
  o: ["A. transparency", "B. inclusiveness", "C. fairness", "D. privacy and security"],
  a: 0,
  e: "Transparency means providing explanations about how the AI system makes decisions. Explainable loan approval factors are an example of transparency.",
  k: ["transparency", "explainability", "loan approval"]
};

questions[19] = {
  id: 19,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Providing an explanation of the outcome of a credit loan application is an example of the transparency principle. (2) A triage bot that prioritizes insurance claims based on injuries is an example of the reliability and safety principle. (3) An AI solution offered at different prices for different sales territories is an example of the inclusiveness principle.",
  o: ["A. Yes / No / No", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / Yes"],
  a: 0,
  e: "Providing explanation = Yes (transparency). Triage bot prioritizing = No (not specifically reliability/safety). Different prices for territories = No (not inclusiveness).",
  k: ["transparency", "reliability and safety", "inclusiveness", "responsible AI"]
};

questions[20] = {
  id: 20,
  q: "DRAG DROP - Match responsible AI principles to requirements: (1) The system must not discriminate based on gender or race. (2) Personal data must be visible only to approved personnel. (3) Automated decision-making processes must be recorded so approved users can identify why decisions were made.",
  o: ["A. Fairness / Privacy and security / Transparency", "B. Inclusiveness / Accountability / Privacy and security", "C. Privacy / Reliability / Fairness", "D. Accountability / Safety / Privacy"],
  a: 0,
  e: "No discrimination based on gender/race = Fairness. Personal data protection = Privacy and security. Recording decisions for explainability = Transparency.",
  k: ["fairness", "privacy and security", "transparency", "responsible AI"]
};

questions[21] = {
  id: 21,
  q: "DRAG DROP - You plan to deploy an Azure Machine Learning model as a service. Which three processes should you perform in sequence before deploying the model?",
  o: ["A. Data preparation → Model training → Model evaluation", "B. Data encryption → Model training → Model deployment", "C. Model training → Data preparation → Model evaluation", "D. Model retraining → Data preparation → Model training"],
  a: 0,
  e: "A typical machine learning project includes: data preparation, model training, model evaluation, then deployment. Data encryption and model retraining are not part of the standard pre-deployment steps.",
  k: ["ML pipeline", "data preparation", "model training", "model evaluation", "deployment"]
};

questions[22] = {
  id: 22,
  q: "You are building an AI-based app. You need to ensure that the app uses the principles for responsible AI. Which two principles should you follow?",
  o: ["A. Implement an Agile software development methodology.", "B. Implement a process of AI model validation as part of the software review process.", "C. Establish a risk governance committee that includes members of the legal team, risk management team, and a privacy officer.", "D. Prevent the disclosure of the use of AI-based algorithms for automated decision making."],
  a: 1,
  e: "B ensures reliability and safety (validating models). C ensures privacy and security (governance committee). A is not a responsible AI principle. D is opposite of transparency.",
  k: ["responsible AI", "model validation", "governance", "reliability and safety", "privacy and security"]
};

questions[23] = {
  id: 23,
  q: "HOTSPOT - To complete the sentence: An AI system that ensures consistent operation across all user groups regardless of background is following the __________ principle for responsible AI.",
  o: ["accountability", "fairness", "inclusiveness", "reliability and safety"],
  a: 2,
  e: "Inclusiveness ensures that AI benefits everyone across all user groups and backgrounds without leaving anyone out.",
  k: ["inclusiveness", "user groups", "responsible AI"]
};

questions[24] = {
  id: 24,
  q: "HOTSPOT - Select the answer that correctly completes the sentence: An AI system that avoids discriminating based on gender, race, sexual orientation, or religion is following the __________ principle.",
  o: ["accountability", "fairness", "inclusiveness", "transparency"],
  a: 1,
  e: "Fairness is a core ethical principle that ensures the system's decisions don't discriminate or run a bias toward a group or individual based on gender, race, sexual orientation, or religion.",
  k: ["fairness", "discrimination", "bias", "responsible AI"]
};

questions[25] = {
  id: 25,
  q: "DRAG DROP - Match the types of AI workloads: (1) An automated chatbot to answer questions about refunds and exchanges. (2) Determining whether a photo contains a person. (3) Determining whether a review is positive or negative.",
  o: ["A. Knowledge mining / Computer vision / NLP", "B. NLP / Computer vision / Knowledge mining", "C. Computer vision / NLP / Knowledge mining", "D. Anomaly detection / Computer vision / NLP"],
  a: 0,
  e: "Knowledge mining powers chatbot answers. Computer vision detects persons in photos. NLP performs sentiment analysis (positive/negative reviews).",
  k: ["knowledge mining", "computer vision", "NLP", "sentiment analysis"]
};

questions[26] = {
  id: 26,
  q: "DRAG DROP - Match machine learning tasks to scenarios: (1) Outputs a confusion matrix showing true positives, false negatives, etc. (2) Creating new variables from raw data using domain knowledge. (3) Selecting a subset of relevant useful features from available data.",
  o: ["A. Model evaluation / Feature engineering / Feature selection", "B. Feature engineering / Model evaluation / Feature selection", "C. Feature selection / Feature engineering / Model evaluation", "D. Model evaluation / Feature selection / Feature engineering"],
  a: 0,
  e: "Confusion matrix = Model evaluation. Creating new variables from raw data = Feature engineering. Selecting relevant features = Feature selection.",
  k: ["model evaluation", "feature engineering", "feature selection", "confusion matrix"]
};

questions[27] = {
  id: 27,
  q: "HOTSPOT - In a dataset, a column called 'House Price' that you want to predict is called a __________, and the columns used as inputs to the prediction are called __________.",
  o: ["A. label / features", "B. feature / labels", "C. column / rows", "D. input / output"],
  a: 0,
  e: "The column you want to predict is the label (output). The columns used as inputs to make the prediction are features (inputs).",
  k: ["label", "features", "dataset", "prediction"]
};

questions[28] = {
  id: 28,
  q: "You have a Predicted vs. True chart that shows the relationship between predicted values and correlating true values. Which type of model is the chart used to evaluate?",
  o: ["A. classification", "B. regression", "C. clustering"],
  a: 1,
  e: "Predicted vs. True chart shows the relationship between predicted and actual values for a regression problem. The closer to the y=x line, the better the model accuracy.",
  k: ["regression", "predicted vs true", "model evaluation", "chart"]
};

questions[29] = {
  id: 29,
  q: "Which type of machine learning should you use to predict the number of gift cards that will be sold next month?",
  o: ["A. classification", "B. regression", "C. clustering"],
  a: 1,
  e: "Regression predicts numeric values. The number of gift cards sold is a numeric target, so regression is the correct approach.",
  k: ["regression", "numeric prediction", "sales forecasting"]
};

questions[30] = {
  id: 30,
  q: "You have a dataset about taxi journeys (trip distance, vendor ID, passenger count, fare amount). You need to train a model to predict the fare of a taxi journey. What should you use as a feature?",
  o: ["A. the number of taxi journeys in the dataset", "B. the trip distance of individual taxi journeys", "C. the fare of individual taxi journeys", "D. the trip ID of individual taxi journeys"],
  a: 1,
  e: "Trip distance is a feature (input). The fare amount is the label (what you want to predict). Trip ID is meaningless as a feature. Number of journeys is not relevant.",
  k: ["feature", "label", "taxi fare", "prediction"]
};

questions[31] = {
  id: 31,
  q: "You need to predict the sea level in meters for the next 10 years. Which type of machine learning should you use?",
  o: ["A. classification", "B. regression", "C. clustering"],
  a: 1,
  e: "Sea level in meters is a continuous numeric value. Regression predicts numeric targets, making it the right choice.",
  k: ["regression", "numeric prediction", "sea level", "time series"]
};

questions[32] = {
  id: 32,
  q: "HOTSPOT - For each statement about Automated Machine Learning (AutoML), select Yes or No: (1) AutoML automates time-consuming ML model development tasks. (2) AutoML requires you to select the algorithm manually. (3) AutoML creates multiple pipelines in parallel trying different algorithms. (4) AutoML allows you to specify the target metric.",
  o: ["A. Yes / No / Yes / Yes", "B. Yes / Yes / No / Yes", "C. No / No / Yes / Yes", "D. Yes / No / No / No"],
  a: 0,
  e: "AutoML yes automates model development. No, it doesn't require manual algorithm selection (it tries them automatically). Yes, it runs parallel pipelines. Yes, you specify the target metric.",
  k: ["AutoML", "automated machine learning", "pipeline", "algorithms"]
};

questions[33] = {
  id: 33,
  q: "HOTSPOT - A banking system that predicts whether a loan will be repaid is an example of which type of machine learning?",
  o: ["classification", "regression", "clustering"],
  a: 0,
  e: "Classification provides the answer to simple two-choice questions such as Yes/No or True/False. Whether a loan will be repaid (yes or no) is a binary classification problem.",
  k: ["classification", "binary classification", "loan repayment"]
};

questions[34] = {
  id: 34,
  q: "HOTSPOT - For each statement about labeled data, select Yes or No: (1) Labeled data means the data is marked up to show the target answer. (2) Labeled data is used in unsupervised learning. (3) Accuracy is always the best metric for evaluating a classifier.",
  o: ["A. Yes / No / No", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / Yes"],
  a: 0,
  e: "Labeled data yes means marked with the target answer. No, labeled data is used in supervised learning (not unsupervised). No, accuracy is poor when data is imbalanced.",
  k: ["labeled data", "supervised learning", "accuracy", "evaluation"]
};

questions[35] = {
  id: 35,
  q: "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
  o: ["A. Form Recognizer", "B. Text Analytics", "C. Language Understanding", "D. Custom Vision"],
  a: 0,
  e: "Form Recognizer applies advanced machine learning to accurately extract text, key/value pairs, and tables from documents automatically.",
  k: ["Form Recognizer", "document extraction", "OCR", "key-value pairs"]
};

questions[36] = {
  id: 36,
  q: "HOTSPOT - To complete the sentence: __________ applies advanced machine learning to accurately extract text, key/value pairs, and tables from documents.",
  o: ["Computer Vision", "Form Recognizer", "Text Analytics", "Language Understanding"],
  a: 1,
  e: "Form Recognizer is designed specifically for extracting text, key/value pairs, and table data from documents using advanced machine learning.",
  k: ["Form Recognizer", "document extraction", "text extraction"]
};

questions[37] = {
  id: 37,
  q: "You use Azure Machine Learning designer to publish an inference pipeline. Which two parameters should you use to access the web service?",
  o: ["A. the model name and the training endpoint", "B. the authentication key and the REST endpoint", "C. the compute cluster name and the REST endpoint", "D. the pipeline name and the authentication key"],
  a: 1,
  e: "To consume a published pipeline/web service, you need: the REST endpoint and the authentication key (Primary Key).",
  k: ["REST endpoint", "authentication key", "web service", "inference pipeline"]
};

questions[38] = {
  id: 38,
  q: "HOTSPOT - To complete the sentence: To perform real-time inferencing in Azure Machine Learning designer, you must deploy a pipeline to __________.",
  o: ["Azure Container Instances", "Azure Kubernetes Service (AKS)", "Azure Functions", "Azure Batch"],
  a: 1,
  e: "Real-time endpoints must be deployed to an Azure Kubernetes Service (AKS) cluster for production. Azure Container Instances is used for dev/test.",
  k: ["AKS", "real-time inferencing", "deployment", "Azure Kubernetes Service"]
};

questions[39] = {
  id: 39,
  q: "HOTSPOT - To complete the sentence: __________ refers to prediction of a numeric target by establishing a linear relationship between independent variables and a numeric outcome.",
  o: ["Classification", "Regression", "Clustering", "Anomaly detection"],
  a: 1,
  e: "Regression refers to prediction of a numeric target. It establishes a linear relationship between one or more independent variables and a numeric outcome (dependent variable).",
  k: ["regression", "numeric prediction", "linear relationship"]
};

questions[40] = {
  id: 40,
  q: "HOTSPOT - For each statement about Azure Machine Learning designer, select Yes or No: (1) Designer provides a drag-and-drop visual canvas. (2) Designer enables saving progress as a pipeline draft. (3) Designer enables custom JavaScript functions.",
  o: ["A. Yes / Yes / No", "B. Yes / Yes / Yes", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Designer yes provides visual canvas. Yes, you can save progress as pipeline drafts. No, designer does not support JavaScript - only Python and R modules.",
  k: ["Azure ML designer", "pipeline", "drag and drop", "pipeline draft"]
};

questions[41] = {
  id: 41,
  q: "HOTSPOT - You have a dataset to train a model to predict house price categories. You plan to predict House Price Category using Household Income. What are Household Income and House Price Category?",
  o: ["A. Household Income is a Feature; House Price Category is a Label", "B. Household Income is a Label; House Price Category is a Feature", "C. Both are Features", "D. Both are Labels"],
  a: 0,
  e: "Feature = Input (what you use to make predictions). Label = Output (what you want to predict). Household Income is the input feature; House Price Category is the label to predict.",
  k: ["feature", "label", "dataset", "house price"]
};

questions[42] = {
  id: 42,
  q: "HOTSPOT - To complete the sentence: Azure Machine Learning designer lets you create machine learning models by __________.",
  o: ["adding and connecting modules on an interactive canvas", "writing code in Python notebooks", "using a wizard to automatically select configurations", "uploading pre-trained models from Azure Marketplace"],
  a: 0,
  e: "Azure Machine Learning designer is a no-code visual drag-and-drop tool where you add and connect modules on an interactive canvas to create machine learning models.",
  k: ["Azure ML designer", "visual canvas", "modules", "no-code"]
};

questions[43] = {
  id: 43,
  q: "HOTSPOT - For each statement about Automated Machine Learning (AutoML), select Yes or No: (1) AutoML requires programming knowledge. (2) AutoML is a no-code solution. (3) AutoML models can be deployed using the Azure ML studio.",
  o: ["A. No / Yes / No", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / Yes"],
  a: 0,
  e: "No, AutoML doesn't require programming. Yes, it is a no-code solution. No (not directly always) - deployment configuration is done via Azure ML studio experience.",
  k: ["AutoML", "no-code", "automated machine learning"]
};

questions[44] = {
  id: 44,
  q: "A medical research project uses a large anonymized dataset of brain scan images categorized into predefined brain haemorrhage types. You need to use machine learning to support early detection of different brain haemorrhage types. This is an example of which type of machine learning?",
  o: ["A. clustering", "B. regression", "C. classification"],
  a: 2,
  e: "Classification predicts predefined categories from inputs. Since the brain scans are categorized into predefined haemorrhage types and you want to assign a new scan to one of these categories, this is classification.",
  k: ["classification", "medical imaging", "predefined categories", "brain scan"]
};

questions[45] = {
  id: 45,
  q: "When training a model, why should you randomly split the rows into separate subsets?",
  o: ["A. to train the model twice to attain better accuracy", "B. to train multiple models simultaneously to attain better performance", "C. to test the model by using data that was not used to train the model"],
  a: 2,
  e: "Splitting data creates training and test sets. The test set contains data the model hasn't seen, so you can evaluate how well it generalizes to new, unseen data.",
  k: ["train/test split", "evaluation", "overfitting", "generalization"]
};

questions[46] = {
  id: 46,
  q: "You are evaluating Azure Machine Learning workspaces. What are two tasks that require an enterprise workspace?",
  o: ["A. Use a GUI to run automated machine learning experiments.", "B. Create a compute instance to use as a workstation.", "C. Use a GUI to define and run machine learning experiments from Azure Machine Learning designer.", "D. Create a dataset from a CSV file."],
  a: 0,
  e: "Note: Enterprise workspaces are no longer available as of September 2020. The basic workspace now has all the functionality of the enterprise workspace. Historically, A and C required enterprise workspaces.",
  k: ["Azure ML workspace", "enterprise workspace", "automated ML", "designer"]
};

questions[47] = {
  id: 47,
  q: "You need to predict the income range of a given customer. The dataset has: First Name, Last Name, Age, Education Level, Income Range. Which two fields should you use as features?",
  o: ["A. Education Level and Age", "B. First Name and Last Name", "C. Income Range and Age", "D. Education Level and Income Range"],
  a: 0,
  e: "Features are inputs. Income Range is the label (what you want to predict). First Name and Last Name are not useful predictive features. Age and Education Level are the relevant input features.",
  k: ["features", "label", "Income Range", "prediction", "classification"]
};

questions[48] = {
  id: 48,
  q: "You need to build an automated machine learning solution that groups similar data points together without predefined categories. Which type of machine learning should you use?",
  o: ["A. classification", "B. regression", "C. clustering", "D. anomaly detection"],
  a: 2,
  e: "Clustering groups data points into similar clusters without predefined labels. It is also called segmentation.",
  k: ["clustering", "unsupervised learning", "grouping", "segmentation"]
};

questions[49] = {
  id: 49,
  q: "HOTSPOT - For each scenario, select Yes if it's an example of clustering, otherwise No: (1) Organizing documents into groups based on similarities. (2) Grouping similar patients based on symptoms. (3) Predicting the severity of a patient's allergy based on pollen count.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Organizing documents by similarity = Yes (clustering). Grouping patients by symptoms = Yes (clustering). Predicting severity = No (this is regression/classification, not clustering).",
  k: ["clustering", "grouping", "classification", "regression"]
};

questions[50] = {
  id: 50,
  q: "Which type of machine learning is used when you need to discover natural groupings in data without any predefined categories?",
  o: ["A. supervised learning (regression)", "B. supervised learning (classification)", "C. unsupervised learning (clustering)", "D. reinforcement learning"],
  a: 2,
  e: "Unsupervised learning clustering discovers natural groupings in data without predefined categories or labels.",
  k: ["clustering", "unsupervised learning", "natural groupings"]
};

questions[51] = {
  id: 51,
  q: "What are two metrics that you can use to evaluate a regression model? Each correct answer presents a complete solution.",
  o: ["A. coefficient of determination (R2) and root mean squared error (RMSE)", "B. F1 score and area under curve (AUC)", "C. balanced accuracy and F1 score", "D. AUC and R2"],
  a: 0,
  e: "R2 (coefficient of determination) measures how well the model fits the data (closer to 1 is better). RMSE (root mean squared error) measures average prediction error magnitude. Both are regression metrics. F1, AUC, and balanced accuracy are classification metrics.",
  k: ["R2", "RMSE", "regression metrics", "coefficient of determination", "root mean squared error"]
};

questions[52] = {
  id: 52,
  q: "Which evaluation metric is most appropriate for evaluating a binary classification model when the dataset is imbalanced?",
  o: ["A. Mean Absolute Error (MAE)", "B. Accuracy", "C. Area Under the ROC Curve (AUC)", "D. R-squared (R2)"],
  a: 2,
  e: "AUC is more appropriate than accuracy for imbalanced datasets. MAE and R2 are for regression models.",
  k: ["AUC", "classification", "imbalanced dataset", "ROC curve"]
};

questions[53] = {
  id: 53,
  q: "HOTSPOT - To complete the sentence: In machine learning, the variable that a model is trained to predict is called the __________.",
  o: ["feature", "label", "column", "algorithm"],
  a: 1,
  e: "The variable that the model is trained to predict is the label (also called the target or output). The inputs used to make predictions are called features.",
  k: ["label", "target variable", "prediction", "supervised learning"]
};

questions[54] = {
  id: 54,
  q: "Which type of machine learning should you use to identify groups of people who have similar purchasing habits?",
  o: ["A. classification", "B. regression", "C. clustering"],
  a: 2,
  e: "Clustering groups similar instances together without predefined labels. Identifying customer groups by purchasing habits is customer segmentation, a classic clustering use case.",
  k: ["clustering", "segmentation", "purchasing habits", "customer grouping"]
};

questions[55] = {
  id: 55,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Feature selection can improve model performance. (2) Feature engineering creates new features from existing data. (3) Removing irrelevant features always reduces model accuracy.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Feature selection yes can improve performance by removing noise. Feature engineering yes creates new features. No, removing irrelevant features typically improves accuracy by reducing noise.",
  k: ["feature selection", "feature engineering", "model performance"]
};

questions[56] = {
  id: 56,
  q: "Which metric can you use to evaluate a classification model?",
  o: ["A. true positive rate", "B. mean absolute error (MAE)", "C. coefficient of determination (R2)", "D. root mean squared error (RMSE)"],
  a: 0,
  e: "True positive rate (recall/sensitivity) is a classification metric measuring the proportion of actual positives correctly identified. MAE, R2, and RMSE are regression metrics used to evaluate numeric prediction models.",
  k: ["true positive rate", "recall", "classification metric", "sensitivity"]
};

questions[57] = {
  id: 57,
  q: "Which two components can you drag onto a canvas in Azure Machine Learning designer?",
  o: ["A. dataset and module", "B. compute cluster and pipeline", "C. module and compute", "D. dataset and pipeline"],
  a: 0,
  e: "You can drag datasets and modules onto the Azure Machine Learning designer canvas to create ML pipelines.",
  k: ["Azure ML designer", "dataset", "module", "canvas"]
};

questions[58] = {
  id: 58,
  q: "HOTSPOT - To complete the sentence: Azure Machine Learning designer saves your in-progress work as a __________.",
  o: ["model checkpoint", "pipeline draft", "experiment run", "training job"],
  a: 1,
  e: "As you edit a pipeline in the designer, your progress is automatically saved as a pipeline draft.",
  k: ["Azure ML designer", "pipeline draft", "save progress"]
};

questions[59] = {
  id: 59,
  q: "DRAG DROP - Match machine learning types to scenarios: (1) Predict the temperature of the ocean next month. (2) Group customers into categories based on preferences. (3) Predict whether a patient has a specific disease (yes/no).",
  o: ["A. Regression / Clustering / Classification", "B. Classification / Regression / Clustering", "C. Clustering / Classification / Regression", "D. Regression / Classification / Clustering"],
  a: 0,
  e: "Predict temperature (numeric) = Regression. Group customers = Clustering. Predict yes/no disease = Classification.",
  k: ["regression", "clustering", "classification"]
};

questions[60] = {
  id: 60,
  q: "What does accuracy measure in the context of a classification model?",
  o: ["A. the proportion of correctly classified instances out of all instances", "B. the difference between predicted and actual numeric values", "C. how well the model clusters data", "D. the variance explained by the model"],
  a: 0,
  e: "Accuracy is the proportion of correctly classified instances out of total instances. However, it can be misleading with imbalanced datasets.",
  k: ["accuracy", "classification", "evaluation metric"]
};

questions[61] = {
  id: 61,
  q: "HOTSPOT - Ensuring an AI system does not provide a prediction when important input fields contain unusual or missing values is which responsible AI principle?",
  o: ["inclusiveness", "privacy and security", "reliability and safety", "transparency"],
  a: 2,
  e: "Reliability and safety ensures the AI system handles edge cases (like missing or unusual values) safely, not making unsafe predictions when the input is unreliable.",
  k: ["reliability and safety", "missing values", "edge cases", "responsible AI"]
};

questions[62] = {
  id: 62,
  q: "Which metric is used to evaluate a regression model by measuring the average squared difference between predicted and actual values?",
  o: ["A. Accuracy", "B. Mean Squared Error (MSE)", "C. F1-Score", "D. AUC"],
  a: 1,
  e: "Mean Squared Error (MSE) measures the average squared difference between predicted and actual values for regression models.",
  k: ["MSE", "Mean Squared Error", "regression", "evaluation metric"]
};

questions[63] = {
  id: 63,
  q: "HOTSPOT - To complete the sentence: In Azure Machine Learning automated ML, the __________ is the column in the dataset that the model will be trained to predict.",
  o: ["feature column", "target column (label)", "primary metric", "data split column"],
  a: 1,
  e: "The target column (label) is what AutoML trains the model to predict. It corresponds to the label in supervised learning.",
  k: ["AutoML", "target column", "label", "supervised learning"]
};

questions[64] = {
  id: 64,
  q: "HOTSPOT - You have an Azure ML model predicting product quality. The dataset includes: Timestamp, Measurement1, Measurement2, Pass/Fail. For each: Timestamp is a useful feature? Measurements are features? Pass/Fail is the label?",
  o: ["A. Yes / Yes / Yes", "B. Yes / No / Yes", "C. No / Yes / Yes", "D. Yes / Yes / No"],
  a: 0,
  e: "Timestamp yes can be a feature (time-based patterns). Measurements yes are features (inputs). Pass/Fail yes is the label (what you predict).",
  k: ["features", "label", "timestamp", "measurements"]
};

questions[65] = {
  id: 65,
  q: "Which type of Azure Machine Learning provides a no-code solution where you specify the target metric and the service selects the best algorithm automatically?",
  o: ["A. Azure Machine Learning designer", "B. Azure Machine Learning SDK (Python)", "C. Automated Machine Learning (AutoML)", "D. Azure Databricks ML"],
  a: 2,
  e: "Automated Machine Learning (AutoML) automatically selects algorithms and hyperparameters. You just specify the dataset and target metric.",
  k: ["AutoML", "no-code", "automated", "algorithm selection"]
};

questions[66] = {
  id: 66,
  q: "HOTSPOT - To complete the sentence: A model that can correctly classify images as containing cats or dogs, but fails on new images it has never seen, is suffering from __________.",
  o: ["underfitting", "overfitting", "bias", "variance reduction"],
  a: 1,
  e: "Overfitting occurs when a model learns the training data too well but fails to generalize to new, unseen data.",
  k: ["overfitting", "generalization", "model evaluation"]
};

questions[67] = {
  id: 67,
  q: "You need to predict the animal population of an area based on historical data. Which type of Azure Machine Learning should you use?",
  o: ["A. regression", "B. clustering", "C. classification"],
  a: 0,
  e: "Population count is a numeric value. Regression predicts numeric values.",
  k: ["regression", "population prediction", "numeric value"]
};

questions[68] = {
  id: 68,
  q: "Which two languages can you use to write custom code for Azure Machine Learning designer?",
  o: ["A. Python and R", "B. Python and C#", "C. R and Scala", "D. JavaScript and Python"],
  a: 0,
  e: "Azure ML designer supports custom Python and R code modules. No other languages are supported.",
  k: ["Python", "R", "custom code", "Azure ML designer"]
};

questions[69] = {
  id: 69,
  q: "HOTSPOT - To complete the sentence: In a confusion matrix, a __________ occurs when the model predicts a positive result but the actual result is negative.",
  o: ["True Positive (TP)", "True Negative (TN)", "False Positive (FP)", "False Negative (FN)"],
  a: 2,
  e: "False Positive (FP) = model predicts positive but actual is negative. False Negative (FN) = model predicts negative but actual is positive.",
  k: ["confusion matrix", "false positive", "FP", "classification evaluation"]
};

questions[70] = {
  id: 70,
  q: "Your company wants to build a recycling machine for bottles. The machine must automatically identify bottles of the correct shape and reject others. Which AI workload type should you use?",
  o: ["A. anomaly detection", "B. conversational AI", "C. computer vision", "D. natural language processing"],
  a: 2,
  e: "Computer vision identifies visual features of objects (like bottle shape). This is an image recognition/object classification task.",
  k: ["computer vision", "object detection", "image classification", "recycling"]
};

questions[71] = {
  id: 71,
  q: "HOTSPOT - For each statement about Custom Vision, select Yes or No: (1) You must choose multilabel or multiclass classification. (2) Object detection can find the location of content in an image. (3) You can select from predefined domains to optimize the model.",
  o: ["A. No / Yes / Yes", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / Yes"],
  a: 0,
  e: "Multilabel/multiclass is optional (you can also do object detection). Yes, object detection returns bounding boxes/locations. Yes, Custom Vision provides predefined domains (food, landmarks, retail, etc.).",
  k: ["Custom Vision", "object detection", "domains", "multiclass"]
};

questions[72] = {
  id: 72,
  q: "Which computer vision task involves assigning a class label to each individual pixel in an image?",
  o: ["A. object detection", "B. image classification", "C. semantic segmentation", "D. OCR"],
  a: 2,
  e: "Semantic segmentation classifies each pixel of an image into a category, creating detailed pixel-level maps of what's in the image.",
  k: ["semantic segmentation", "pixel classification", "computer vision"]
};

questions[73] = {
  id: 73,
  q: "HOTSPOT - To complete the sentence: __________ is a type of object recognition that identifies the specific location of items within an image by returning coordinates of a bounding box.",
  o: ["Image classification", "Object detection", "Semantic segmentation", "Facial recognition"],
  a: 1,
  e: "Object detection identifies and locates items in an image by returning bounding box coordinates (x, y, width, height) for each detected object.",
  k: ["object detection", "bounding box", "location", "coordinates"]
};

questions[74] = {
  id: 74,
  q: "HOTSPOT - You have a database that contains a list of employees and their photos. You are tagging new photos of the employees. For each statement, select Yes or No: (1) The Face service can be used to detect faces in the new photos. (2) Providing multiple angles of a person's face improves recognition accuracy. (3) The Face service will always detect a face even if it is occluded by sunglasses.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Yes, Face service detects faces and their attributes. Yes, providing multiple angles (frontal, profile) improves feature representation and reduces false positives. No, occlusions like sunglasses can sometimes prevent face detection — 'always' is too strong; some occlusions can be inferred but not all.",
  k: ["Face service", "face detection", "occlusion", "facial recognition", "employee photos"]
};

questions[75] = {
  id: 75,
  q: "You need to develop a mobile app for employees to scan and store their expense receipts while travelling. Which type of computer vision should you use?",
  o: ["A. semantic segmentation", "B. image classification", "C. object detection", "D. optical character recognition (OCR)"],
  a: 3,
  e: "OCR extracts text from images. For expense receipts, you need to extract text (amounts, dates, merchant names) from scanned images.",
  k: ["OCR", "expenses", "receipt scanning", "text extraction"]
};

questions[76] = {
  id: 76,
  q: "HOTSPOT - For each statement about Custom Vision image classification, select Yes or No: (1) Image classification applies a label to the whole image. (2) You need to label images yourself to train the model. (3) Custom Vision can be used on video files.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Image classification yes applies labels to whole images. Yes, you must label training images. No, Custom Vision only works on graphic/image files, not video files.",
  k: ["Custom Vision", "image classification", "labeling", "video"]
};

questions[77] = {
  id: 77,
  q: "You need to identify the numbers printed on runners' shirts in photos from a marathon. Which type of computer vision should you use?",
  o: ["A. facial recognition", "B. optical character recognition (OCR)", "C. image classification", "D. object detection"],
  a: 1,
  e: "OCR (Optical Character Recognition) reads and extracts text and numbers from images. For identifying printed numbers on shirts, OCR is the correct choice. Facial recognition finds faces, image classification labels the whole image, and object detection locates objects.",
  k: ["OCR", "optical character recognition", "text extraction", "runners", "marathon"]
};

questions[78] = {
  id: 78,
  q: "DRAG DROP - Match computer vision types to their descriptions: (1) Classify camera trap images as containing polar bears or brown bears. (2) Identify the location and type of each animal in an image. (3) Analyze images pixel-by-pixel to determine the exact boundary of each object.",
  o: ["A. Image classification / Object detection / Semantic segmentation", "B. Object detection / Image classification / Semantic segmentation", "C. Semantic segmentation / Object detection / Image classification", "D. Image classification / Semantic segmentation / Object detection"],
  a: 0,
  e: "Classifying bears as polar or brown = Image classification (whole-image label). Identifying location and type of each animal = Object detection (bounding boxes). Pixel-level boundary analysis = Semantic segmentation (each pixel gets a class label).",
  k: ["image classification", "object detection", "semantic segmentation", "pixel", "bounding box"]
};

questions[79] = {
  id: 79,
  q: "You use drones to identify where weeds grow between rows of crops in order to send instructions for weed removal. Which type of computer vision should you use?",
  o: ["A. object detection", "B. optical character recognition (OCR)", "C. scene segmentation", "D. image classification"],
  a: 0,
  e: "Object detection is used to identify the presence and location of specific objects (weeds) within images. It returns bounding boxes showing where weeds are, enabling precise targeting for removal. OCR reads text, image classification labels the whole image, and scene segmentation is similar but less precise.",
  k: ["object detection", "drones", "weed detection", "precision agriculture", "bounding box"]
};

questions[80] = {
  id: 80,
  q: "DRAG DROP - Match Face API operations to descriptions: (1) Determine whether two detected faces are from the same person. (2) Find faces in a database that are similar-looking to a detected face. (3) Organize detected faces into groups based on visual similarity. (4) Match a detected face against a database to identify who the person is.",
  o: ["A. Verification / Similarity / Grouping / Identification", "B. Identification / Grouping / Similarity / Verification", "C. Similarity / Verification / Identification / Grouping", "D. Grouping / Identification / Verification / Similarity"],
  a: 0,
  e: "Verification: checks if two faces belong to the same person. Similarity: finds faces that look similar. Grouping: clusters similar faces together. Identification: matches a face against a known database of people.",
  k: ["Face API", "verification", "similarity", "grouping", "identification", "facial recognition"]
};

questions[81] = {
  id: 81,
  q: "HOTSPOT - For each statement about the Face API, select Yes or No: (1) The Face API can detect faces and their locations in images. (2) The Face API can recognize specific people's identities. (3) The Face API can detect emotions from facial expressions.",
  o: ["A. Yes / Yes / Yes", "B. Yes / No / Yes", "C. Yes / Yes / No", "D. No / Yes / Yes"],
  a: 0,
  e: "Face API yes can detect faces and locations. Yes it can recognize identities (face verification/identification). Yes it can detect emotions like happiness, sadness, anger.",
  k: ["Face API", "face detection", "face recognition", "emotion detection"]
};

questions[82] = {
  id: 82,
  q: "You need to determine the location of cars in an image so that you can estimate the distance between the cars. Which type of computer vision should you use?",
  o: ["A. optical character recognition (OCR)", "B. object detection", "C. image classification", "D. face detection"],
  a: 1,
  e: "Object detection identifies and locates multiple objects within an image by returning bounding box coordinates. Once you know the location of each car, you can use that positional data to estimate the distance between them.",
  k: ["object detection", "car location", "bounding box", "distance estimation", "computer vision"]
};

questions[83] = {
  id: 83,
  q: "HOTSPOT - You can use the __________ service to train an object detection model by using your own images.",
  o: ["Computer Vision", "Custom Vision", "Form Recognizer", "Video Indexer"],
  a: 1,
  e: "Custom Vision lets you train custom object detection models with your own labeled images. Computer Vision is pre-built and doesn't require training.",
  k: ["Custom Vision", "object detection", "train model", "custom training"]
};

questions[84] = {
  id: 84,
  q: "You send an image to a Computer Vision API and receive back an annotated image with bounding boxes and labels: orange: 96.77%, banana: 97.90%, apple: 98.21%. Which type of computer vision was used?",
  o: ["A. object detection", "B. face detection", "C. OCR", "D. image classification"],
  a: 0,
  e: "Bounding boxes with confidence scores for multiple items indicate object detection, which locates and identifies multiple objects within an image.",
  k: ["object detection", "bounding boxes", "Computer Vision", "confidence scores"]
};

questions[85] = {
  id: 85,
  q: "What are two tasks that can be performed by using the Computer Vision service?",
  o: ["A. Train a custom image classification model.", "B. Detect faces in an image.", "C. Recognize handwritten text in an image.", "D. Translate text in an image to another language."],
  a: 1,
  e: "Computer Vision can detect faces (B) and recognize handwritten text via OCR (C). Custom training requires Custom Vision. Translation requires Translator service.",
  k: ["Computer Vision", "face detection", "OCR", "handwritten text"]
};

questions[86] = {
  id: 86,
  q: "What is a use case for classification?",
  o: ["A. predicting cups of coffee a person will drink based on hours slept", "B. grouping images by similar colors", "C. predicting whether someone uses a bicycle to commute based on distance from work", "D. predicting race completion time based on past times"],
  a: 2,
  e: "Predicting whether someone uses a bicycle (yes/no) is binary classification. A and D are regression (predicting numbers). B is clustering (grouping).",
  k: ["classification", "binary classification", "commute prediction"]
};

questions[87] = {
  id: 87,
  q: "What are two tasks that can be performed by using computer vision?",
  o: ["A. Predict stock prices", "B. Detect brands in an image", "C. Detect color scheme of an image", "D. Translate text in an image", "E. Extract key phrases from text"],
  a: 1,
  e: "Computer Vision can detect brands (B) and analyze color schemes (C). Stock prediction is regression. Translation is Translator service. Key phrases is NLP.",
  k: ["computer vision", "brand detection", "color scheme", "image analysis"]
};

questions[88] = {
  id: 88,
  q: "You need to build an image tagging solution for social media that tags images of your friends automatically. Which Azure Cognitive Services service should you use?",
  o: ["A. Face", "B. Form Recognizer", "C. Language", "D. Computer Vision"],
  a: 0,
  e: "The Face service is specifically designed for facial recognition tasks. It can detect faces, identify individuals by matching them against a known database (e.g., your friends), and automatically tag those faces in images.",
  k: ["Face service", "image tagging", "facial recognition", "social media", "friend detection"]
};

questions[89] = {
  id: 89,
  q: "HOTSPOT - For each scenario, select Yes if it is an example of a Form Recognizer use case, otherwise No: (1) Identify the retailer from a receipt. (2) Extract the invoice number from an invoice. (3) Translate a form from French to English.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Yes, Form Recognizer has a pre-built receipt model that identifies retailers. Yes, Form Recognizer can extract invoice numbers from invoices. No, translating text from French to English is done by the Azure Translator service, not Form Recognizer.",
  k: ["Form Recognizer", "receipts", "invoices", "document intelligence", "translator"]
};

questions[90] = {
  id: 90,
  q: "DRAG DROP - Match computer vision scenarios: (1) A solution that reads text in street signs. (2) A solution that identifies whether an image contains a cat. (3) A solution that detects and draws boxes around each car in a parking lot image.",
  o: ["A. OCR / Image classification / Object detection", "B. Object detection / OCR / Image classification", "C. Image classification / OCR / Object detection", "D. OCR / Object detection / Image classification"],
  a: 0,
  e: "Reading text from signs = OCR. Identifying if image contains a cat = Image classification. Drawing boxes around cars = Object detection.",
  k: ["OCR", "image classification", "object detection", "street signs"]
};

questions[91] = {
  id: 91,
  q: "Which Computer Vision feature can you use to generate automatic captions for digital photographs?",
  o: ["A. Recognize text", "B. Identify areas of interest", "C. Detect objects", "D. Describe the images"],
  a: 3,
  e: "The 'Describe the images' feature generates human-readable captions that describe what is in a photograph.",
  k: ["Computer Vision", "image description", "captions", "image captioning"]
};

questions[92] = {
  id: 92,
  q: "HOTSPOT - To complete the sentence: __________ is a computer vision technique that can identify the location of specific objects within an image and return bounding box coordinates.",
  o: ["Image classification", "Object detection", "Facial recognition", "OCR"],
  a: 1,
  e: "Object detection identifies the location of specific objects within images and returns bounding box coordinates for each detected object.",
  k: ["object detection", "bounding box", "location", "computer vision"]
};

questions[93] = {
  id: 93,
  q: "__________ extracts text from handwritten documents.",
  o: ["Object detection", "Facial recognition", "Image classification", "Optical character recognition (OCR)"],
  a: 3,
  e: "Optical Character Recognition (OCR) extracts text from both printed and handwritten documents or images.",
  k: ["OCR", "handwritten text", "text extraction", "character recognition"]
};

questions[94] = {
  id: 94,
  q: "You are developing a solution using the Text Analytics service. You need to identify the main talking points in a collection of documents. Which NLP capability should you use?",
  o: ["A. entity recognition", "B. key phrase extraction", "C. sentiment analysis", "D. language detection"],
  a: 1,
  e: "Key phrase extraction identifies main concepts and talking points in documents. Entity recognition finds named entities. Sentiment analysis measures positive/negative tone.",
  k: ["key phrase extraction", "talking points", "Text Analytics", "NLP"]
};

questions[95] = {
  id: 95,
  q: "In which two scenarios can you use speech recognition?",
  o: ["A. in-car system that reads text messages aloud", "B. providing closed captions for a video presentation", "C. automated public address system announcements", "D. creating a transcript of a telephone call"],
  a: 1,
  e: "Speech recognition converts audio to text. Closed captions (B) and call transcripts (D) both involve converting speech to text. A and C are text-to-speech (opposite direction).",
  k: ["speech recognition", "speech-to-text", "closed captions", "transcription"]
};

questions[96] = {
  id: 96,
  q: "While presenting at a conference, your session is automatically transcribed into subtitles displayed for the audience. This is an example of:",
  o: ["speech-to-text", "speech synthesis (text-to-speech)", "speaker recognition", "translation"],
  a: 0,
  e: "Speech-to-text transcribes spoken words into written text. This is exactly what happens when speech is automatically converted to subtitles.",
  k: ["speech-to-text", "subtitles", "transcription", "speech recognition"]
};

questions[97] = {
  id: 97,
  q: "HOTSPOT - For each statement about Azure Cognitive Speech services, select Yes or No: (1) Speech-to-text converts spoken language to text. (2) Text-to-speech converts text to spoken audio. (3) Speech translation requires a separate Translator service.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Speech-to-text yes converts spoken to text. Text-to-speech yes converts text to audio. No, the Speech service includes speech translation built-in (speech-to-text + translation).",
  k: ["speech-to-text", "text-to-speech", "speech translation", "cognitive speech"]
};

questions[98] = {
  id: 98,
  q: "Which Azure service converts spoken language to text and can also synthesize text into spoken audio?",
  o: ["A. Language service", "B. Translator service", "C. Speech service", "D. Form Recognizer"],
  a: 2,
  e: "The Azure Speech service provides both speech-to-text (converting audio to text) and text-to-speech (synthesizing audio from text) capabilities.",
  k: ["Speech service", "speech-to-text", "text-to-speech", "Azure cognitive services"]
};

questions[99] = {
  id: 99,
  q: "DRAG DROP - Match speech-related scenarios to the correct Azure capability: (1) A user speaks a command and the app converts it to text. (2) A navigation app reads directions aloud. (3) A user speaks in English and the app understands it in French.",
  o: ["A. Speech-to-text / Text-to-speech / Speech translation", "B. Text-to-speech / Speech-to-text / Speech translation", "C. Speech translation / Speech-to-text / Text-to-speech", "D. Speech-to-text / Speech translation / Text-to-speech"],
  a: 0,
  e: "Speaking command to app = Speech-to-text. App reads aloud = Text-to-speech. Speaking in one language understood in another = Speech translation.",
  k: ["speech-to-text", "text-to-speech", "speech translation", "speech service"]
};

questions[100] = {
  id: 100,
  q: "HOTSPOT - To complete the sentence: __________ is used to identify the intent behind user text or voice input, enabling AI applications to understand what a user wants to do.",
  o: ["Key phrase extraction", "Language Understanding (LUIS)", "Sentiment analysis", "Translation"],
  a: 1,
  e: "Language Understanding (LUIS), now part of the Azure Language service, identifies intent from user input, enabling applications to understand what the user wants to do.",
  k: ["LUIS", "Language Understanding", "intent recognition", "conversational AI"]
};

questions[101] = {
  id: 101,
  q: "Which Azure NLP capability would you use to determine if a customer review of a restaurant is positive, negative, or neutral?",
  o: ["A. language detection", "B. key phrase extraction", "C. entity recognition", "D. sentiment analysis"],
  a: 3,
  e: "Sentiment analysis evaluates text and returns sentiment scores indicating whether the text is positive, negative, or neutral.",
  k: ["sentiment analysis", "NLP", "customer review", "Text Analytics"]
};

questions[102] = {
  id: 102,
  q: "HOTSPOT - For each statement about Azure Language service NLP capabilities, select Yes or No: (1) Entity recognition can identify people, places, and organizations in text. (2) Language detection identifies what language a document is written in. (3) Key phrase extraction determines if text is positive or negative.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Entity recognition yes identifies people, places, organizations. Language detection yes identifies the language. No, key phrase extraction identifies main topics, not sentiment.",
  k: ["entity recognition", "language detection", "key phrase extraction", "NLP"]
};

questions[103] = {
  id: 103,
  q: "You need to scan news for articles that mention your customers, alert when negative articles are found, and add positive articles to a press book. Which NLP tasks in order?",
  o: ["A. Entity recognition then Sentiment analysis", "B. Sentiment analysis then Key phrase extraction", "C. Key phrase extraction then Translation", "D. Entity recognition then Translation"],
  a: 0,
  e: "First entity recognition finds mentions of customer names. Then sentiment analysis determines if the tone is positive or negative.",
  k: ["entity recognition", "sentiment analysis", "news monitoring", "NLP pipeline"]
};

questions[104] = {
  id: 104,
  q: "Which Azure service allows you to build custom question-answering knowledge bases from documents, FAQs, and web pages?",
  o: ["A. Azure Bot Service", "B. Language service (Custom Question Answering)", "C. LUIS", "D. Speech service"],
  a: 1,
  e: "The Language service includes Custom Question Answering (formerly QnA Maker) which creates knowledge bases from documents, FAQs, and web pages.",
  k: ["Language service", "Custom Question Answering", "QnA Maker", "knowledge base"]
};

questions[105] = {
  id: 105,
  q: "HOTSPOT - For each statement about Language Understanding (LUIS), select Yes or No: (1) LUIS identifies the intent of a user utterance. (2) LUIS can extract entities (like dates, locations) from utterances. (3) LUIS creates conversational flows with dialog management.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "LUIS yes identifies intent from utterances. Yes, LUIS extracts entities like dates, names, locations. No, LUIS doesn't manage dialog flows (that's Bot Framework or Power Virtual Agents).",
  k: ["LUIS", "intent", "entity extraction", "Language Understanding"]
};

questions[106] = {
  id: 106,
  q: "HOTSPOT - To complete the sentence: The Azure __________ service translates text between languages and supports real-time translation of documents.",
  o: ["Speech", "Translator", "Language", "Form Recognizer"],
  a: 1,
  e: "The Azure Translator service provides text translation between languages and supports document translation.",
  k: ["Translator", "translation", "multilingual", "Azure cognitive services"]
};

questions[107] = {
  id: 107,
  q: "Which Azure service can be used to build an intelligent chatbot that responds to customer questions using natural language?",
  o: ["A. Azure Machine Learning", "B. Azure Bot Service with Language service", "C. Computer Vision", "D. Form Recognizer"],
  a: 1,
  e: "Azure Bot Service combined with the Language service (for NLP/QnA/LUIS) allows you to build intelligent chatbots that understand natural language.",
  k: ["Azure Bot Service", "chatbot", "Language service", "conversational AI"]
};

questions[108] = {
  id: 108,
  q: "DRAG DROP - Match NLP capabilities to scenarios: (1) A user asks 'What's the weather like?' and the app identifies the question is about weather. (2) A document mentions 'Microsoft' and the app identifies it as an organization. (3) A user's review is identified as 'mostly positive'.",
  o: ["A. Intent recognition / Entity recognition / Sentiment analysis", "B. Sentiment analysis / Entity recognition / Intent recognition", "C. Entity recognition / Intent recognition / Sentiment analysis", "D. Intent recognition / Sentiment analysis / Entity recognition"],
  a: 0,
  e: "Identifying what user wants (weather) = Intent recognition. Identifying 'Microsoft' as organization = Entity recognition. Rating review as positive = Sentiment analysis.",
  k: ["intent recognition", "entity recognition", "sentiment analysis", "NLP"]
};

questions[109] = {
  id: 109,
  q: "HOTSPOT - For each statement about Azure Cognitive Services, select Yes or No: (1) Cognitive Services require extensive machine learning expertise to use. (2) Cognitive Services can be accessed via REST APIs. (3) Cognitive Services provide pre-trained models.",
  o: ["A. No / Yes / Yes", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / Yes"],
  a: 0,
  e: "No, Cognitive Services don't require ML expertise (pre-built). Yes, they're accessed via REST APIs and SDKs. Yes, they provide pre-trained models.",
  k: ["Cognitive Services", "REST API", "pre-trained models", "Azure AI"]
};

questions[110] = {
  id: 110,
  q: "Which Azure service allows you to identify people in images by matching them against a database of known faces?",
  o: ["A. Computer Vision", "B. Face API (Azure Face service)", "C. Custom Vision", "D. Video Indexer"],
  a: 1,
  e: "The Azure Face service provides face identification capabilities, including matching faces against a database of known individuals.",
  k: ["Face API", "face identification", "face recognition", "Azure Face service"]
};

questions[111] = {
  id: 111,
  q: "HOTSPOT - To complete the sentence: __________ is the practice of creating AI systems that are designed to benefit humanity while avoiding potential harms.",
  o: ["Machine learning", "Responsible AI", "Deep learning", "Cognitive computing"],
  a: 1,
  e: "Responsible AI is the practice of designing and deploying AI systems in a way that benefits humanity, avoids harms, and follows ethical guidelines.",
  k: ["responsible AI", "ethics", "AI principles", "beneficial AI"]
};

questions[112] = {
  id: 112,
  q: "HOTSPOT - For each statement about Azure Knowledge Mining, select Yes or No: (1) Knowledge mining uses AI to extract information and insights from large amounts of unstructured data. (2) Azure Cognitive Search is a key service for knowledge mining. (3) Knowledge mining replaces the need for human experts.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Knowledge mining yes uses AI to extract insights from unstructured data. Yes, Azure Cognitive Search is the primary service. No, it doesn't replace human experts, it augments them.",
  k: ["knowledge mining", "Azure Cognitive Search", "unstructured data", "AI insights"]
};

questions[113] = {
  id: 113,
  q: "Which Azure service enables full-text search with AI capabilities, allowing you to extract insights from documents, images, and other unstructured content?",
  o: ["A. Azure Cosmos DB", "B. Azure Cognitive Search", "C. Azure SQL Database", "D. Azure Blob Storage"],
  a: 1,
  e: "Azure Cognitive Search enables knowledge mining and full-text search with AI enrichment capabilities like OCR, language understanding, and entity extraction.",
  k: ["Azure Cognitive Search", "knowledge mining", "full-text search", "AI enrichment"]
};

questions[114] = {
  id: 114,
  q: "DRAG DROP - Match the Azure AI services to their primary purpose: (1) Translating text between 100+ languages. (2) Extracting text from scanned documents. (3) Answering questions based on a knowledge base.",
  o: ["A. Translator / Form Recognizer / Language service (QnA)", "B. Language service / Translator / Form Recognizer", "C. Form Recognizer / Language service / Translator", "D. Translator / Language service / Form Recognizer"],
  a: 0,
  e: "Text translation = Translator. Extracting text from documents = Form Recognizer. QnA knowledge base = Language service (Custom Question Answering).",
  k: ["Translator", "Form Recognizer", "Language service", "QnA"]
};

questions[115] = {
  id: 115,
  q: "HOTSPOT - For each statement about Azure Bot Service, select Yes or No: (1) Azure Bot Service can integrate with Microsoft Teams. (2) Azure Bot Service requires coding knowledge to use. (3) Azure Bot Service can be combined with LUIS for natural language understanding.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / Yes", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Bot Service yes integrates with Teams and other channels. No, Power Virtual Agents is the no-code option; Bot Service has both options. Yes, Bot Service is commonly paired with LUIS.",
  k: ["Azure Bot Service", "Microsoft Teams", "LUIS", "chatbot", "NLP integration"]
};

questions[116] = {
  id: 116,
  q: "HOTSPOT - To complete the sentence: A bot that understands that 'book a table for tonight' and 'reserve a spot for dinner this evening' mean the same thing is using __________ understanding.",
  o: ["entity", "intent", "natural language", "sentiment"],
  a: 2,
  e: "Natural language understanding (via LUIS or Language service) allows the bot to understand that different phrasings express the same intent.",
  k: ["natural language understanding", "LUIS", "intent", "NLP"]
};

questions[117] = {
  id: 117,
  q: "Which Azure service provides the capability to automatically index and search documents, images, and other content for knowledge discovery?",
  o: ["A. Azure Machine Learning", "B. Azure Cognitive Search", "C. Azure Form Recognizer", "D. Azure Monitor"],
  a: 1,
  e: "Azure Cognitive Search (also called Azure AI Search) indexes and searches all types of content with AI enrichment for knowledge mining and discovery.",
  k: ["Azure Cognitive Search", "indexing", "search", "knowledge mining"]
};

questions[118] = {
  id: 118,
  q: "HOTSPOT - For each statement about responsible AI, select Yes or No: (1) AI systems should be able to explain their decisions. (2) AI developers have no accountability for how their systems are used. (3) Fairness in AI means the system should avoid discriminating based on protected characteristics.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Yes, AI systems should explain decisions (transparency). No, developers ARE accountable for their systems (accountability principle). Yes, fairness means avoiding discrimination.",
  k: ["transparency", "accountability", "fairness", "responsible AI"]
};

questions[119] = {
  id: 119,
  q: "Which principle of responsible AI is most relevant when an AI hiring system is found to preferentially select male candidates over equally qualified female candidates?",
  o: ["A. transparency", "B. fairness", "C. inclusiveness", "D. reliability and safety"],
  a: 1,
  e: "Fairness ensures AI systems don't discriminate based on gender, race, or other protected characteristics. A hiring system biased against women violates fairness.",
  k: ["fairness", "bias", "discrimination", "hiring AI"]
};

questions[120] = {
  id: 120,
  q: "HOTSPOT - To complete the sentence: When Microsoft says AI systems should be __________, it means the systems' decisions can be understood and explained to users and stakeholders.",
  o: ["fair", "inclusive", "transparent", "reliable"],
  a: 2,
  e: "Transparency means AI systems' decisions can be understood and explained. It ensures stakeholders can understand how and why decisions are made.",
  k: ["transparency", "explainability", "decisions", "responsible AI"]
};

questions[121] = {
  id: 121,
  q: "HOTSPOT - For each scenario, identify which responsible AI principle applies: (1) An AI system maintains consistent performance even when given edge-case inputs. (2) An AI company publishes detailed documentation about how their models work. (3) An AI system requires a human to approve any high-stakes decisions.",
  o: ["A. Reliability and safety / Transparency / Accountability", "B. Fairness / Privacy / Accountability", "C. Transparency / Reliability / Fairness", "D. Reliability / Fairness / Transparency"],
  a: 0,
  e: "Consistent performance on edge cases = Reliability and safety. Publishing documentation = Transparency. Human approval for high-stakes decisions = Accountability.",
  k: ["reliability and safety", "transparency", "accountability", "responsible AI"]
};

questions[122] = {
  id: 122,
  q: "Which Azure AI feature allows you to analyze an image and return a description of its contents in natural language?",
  o: ["A. Object detection", "B. Image classification", "C. Image captioning (Describe)", "D. OCR"],
  a: 2,
  e: "The Image captioning (Describe) feature of Computer Vision generates natural language descriptions of image contents.",
  k: ["image captioning", "image description", "Computer Vision", "natural language"]
};

questions[123] = {
  id: 123,
  q: "HOTSPOT - For each statement about Azure Cognitive Services pricing, select Yes or No: (1) Cognitive Services offer a free tier with limited usage. (2) Usage is typically priced per API call or per unit of data processed. (3) You need to pay upfront for a fixed number of transactions.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Yes, Cognitive Services offer free tiers. Yes, pricing is per API call or data unit. No, they use a pay-as-you-go model, not upfront fixed transactions.",
  k: ["Cognitive Services", "pricing", "free tier", "pay-as-you-go"]
};

questions[124] = {
  id: 124,
  q: "HOTSPOT - For each statement about machine learning, select Yes or No: (1) Machine learning models improve through experience without being explicitly programmed. (2) Traditional rule-based systems can handle the same complexity as machine learning. (3) Supervised learning requires labeled training data.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / No"],
  a: 0,
  e: "ML yes improves through experience. No, rule-based systems can't handle the same complexity as ML for complex tasks. Yes, supervised learning requires labeled data.",
  k: ["machine learning", "supervised learning", "labeled data", "rule-based systems"]
};

questions[125] = {
  id: 125,
  q: "Which type of AI involves systems that can set their own goals and adapt to achieve them without human guidance?",
  o: ["A. Narrow AI (Weak AI)", "B. General AI (Strong AI)", "C. Machine Learning", "D. Deep Learning"],
  a: 1,
  e: "General AI (Strong AI) would be capable of setting its own goals and adapting to achieve them. Narrow AI (today's AI) is limited to specific tasks.",
  k: ["general AI", "strong AI", "narrow AI", "artificial general intelligence"]
};

questions[126] = {
  id: 126,
  q: "HOTSPOT - To complete the sentence: __________ learning is a subset of machine learning where neural networks with many layers learn from large amounts of data.",
  o: ["Reinforcement", "Deep", "Transfer", "Federated"],
  a: 1,
  e: "Deep learning uses neural networks with many layers (deep neural networks) to learn complex patterns from large amounts of data.",
  k: ["deep learning", "neural networks", "machine learning", "layers"]
};

questions[127] = {
  id: 127,
  q: "Which statement best describes machine learning?",
  o: ["A. Programming a computer with explicit rules to make decisions.", "B. Teaching a computer to learn from data to make predictions or decisions.", "C. Building robots that can perform physical tasks.", "D. Creating computer graphics using algorithms."],
  a: 1,
  e: "Machine learning is the process of teaching computers to learn from data to make predictions or decisions, without being explicitly programmed with rules.",
  k: ["machine learning", "definition", "data", "predictions"]
};

questions[128] = {
  id: 128,
  q: "HOTSPOT - For each statement about computer vision applications, select Yes or No: (1) Computer vision can be used in autonomous vehicles to detect road hazards. (2) Computer vision can determine the sentiment of a social media post. (3) Computer vision can identify damaged items in a manufacturing quality control system.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Autonomous vehicles yes use computer vision. No, sentiment is NLP not computer vision. Quality control yes uses computer vision to identify defects.",
  k: ["computer vision", "autonomous vehicles", "quality control", "sentiment analysis"]
};

questions[129] = {
  id: 129,
  q: "Which Azure service would you use to analyze video content to extract insights such as facial recognition, speech transcription, and scene detection?",
  o: ["A. Computer Vision", "B. Video Indexer", "C. Face API", "D. Azure Media Services"],
  a: 1,
  e: "Video Indexer analyzes video content to extract insights including face recognition, speech transcription, scene detection, and more.",
  k: ["Video Indexer", "video analysis", "facial recognition", "speech transcription"]
};

questions[130] = {
  id: 130,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Azure Cognitive Services include pre-trained models for common AI tasks. (2) Azure Cognitive Services can only be used by experienced data scientists. (3) Azure Cognitive Services are accessible through REST APIs and client SDKs.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / Yes", "C. No / No / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Yes, Cognitive Services include pre-trained models. No, they're designed for developers of all skill levels. Yes, they're accessible via REST APIs and SDKs.",
  k: ["Cognitive Services", "pre-trained models", "REST API", "SDK"]
};

questions[131] = {
  id: 131,
  q: "Which approach would you use to build an AI model that learns to play chess by rewarding winning moves?",
  o: ["A. Supervised learning", "B. Unsupervised learning", "C. Reinforcement learning", "D. Transfer learning"],
  a: 2,
  e: "Reinforcement learning trains AI through rewards and penalties. An agent learns by receiving rewards for winning moves in chess.",
  k: ["reinforcement learning", "rewards", "chess", "agent"]
};

questions[132] = {
  id: 132,
  q: "HOTSPOT - To complete the sentence: __________ AI refers to AI systems designed for a specific narrow task, such as face recognition or spam filtering, in contrast to AI that can perform any intellectual task.",
  o: ["General", "Narrow", "Strong", "Superintelligent"],
  a: 1,
  e: "Narrow AI (also called Weak AI) is designed for specific tasks. All current AI systems are narrow AI. General AI would perform any intellectual task.",
  k: ["narrow AI", "weak AI", "specific tasks", "AI types"]
};

questions[133] = {
  id: 133,
  q: "Which Azure service provides the ability to identify anomalies in time-series data, such as unusual network traffic patterns?",
  o: ["A. Azure Machine Learning", "B. Anomaly Detector service", "C. Azure Cognitive Search", "D. Text Analytics"],
  a: 1,
  e: "The Azure Anomaly Detector service uses AI to identify anomalies in time-series data automatically.",
  k: ["Anomaly Detector", "time-series", "anomaly detection", "Azure cognitive services"]
};

questions[134] = {
  id: 134,
  q: "HOTSPOT - For each statement about anomaly detection, select Yes or No: (1) Anomaly detection can identify unusual network traffic indicating a cyber attack. (2) Anomaly detection predicts a specific numeric value. (3) Anomaly detection can identify fraudulent financial transactions.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Unusual network traffic = Yes (anomaly detection). Predicting specific numeric value = No (that's regression). Fraud detection = Yes (anomaly detection).",
  k: ["anomaly detection", "network security", "fraud detection", "time-series"]
};

questions[135] = {
  id: 135,
  q: "HOTSPOT - For each statement about Azure Machine Learning workspace, select Yes or No: (1) A workspace stores all assets related to machine learning projects. (2) You can share a workspace across multiple teams. (3) A workspace requires a physical dedicated server.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Workspace yes stores all ML assets. Yes, workspaces can be shared. No, workspaces are cloud-based, not requiring physical servers.",
  k: ["Azure ML workspace", "assets", "collaboration", "cloud"]
};

questions[136] = {
  id: 136,
  q: "Which Azure service can you use to create an end-to-end machine learning workflow, from data preparation to model deployment?",
  o: ["A. Azure Cognitive Services", "B. Azure Machine Learning", "C. Azure Bot Service", "D. Azure Cognitive Search"],
  a: 1,
  e: "Azure Machine Learning is the comprehensive service for end-to-end ML workflows including data preparation, model training, evaluation, and deployment.",
  k: ["Azure Machine Learning", "ML workflow", "end-to-end", "model deployment"]
};

questions[137] = {
  id: 137,
  q: "HOTSPOT - To complete the sentence: __________ is the process of deploying a trained machine learning model so it can be used to make predictions on new data.",
  o: ["Model training", "Model evaluation", "Model deployment", "Data preparation"],
  a: 2,
  e: "Model deployment is making a trained model available as a service to make predictions on new, real-world data.",
  k: ["model deployment", "inference", "production", "machine learning pipeline"]
};

questions[138] = {
  id: 138,
  q: "HOTSPOT - For each statement about the Microsoft responsible AI principles, select Yes or No: (1) There are six guiding principles for responsible AI. (2) Transparency means the system should be fair to all users. (3) Accountability means humans take responsibility for AI system decisions.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Yes, there are six principles. No, transparency means explainability (not fairness - that's the fairness principle). Yes, accountability means humans take responsibility.",
  k: ["responsible AI", "six principles", "transparency", "accountability"]
};

questions[139] = {
  id: 139,
  q: "HOTSPOT - For each statement about privacy and security in AI, select Yes or No: (1) AI systems must comply with privacy laws regarding data collection and use. (2) Privacy and security only apply to personal data, not business data. (3) AI systems should minimize the collection of personal data.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Yes, AI must comply with privacy laws. No, privacy and security apply to all sensitive data, not just personal. Yes, data minimization is a key privacy principle.",
  k: ["privacy and security", "data protection", "privacy laws", "data minimization"]
};

questions[140] = {
  id: 140,
  q: "Which Azure service would you use to implement a QnA chatbot that answers questions from a company FAQ document?",
  o: ["A. Azure Bot Service with Language service (Custom Question Answering)", "B. Azure Machine Learning with regression model", "C. Computer Vision with OCR", "D. Azure Cognitive Search with SQL database"],
  a: 0,
  e: "Azure Bot Service combined with Language service's Custom Question Answering (QnA) feature allows building chatbots from FAQ documents.",
  k: ["Bot Service", "Custom Question Answering", "QnA", "FAQ chatbot"]
};

questions[141] = {
  id: 141,
  q: "HOTSPOT - For each statement about NLP tasks, select Yes or No: (1) Sentiment analysis can determine whether text is positive, negative, or neutral. (2) Language detection identifies the intent of a sentence. (3) Named Entity Recognition (NER) can identify company names in text.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Sentiment yes determines positive/negative/neutral. No, language detection identifies the language (not intent; that's LUIS). NER yes identifies entities like company names.",
  k: ["sentiment analysis", "language detection", "NER", "NLP"]
};

questions[142] = {
  id: 142,
  q: "Which Azure cognitive service enables real-time translation of spoken language during a multilingual meeting?",
  o: ["A. Language service", "B. Speech service with translation", "C. Translator service", "D. Language Understanding (LUIS)"],
  a: 1,
  e: "The Speech service includes speech translation capability, which can translate spoken language in real-time from one language to another.",
  k: ["Speech service", "speech translation", "real-time translation", "multilingual"]
};

questions[143] = {
  id: 143,
  q: "HOTSPOT - To complete the sentence: __________ refers to AI workloads that process and analyze visual information from the world, including images and video.",
  o: ["Natural language processing", "Computer vision", "Anomaly detection", "Conversational AI"],
  a: 1,
  e: "Computer vision is the AI workload that processes and analyzes visual information from images and video, mimicking human visual perception.",
  k: ["computer vision", "visual information", "images", "video analysis"]
};

questions[144] = {
  id: 144,
  q: "Which of the following is NOT a standard Azure Cognitive Service category?",
  o: ["A. Vision", "B. Speech", "C. Language", "D. Robotics"],
  a: 3,
  e: "Azure Cognitive Services categories include Vision, Speech, Language, Decision, and Search. Robotics is not a Cognitive Service category.",
  k: ["Cognitive Services", "categories", "Vision", "Speech", "Language"]
};

questions[145] = {
  id: 145,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Azure Cognitive Services can be deployed to edge devices. (2) Cognitive Services containers require an internet connection to run. (3) Cognitive Services can process data locally to meet data residency requirements.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / Yes", "C. No / Yes / No", "D. Yes / No / No"],
  a: 0,
  e: "Yes, Cognitive Services can run in Docker containers on edge devices. No, containerized services don't require constant internet (only for billing). Yes, local processing meets data residency requirements.",
  k: ["Cognitive Services", "edge devices", "containers", "data residency"]
};

questions[146] = {
  id: 146,
  q: "Which Azure service allows you to build a bot that can be integrated with platforms like Slack, Teams, and WhatsApp?",
  o: ["A. Azure Language service", "B. Azure Bot Service", "C. Power Automate", "D. Azure Logic Apps"],
  a: 1,
  e: "Azure Bot Service enables building bots and integrating them with multiple channels including Slack, Teams, WhatsApp, and more.",
  k: ["Azure Bot Service", "channels", "Slack", "Teams", "WhatsApp"]
};

questions[147] = {
  id: 147,
  q: "HOTSPOT - To complete the sentence: The __________ principle of responsible AI focuses on ensuring that AI systems work as intended, avoid unexpected failures, and can withstand attempts to manipulate them.",
  o: ["accountability", "fairness", "reliability and safety", "transparency"],
  a: 2,
  e: "Reliability and safety focuses on AI working as intended, avoiding unexpected failures, and resisting manipulation (both intended and unintended).",
  k: ["reliability and safety", "manipulation", "unexpected failures", "responsible AI"]
};

questions[148] = {
  id: 148,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Power Virtual Agents is a no-code chatbot building tool. (2) Power Virtual Agents can use pre-built NLP models. (3) Power Virtual Agents requires knowledge of Python to use.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Power Virtual Agents yes is no-code. Yes, it uses built-in NLP capabilities. No, it requires no coding knowledge.",
  k: ["Power Virtual Agents", "no-code", "chatbot", "NLP"]
};

questions[149] = {
  id: 149,
  q: "HOTSPOT - Computer vision capabilities can be deployed to enable which of the following?",
  o: ["develop a text-based chatbot", "identify anomalous customer behavior", "integrate facial recognition into an application", "suggest automated responses to email"],
  a: 2,
  e: "Computer vision includes facial recognition. Chatbots are conversational AI/NLP. Anomalous behavior is anomaly detection. Email suggestions are NLP.",
  k: ["computer vision", "facial recognition", "app integration"]
};

questions[150] = {
  id: 150,
  q: "HOTSPOT - To complete the sentence: Identifying a __________ in a dataset is useful for finding unusual patterns that may indicate fraud or equipment failure.",
  o: ["regression model", "anomaly", "cluster", "label"],
  a: 1,
  e: "Identifying an anomaly means finding unusual patterns that deviate significantly from expected behavior, which can indicate fraud or equipment failure.",
  k: ["anomaly", "fraud detection", "equipment failure", "anomaly detection"]
};

questions[151] = {
  id: 151,
  q: "Which of the following scenarios is NOT an example of natural language processing (NLP)?",
  o: ["A. Detecting the language of a document.", "B. Identifying objects in a photograph.", "C. Extracting key phrases from a news article.", "D. Determining if a tweet is positive or negative."],
  a: 1,
  e: "Identifying objects in a photograph is computer vision, not NLP. All others (language detection, key phrase extraction, sentiment analysis) are NLP tasks.",
  k: ["NLP", "computer vision", "language detection", "sentiment analysis"]
};

questions[152] = {
  id: 152,
  q: "HOTSPOT - For each statement about Azure AI services, select Yes or No: (1) Azure AI services require data scientists with deep ML expertise. (2) Azure AI services can be customized for specific domains. (3) Azure AI services follow responsible AI principles in their design.",
  o: ["A. No / Yes / Yes", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / Yes"],
  a: 0,
  e: "No, they don't require deep ML expertise. Yes, they can be customized (Custom Vision, custom models). Yes, Microsoft builds them following responsible AI principles.",
  k: ["Azure AI services", "customization", "responsible AI", "expertise"]
};

questions[153] = {
  id: 153,
  q: "Which NLP task would you use to convert a customer's spoken complaint into text so it can be automatically categorized?",
  o: ["A. Sentiment analysis", "B. Key phrase extraction", "C. Speech-to-text", "D. Entity recognition"],
  a: 2,
  e: "Speech-to-text converts spoken audio to text. Then other NLP tasks (like sentiment or entity recognition) can process the text.",
  k: ["speech-to-text", "transcription", "NLP", "speech recognition"]
};

questions[154] = {
  id: 154,
  q: "DRAG DROP - Match responsible AI principles to descriptions: (1) The system performs consistently under normal and unexpected conditions. (2) Personal data is collected only with user consent and stored securely.",
  o: ["A. Reliability and safety / Privacy and security", "B. Transparency / Accountability", "C. Fairness / Inclusiveness", "D. Privacy and security / Reliability and safety"],
  a: 0,
  e: "Consistent operation under normal and unexpected conditions = Reliability and safety. Data consent and secure storage = Privacy and security.",
  k: ["reliability and safety", "privacy and security", "responsible AI"]
};

questions[155] = {
  id: 155,
  q: "Which Azure service would you use to extract information from a large collection of medical journals and make it searchable?",
  o: ["A. Azure Blob Storage", "B. Azure Cognitive Search with AI enrichment", "C. Azure SQL Database", "D. Azure Data Factory"],
  a: 1,
  e: "Azure Cognitive Search with AI enrichment (knowledge mining) can extract information from unstructured documents like journals and make it searchable.",
  k: ["Azure Cognitive Search", "knowledge mining", "AI enrichment", "medical journals"]
};

questions[156] = {
  id: 156,
  q: "HOTSPOT - To complete the sentence: __________ AI refers to technology that can engage in conversation with humans using natural language, either through text or voice.",
  o: ["Generative", "Conversational", "Autonomous", "Predictive"],
  a: 1,
  e: "Conversational AI enables technology to engage in human-like conversations using natural language through text (chatbots) or voice (voice assistants).",
  k: ["conversational AI", "chatbot", "voice assistant", "natural language"]
};

questions[157] = {
  id: 157,
  q: "HOTSPOT - Ensuring an AI system does not provide a prediction when important input fields contain unusual or missing values is an example of which responsible AI principle?",
  o: ["inclusiveness", "privacy and security", "reliability and safety", "transparency"],
  a: 2,
  e: "Reliability and safety ensures the AI system handles edge cases (unusual or missing input values) safely by not making predictions when data quality is insufficient.",
  k: ["reliability and safety", "missing values", "edge cases", "responsible AI"]
};

questions[158] = {
  id: 158,
  q: "DRAG DROP - Match Azure AI services to their descriptions: (1) Creates a knowledge base of question-answer pairs from existing content. (2) Provides speech-to-text and text-to-speech capabilities.",
  o: ["A. Language Service (Custom QnA) / Speech service", "B. Speech service / Language service (Custom QnA)", "C. QnA Maker / Translator", "D. Translator / Speech service"],
  a: 0,
  e: "Knowledge base of Q&A pairs = Language service (Custom Question Answering). Speech-to-text/text-to-speech = Speech service.",
  k: ["Language service", "Custom Question Answering", "Speech service", "QnA"]
};

questions[159] = {
  id: 159,
  q: "Which Azure service would you use to analyze images uploaded by users and automatically tag them with relevant descriptive keywords?",
  o: ["A. Custom Vision", "B. Computer Vision", "C. Face API", "D. Form Recognizer"],
  a: 1,
  e: "Computer Vision can automatically analyze images and generate tags (descriptive keywords) that describe the image contents.",
  k: ["Computer Vision", "image tagging", "automatic tags", "image analysis"]
};

questions[160] = {
  id: 160,
  q: "You have an AI-based loan approval system. During testing, you discover the system approves loans at a significantly lower rate for women compared to equally qualified men. Which responsible AI principle does this violate?",
  o: ["A. accountability", "B. reliability and safety", "C. transparency", "D. fairness"],
  a: 3,
  e: "Fairness ensures AI decisions don't discriminate based on gender, race, or other protected characteristics. Approving loans at lower rates for women violates fairness.",
  k: ["fairness", "bias", "gender discrimination", "loan approval"]
};

questions[161] = {
  id: 161,
  q: "HOTSPOT - To complete the sentence: When an AI system provides a confidence score with each prediction, explaining how certain the model is, this supports the Microsoft __________ principle.",
  o: ["accountability", "fairness", "transparency", "reliability and safety"],
  a: 2,
  e: "Providing confidence scores and explanations supports transparency by helping users understand how certain the model is and the basis for predictions.",
  k: ["transparency", "confidence score", "explainability", "responsible AI"]
};

questions[162] = {
  id: 162,
  q: "HOTSPOT - Select the answer that correctly completes the sentence: Azure Machine Learning designer lets you create machine learning models by __________.",
  o: ["adding and connecting modules on an interactive visual canvas", "automatically performing data preparation", "automatically selecting the best algorithm", "writing code in a Jupyter notebook"],
  a: 0,
  e: "Azure Machine Learning designer is a drag-and-drop interface that lets you add and connect modules on an interactive visual canvas to build ML pipelines.",
  k: ["Azure ML designer", "visual canvas", "modules", "drag-and-drop"]
};

questions[163] = {
  id: 163,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Azure ML designer is a no-code interface. (2) Azure ML AutoML automatically selects the best algorithm. (3) Azure ML Python SDK requires no programming knowledge.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / Yes", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Designer yes is no-code (drag-and-drop). AutoML yes automatically selects algorithms. No, the Python SDK does require programming knowledge.",
  k: ["Azure ML designer", "AutoML", "Python SDK", "no-code"]
};

questions[164] = {
  id: 164,
  q: "Which Azure service would you use to detect faces in images taken by a security camera system?",
  o: ["A. Computer Vision", "B. Face API (Azure Face service)", "C. Custom Vision", "D. Video Indexer"],
  a: 1,
  e: "The Azure Face service is specifically designed for face detection, analysis, and recognition in images and video.",
  k: ["Face API", "face detection", "security camera", "Azure Face service"]
};

questions[165] = {
  id: 165,
  q: "DRAG DROP - Match the Azure ML tool to the task: (1) Create an Azure Machine Learning workspace in Azure. (2) Use a drag-and-drop visual interface to build ML models. (3) Use a wizard-driven interface to automatically select the best ML algorithm.",
  o: ["A. Azure portal / ML designer / Automated ML", "B. ML designer / Azure portal / Automated ML", "C. Automated ML / ML designer / Azure portal", "D. Azure portal / Automated ML / ML designer"],
  a: 0,
  e: "Creating workspace = Azure portal. Drag-and-drop visual interface = ML designer. Wizard-driven automatic algorithm selection = Automated ML (AutoML).",
  k: ["Azure portal", "ML designer", "Automated ML", "workspace"]
};

questions[166] = {
  id: 166,
  q: "HOTSPOT - To complete the sentence: __________ is the practice of using AI to search for and extract insights from large volumes of unstructured data such as documents and images.",
  o: ["Anomaly detection", "Knowledge mining", "Sentiment analysis", "Feature engineering"],
  a: 1,
  e: "Knowledge mining uses AI to search for and extract insights from large amounts of unstructured data like documents, images, and other content.",
  k: ["knowledge mining", "unstructured data", "Azure Cognitive Search", "AI insights"]
};

questions[167] = {
  id: 167,
  q: "Which of the following is an example of a classification problem in machine learning?",
  o: ["A. Predicting tomorrow's stock price", "B. Grouping customers into market segments", "C. Determining whether a transaction is fraudulent or legitimate", "D. Forecasting next quarter's revenue"],
  a: 2,
  e: "Determining if a transaction is fraudulent or legitimate is binary classification (two categories). A and D are regression; B is clustering.",
  k: ["classification", "binary classification", "fraud detection"]
};

questions[168] = {
  id: 168,
  q: "Predicting how many vehicles will travel across a bridge on a given day is an example of which type of machine learning?",
  o: ["A. regression", "B. translation", "C. classification", "D. clustering"],
  a: 0,
  e: "Number of vehicles is a numeric continuous value. Regression predicts numeric values.",
  k: ["regression", "numeric prediction", "bridge traffic"]
};

questions[169] = {
  id: 169,
  q: "HOTSPOT - To complete the sentence: In Azure Machine Learning, a __________ is a reusable component that can be configured with specific parameters and connected to other components to form an ML pipeline.",
  o: ["dataset", "module", "compute cluster", "experiment"],
  a: 1,
  e: "A module is a reusable component in Azure ML designer that performs a specific function (e.g., Split Data, Train Model) and can be connected to other modules.",
  k: ["module", "Azure ML designer", "pipeline", "reusable component"]
};

questions[170] = {
  id: 170,
  q: "Which responsible AI principle requires AI systems to perform consistently across different demographic groups and in various environmental conditions?",
  o: ["A. fairness", "B. inclusiveness", "C. reliability and safety", "D. transparency"],
  a: 2,
  e: "Reliability and safety requires consistent performance across conditions. Fairness focuses on equitable outcomes across demographic groups (related but distinct).",
  k: ["reliability and safety", "consistent performance", "demographic groups", "responsible AI"]
};

questions[171] = {
  id: 171,
  q: "HOTSPOT - For each statement about the Azure Face service, select Yes or No: (1) Face detection can identify the location of faces in an image. (2) Face verification confirms if two faces belong to the same person. (3) Face grouping requires a pre-existing database of known faces.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Face detection yes locates faces. Face verification yes confirms if two faces are the same person. Face grouping no doesn't require a pre-existing database (it groups similar faces automatically).",
  k: ["Face service", "face detection", "face verification", "face grouping"]
};

questions[172] = {
  id: 172,
  q: "Which NLP task can be used to automatically categorize support tickets by topic (e.g., billing, technical issue, account management)?",
  o: ["A. Key phrase extraction", "B. Language detection", "C. Text classification", "D. Sentiment analysis"],
  a: 2,
  e: "Text classification categorizes text into predefined categories. Categorizing support tickets by topic is a text classification task.",
  k: ["text classification", "support tickets", "NLP", "categorization"]
};

questions[173] = {
  id: 173,
  q: "HOTSPOT - To complete the sentence: An AI system that can describe the reasoning behind its credit scoring decisions to regulators is demonstrating the __________ principle of responsible AI.",
  o: ["accountability", "fairness", "transparency", "inclusiveness"],
  a: 2,
  e: "Transparency means being able to explain and describe how AI decisions are made. Explaining credit scoring decisions to regulators is an example of transparency.",
  k: ["transparency", "credit scoring", "regulatory compliance", "responsible AI"]
};

questions[174] = {
  id: 174,
  q: "Which Azure service enables you to search through large volumes of documents using natural language queries?",
  o: ["A. Azure Blob Storage", "B. Azure Cognitive Search", "C. Azure SQL Database", "D. Azure Cosmos DB"],
  a: 1,
  e: "Azure Cognitive Search enables natural language search and AI enrichment of document collections.",
  k: ["Azure Cognitive Search", "natural language search", "documents", "knowledge mining"]
};

questions[175] = {
  id: 175,
  q: "HOTSPOT - For each statement about conversational AI, select Yes or No: (1) Conversational AI can understand user intent from natural language. (2) Conversational AI always requires a human operator. (3) Power Virtual Agents is an example of a conversational AI tool.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Conversational AI yes understands intent from natural language. No, it can operate automatically. Yes, Power Virtual Agents is a conversational AI platform.",
  k: ["conversational AI", "intent", "Power Virtual Agents", "chatbot"]
};

questions[176] = {
  id: 176,
  q: "Which type of machine learning uses trial and error with rewards and penalties to learn the optimal strategy for a given task?",
  o: ["A. Supervised learning", "B. Unsupervised learning", "C. Reinforcement learning", "D. Transfer learning"],
  a: 2,
  e: "Reinforcement learning uses trial and error. An agent learns by receiving rewards for correct actions and penalties for incorrect ones.",
  k: ["reinforcement learning", "rewards", "penalties", "trial and error"]
};

questions[177] = {
  id: 177,
  q: "You need to identify groups of rows with similar numeric values in a dataset, without using predefined category labels. Which ML type should you use?",
  o: ["A. clustering", "B. regression", "C. classification"],
  a: 0,
  e: "Clustering groups similar data points without predefined labels. It's an unsupervised learning technique for discovering natural groupings.",
  k: ["clustering", "grouping", "similar values", "unsupervised learning"]
};

questions[178] = {
  id: 178,
  q: "HOTSPOT - A banking system that predicts whether a loan will be repaid (yes or no) is an example of which type of machine learning?",
  o: ["clustering", "regression", "classification"],
  a: 2,
  e: "Classification predicts categories. Predicting whether a loan will be repaid is binary classification (yes/no outcome).",
  k: ["classification", "binary classification", "loan approval", "banking"]
};

questions[179] = {
  id: 179,
  q: "HOTSPOT - To complete the sentence: __________ learning algorithms learn from data that does not have predefined labels or expected outputs.",
  o: ["Supervised", "Unsupervised", "Reinforcement", "Transfer"],
  a: 1,
  e: "Unsupervised learning works with unlabeled data to discover patterns, groupings, or structures without predefined expected outputs.",
  k: ["unsupervised learning", "unlabeled data", "patterns", "clustering"]
};

questions[180] = {
  id: 180,
  q: "A historian can use __________ to digitize and make searchable thousands of old newspaper articles from scanned images.",
  o: ["Object detection", "Facial recognition", "Image classification", "Optical character recognition (OCR)"],
  a: 3,
  e: "OCR extracts text from scanned images like newspaper articles, making them digitally searchable.",
  k: ["OCR", "digitize", "newspaper", "text extraction"]
};

questions[181] = {
  id: 181,
  q: "HOTSPOT - For each statement about object detection, select Yes or No: (1) Object detection can identify the location of a damaged product on an assembly line. (2) Object detection can identify multiple instances of the same object in one image. (3) Object detection can only identify one type of object per image.",
  o: ["A. Yes / Yes / No", "B. Yes / No / No", "C. Yes / Yes / Yes", "D. No / Yes / Yes"],
  a: 0,
  e: "Object detection yes can locate damaged products. Yes, it can find multiple instances. No, it can identify multiple types of objects in one image.",
  k: ["object detection", "damaged product", "multiple instances", "multiple types"]
};

questions[182] = {
  id: 182,
  q: "Which Azure service can automatically extract the author, creation date, and content from a collection of PDF documents?",
  o: ["A. Azure Text Analytics", "B. Azure Form Recognizer (Document Intelligence)", "C. Azure Blob Storage", "D. Azure Data Factory"],
  a: 1,
  e: "Form Recognizer (now called Azure AI Document Intelligence) automatically extracts information like author, date, and content from documents.",
  k: ["Form Recognizer", "Document Intelligence", "PDF extraction", "metadata"]
};

questions[183] = {
  id: 183,
  q: "HOTSPOT - Select the answer that correctly completes the sentence: Computer vision can be used to identify __________ in an image.",
  o: ["objects and their locations", "sentiment", "key phrases", "user intent"],
  a: 0,
  e: "Computer vision identifies objects and their locations (object detection), image categories (classification), and text (OCR) in images.",
  k: ["computer vision", "object detection", "location", "objects"]
};

questions[184] = {
  id: 184,
  q: "HOTSPOT - Identifying whether a kiosk user is annoyed by monitoring video feed and analyzing their facial expression is an example of:",
  o: ["facial analysis", "object detection", "OCR", "image classification"],
  a: 0,
  e: "Facial analysis detects emotions like annoyance, happiness, or anger from analyzing facial expressions in video or images.",
  k: ["facial analysis", "emotion detection", "video monitoring", "facial expression"]
};

questions[185] = {
  id: 185,
  q: "Which Azure service provides out-of-the-box NLP capabilities including sentiment analysis, key phrase extraction, and named entity recognition?",
  o: ["A. Azure Machine Learning", "B. Azure Language service (Text Analytics API)", "C. Azure Bot Service", "D. Azure Cognitive Search"],
  a: 1,
  e: "The Azure Language service (previously Text Analytics) provides pre-built NLP capabilities including sentiment analysis, key phrase extraction, and NER.",
  k: ["Language service", "Text Analytics", "sentiment analysis", "NER", "NLP"]
};

questions[186] = {
  id: 186,
  q: "HOTSPOT - An AI solution that helps photographers take better portraits by providing feedback on exposure, noise level, and occlusion of facial features is an example of facial:",
  o: ["analysis", "detection", "recognition"],
  a: 0,
  e: "Facial analysis evaluates image quality attributes related to faces: exposure, noise, blur, occlusion (something blocking facial features).",
  k: ["facial analysis", "photo feedback", "exposure", "noise", "occlusion"]
};

questions[187] = {
  id: 187,
  q: "HOTSPOT - To complete the sentence: __________ AI can generate new content such as text, images, or code that did not previously exist.",
  o: ["Narrow", "Generative", "Predictive", "Analytical"],
  a: 1,
  e: "Generative AI creates new, original content including text (like ChatGPT), images (like DALL-E), code, and other media.",
  k: ["generative AI", "AI content generation", "ChatGPT", "DALL-E"]
};

questions[188] = {
  id: 188,
  q: "Which Azure service can be used to automatically summarize lengthy documents, reducing them to their key points?",
  o: ["A. Azure Language service (summarization)", "B. Form Recognizer", "C. Computer Vision", "D. Azure Search"],
  a: 0,
  e: "The Azure Language service includes document summarization capabilities to automatically extract key points from lengthy documents.",
  k: ["Language service", "summarization", "document summarization", "NLP"]
};

questions[189] = {
  id: 189,
  q: "HOTSPOT - __________ can be used to identify multiple types of items in a single image and return their locations.",
  o: ["Image classification", "Image description", "Object detection", "OCR"],
  a: 2,
  e: "Object detection identifies and locates multiple different types of objects in a single image, returning bounding boxes for each.",
  k: ["object detection", "multiple items", "bounding boxes", "computer vision"]
};

questions[190] = {
  id: 190,
  q: "You need to develop a mobile app for employees to scan and store their expenses while travelling. Which type of computer vision should you use?",
  o: ["A. face detection", "B. image classification", "C. object detection", "D. optical character recognition (OCR)"],
  a: 3,
  e: "OCR extracts text from receipt images, capturing amounts, dates, and merchant names needed for expense tracking.",
  k: ["OCR", "expenses", "receipt scanning", "text extraction", "mobile app"]
};

questions[191] = {
  id: 191,
  q: "HOTSPOT - For each statement about Azure Form Recognizer, select Yes or No: (1) Form Recognizer can extract data from receipts. (2) Form Recognizer can only process PDF documents. (3) Form Recognizer can extract tables from documents.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / Yes", "C. No / No / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Form Recognizer yes extracts data from receipts. No, it processes many formats including JPG, PNG, PDF. Yes, it can extract table data.",
  k: ["Form Recognizer", "receipts", "PDF", "tables", "document extraction"]
};

questions[192] = {
  id: 192,
  q: "HOTSPOT - An AI solution that helps photographers take better portraits by providing feedback on image quality including exposure, noise, and face occlusion is using facial:",
  o: ["analysis", "detection", "recognition"],
  a: 0,
  e: "Facial analysis evaluates photo quality attributes related to facial features including exposure, noise, blur, and occlusion.",
  k: ["facial analysis", "photo quality", "exposure", "occlusion"]
};

questions[193] = {
  id: 193,
  q: "Which service would you use to enable a mobile app to understand spoken commands from users in multiple languages?",
  o: ["A. Azure Speech service (speech-to-text + translation)", "B. Azure Form Recognizer", "C. Azure Custom Vision", "D. Azure Cognitive Search"],
  a: 0,
  e: "Azure Speech service provides speech-to-text for converting spoken commands to text, and speech translation for multiple language support.",
  k: ["Speech service", "speech-to-text", "speech translation", "multilingual commands"]
};

questions[194] = {
  id: 194,
  q: "HOTSPOT - To complete the sentence: In Azure Machine Learning, the process of creating a new column by combining or transforming existing columns in a dataset is called __________.",
  o: ["feature selection", "feature engineering", "model training", "data labeling"],
  a: 1,
  e: "Feature engineering creates new features (columns) by combining or transforming existing data. For example, creating a 'total_price' column from 'quantity × unit_price'.",
  k: ["feature engineering", "data transformation", "new features", "column creation"]
};

questions[195] = {
  id: 195,
  q: "Which Azure resource provides a centralized hub for managing all assets (datasets, models, experiments) in an Azure Machine Learning project?",
  o: ["A. Azure Resource Group", "B. Azure Machine Learning Workspace", "C. Azure Data Lake", "D. Azure Key Vault"],
  a: 1,
  e: "The Azure Machine Learning Workspace is the centralized hub that stores and manages all ML assets including datasets, experiments, models, and deployment endpoints.",
  k: ["Azure ML Workspace", "centralized hub", "datasets", "models", "experiments"]
};

questions[196] = {
  id: 196,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Clustering can discover hidden patterns in data. (2) Clustering requires labeled training data. (3) K-means is a common clustering algorithm.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Clustering yes discovers hidden patterns. No, clustering is unsupervised and doesn't require labeled data. Yes, K-means is a common clustering algorithm.",
  k: ["clustering", "unsupervised learning", "patterns", "K-means"]
};

questions[197] = {
  id: 197,
  q: "Which concept refers to an AI model's ability to perform well on data it has not seen during training?",
  o: ["A. Overfitting", "B. Generalization", "C. Regularization", "D. Normalization"],
  a: 1,
  e: "Generalization refers to a model's ability to perform well on new, unseen data. Good generalization means the model has learned patterns rather than memorized training data.",
  k: ["generalization", "unseen data", "model performance", "overfitting vs generalization"]
};

questions[198] = {
  id: 198,
  q: "HOTSPOT - To complete the sentence: __________ is an AI workload that involves building systems that can understand and respond to natural human language in text or speech form.",
  o: ["Computer vision", "Natural language processing (NLP)", "Anomaly detection", "Machine learning"],
  a: 1,
  e: "Natural language processing (NLP) is the AI workload for understanding and processing human language in text or speech form.",
  k: ["NLP", "natural language processing", "text", "speech", "AI workload"]
};

questions[199] = {
  id: 199,
  q: "Which Azure service enables you to build a solution that monitors social media posts and automatically detects negative mentions of your brand?",
  o: ["A. Azure Cognitive Search", "B. Azure Language service (Sentiment Analysis)", "C. Azure Form Recognizer", "D. Azure Custom Vision"],
  a: 1,
  e: "Azure Language service's sentiment analysis can analyze social media text and determine if mentions are positive, negative, or neutral.",
  k: ["Language service", "sentiment analysis", "social media monitoring", "brand monitoring"]
};

questions[200] = {
  id: 200,
  q: "HOTSPOT - For each statement about the Azure AI platform, select Yes or No: (1) Azure AI services are cloud-based. (2) Azure AI can only be accessed from Azure-hosted applications. (3) Azure AI services require purchasing dedicated hardware.",
  o: ["A. Yes / No / No", "B. Yes / Yes / No", "C. No / No / Yes", "D. Yes / No / Yes"],
  a: 0,
  e: "Yes, Azure AI services are cloud-based. No, they can be accessed from any application via APIs. No, no dedicated hardware purchase is needed (cloud-managed).",
  k: ["Azure AI", "cloud-based", "API access", "hardware"]
};

questions[201] = {
  id: 201,
  q: "HOTSPOT - For each scenario, select Yes if it involves NLP, otherwise No: (1) A webchat bot that interacts with website visitors. (2) Generating captions for photographs. (3) A smart device that responds to questions about the weather.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / Yes", "C. No / Yes / Yes", "D. Yes / Yes / No"],
  a: 0,
  e: "Webchat bot = Yes (NLP). Generating captions for photos = No (computer vision). Smart device answering questions = Yes (NLP/conversational AI).",
  k: ["NLP", "webchat bot", "captions", "computer vision", "smart device"]
};

questions[202] = {
  id: 202,
  q: "Which Azure service would you use to implement a solution that automatically reads invoices and extracts vendor name, date, and total amount?",
  o: ["A. Azure Text Analytics", "B. Azure Form Recognizer (Document Intelligence)", "C. Azure Machine Learning with custom model", "D. Azure Computer Vision"],
  a: 1,
  e: "Azure Form Recognizer (Document Intelligence) has pre-built invoice models that extract vendor name, invoice date, total amount, and other fields automatically.",
  k: ["Form Recognizer", "invoice processing", "data extraction", "Document Intelligence"]
};

questions[203] = {
  id: 203,
  q: "HOTSPOT - For each statement about AI workload types, select Yes or No: (1) Computer vision can be used to analyze satellite images for crop health. (2) NLP can be used to automatically route customer emails to the correct department. (3) Anomaly detection can be used to predict tomorrow's stock prices.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Satellite imagery analysis = Yes (computer vision). Email routing = Yes (NLP - text classification). Predicting prices = No (regression, not anomaly detection).",
  k: ["computer vision", "NLP", "anomaly detection", "satellite", "email routing"]
};

questions[204] = {
  id: 204,
  q: "HOTSPOT - For each scenario, select Yes if it involves NLP or No: (1) A bot responding to internal employee questions. (2) A mobile app that displays images matching a search term. (3) A web form for password reset.",
  o: ["A. Yes / No / No", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / Yes"],
  a: 0,
  e: "Bot responding to questions = Yes (NLP/conversational AI). Image search = No (computer vision). Web form for password reset = No (not NLP).",
  k: ["NLP", "bot", "computer vision", "image search", "conversational AI"]
};

questions[205] = {
  id: 205,
  q: "Which Azure service enables you to build a solution that listens to customer calls and automatically identifies if the caller is satisfied or dissatisfied?",
  o: ["A. Speech service + Language service (sentiment)", "B. Form Recognizer + Computer Vision", "C. Custom Vision + Face API", "D. Azure Cognitive Search"],
  a: 0,
  e: "Speech service converts the call audio to text, then Language service's sentiment analysis determines satisfaction level.",
  k: ["Speech service", "sentiment analysis", "Language service", "call center AI"]
};

questions[206] = {
  id: 206,
  q: "HOTSPOT - To complete the sentence: __________ is the ability of an AI system to generate images, text, code, audio, and other content that is new and original.",
  o: ["Anomaly detection", "Generative AI", "Computer vision", "Transfer learning"],
  a: 1,
  e: "Generative AI creates new, original content (images, text, code, audio) that did not previously exist, unlike discriminative AI which classifies existing content.",
  k: ["generative AI", "content generation", "original content", "creative AI"]
};

questions[207] = {
  id: 207,
  q: "You are developing a solution using the Language service. You need to identify main talking points in a collection of documents. Which NLP capability should you use?",
  o: ["A. language detection", "B. sentiment analysis", "C. entity recognition", "D. key phrase extraction"],
  a: 3,
  e: "Key phrase extraction identifies the main topics and talking points in documents. It extracts the most relevant phrases that represent the content.",
  k: ["key phrase extraction", "talking points", "Language service", "NLP"]
};

questions[208] = {
  id: 208,
  q: "HOTSPOT - For each statement, select Yes or No: (1) Transfer learning allows you to use a model trained on one task as a starting point for a different but related task. (2) Transfer learning requires starting from scratch with a new neural network. (3) Transfer learning is commonly used in computer vision tasks.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Transfer learning yes reuses trained models. No, it doesn't start from scratch (that's the benefit). Yes, transfer learning is widely used in computer vision.",
  k: ["transfer learning", "pre-trained models", "computer vision", "reuse"]
};

questions[209] = {
  id: 209,
  q: "Which type of NLP entity would you use to identify phone numbers with formats like (555) 123-4567 or +1-555-123-4567?",
  o: ["A. regular expression entity", "B. machine-learned entity", "C. list entity", "D. Pattern.any entity"],
  a: 0,
  e: "Regular expression entities use patterns to extract structured data like phone numbers that follow predictable formats.",
  k: ["regular expression", "entity extraction", "phone number", "LUIS"]
};

questions[210] = {
  id: 210,
  q: "HOTSPOT - Returning a bounding box that indicates the location of a vehicle in an image is an example of which computer vision task?",
  o: ["image classification", "object detection", "OCR", "facial detection"],
  a: 1,
  e: "Object detection identifies objects and returns bounding box coordinates showing where each object is located in the image.",
  k: ["object detection", "bounding box", "vehicle location", "computer vision"]
};

questions[211] = {
  id: 211,
  q: "Your company is exploring the use of voice recognition technologies in its smart home devices. The company wants to identify any barriers that might unintentionally leave out specific user groups. This is an example of which Microsoft guiding principle for responsible AI?",
  o: ["A. accountability", "B. fairness", "C. privacy and security", "D. inclusiveness"],
  a: 3,
  e: "Inclusiveness ensures AI empowers everyone, including people who are often excluded. Identifying barriers that might leave out specific user groups (e.g., accents, speech impairments) is directly about inclusiveness.",
  k: ["inclusiveness", "voice recognition", "barriers", "responsible AI", "smart home"]
};

questions[212] = {
  id: 212,
  q: "You have a large dataset that contains motor vehicle sales data. You need to train an automated machine learning (automated ML) model to predict vehicle sale values based on the type of vehicle. Which task should you select?",
  o: ["A. classification", "B. regression", "C. clustering", "D. time series forecasting"],
  a: 1,
  e: "Predicting vehicle sale values (a continuous numeric value) is a regression task. Classification predicts categories (yes/no, A/B/C). Clustering groups data. Regression is for predicting numeric values like prices.",
  k: ["AutoML", "regression", "vehicle sale value", "numeric prediction", "automated ML"]
};

questions[213] = {
  id: 213,
  q: "HOTSPOT - To complete the sentence: __________ is a type of AI that uses large language models (LLMs) to generate, transform, and understand text, code, images, and other content.",
  o: ["Narrow AI", "Generative AI", "Classical ML", "Symbolic AI"],
  a: 1,
  e: "Generative AI uses large language models to generate and understand diverse content types including text, code, and images.",
  k: ["generative AI", "large language models", "LLM", "content generation"]
};

questions[214] = {
  id: 214,
  q: "You need to convert receipts into structured transactions in a spreadsheet, extracting: date, merchant name, total amount, and taxes. Which Azure AI service should you use?",
  o: ["A. Custom Vision", "B. Form Recognizer (Document Intelligence)", "C. Face API", "D. Language service"],
  a: 1,
  e: "Form Recognizer has a pre-built receipt model that automatically extracts date, merchant, total, and tax information from receipt images.",
  k: ["Form Recognizer", "receipts", "data extraction", "structured data"]
};

questions[215] = {
  id: 215,
  q: "HOTSPOT - For each statement about conversational AI, select Yes or No: (1) Azure Bot Service can handle multi-turn conversations. (2) Language service QnA is designed for single-turn FAQ answering. (3) LUIS is used to detect the language of user input.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "Bot Service yes handles multi-turn conversations. QnA yes is designed for FAQ single-turn Q&A. No, LUIS detects user intent (not language - language detection is different).",
  k: ["Bot Service", "QnA", "LUIS", "multi-turn", "conversational AI"]
};

questions[216] = {
  id: 216,
  q: "Which Azure AI feature enables searching within video content to find specific moments when a particular person appears or a topic is discussed?",
  o: ["A. Computer Vision", "B. Video Indexer", "C. Face API", "D. Speech service"],
  a: 1,
  e: "Video Indexer extracts detailed insights from videos including facial recognition, speech-to-text, and topic detection, enabling semantic video search.",
  k: ["Video Indexer", "video search", "facial recognition", "speech-to-text"]
};

questions[217] = {
  id: 217,
  q: "HOTSPOT - For each responsible AI scenario, identify the principle violated: (1) An AI diagnostic tool only works accurately for patients of certain ethnicities due to biased training data. (2) An AI system doesn't log its decisions, making it impossible to audit.",
  o: ["A. Fairness / Transparency", "B. Transparency / Fairness", "C. Inclusiveness / Accountability", "D. Fairness / Accountability"],
  a: 0,
  e: "Biased accuracy for certain ethnicities = Fairness violated. No decision logging = Transparency violated (can't explain decisions).",
  k: ["fairness", "transparency", "bias", "audit", "responsible AI"]
};

questions[218] = {
  id: 218,
  q: "For which two workloads can you use computer vision?",
  o: ["A. Assigning color pixels to object names (semantic segmentation) and describing image contents", "B. Detecting anomalies in a data stream and creating visual representations of data", "C. Creating photorealistic images and predicting stock prices", "D. Translating text and extracting key phrases"],
  a: 0,
  e: "Semantic segmentation (assigning pixels to objects) and image description are both computer vision tasks. Data anomalies and stock prices are not computer vision.",
  k: ["computer vision", "semantic segmentation", "image description", "workloads"]
};

questions[219] = {
  id: 219,
  q: "HOTSPOT - To complete the sentence: __________ is a natural language processing task that identifies and extracts named entities such as people, places, organizations, and dates from text.",
  o: ["Sentiment analysis", "Named Entity Recognition (NER)", "Key phrase extraction", "Language detection"],
  a: 1,
  e: "Named Entity Recognition (NER) identifies and extracts named entities such as people, places, organizations, and dates from text.",
  k: ["NER", "Named Entity Recognition", "entities", "NLP", "extraction"]
};

questions[220] = {
  id: 220,
  q: "Which Azure service would you recommend for a healthcare company that needs to extract patient names, diagnoses, and medication information from clinical notes?",
  o: ["A. Computer Vision OCR", "B. Azure Language service (healthcare entity extraction)", "C. Azure Form Recognizer", "D. Azure Machine Learning (custom model)"],
  a: 1,
  e: "Azure Language service includes healthcare-specific entity extraction that can identify medical entities like patient names, diagnoses, and medications from clinical text.",
  k: ["Language service", "healthcare", "entity extraction", "NLP", "clinical notes"]
};

questions[221] = {
  id: 221,
  q: "You need to build an image tagging solution for social media that automatically tags images of your friends. Which Azure Cognitive Services service should you use?",
  o: ["A. Face", "B. Form Recognizer", "C. Language", "D. Computer Vision"],
  a: 0,
  e: "The Face service is specifically designed for facial recognition and analysis tasks. It can automatically detect faces and identify individuals based on a known database of faces (like your friends), enabling automatic image tagging.",
  k: ["Face service", "facial recognition", "image tagging", "social media", "friend identification"]
};

questions[222] = {
  id: 222,
  q: "HOTSPOT - You have an application that identifies birds in images. For two tasks: (1) Find the location of birds in an image. (2) Identify the species of the bird. Which computer vision tasks do these correspond to?",
  o: ["A. Object detection / Image classification", "B. Image classification / Object detection", "C. Semantic segmentation / OCR", "D. Object detection / Semantic segmentation"],
  a: 0,
  e: "Finding location of birds = Object detection (returns bounding boxes). Identifying the species = Image classification (assigns category label).",
  k: ["object detection", "image classification", "birds", "location", "species"]
};

questions[223] = {
  id: 223,
  q: "You have a solution that reads manuscripts written in multiple languages and categorizes them by topic. Which two NLP workloads should you use?",
  o: ["A. speech recognition and entity recognition", "B. speech recognition and language modeling", "C. translation and key phrase extraction", "D. translation and sentiment analysis"],
  a: 2,
  e: "Translation handles multiple languages. Key phrase extraction identifies the main topics for categorization.",
  k: ["translation", "key phrase extraction", "topic categorization", "NLP workloads"]
};

questions[224] = {
  id: 224,
  q: "You have 100 instructional videos that do NOT contain any audio. Each instructional video has a script. You need to generate a narration audio file for each video based on the script. Which type of workload should you use?",
  o: ["A. language modeling", "B. speech recognition", "C. speech synthesis", "D. translation"],
  a: 2,
  e: "Speech synthesis (text-to-speech) converts text into spoken audio. You have scripts (text) and need to generate narration audio files — this is exactly what speech synthesis does. Speech recognition does the opposite (audio to text).",
  k: ["speech synthesis", "text-to-speech", "narration", "instructional video", "audio generation"]
};

questions[225] = {
  id: 225,
  q: "Which type of machine learning creates a model by having an algorithm discover natural groupings in data, with no predefined labels?",
  o: ["A. supervised learning", "B. semi-supervised learning", "C. unsupervised learning", "D. reinforcement learning"],
  a: 2,
  e: "Unsupervised learning discovers natural groupings or patterns in data without predefined labels. Clustering is the main unsupervised learning technique.",
  k: ["unsupervised learning", "clustering", "no labels", "natural groupings"]
};

questions[226] = {
  id: 226,
  q: "Which AI service can you use to extract intent from a user input such as 'Call me back later'?",
  o: ["A. Azure Cognitive Search", "B. Translator", "C. Language", "D. Speech"],
  a: 2,
  e: "The Language service provides NLP capabilities including intent recognition (Conversational Language Understanding). It can understand the meaning and intent behind user text inputs like 'Call me back later', making it ideal for chatbots and virtual assistants.",
  k: ["Language service", "intent extraction", "conversational language understanding", "NLP", "user intent"]
};

questions[227] = {
  id: 227,
  q: "You are building a Language Understanding model for an e-commerce business. You need to ensure that the model detects when utterances are outside the intended scope of the model. What should you do?",
  o: ["A. Export the model", "B. Add utterances to the None intent", "C. Create a prebuilt task entity", "D. Create a new model"],
  a: 1,
  e: "Every conversational language understanding project includes a required None intent. The None intent categorizes utterances that do not belong to any other custom intent, allowing the model to detect out-of-scope user inputs.",
  k: ["None intent", "LUIS", "Language Understanding", "out-of-scope", "utterances"]
};

questions[228] = {
  id: 228,
  q: "HOTSPOT - __________ can be used to build no-code chatbot applications that use built-in AI models for natural language understanding.",
  o: ["Power Virtual Agents", "Azure Bot Service", "Language Studio", "Custom Vision"],
  a: 0,
  e: "Power Virtual Agents is the no-code platform for building chatbots with built-in NLP capabilities, requiring no coding or data science expertise.",
  k: ["Power Virtual Agents", "no-code", "chatbot", "NLP", "conversational AI"]
};

questions[229] = {
  id: 229,
  q: "HOTSPOT - For each statement about machine learning inference, select Yes or No: (1) Inference is the process of using a trained model to make predictions on new data. (2) Inference requires access to the training dataset. (3) Real-time inference provides predictions in milliseconds.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Inference yes uses trained model to make predictions. No, inference only needs the trained model, not the original training data. Yes, real-time inference provides near-instantaneous predictions.",
  k: ["inference", "predictions", "real-time", "machine learning"]
};

questions[230] = {
  id: 230,
  q: "What is an example of the Microsoft responsible AI principle of transparency?",
  o: ["A. ensuring that opportunities are allocated equally to all applicants", "B. helping users understand the decisions made by an AI system", "C. ensuring that developers are accountable for the solutions they create", "D. ensuring that the privileged data of users is stored in a secure manner"],
  a: 1,
  e: "Transparency means helping users understand how AI systems make decisions, why they produce specific results, and what data they are using. Option A is fairness, C is accountability, and D is privacy and security.",
  k: ["transparency", "responsible AI", "AI decisions", "explainability"]
};

questions[231] = {
  id: 231,
  q: "You plan to build a conversational AI solution that can be surfaced in Microsoft Teams, Microsoft Cortana, and Amazon Alexa. Which service should you use?",
  o: ["A. Azure Bot Service", "B. Azure Cognitive Search", "C. Speech service", "D. Language service"],
  a: 0,
  e: "Azure Bot Service allows bots to be published to multiple channels including Microsoft Teams, Cortana, and Amazon Alexa. It provides the channel integrations needed to surface a single bot across many platforms.",
  k: ["Azure Bot Service", "conversational AI", "channels", "Microsoft Teams", "Alexa", "Cortana"]
};

questions[232] = {
  id: 232,
  q: "HOTSPOT - For each scenario, select Yes if it's an example of conversational AI, otherwise No: (1) Interactive webchat implemented with Azure Bot Service. (2) Generating captions for video content. (3) A smart device that responds to appointment scheduling questions.",
  o: ["A. Yes / No / Yes", "B. Yes / Yes / No", "C. No / Yes / Yes", "D. Yes / No / No"],
  a: 0,
  e: "Webchat with Bot Service = Yes (conversational AI). Generating video captions = No (computer vision). Smart device for appointments = Yes (conversational AI).",
  k: ["conversational AI", "Azure Bot Service", "captions", "computer vision", "smart device"]
};

questions[233] = {
  id: 233,
  q: "Which Azure Cognitive Services service can be used to identify documents that contain sensitive information?",
  o: ["A. Custom Vision", "B. Conversational Language Understanding", "C. Form Recognizer", "D. Computer Vision"],
  a: 2,
  e: "Form Recognizer (Azure AI Document Intelligence) can extract and analyze structured information from documents, enabling identification of documents containing sensitive information like personal data, financial details, or confidential content.",
  k: ["Form Recognizer", "Document Intelligence", "sensitive information", "document analysis"]
};

questions[234] = {
  id: 234,
  q: "Which Azure service enables you to index and make searchable the content of thousands of documents stored in Azure Blob Storage?",
  o: ["A. Azure SQL Database with full-text search", "B. Azure Cognitive Search", "C. Azure Data Factory", "D. Azure Stream Analytics"],
  a: 1,
  e: "Azure Cognitive Search can index documents from Azure Blob Storage, applying AI enrichment and making content full-text searchable.",
  k: ["Azure Cognitive Search", "Blob Storage", "document indexing", "full-text search"]
};

questions[235] = {
  id: 235,
  q: "A smart device that responds to the question 'What is the stock price of Contoso, Ltd.?' is an example of which AI workload?",
  o: ["A. knowledge mining", "B. natural language processing", "C. computer vision", "D. anomaly detection"],
  a: 1,
  e: "A smart device understanding and responding to a spoken question is an example of natural language processing (NLP). It involves understanding human language (the question) and generating a response. Knowledge mining extracts info from large datasets, computer vision analyzes images, and anomaly detection finds deviations from norms.",
  k: ["NLP", "natural language processing", "smart device", "conversational AI", "stock price"]
};

questions[236] = {
  id: 236,
  q: "DRAG DROP - Match machine learning model types to their descriptions: (1) Predicts a numeric value (e.g., predicts house price). (2) Predicts which category an item belongs to (e.g., spam/not spam). (3) Groups similar items together without predefined categories.",
  o: ["A. Regression / Classification / Clustering", "B. Classification / Regression / Clustering", "C. Clustering / Classification / Regression", "D. Regression / Clustering / Classification"],
  a: 0,
  e: "Predicting numeric value = Regression. Predicting category = Classification. Grouping without predefined categories = Clustering.",
  k: ["regression", "classification", "clustering", "ML types"]
};

questions[237] = {
  id: 237,
  q: "You are building a tool to process images from retail stores and identify competitor products on shelves. The solution must be trained on images provided by your company. Which Azure AI service should you use?",
  o: ["A. Form Recognizer", "B. Custom Vision", "C. Face API", "D. Computer Vision (pre-built)"],
  a: 1,
  e: "Custom Vision allows you to train custom object detection or classification models using your own labeled images, perfect for identifying specific competitor products.",
  k: ["Custom Vision", "custom model", "object detection", "retail", "competitor products"]
};

questions[238] = {
  id: 238,
  q: "HOTSPOT - For each statement about machine learning model evaluation, select Yes or No: (1) A model with 98% accuracy on training data but 60% on test data is likely overfitting. (2) Cross-validation is used to get a more reliable estimate of model performance. (3) Model evaluation should be done using data that was used in training.",
  o: ["A. Yes / Yes / No", "B. Yes / No / Yes", "C. No / Yes / No", "D. Yes / Yes / Yes"],
  a: 0,
  e: "High training accuracy but low test accuracy = Yes (overfitting). Cross-validation = Yes (more reliable). Test data same as training = No (test data must be separate).",
  k: ["overfitting", "cross-validation", "model evaluation", "train/test split"]
};

questions[239] = {
  id: 239,
  q: "HOTSPOT - To complete the sentence: __________ is when an AI system generates plausible-sounding but incorrect or fabricated information, which is a key challenge with large language models.",
  o: ["Overfitting", "Hallucination", "Bias", "Underfitting"],
  a: 1,
  e: "Hallucination in AI refers to when a model generates confidently stated but factually incorrect or fabricated information, a known challenge with large language models.",
  k: ["hallucination", "large language models", "LLM", "AI errors", "generative AI"]
};

questions[240] = {
  id: 240,
  q: "You need to identify street names based on street signs in photographs. Which type of computer vision should you use?",
  o: ["A. object detection", "B. optical character recognition (OCR)", "C. image classification", "D. facial recognition"],
  a: 1,
  e: "OCR extracts text (like street names) from images of signs. Object detection would locate the sign, but OCR reads the text on it.",
  k: ["OCR", "street signs", "text extraction", "character recognition"]
};

questions[241] = {
  id: 241,
  q: "HOTSPOT - For each statement about the Microsoft six principles of responsible AI, select Yes or No: (1) Inclusiveness means AI should benefit everyone including people with disabilities. (2) Accountability means AI systems should operate without human oversight. (3) Privacy and security requires collecting as much data as possible.",
  o: ["A. Yes / No / No", "B. Yes / Yes / No", "C. No / Yes / No", "D. Yes / No / Yes"],
  a: 0,
  e: "Inclusiveness yes means benefiting everyone. No, accountability requires human oversight. No, privacy means minimizing data collection, not maximizing it.",
  k: ["inclusiveness", "accountability", "privacy and security", "responsible AI"]
};

questions[242] = {
  id: 242,
  q: "HOTSPOT - To complete the sentence: When an AI model is trained on data that underrepresents certain demographic groups, the resulting model may perform poorly for those groups, which is a concern for the __________ principle of responsible AI.",
  o: ["accountability", "transparency", "fairness", "reliability and safety"],
  a: 2,
  e: "Fairness ensures AI doesn't discriminate or perform worse for underrepresented groups. Biased training data causing poor performance for certain groups violates fairness.",
  k: ["fairness", "underrepresented groups", "bias", "training data", "responsible AI"]
};

questions[243] = {
  id: 243,
  q: "You are developing a chatbot solution in Azure. Which service should you use to determine a user's intent from their natural language input?",
  o: ["A. Translator", "B. Language service (with conversational language understanding)", "C. Azure Cognitive Search", "D. Speech service"],
  a: 1,
  e: "The Language service includes Conversational Language Understanding (CLU), which replaces LUIS and is used to identify user intent from natural language input.",
  k: ["Language service", "CLU", "LUIS", "intent recognition", "chatbot"]
};

export default questions;
export const TOTAL_QUESTIONS = 243;
