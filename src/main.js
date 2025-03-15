document.addEventListener('DOMContentLoaded', function() {
  const currentDateElement = document.getElementById('current-date');
  const currentDayElement = document.getElementById('current-day');
  
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  currentDateElement.textContent = now.toLocaleDateString('ko-KR', options);
  currentDateElement.style.fontWeight = 'bold';
  
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  currentDayElement.textContent = days[now.getDay()];
  
  const dayMapping = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday' 
  };
  
  const mealTabs = document.querySelectorAll('.tab-btn');
  const mealContents = document.querySelectorAll('.meal-tab-content');
  
  mealTabs.forEach(tab => {
      tab.addEventListener('click', () => {
          mealTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          mealContents.forEach(content => content.classList.remove('active'));
          
          const mealId = tab.getAttribute('data-meal');
          document.getElementById(mealId).classList.add('active');
      });
  });
  
  const workoutTabs = document.querySelectorAll('.workout-tab-btn');
  const workoutContents = document.querySelectorAll('.workout-tab-content');
  
  workoutTabs.forEach(tab => {
      tab.addEventListener('click', () => {
          workoutTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          workoutContents.forEach(content => content.classList.remove('active'));
          
          const dayId = tab.getAttribute('data-day');
          document.getElementById(dayId).classList.add('active');
      });
  });
  
  if (mealTabs.length > 0) {
      mealTabs[0].click();
  }
  
  const todayDay = dayMapping[now.getDay()];
  let todayWorkoutTab = document.querySelector(`.workout-tab-btn[data-day="${todayDay}"]`);
  
  if (todayWorkoutTab) {
      todayWorkoutTab.click();
  } else if (workoutTabs.length > 0) {
      workoutTabs[0].click();
  }
});
