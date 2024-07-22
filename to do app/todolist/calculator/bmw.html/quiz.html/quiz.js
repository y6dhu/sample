var quizlist=[{
    question:" What is the capital city of Japan?",
    Option:["delhi","tokyo","newyork"],
    answer:"tokyo"},

    { 
     question:"In which year did the Titanic sink?",
     Option:[1930,2000,1912],
     answer:1912},

   { question:"What is the largest planet in our solar system?",
    Option:["earth","mars","jupiter"],
    answer:"jipiter"}

    { question:"In which year did World War II end?",
      Option:[1890,1790,1945],
      answer:1945},

    { question:"Which planet is known as the “Red Planet”?",
        Option:["mars","earth","pluto"],
        answer:"mars"
    },   

    
    { question:"What is the largest desert in the world?",
        Option:["antartica","artic","Saharan"],
        answer:"antartica"
    },   

    
    { question:"In which year did the Berlin Wall fall?",
        Option:[1989,2003,2014],
        answer:1989
    },
    
    
    { question:"Which gas makes up the majority of Earth’s atmosphere?",
        Option:["nitrogen","hydrogen","oxygen"],
        answer:"nitogen"
    },   

    { question:"What is the capital of Canada?",
        Option:["paris","ottawa","cario"],
        answer:"ottawa"
    },   
];
var box=document.getElementsByClassName("box1")
function loadquestion()
{
    box.textcontent=(quizlist[0].question)
}

loadqustion()