var intro_words = ["Introduction to", "Designing the", "Applied", "Building Tidy", "Professional", "Open Source", "A Practical Intro to", "Interactive Analysis of", "Deep Learning", "Big Data", "Serverless", "Deployed End-to-End", "A Streamlined Approach to", "Accelerating Analytics for", "Powerful"];
var subject_words = ["Tidyverse","Machine Learning","Deep Learning","Big Data","Hadoop", "Scalable", "Analysis", "Biggest Data", "Deep Learned", "Survival Analysis", "Time Series", "Workflows", "Visualization", "Dashboards", "Server Pro", "Pipeline","RMarkdoen Neural Networks", "RMarkdown Databases","Shiny App", "Shiny Machine Learning", "Longitudinal Data", "TidyBlocks"];
var final_words = ["at Scale", "with the Tidyverse", "Principles","Workflow", "Data Analysis", "with Kubernetes", "on Server Pro","on the Cloud","with Deep Learned Bookdown","Applications","with ggplot", "for Data Science","Packages","for Excel Users"];

var text= document.getElementById("thetext");
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
var generate = function(){
  var workshop = getRandom(intro_words,1)
  workshop.push(getRandom(subject_words,2))
  workshop.push (getRandom(final_words,2))
  workshop = workshop.join(" ");
  var final_string = workshop.replace(/,/g, ' ');
  var final_string = final_string;

  text.innerHTML=final_string;
}
