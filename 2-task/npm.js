const moment = require('moment'); 

expectedDate = document.getElementById('expected-date');
expectedDate.innerText = (moment().format('LLLL'));

let Chart = require('chart.js');

var Calendar = require('tui-calendar');

class schedule {
    constructor(day, task, description, success) {
        this.day = day,
            this.task = task,
            this.description = description,
            this.success = success
    }
}

let days = [];
let daysWeek = [];
let taskDay = [];

let mon = new schedule('Понедельник', 3, ['5 questions of programming', '1 written task English', '1 meeting programming'], 7);

let tues = new schedule('Вторник', 3, ['5 questions of programming', '1 listening task English', '2 video programming'], 6);

let wednes = new schedule('Среда', 4, ['1 task wiki', '1 task English', '1 practical programming'], 7);

let thurs = new schedule('Четверг', 5, ['rest of questions programming questions', '1 lesson English', '1 practical programming finish', '2 practical programming', 'tests of programming'], 9);

let fri = new schedule('Пятница', 2, ['all practical programming finish', 'tests of programming'], 5);

days.push(mon, tues, wednes, thurs, fri);

let serializedDays = JSON.stringify(days);

daysWeek.push(mon.day, tues.day, wednes.day, thurs.day, fri.day);
taskDay.push(mon.task, tues.task, wednes.task, thurs.task, fri.task);

let ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: daysWeek,
        datasets: [{
            label: 'Распределение задач по дням недели',
            data: taskDay,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let calendar = new Calendar('#calendar', {
    defaultView: 'week',
    title: "Список задач",
    taskView: true,
    scheduleView: true,
    hourStart: 0,
    hourEnd: 12,
    week: {
        daynames: ['Вс', 'Пон', 'Вт', 'Ср', 'Чтв', 'Пт', 'Суб'],
        startDayOfWeek: 0,
        narrowWeekend: false
    },
    visibleScheduleCount: 2,
    template: {

        monthDayname: function (dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        },

        calendars: [{
                id: '1',
                name: 'My Calendar',
                color: '#ffffff',
                bgColor: '#9e5fff',
                dragBgColor: '#9e5fff',
                borderColor: '#9e5fff'
            },
            {
                id: '2',
                name: 'Company',
                color: '#00a9ff',
                bgColor: '#00a9ff',
                dragBgColor: '#00a9ff',
                borderColor: '#00a9ff'
            },
        ]
    }
});


let monArr = [];

for (let i = 0; i < mon.description.length; i++) {
    monArr.push({
        id: i + 1,
        calendarId: '1',
        title: mon.description[i],
        category: 'task',
        dueDateClass: '',
        bgColor: '#ff3366',
        isAllDay: true,
        start: '2021-10-04T00:00:00+03:00'
    })
}
calendar.createSchedules(monArr);


let tuesArr = [];

for (let i = 0; i < tues.description.length; i++) {
    tuesArr.push({
        id: i + 1,
        calendarId: '1',
        title: tues.description[i],
        category: 'task',
        dueDateClass: '',
        bgColor: '#3366cc',
        isAllDay: true,
        start: '2021-10-05T00:00:00+03:00'
    })
}
calendar.createSchedules(tuesArr);


let wednesArr = [];

for (let i = 0; i < wednes.description.length; i++) {
    wednesArr.push({
        id: i + 1,
        calendarId: '1',
        title: wednes.description[i],
        category: 'task',
        dueDateClass: '',
        bgColor: '#999900',
        isAllDay: true,
        start: '2021-10-06T00:00:00+03:00'
    })
}
calendar.createSchedules(wednesArr);


let thursArr = [];

for (let i = 0; i < thurs.description.length; i++) {
    thursArr.push({
        id: i + 1,
        calendarId: '1',
        title: thurs.description[i],
        category: 'task',
        dueDateClass: '',
        bgColor: '#33cc33',
        isAllDay: true,
        start: '2021-10-07T00:00:00+03:00'
    })
}
calendar.createSchedules(thursArr);

let friArr = [];

for (let i = 0; i < fri.description.length; i++) {
    friArr.push({
        id: i + 1,
        calendarId: '1',
        title: fri.description[i],
        category: 'task',
        dueDateClass: '',
        bgColor: '#ffccff',
        isAllDay: true,
        start: '2021-10-08T00:00:00+03:00'
    })
}
calendar.createSchedules(friArr);

  calendar.createSchedules([
    {
        id: '1',
        calendarId: '1',
        title: 'Meeting',
        category: 'time',
        bgColor: '#660099',
        dueDateClass: '',
        start: '2021-10-04T20:00:00+03:00'
    },
    {
        id: '2',
        calendarId: '1',
        title: 'English lesson' ,
        category: 'time',
        bgColor: '#0066cc',
        dueDateClass: '',
        start: '2021-10-07T17:00:00+03:00'
    }])
