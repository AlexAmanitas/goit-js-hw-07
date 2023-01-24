import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const instanceOptions = {
  onShow: instance => {
    document.onkeydown = event => {
      if (event.code === 'Escape') instance.close();
    };
  },
};

galleryRef.insertAdjacentHTML('afterbegin', greateMarcup(galleryItems));

galleryRef.addEventListener('click', onImageClick);

function greateMarcup(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  imageOpenClose(event);
}

function imageOpenClose(evt) {
  const instance = basicLightbox.create(
    `
	<img class= "original-img" src = '${evt.target.dataset.source}' width = '1280'>`,
    instanceOptions
  );
  instance.show();
}

function calculateTeamFinanceReport(salaries, team) {
  const report = { totalBudgetTeam: 0 };
  const specialityAndSalary = {};
  const specialist = Object.keys(salaries);
  const salary = Object.values(salaries);
  const salaryWithTax = (salary, tax) =>
    Math.round(salary / (1 - Number.parseInt(tax) / 100));
  specialist.map(
    (el, index) => (specialityAndSalary[`${el}`] = salary[index].salary)
  );
  const amount = team.reduce((acc, el) => {
    return typeof acc[el.specialization] !== 'undefined'
      ? { ...acc, [el.specialization]: acc[el.specialization] + 1 }
      : { ...acc, [el.specialization]: 1 };
  }, {});
  let sum = 0;
  for (let speciality in specialityAndSalary) {
    report[`totalBudget${speciality}`] =
      salaryWithTax(specialityAndSalary[speciality], salaries[speciality].tax) *
      amount[speciality];
    sum += report[`totalBudget${speciality}`];
  }
  report['totalBudgetTeam'] = sum;
  return report;
}

// function calculateTeamFinanceReport1(salaries, team) {
//   const ref = team.reduce((acc, el) => {
//     console.log(salaries[el.specialization]);
//     if (el.specialization in salaries)
//       return typeof acc[el.specialization] !== 'undefined'
//         ? {
//             ...acc,
//             [el.specialization]:
//               salaries[el.specialization].salary +
//               salaries[el.specialization].salary,
//           }
//         : { ...acc, [el.specialization]: salaries[el.specialization].salary };

//     console.log(acc);
//   }, {});

//   console.log(ref);
// }

const salaries1 = {
  Manager: { salary: 1000, tax: '10%' },
  Designer: { salary: 600, tax: '30%' },
  Artist: { salary: 1500, tax: '15%' },
};
const team1 = [
  { name: 'Max', specialization: 'Designer' },
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
];
const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: '99%' },
  Architect: { salary: 9000, tax: '34%' },
};
const team2 = [
  { name: 'Alexander', specialization: 'TeamLead' },
  { name: 'Gaudi', specialization: 'Architect' },
  { name: 'Koolhas', specialization: 'Architect' },
  { name: 'Foster', specialization: 'Architect' },
  { name: 'Napoleon', specialization: 'General' },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
