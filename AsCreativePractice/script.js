// Steps to solve my problem
/* 
- Create a list of words
- Able to randomly pick a word from list 
- Create a phrase consisting of random words
- Display my phrase on the page
- Be able to connect the buttom to the creation of the phrase
*/


//-------------------------------------------------------------
// WORD BANK

const noun = [
    "Portfolio", "Design", "Creator", "Influencer", "Artist", "Perspective",
    "Zine", "Freelance work", "Freelance gig", "Texture", "Tool", "Composition",
    "Engagement", "Logo", "Content", "Branding", "Typography", "Mind Map",
    "Brand Identity", "Brand Guideline",  "Creativity", "Creative Director",
    "Creative", "Typeface", "Font", "Client", "Illustration", "Font Family",
    "Figma Plug-In", "Figma", "Workflow", "Moodboard", "Inspo", "Culture", 
    "Inspiration", "Trend", "Micro-Trend", "Serif", "Zip file of fonts",
    "Sans-Serif", "Color Palette", "Color", "Palette", "Feed", "Art Director", 
    "Lorem Ipsum", "White-Space", "Hierarchy", "Adobe", "Packaging Design", 
    "Algorithm", "Passion", "Concept", "Printer", "Profile", "Archive", "DM",
    "Niche", "Form and Function", "Strategy","Input", "Output", "Pattern",
    "Code", "Javascript", "Python", "HTML", "Focal Point", "Activity", "Motif",
    "CSS", "Web", "Website", "App", "UX Design", "UI Design", "User", "Caption",
    "Book", "Canva", "Photography", "Presentation", "Organize", "Ick",
    "Idea", "Hierarchy", "Poster", "Studio", "File", "AI", "Behance", "Layer",
    "Vibe", "Balance", "Resume", "Following", "Follower", "Internet", "Brand",
    "Grid", "Product", "Page", "Effect", "Designer", "Poor Image", "$$$", 
    "Network", "Pinterest", "Gaussian Blur", "Gradient", "Vector", "Draft",
    "Leading", "Iteration", "Budget", "Deadline", "Exposure", "Line",
    "Bauhaus", "Identity", "Instagram", "Kerning", "Spacing", "Tip", "Glyph", 
    "Free Trial", "Craft", "Mockup", "Brutalism", "Color Theory", "Library",
    "Re-Brand", "Stock Photo", "Resource", "Motion Graphic", "Design Kit", 
    "Handwriting", "Agency", "Magazine", "Organization", "Rule", "Intern",
    "Company", "Entreprise", "Firm", "Business", "Magazine", "Internship", 
    "Asterisk", "Partnership", "Sponsor", "Framework", "Trick", "Shape",
    "Sponsorship", "Reminder", "Template", "Photoshop File", "Point size",
    "Illustrator File", "Process", "Squarespace", "Are.na", "Browser", "Sh*t",
    "LinkedIn", "T-Shirt Design", "Hoodie Design", "Feature", "Sketch",
    "Startup", "9-5", "Slideshow", "Promotional TikTok", "InDesign File",
    "Media", "Account", "Social Media", "3D Render", "Subscription", "Form",
    "Back-end", "Front-end", "Decision", "Tutorial", "Workload", "Layout",
    "Line Weight", "Stroke Weight", "Architecture", "Structure", "Method",
    "Frame", "NDA", "Slack", "Installation", "Adobe Suite", "Friend", "Aesthetic",
    "Adobe Creative Cloud", "Lunch Break", "Community", "Adobe", "Hard Drive",
    "Stretched Type", "Mentor", "Image", "Picture", "Streetwear Brand",
    "Process Work", "Pinterest Board", "Networking Event", "Left Aligned Text", 
    "Right Aligned Text", "Body Copy", "Entrepreneur", "Concept Merch Design", 
    "Paste-up", "Collage", "Shortcut", "Ligature", "Intentionally tight kerning",
    "Concept Design", "Issue", "Problem", "Trend Forecast", "V3_RealFinal_Final.pdf",
    "Instagram Reel", "Instagram Ad", "Youtube Short", "Commission", "Trend Forecast",
    "Visual Identity", "Art Style", "Subculture",
];

