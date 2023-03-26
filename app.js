//psudo code
// 1. load data 
// 2. form functions
// 3. return results in circles
// 4. adding scroll magic
// 5. adding summaries 

//**<-----------------Making Population clock section------------------------------->**

//making the population clock ** note that we will be adding manually due to the unavailabl access to world population API 
//according to UN, The 2021 average of 18.1 births per 1,000 total population equates to approximately 4.3 births per second or about 259 births per minute for the world.

// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

const arrayBirth = [1,2,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5];

const randBirth = getRandomItem(arrayBirth);

let populationClock = 0 ;

// making the poppulation count

window.setInterval(function(){
  populationClock = populationClock + randBirth;
  document.getElementById('population_count').innerHTML = '+' + populationClock;
},1000);

// making the elapsedtime count
let sec = -1;

function pad(val){ 
  return val > 9 ? val :  val; 
}

window.setInterval(function () {
  document.getElementById('seconds').innerHTML = pad(++sec % 60) + ' seconds';
  if(pad(parseInt(sec / 60, 10) % 60)  != 0){
  document.getElementById('minutes').innerHTML = pad(parseInt(sec / 60, 10) % 60) +' minutes '
  };
}, 1000);


// function to get average value
const average = array => array.reduce((a, b) => a + b) / array.length;


//**<-----------------Loading Data Section ------------------------------->**

let countryList = [];
/*global fetch*/ 
/*global Request*/ 


const requestURL = 'https://raw.githubusercontent.com/Chayanitoey/MajorStudio1_Interactive/main/data/population.json';
const request = new Request(requestURL);
const response = await fetch(request);
const data = await response.json();


///Note on data IndicatorName

//3rd viz : When you become + 20 yearsold, it is expected that only x% of COUNTRY population is the working-age. 
//Array 0 => "Age dependency ratio (% of working-age population)"

//1st viz : you were one of the X babies that were born in YEAR in COUNTRY. 
//Array 1 => "Age population, age 00, female, interpolated"
//Array 2 => Age population, age 00, male, interpolated

//2nd viz: In the year that you were born, it was expected that you would have x siblings.
//Array 3 => "Fertility rate, total (births per woman)"

//4th viz: life expectancy string -- and calculating how much time you have left in the world in hh:mm:ss 
//Array 4 => "Life expectancy at birth, female (years)"
//Array 5 => "Life expectancy at birth, male (years)"

//summarization section ** will only take selected country into action

//small multiples of rectangle??  consists of 2 components ?? --> applied from stackbarchart 
//Array 6 => "Population, female (% of total population)"
//Array 7 => "Population, male (% of total population)"
//Array 8 => "Population, total"

// visualization line graph : 2 series 
//Array 9 => "Rural population (% of total population)"
//Array10 => "Urban population (% of total population)"



//test calling Age dependency ratio (% of working-age population) in '1960'
// console.log((data['Afghanistan'])[0]['1960'])

countryList.push(Object.keys(data))

// console.log(countryList[0].length)

for ( let i = 0; i < countryList[0].length; i++){
  let tag = document.createElement("p");
  tag.setAttribute('countryId', countryList[0][i]);
  let text = document.createTextNode(countryList[0][i]);
  tag.appendChild(text);
  let element = document.getElementById("countryList");
  element.appendChild(tag);
  
  //test calling all the data of all countries
  // console.log(data[countryList[0][i]])
  
  //test calling all the population data of all countries
  // console.log((data[countryList[0][i]])[8])

}

//**<-----------------Making Dropdown Field Section ------------------------------->**

// making dropdown menu

const initpXDropdown = () => {
  const dropdownList = document.querySelectorAll(".px-dropdown");
  window.addEventListener("click", () => {
    dropdownList.forEach((item) => {
      item.classList.remove("active");
    });
  });
  dropdownList.forEach((item) => {
    const dropdownValue = item.querySelector("#country_px-dropdown-value");
    const dropdownInput = item.querySelector(".px-dropdown-input");
    const dropdownPanelOptions = item.querySelectorAll("#countryList p");
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    dropdownPanelOptions.forEach((item) => {
      item.addEventListener("click", (event) => {
        dropdownInput.querySelector("input").value = event.target.innerHTML;
        dropdownValue.value = event.target.getAttribute("countryId");
      });
    });
  });
};

