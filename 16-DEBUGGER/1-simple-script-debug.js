/** ### SCRIPT FOR DEBUGGING ### */

function addArticleText(article, text) {
    article.text = text;
}

function showArticle(article){
    console.log(`---${article.title}---`);
    console.log(article.text);
    console.log(`Date: ${article.date}`);
}

const article = {};
article.title = 'JS Start Course by Foxminded';

const text = 'JS Start Course by Foxminded get "The Best Programming Course" award ...';

addArticleText(article, text);

article.date = new Date();
article.isModerated = true;

if(article.isModerated){
    showArticle(article);
}
else{
    console.log('No article here!');
}