const nounPlural = [
    "Portfolios", "Designs", "Creators", "Influencers", "Artists",
    "Zines", "Freelance projects", "Textures", "Tools", "Logos", 
    "Brand Identities", "Brand Guidelines",  "Activities", "Files",
    "Creatives", "Typefaces", "Fonts", "Clients", "Illustrations", 
    "Figma Plug-Ins", "Workflows", "Moodboards", "Messy Rags",
    "Inspirations", "Trends", "Micro-Trends", "Serifs", "Frameworks",
    "Sans-Serifs", "Color Palettes", "Colors", "Palettes", "Tricks",
    "Lorem Ipsums", "White Spaces", "Hierarchies", "Focal Points",
    "Algorithms", "Passions", "Concepts", "Pinterest Boards",
    "Niches", "Forms and Functions", "Strategies", "Magazines",
    "Inputs", "Outputs", "Websites", "Apps", "Users", "Profiles", 
    "Books", "Photographs", "Presentations", "Organizations", 
    "Ideas", "Hierarchies", "Posters", "Studios", "Companies",
    "Vibes", "Resumes", "Followings", "Followers", "UI Designs", 
    "Grids", "Products", "Pages", "Effects", "UX Designs", "Tips",
    "Designers", "Creative Directors", "Images", "Pictures", "Brands", 
    "Art Directors", "Networks", "Gaussian Blurs", "Gradients", 
    "Vectors", "Tutorials", "Sketches", "Iterations", "Deadlines",
    "Identities", "Spacings", "Free Trials", "Mockups", "Subcultures",
    "Entreprises", "Firms", "Businesses", "Stock Photos", "Rules",
    "Resources", "Motion Graphics","Agencies", "Design Kits", 
    "White-Space", "Partnerships", "Sponsors", "Reminders",
    "Templates", "Browsers", "Features", "Startups", "9-5s", "Shortcuts",
    "Slideshows", "Promotional TikToks", "Accounts", "3D Renders", 
    "Lines", "Structures", "Frames", "Settings", "Adobe Products",
    "Communities", "Friends", "Font Families", "Glyphs", "Drafts",
    "Layers", "Shapes", "Point sizes", "Cultures", "Archives",
    "Internships", "Interns", "Mentors", "Streetwear Brands", "Art Styles", 
    "Libraries", "Photoshop Files", "InDesign Files", "Aesthetics",
    "Illustrator Files", "NDA's", "Zip files of fonts", "Motifs",
    "Networking Events", "Messy Layers", "Workloads", "Collages",
    "Unnamed Layers", "Entrepreneurs", "Paste-ups", "Perspectives",
    "Display Type", "Captions", "Ligatures", "DM's", "Issues", "Problems",
    "Decisions", "Concept Designs", "Packaging Designs", "Instagram Reels", 
    "Instagram Ads", "Youtube Shorts", "Commissions", "Visual Identities", 

];

const verb = [
    "Design", "Typeset", "Make", "Bolden", "Italicize", "Optimize", "Stop",
    "Curate", "Gatekeep", "Elevate", "Strategize", "Code", "Buy", "Add",
    "Ideate", "Improve", "Enhance", "Polish", "Augment", "Refine", "Redo",
    "Cultivate", "Revamp", "Refine", "Promote", "Edit", "Boost", "Display",
    "Revise", "Upgrade", "Update", "Invest", "Follow", "Feature", 
    "Scroll", "Design", "Visualize", "Balance", "Test", "Fix", "Aestheticize",
    "Generate", "Influence", "Find", "Discover", "Invent", "Manage",  "Resize",
    "Establish", "Bring", "Produce", "Imagine", "Innovate", "Adjust", "Convince",
    "Prioritize", "Posterize", "Hire", "Diversify", "Download", "Upload", 
    "Post", "Change", "Create", "Kern", "Craft", "Input", "Output", "Budget",
    "Try", "Exhibit", "Maintain", "Showcase", "Publish", "Expand", "Uplift",
    "Support", "Help", "Advertize", "Brand", "Identify", "Love", "Perfect",
    "Re-Brand", "Appreciate", "Store", "Animate", "Start", "Sponsor", "Repost",
    "Hustle", "Purchase", "Intergrate", "Remind", "simulate",
    "Browse", "Boost Engagement", "Explore", "Print", "Work From Home",
    "Copyright", "Charge", "3D Render", "Ignore", "Export", "Repeat", "Break",
    "Highlight", "Iterate", "Ruin", "Rasterize", "Remove", "Continue", "Corporatize", 
    "Capitalize", "Slay", "Align", "Model", "Flatten",
    "Analyze", "Archive", "Trick", "Illustrate", "Draw", "Pause", "Keep", "Work",
    "Save", "Finish", "Complete", "Submit", "Color Code", "Plagiarize", "Collage",
    "Distribute", "Commercialize", "Reboot", "Brainstorm", "Restart", "Arrange",
    "Rearrange", "Collage", "Doodle", "Depict", "Hide", "Reveal", "Draft", "Trace",
    "Endorse", "DM", "Send", "Email", "Judge", "Reduce", "Amplify", "Redefine", 
    "Profit", "Launch", "Hate", "Dislike", "Maximize", "Minimize", 
];

