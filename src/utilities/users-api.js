// * The users-service.js module will definitely need to make AJAX requests to the Express server.
import { getToken } from "./users-service";

const BASE_URL = '/api/users';

//* SignUp
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

//* Login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

//* Check Token
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

//* Create Workout
export function createWorkout(workoutData) {
  return sendRequest(`${BASE_URL}/workouts`, 'POST', workoutData);
}

//* Create Training Plan
export function createTrainingPlan(planData) {
  return sendRequest(`${BASE_URL}/trainingPlans`, 'POST', planData);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