initpXDropdown();

const initpXDropdown2 = () => {
  const dropdownList = document.querySelectorAll(".px-dropdown2");
  window.addEventListener("click", () => {
    dropdownList.forEach((item) => {
      item.classList.remove("active");
    });
  });
  dropdownList.forEach((item) => {
    // const dropdownValue = item.querySelector("#yearOfBirth_px-dropdown-value");
    const dropdownInput = item.querySelector(".px-dropdown-input");
    // const dropdownPanelOptions = item.querySelectorAll("#countryList p");
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    // dropdownPanelOptions.forEach((item) => {
    //   item.addEventListener("click", (event) => {
    //     // dropdownInput.querySelector("input").value = event.target.innerHTML;
    //     dropdownValue.value = event.target.getAttribute("countryId");
    //   });
    // });
  });
};

initpXDropdown2();

const initpXDropdown3 = () => {
  const dropdownList3 = document.querySelectorAll(".px-dropdown3");
  window.addEventListener("click", () => {
    dropdownList3.forEach((item) => {
      item.classList.remove("active");
    });
  });
  dropdownList3.forEach((item) => {
    const dropdownValue = item.querySelector("#gender_px-dropdown-value");
    const dropdownInput = item.querySelector(".px-dropdown-input");
    const dropdownPanelOptions = item.querySelectorAll("#genderList p");
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    dropdownPanelOptions.forEach((item) => {
      item.addEventListener("click", (event) => {
        dropdownInput.querySelector("input").value = event.target.innerHTML;
        dropdownValue.value = event.target.getAttribute("genderId");
      });
    });
  });
};

initpXDropdown3();

const initpXDropdown4 = () => {
  const dropdownList4 = document.querySelectorAll(".px-dropdown4");
  window.addEventListener("click", () => {
    dropdownList4.forEach((item) => {
      item.classList.remove("active");
    });
  });
  dropdownList4.forEach((item) => {
    const dropdownValue = item.querySelector("#urbanRural_px-dropdown-value");
    const dropdownInput = item.querySelector(".px-dropdown-input");
    const dropdownPanelOptions = item.querySelectorAll("#urbanRuralList p");
    dropdownInput.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
    });
    dropdownPanelOptions.forEach((item) => {
      item.addEventListener("click", (event) => {
        dropdownInput.querySelector("input").value = event.target.innerHTML;
        dropdownValue.value = event.target.getAttribute("urbanRural_id");
      });
    });
  });
};

initpXDropdown4();


//**<-----------------Button Functions ------------------------------->**
document.getElementById("getResultButton").addEventListener("click", getResult);

let siblingResult = [];
let ageDependencyResult = [];
let age = 0;
let country = [];
let gender = [];
let year = 0;
let area = [];
let popBirth = 0;
let fertilityRate = 0;
let lifeExpectancy = 0;


let desc = document.getElementById('desc');