const verbWithMore = [
    "Design", "Typeset", "Make", "Bolden", "Italicize", "Optimize", "Stop",
    "Curate", "Gatekeep", "Elevate", "Strategize", "Code", "Buy", "Add",
    "Ideate", "Improve", "Enhance", "Polish", "Augment", "Refine", "Redo",
    "Cultivate", "Revamp", "Refine", "Promote", "Edit", "Boost", "Display",
    "Revise another", "Upgrade that", "Update all", "Invest in", "Follow up on", 
    "Feature", "Add Grain to", "Rasterize", "Scroll", "Visualize", "Balance", 
    "Test", "Fix", "Aestheticize", "Generate", "Influence", "Find", "Discover",
    "Establish", "Bring", "Produce", "Imagine", "Innovate", "Adjust", "Convince",
    "Prioritize", "Posterize", "Hire", "Diversify", "Download", "Upload", 
    "Post", "Change", "Create", "Kern", "Craft", "Input", "Output", "Budget",
    "Try", "Exhibit", "Maintain", "Showcase", "Publish", "Expand", "Uplift",
    "Support", "Help", "Advertize", "Brand", "Identify", "Love", "Perfect",
    "Re-Brand", "Appreciate", "Store", "Animate", "Start", "Sponsor", "Repost",
    "Hustle", "Experiment with", "Purchase", "Intergrate", "Remind", "simulate",
    "Browse", "Boost Engagement", "Explore", "Print on", "Work From Home for",
    "Copyright", "Charge", "3D Render", "Ignore", "Export", "Repeat", "Break",
    "Highlight", "Iterate", "Ruin", "Charge Less for", "Charge More for",
    "Remove", "Continue", "Corporatize", "Capitalize", "Slay", "Align", "Model",
    "Analyze", "Archive", "Trick", "Illustrate", "Draw", "Pause", "Keep", "Work",
    "Save", "Finish", "Complete", "Submit", "Color Code", "Plagiarize", "Collage",
    "Distribute", "Commercialize", "Reboot", "Brainstorm", "Restart", "Arrange",
    "Rearrange", "Collage", "Doodle", "Depict", "Hide", "Reveal", "Draft", "Trace",
    "Endorse", "DM", "Send", "Email", "Judge", "Reduce", "Amplify", "Redefine", 
    "Profit off of", "Launch", "Hate", "Dislike", "Maximize", "Minimize",   
    "Invent", "Manage", "Resize", "Flatten",
];

