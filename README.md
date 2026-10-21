const defaultPlan = [
  'Check tire pressure and tread condition',
  'Inspect engine oil and coolant levels',
  'Test headlights, brake lights, and turn signals',
  'Replace or clean windshield wipers',
  'Check battery terminals and charge health',
  'Review brake fluid and washer fluid',
  'Vacuum cabin and inspect floor mats',
  'Verify emergency kit and first-aid supplies',
  'Look for leaks under the vehicle',
  'Set a route plan and final safety check'
];

const state = {
  tasks: JSON.parse(localStorage.getItem('cartendayapp-plan')) || defaultPlan.map((task) => ({ task, checked: false })),
  vehicle: JSON.parse(localStorage.getItem('cartendayapp-vehicle')) || {
    make: 'Toyota',
    model: 'Corolla',
    mileage: 12500,
    serviceDate: '2026-10-30'
  }
};

const vehicleName = document.getElementById('vehicleName');
const vehicleSummary = document.getElementById('vehicleSummary');
const taskList = document.getElementById('taskList');
const daysLeft = document.getElementById('daysLeft');
const tasksDone = document.getElementById('tasksDone');
const progressValue = document.getElementById('progressValue');
const resetButton = document.getElementById('resetButton');
const toggleAllButton = document.getElementById('toggleAllButton');
const vehicleForm = document.getElementById('vehicleForm');

function savePlan() {
  localStorage.setItem('cartendayapp-plan', JSON.stringify(state.tasks));
}

function saveVehicle() {
  localStorage.setItem('cartendayapp-vehicle', JSON.stringify(state.vehicle));
}

function renderVehicle() {
  const { make, model, mileage, serviceDate } = state.vehicle;
  vehicleName.textContent = `${make} ${model}`;
  vehicleSummary.textContent = `Mileage: ${Number(mileage).toLocaleString()} • Service due: ${serviceDate || 'not set'} • 10-day readiness review.`;

  document.getElementById('makeInput').value = make;
  document.getElementById('modelInput').value = model;
  document.getElementById('mileageInput').value = mileage;
  document.getElementById('serviceInput').value = serviceDate;
}

function renderTasks() {
  taskList.innerHTML = '';

  state.tasks.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = `task-item ${item.checked ? 'completed' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.checked;
    checkbox.setAttribute('aria-label', `Mark task ${index + 1} complete`);
    checkbox.addEventListener('change', () => {
      state.tasks[index].checked = checkbox.checked;
      savePlan();
      renderTasks();
    });

    const label = document.createElement('label');
    label.className = 'task-label';
    label.textContent = item.task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
  });

  const completedCount = state.tasks.filter((item) => item.checked).length;
  const totalCount = state.tasks.length;
  daysLeft.textContent = String(Math.max(0, totalCount - completedCount));
  tasksDone.textContent = String(completedCount);
  progressValue.textContent = `${Math.round((completedCount / totalCount) * 100)}%`;

  toggleAllButton.textContent = completedCount === totalCount ? 'Reset all tasks' : 'Mark all complete';
}

function resetPlan() {
  state.tasks = defaultPlan.map((task) => ({ task, checked: false }));
  savePlan();
  renderTasks();
}

vehicleForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.vehicle = {
    make: document.getElementById('makeInput').value || 'Toyota',
    model: document.getElementById('modelInput').value || 'Corolla',
    mileage: Number(document.getElementById('mileageInput').value || 0),
    serviceDate: document.getElementById('serviceInput').value || ''
  };

  saveVehicle();
  renderVehicle();
});

resetButton.addEventListener('click', resetPlan);
toggleAllButton.addEventListener('click', () => {
  const shouldComplete = state.tasks.some((item) => !item.checked);
  state.tasks = state.tasks.map((item) => ({ ...item, checked: shouldComplete }));
  savePlan();
  renderTasks();
});

renderVehicle();
renderTasks();