function getResult(){
  
let selectedCountry = document.getElementById('country_px-dropdown-value').value;
let selectedGender = document.getElementById('gender_px-dropdown-value').value;
let selectedYear = document.getElementById('yearInput').value;
let selectedArea = document.getElementById('urbanRural_px-dropdown-value').value;
let resultPopBirth = document.getElementById('desc');
let firstFactResult = document.getElementById('firstFact');

let currentYear =  new Date().getFullYear();
age = currentYear - selectedYear;
popBirth = resultPopBirth;

siblingResult.push( Math.round(((data[selectedCountry])[3][selectedYear] - 1 )* 100) / 100);
ageDependencyResult.push(Math.round(((data[selectedCountry])[0][(currentYear + 20)])* 100) / 100);
country.push(selectedCountry);
gender.push(selectedGender);
year = selectedYear;


//if urban is selected
if(selectedArea == 'urban'){
  let urbanPop = (data[country[0]][10])[selectedYear];
  console.log((data[country[0]])[10])
  console.log((data[country[0]][10])[selectedYear])

  let futureUrban = (data[country[0]][10])['2050'];
  firstFactResult.innerHTML = 
  'About ' + urbanPop + '% of the population lives in urban areas when you were born...' + '\n' +'In the next 30 years, ' + futureUrban + '% of population will remain in urban areas.';
}

//if rural is selected
if(selectedArea == 'rural'){
  let ruralPop = (data[country[0]])[9][selectedYear];
  let futureRural = (data[country[0]])[9]['2050'];
  console.log((data[country[0]])[9])
  firstFactResult.innerHTML = 
  'About '+ruralPop + '% of the population lives in rural areas when you were born... \n In the next 30 years, ' + futureRural +  '% of population will remain in rural areas.';
}

//if gender is female 
if(gender[0] == 'female'){
  let number = ((data[country[0]])[1][year]).toLocaleString("en-US")
  desc.innerHTML = 'You were born in ' +year+' along with ' + number +' baby girls in ' + country[0];
  drawPop(number)
}
//if gender is male 
if( gender[0] == 'male'){
let number = ((data[country[0]])[2][year]).toLocaleString("en-US")
desc.innerHTML = 'You were born in ' +year+' along with ' + number +' baby boys in ' + country[0];
drawPop(number)
}
//if gender is non-binary 
if( gender[0] == 'nonBinary'){
let number = ((data[country[0]])[1][year] + (data[country[0]])[2][year]).toLocaleString("en-US");
desc.innerHTML = 'You are expected to live up to ' + number + ' yearsold ( which is ' +  ' left.)';
drawPop(number)
}

}


document.getElementById("firstButton").onclick=function(){ 

//if gender is female 
if(gender[0] == 'female'){
  let number = ((data[country[0]])[1][year]).toLocaleString("en-US")
  desc.innerHTML = 'You were born in ' +year+' along with ' + number +' baby girls in ' + country[0]+ '.';
  drawPop(number)
}
//if gender is male 
if( gender[0] == 'male'){
let number = ((data[country[0]])[2][year]).toLocaleString("en-US")
desc.innerHTML = 'You were born in ' +year+' along with ' + number +' baby boys in ' + country[0]+ '.';
drawPop(number)
}
//if gender is non-binary 
if( gender[0] == 'nonBinary'){
let number = ((data[country[0]])[1][year] + (data[country[0]])[2][year]).toLocaleString("en-US");
desc.innerHTML = 'You were born in ' +year+' along with ' + number +' babies in ' + country[0]+ '.';
drawPop(number)
}


};

document.getElementById("siblingButton").onclick=function(){ 
  desc.innerHTML = 'In the year that you were born, it was expected that you would have ' + siblingResult[0] + ' siblings.';
  drawSibling(siblingResult[0]);
};

document.getElementById("ageDependencyButton").onclick=function(){ 
  desc.innerHTML = 'When you become ' + (age +20) + ' yearsold, it is expected that ' + ageDependencyResult[0] + '% of ' + ' population is depending on working-age population in ' + country[0] ;
  drawNext20Years(ageDependencyResult[0],age,country[0].toUpperCase());
};

document.getElementById("timeLeftButton").onclick=function(){ 

  if(gender[0] =='female'){
  let timeClock = findTime( 60 * 60 * 24 * 365 * ((data[country[0]])[4][year] - age));
  let yearLeft  = timeClock['year'];
  let dayLeft  = timeClock['day'];
  let hourLeft  = timeClock['hour'];
  let minuteLeft = timeClock['minute'];
  let secondLeft = timeClock['second'];
    desc.innerHTML = 'According to our life expectancy data, you are expected to live up to ' + (data[country[0]])[4][year] + ' yearsold ( which is ' + yearLeft + ' years,' +dayLeft + ' days, '+ hourLeft + ' hours and ' + secondLeft.toFixed() + ' seconds left.)';
    drawLifeExpectency(yearLeft,dayLeft,hourLeft,minuteLeft,secondLeft.toFixed());
  }
    if(gender[0] =='male'){
    let timeClock = findTime( 60 * 60 * 24 * 365 * ((data[country[0]])[5][year] - age));
    let yearLeft  = timeClock['year'];
    let dayLeft  = timeClock['day'];
    let hourLeft  = timeClock['hour'];
    let minuteLeft = timeClock['minute'];
    let secondLeft = timeClock['second'];
    desc.innerHTML = 
    'According to our life expectancy data, you are expected to live up to ' + (data[country[0]])[5][year] + ' yearsold ( which is ' + yearLeft + ' years,' +dayLeft + ' days, '+ hourLeft + ' hours and ' + secondLeft.toFixed() + ' seconds left.)';
    drawLifeExpectency(yearLeft,dayLeft,hourLeft,minuteLeft,secondLeft.toFixed());
  }
    if(gender[0] =='nonBinary'){
    let nonBinaryArr = [];
    nonBinaryArr.push((data[country[0]])[5][year] - age);
    nonBinaryArr.push((data[country[0]])[4][year] - age);
    let timeClock = findTime( 60 * 60 * 24 * 365 * average(nonBinaryArr));
    let yearLeft  = timeClock['year'];
    let dayLeft  = timeClock['day'];
    let hourLeft  = timeClock['hour'];
    let minuteLeft = timeClock['minute'];
    let secondLeft = timeClock['second'];
    desc.innerHTML = 'According to our life expectancy data, you are expected to live up to ' + average(nonBinaryArr) + ' yearsold ( which is ' + yearLeft + ' years,' +dayLeft + ' days, '+ hourLeft + ' hours and ' + secondLeft.toFixed() + ' seconds left.)';
    drawLifeExpectency(yearLeft,dayLeft,hourLeft,minuteLeft,secondLeft.toFixed());

  }
  
};