const verbIng = [
    "Freelancing", "Designing", "Typesetting", "Making", "Italicizing", "Completing",
    "Optimizing", "Curating", "Gatekeeping", "Elevating", "Strategizing", "Coding",
    "Ideating", "Improving", "Enhancing", "Polishing", "Augmenting", "Refining", 
    "Cultivating", "Revamping", "Refining", "Promoting", "Editing", "Boosting", "Reposting",
    "Revising", "Lifting", "Bettering", "Upgrading", "Updating", "Investing in", 
    "Following", "Doom Scrolling through", "Designing", "Visualizing", "Breaking", "Resizing",
    "Balancing", "Generating", "Influencing", "Finding", "Discovering", "Inventing", 
    "Shaping", "Establishing", "Bringing", "Producing", "Imagining", "Saving", "Judging",
    "Innovating", "Remembering", "Networking", "Referencing", "Blurring", "Texturing",
    "Experimenting with", "Hustling", "Buying", "Purchasing", "Intergrating", "Fixing", 
    "Reminding", "Browsing", "Exploring", "Printing", "Arranging",
    "Exporting", "Repeating", "Rendering", "Working on", "Testing out", "Diversifying",
    "Displaying","Exhibiting", "Ruining", "Iterating", "Managing", "Redoing", "Adjusting",
    "Corporatizing", "Rasterizing", "Marketing", "Slaying", "Featuring", "Stopping", 
    "Analyzing", "Archiving", "Illustrating", "Drawing", "Pausing", "Finishing",
    "Submitting", "Color Coding", "Plagiarizing", "Adding Grain to", "Simulating",
    "Commercializing", "Distributing", "Brainstorming", "Restarting", "Modelling",
    "Rearranging", "Doodling", "Depicting", "Hiding", "Revealing", "Drafting", "Tracing",
    "Convincing", "Emailing", "Sending", "Reducing", "Amplifying", "Redefining", "Perfecting",
    "Launching", "Hating", "Disliking", "Maximizing", "Minimizing", "Flattening"
];

const adverb = [
    "Creatively", "Boldly", "Functionally", "Passionately", "Nichely", 
    "Brightly", "Colorfully", "Virally", "Professionally", "Powerfully", 
    "Gorgeously", "Beautifully", "Fully", "Absolutely", "Vibrantly",
    "Maximally", "Excellently", "Originally", "Imaginatively", "Loudly",
    "Innovatively", "Largely", "Optimally", "Truthfully", "Critically", 
    "Iconically", "Exclusively", "Quickly", "Notoriously", "Digitally", 
    "Strategically", "Simplistic", "Oddly", "Realistically", "Accurately", 
    "Earnestly", "Physically", "Rapidly", "Slowly", "Eagerly", "Easily", 
    "well", "Poorly", "Neatly", "Generously", 
];

const adverbFrequency = [
    "Regularly", "Frequently", "Ultimately", "Exclusively", 
    "Always", "Usually", "Often", "sometimes", "Rarely", "Never",
    "Hardly ever", "Occasionally", "Generally", "Frequently", "Normally",
    
];

const adjective = [
    "Neue", "Creative", "Bold", "Italic", "Minimalist", "Maximalist", "Camp",
    "Passionate", "Beautiful", "Gorgeous", "Trendy", "Viral", "Bright", "Pro",
    "Colorful", "Niche", "Functional", "Vibey", "Elite", "Professional", "Rich",
    "Better", "Powerful", "Authentic", "Real", "Full", "Vibrant", "Original", 
    "Imaginative", "Innovative", "Excellent", "Optimal", "Ultimate", "Late",
    "Biggest", "Largest", "Modern", "Contemporary", "Stylish", "Post-Modernist",
    "Avant-Garde", "Earnest", "Honest", "Critical", "Inclusive", "Accessible",
    "Cutting-Edge", "Latest", "Newest", "New", "Outdated", "High-Quality", "Old",
    "Grotesque", "Free", "Modular", "Premium", "Prime", "Iconic", "Gutenburgean",
    "Exclusive", "Must-Have", "Hand-Drawn", "Analog", "Life-Saving", "Everyday",
    "Swiss", "Typographic", "Hidden", "Difficult", "Subversive", "Surprising", 
    "Best", "Invisible", "Sponsored", "Shocking", "Famous", "Broke", "Legible",
    "Memorable", "Notorious", "Influential", "First", "Digital", "Current", "Hot",
    "Silly", "Loud", "Subtle", "Soft", "Code Based", "Drool-Worthy", "Illegible",
    "Quirky", "Multidisciplinary", "Self-Taught", "Run of the mill", "Infinite", 
    "Simplistic", "Simple", "Realistic", "Addictive", "Oddly Satisfying", "Dark",
    "Enchanting", "Corporate", "Queer", "Based", "Intense", "Relaxed", "Light",
    "Inaccessible", "Chic", "Privileged", "Classy", "Rugged", "Grainy", "Heavy",
    "Sub-Optimal", "Early", "Overdue", "Promotional", "Modernist", "Witty", "Weird",
    "Aesthetic", "Poor", "Desperate", "Entrepreneurial", "Unemployed", "Lowkey",
    "Industry Standard", "Cheugy", "Tacky", "Mixed-Media", "Favorite", "Uplifting",
    "Campy", "Post-Ironic", "Ironic", "Witty", "Distressed", "F*cking", "Lazy",
    "Uncanny", "Historical", "Flat"

];

