// grab UI items
const courseName = document.getElementById('course-name');
const subjectName = document.getElementById('subject-name');
const departmentName = document.getElementById('department-name');
const inputContainer = document.getElementById("input-container");
const result = document.getElementById('result');

function updateResult() {
	result.innerText = `
	為何要必修${courseName.value}略論
	最近有關${courseName.value}是否應必修的問題吵得沸沸揚揚，此問題所涉深遠，我未及充分研究，僅根據網路新聞報導所見，略書所感所思如下，以供大家參考：
	一、 ${subjectName.value}是思想、表達與寫作的最重要基礎，幾乎須臾不可離。我們基本上是用${subjectName.value}而不是用外文來思考、表達與書寫，所以${subjectName.value}一定要夠好，其思考、表達與書寫才會有${subjectName.value}的深度、內涵與美感。
	二、 ${subjectName.value}的深度大抵決定了也代表了文化深度，其中${courseName.value}尤為關鍵。大學生肯定需要有較高的${subjectName.value}與文化的深度，雖然其事不必也不能專由${courseName.value}來培養，但良好的${courseName.value}課，因其可以加強本國${subjectName.value}的深度與內涵，會對此大有幫助。
	三、 我們的社會物質與經濟發達，實用主義高漲，但普遍欠缺「${subjectName.value}素養」，所以從政治、經濟到社會人物的氣質與內涵往往不佳，影響重大。「${subjectName.value}素養」是品格、氣質、內涵與價值觀的重要根本，決定了一箇人的文化水平與人生高度。固然${subjectName.value}素養應從小培養，但在中小學時期受困於會考與社會上氾濫的實用主義，往往難以真正地提昇，所以到了大學時期，我們還必須繼續努力提高「${subjectName.value}素養」。良好的${courseName.value}課程，對於提昇「${subjectName.value}素養」實大有益處。
	四、 臺大學生會認為大多數學生對文言與古代文化沒興趣，對「${subjectName.value}」較有興趣但未必修得到，並希望學習較具實用價值與專業取向的${courseName.value}。然而上述文化的深度、內涵、美感，以及${subjectName.value}思考的深度，絕不能僅依賴實用、專業取向的寫作課程，也不能限於${courseName.value}，而同時甚至更多地需要依靠${subjectName.value}，因為後者擁有極豐富而深刻的文化內涵。
	五、 學生與一些評論人士主張併${courseName.value}教育入通識課程，成為通識課程中的一種，由學生自由選修，以符合多元化與自主化的國際趨勢。然而這樣做，並無法真正解決上述的問題。建議維持${courseName.value}必修，以繼續提昇大學生的語文與文化素養，但不必限於${departmentName.value}開授，而可納入各系所願意及可以開設的${subjectName.value}課程，以增加其多元性。與此同時，${courseName.value}的內部也確實應增加多樣性、思辨性及批判論述能力，並加強與現當代${subjectName.value}的對話，以配合時代需求。
	六、 民主與自由選擇很重要，但不是一切。學校課程的結構，基本上還是專家本於專業所設計出來的。上述所言，是一種${subjectName.value}專業的看法，尚請深入考量。
	`
}

window.addEventListener("load", function () { // on page load
	updateResult();

});

inputContainer.addEventListener("input", function (e) { // passing the event
	updateResult();
});