//this function is for viz #4 - we are converting years into seconds to calculate remaining time on earth. 
const findTime = (num) => {
   if(num < 1){
      return '0'
   };
   const qualifier = num => (num > 1 ? 's' : '')
   const numToStr = (num, unit) => num > 0 ? ` ${num}
   ${unit}${qualifier(num)}` : ''
   const oneMinute = 60;
   const oneHour = oneMinute * 60;
   const oneDay = oneHour * 24;
   const oneYear = oneDay * 365;
   const times = {
      year: ~~(num / oneYear),
      day: ~~((num % oneYear) / oneDay),
      hour: ~~((num % oneDay) / oneHour),
      minute: ~~((num % oneHour) / oneMinute),
      second: num % oneMinute,
   };
  // let str = '';
  // for (let [key, value] of Object.entries(times)) {
  //     str += numToStr(times[key], key)
  // }
  // console.log(times['year'])
  // const arr = str.trim().split(' ')
  // const res = []
  // arr.forEach((x, i) => {
  //     // if (i % 2 === 0 && i !== 0) res.push(i === arr.length - 2 ? 'and' : ',')
  //     res.push(x)
  // })
  // return res.join(' ').replace(/\s,/g, ',')
  return times;
}




//**<-----------------Adding Progress Scroll Bar ------------------------------->**

//adding progress scroll bar 
function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

let w = window.innerWidth;
let h = window.innerHeight;
//d3 create circles




//*<-----------------adding the stat big number animation --------------->*
// const target = document.querySelector('#pop_atBirth');
// const results = Splitting({ target: target, by: 'words' });

//**<-----------------Adding D3 charts ------------------------------->**

d3
  .select("#chart")
  .selectAll('circle')
  .data('40')
  .join('circle')
  .attr('cx', w/2)
  .attr('cy', h/2)
  .attr('r', 300)
  // .attr('r', function(d) {
  //   return 50 * d;
  // })
  .style('fill', 'orange');
  
  


  // .attr('r', function(d) {
  //   return 50 * d;
  // })

//scroll magic
/*global ScrollMagic*/

	var controller = new ScrollMagic.Controller();


		// build scene
	  new ScrollMagic.Scene({
							triggerElement: "#trigger1", offset: 10
						})
						.setTween("#animate1", 2, { scale : 1.5}) // trigger a TweenMax.to tween
						.addTo(controller);
		

				
				
						
// <---------download button function------->
const downloadbutton = document.getElementById('btn-download');
const sharebuttton = document.getElementById('btn-share');
let canvas = document.getElementById('defaultCanvas0');


downloadbutton.addEventListener('click', function (e) {
    let dataURL = canvas.toDataURL('image/png');
    downloadbutton.href = dataURL;
});

sharebuttton.addEventListener('click', async () => {
  try {
    await navigator.share(canvas);
    alert('MDN shared successfully') ;
  } catch (err) {
    alert(`Error: ${err}`)
  }
});