const program = [
    "Illustrator", "InDesign", "Photoshop", "After Effects", 
    "Canva", "Premiere Pro", "Javascript", "CSS", "HTML", 
    "Squarespace", "Pinterest", "Are.na", "Behance", "Coding",
    "Lightroom", "Figma", "Instagram", "Slack", "Adobe", "JQuery", 
    "Graphic Design", "UX Design", "UI Design"
];

const form = [
    "Poster", "Website", "Print", "Illustration", "Instagram Post", "Graphic",
    "Typography Project", "Post", "T-Shirt Design", "Hoodie Design", "Mug Design",
    "Sticker", "PDF Document", "Motion Graphic", "Slideshow", "Decision", "Post",
    "Installation", "Exhibit", "Letterform", "Packaging Design", "Mockup", 
    "Instagram Reel", "Youtube Short",

];

const jobTitle = [
    "Graphic Designer", "Designer", "Artist", "Illustrator", "Motion Designer",
    "Animator", "Art Director", "Creative Director", "Creative", "Design Influencer",
    "Web Developer", "Multidisciplinary Artist", "Multidisciplinary Designer",
    "Typographer", "Influencer", "Creator", "Junior Graphic Designer", "Unemployed Creative",
    "Marketing Intern", "Advertising Intern", "Graphic Design Intern", "Unemployed Artist",
    "Unemployed Designer", 
];

const articleJobTitle = [
    "A Graphic Designer", "A Designer", "An Artist", "An Illustrator", "a Motion Designer",
    "an Animator", "an Art Director", "a Creative Director", "a Creative", "a Design Influencer",
    "a Web Developer", "a Multidisciplinary Artist", "a Multidisciplinary Designer",
    "a Typographer", "an Influencer", "a Creator", "a Junior Graphic Designer", "an Unemployed Creative",
    "a Marketing Intern", "an Advertising Intern", "a Graphic Design Intern", "an Unemployed Artist",
    "an Unemployed Designer", 
];

const font = [
    "Futura", "Helvetica", "Times New Roman", "Papyrus", "Baskerville", "Bodoni", "Gotham", "Didot", "Univers", "Rockwell", "Franklin Gothic", "Garamond", "Mrs Eaves", "Minion", "Cooper Black", "Caslon", "Arial", "Verdana", "Gill Sans", "Georgia", "Comic Sans", "Roboto",  
];

const number = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30" 
];

const articles = ["the", "a" ];

const punctuation = [".", "!", "..."];

//-------------------------------------------------------------
// GENERATING RANDOM PHRASE FOR ALL

const pickRandomWord = (listOfWords) => {
  const randomNumber = Math.floor(Math.random() * listOfWords.length);
  return listOfWords[randomNumber];
};

 
//-------------------------------------------------------------
// PHRASE STRUCTURES

//------ _____ AS DESIGN PRACTICE ------
const asDesignPractice = [
    "as a design practice", "as creative practice"
];
function generateRandomPhrase1() {
  return `${pickRandomWord(verbIng)} ${pickRandomWord(nounPlural)} ${pickRandomWord(
    asDesignPractice)}${pickRandomWord(punctuation)}`;
};

//------ THE _____ DESIGNERS MANIFESTO ------
const aDesignersManifesto = [
    "Designer's Manifesto", "Creative's Manifesto", 
];
function generateRandomPhrase2() {
    return `${"The"} ${pickRandomWord(adjective)} ${pickRandomWord(
      aDesignersManifesto
    )}${pickRandomWord(punctuation)}`;
};

//------ # TIPS TO ____ YOUR _____ ------
const tipsTo = [
    "tips to", "tricks to", "hacks to",
];
function generateRandomPhrase3() {
    return `${pickRandomWord(number)} ${pickRandomWord(tipsTo)} ${pickRandomWord(
      verbWithMore
    )} ${"Your Next"} ${pickRandomWord(form)}`;
};

//------ # TIPS I'VE BEEN GATEKEEPING ------
const iveBeenGatekeeping = [
    "hacks I've been gatekeeping", "Tricks You Need to Know", "Tips that change the game", "tips so he won't leave you", "tips so she won't leave you", "tips so they won't leave you", "tricks that will turn him on", "tricks that will turn her on", "tricks that will turn them on",
];

function generateRandomPhrase4() {
    return `${pickRandomWord(number)} ${pickRandomWord(program)} ${pickRandomWord(
      iveBeenGatekeeping
    )}${pickRandomWord(punctuation)}`;
};

//------ ____ YOUR FIRST ____? ------
const iWish = [
    "Here are a couple things I wish I knew", "Here are a couple things I wish somebody told me"
];
function generateRandomPhrase5() {
    return `${pickRandomWord(verbIng)} ${"Your first"} ${pickRandomWord(form)}${"?"} ${pickRandomWord(iWish)}${"."}`; 
};

//------ ITS OKAY TO ------
const frequency = [
    "Daily", "Monthly", "Annual", "Weekly", "", 
];
function generateRandomPhrase6() {
    return `${"Hey! Here's your"} ${pickRandomWord(frequency)} ${"reminder that its okay to"
    } ${pickRandomWord(verb)} ${"as"} ${pickRandomWord(articleJobTitle)}`;
};

//------ IN MY ___ ___ ERA ------
function generateRandomPhrase7() {
    return `${"In my"} ${pickRandomWord(adjective)} ${pickRandomWord(
      noun
    )} ${"era"}${pickRandomWord(punctuation)}`;
};

//------ GIFT GUIDE ------
const relationship = [
    "friend", "co-worker", "cousin", "partner", "girlfriend", "boyfriend"
];
function generateRandomPhrase8() {
    return `${"Gift guide for your"} ${pickRandomWord(adjective)} ${pickRandomWord(jobTitle
    )} ${pickRandomWord(relationship)}${pickRandomWord(punctuation)}`;
};

//------ _____ Eat. Sleep Repeat ------
function generateRandomPhrase9() {
    return `${pickRandomWord(jobTitle)}${"s"} 
    ${"Be like:"} ${pickRandomWord(verb)}${"."} 
    ${"Eat. Sleep. Repeat"}${pickRandomWord(punctuation)}`;
};

//------ DEAR _____... ------
const startStop = [
    "please start", "please stop", 
];
function generateRandomPhrase10() {
    return `${"Dear"} ${pickRandomWord(jobTitle)}${"s,"}
    ${pickRandomWord(startStop)} ${pickRandomWord(verbIng)} ${"your"} ${pickRandomWord(nounPlural)}${"."}`;
};

const neverAlways = [
    "never", "always", "think before you", 
];
function generateRandomPhrase11() {
    return `${"Dear"} ${pickRandomWord(jobTitle)}${"s,"} 
    ${pickRandomWord(neverAlways)} ${pickRandomWord(verbWithMore)} ${"your"} ${pickRandomWord(nounPlural)}${"."}`;
};

//------ WE'RE _____! OF COURSE WE ------
function generateRandomPhrase12() {
    return `${"We're"} ${pickRandomWord(jobTitle)}${"s!"} ${"Of course we"} ${pickRandomWord(
      verbWithMore
    )} ${pickRandomWord(nounPlural)}${"."}`;
};

//------ YOU CAN NEVER HAVE TOO MANY ------
function generateRandomPhrase13() {
    return `${"You can never have too many"} ${pickRandomWord(nounPlural)}${pickRandomWord(punctuation)}`;
};

//------ VERB NOUNS ------
function generateRandomPhrase14() {
    return `${pickRandomWord(verbWithMore)} ${pickRandomWord(nounPlural)}${"."}`;
};

//------ # ____ ALTERNATIVES FOR FONTNAME ------
function generateRandomPhrase15() {
    return `${pickRandomWord(number)} ${pickRandomWord(adjective)} ${"Alternatives for"} ${pickRandomWord(
    font)}`;
};

//------ LIVE LAUGH LOVE ------
function generateRandomPhrase16() {
    return `${"Live, Laugh, Love"} ${pickRandomWord(nounPlural)}`;
};

//------ TREND FORECAST! ------
function generateRandomPhrase17() {
    return `${"Trend Forecast:"} 
    ${pickRandomWord(nounPlural)} ${"are in"}${pickRandomWord(punctuation)} 
    ${pickRandomWord(verbIng)} ${"is out"}${pickRandomWord(punctuation)}`;
};

//------ WHO NEEDS IT? ------
function generateRandomPhrase18() {
    return `${"Who needs"} ${pickRandomWord(nounPlural)} 
    ${"when you have"} ${pickRandomWord(nounPlural)}${"?"}`;
};

//------ ___ ARE A ____ BEST FRIEND ------
const friendEnemy = [
    "Best Friend", "Worst Enemy",
];
function generateRandomPhrase19() {
    return `${pickRandomWord(nounPlural)} ${"are"} ${pickRandomWord(articleJobTitle)}${"'s"} ${pickRandomWord(friendEnemy)}${pickRandomWord(punctuation)}`;
};

//------ YES IT'S POSSIBLE TO BE  ____ ------
function generateRandomPhrase20() {
    return `${"Yes, it is possible to be"} ${pickRandomWord(adjective)}${","} ${pickRandomWord(adjective)}${","
    } ${"and also"} ${pickRandomWord(articleJobTitle)}${pickRandomWord(punctuation)}`;
};

//------ YES I HATE ____, YES WE EXIST ------
function generateRandomPhrase21() {
    return `${"Yes, I hate"} ${pickRandomWord(nounPlural)}${"."} 
    ${"Yes, I'm"} ${pickRandomWord(articleJobTitle)}${"."}
    ${"Yes, we exist"}`;
};


//-------------------------------------------------------------
// CONNECTING TO VISUALS

function displayPhrase() {
    let phrase;
    const p = Math.ceil(Math.random()*21);
    phrase = eval('generateRandomPhrase'+p+'()')

    const headerElem = document.querySelector(".phrase");

    headerElem.innerText = phrase;
}

function listenToClicks() {
    const button = document.querySelector(".generate-phrase");
  
    button.addEventListener("click", displayPhrase);
}
listenToClicks();
$('#instagramPostBackground').click(displayPhrase);

//-------------------------------------------------------------
// RANDOMIZING DESIGN

function displayFont(){
    let fontType = [ "gopher", "new-spirit-condensed, serif", "ivypresto-display, serif, italic", ];
    let pickRandomFont = Math.floor(Math.random() * fontType.length);

    const phraseFont = document.getElementById("instagramPostTextFrame");

    phraseFont.style.fontFamily = fontType[pickRandomFont]
};
displayFont();
$('.button').click(displayFont);

function displayCase(){
    let caseType = [ "uppercase", "lowercase"];
    let pickRandomCase = Math.floor(Math.random() * caseType.length);

    const phraseCase = document.getElementById("instagramPostTextFrame");

    phraseCase.style.textTransform = caseType[pickRandomCase]
};
displayCase();
$('.button').click(displayCase);

function displayTextColor(){
    let typeColor = [  "#dd3c2a", "#c3c530", "#ff9c00",];
    let pickRandomColor = Math.floor(Math.random() * typeColor.length);

    const textColor = document.getElementById("instagramPostTextFrameColors");

    textColor.style.color = typeColor[pickRandomColor]
};
displayTextColor();
$('.button').click(displayTextColor);

function displayBackgroundColor(){
    let typeColor = ["#f7eee3", "#c2e9ef", "#f3ddeb", "#1826ad", "#0f2d1f"];
    let pickRandomColor = Math.floor(Math.random() * typeColor.length);

    const phrasebackgroundColor = document.getElementById("instagramPostBackground");

    phrasebackgroundColor.style.backgroundColor = typeColor[pickRandomColor];
};
displayBackgroundColor();
$('.button').click(displayBackgroundColor);


//-------------------------------------------------------------

//QuestionMark click to show Legend ----------------------------

function showDescription(){
    $('.blurb').toggleClass('hidden');
}
$('.blurb-button').click(showDescription);
$('.blurb').click(showDescription);



