// API Configuration
// This file centralizes all API endpoints for easy environment switching

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/login`,
  LOGOUT: `${API_BASE_URL}/logout`,
  REGISTER: `${API_BASE_URL}/register`,
  
  // Profile
  VIEW_PROFILE: `${API_BASE_URL}/viewProfile`,
  UPDATE_PROFILE: `${API_BASE_URL}/updateProfile`,
  RESET_PASSWORD: `${API_BASE_URL}/resetPassword`,
  
  // HR Routes
  REGISTER_MEMBER: `${API_BASE_URL}/registerMem`,
  UPDATE_MEMBER: `${API_BASE_URL}/updateMem`,
  DELETE_MEMBER: `${API_BASE_URL}/delMem`,
  
  // Locations
  ADD_LOCATION: `${API_BASE_URL}/addLocation`,
  UPDATE_LOCATION: `${API_BASE_URL}/updateLocation`,
  DELETE_LOCATION: `${API_BASE_URL}/delLocation`,
  
  // Departments
  ADD_DEPARTMENT: `${API_BASE_URL}/addDepart`,
  UPDATE_DEPARTMENT: `${API_BASE_URL}/updateDepart`,
  DELETE_DEPARTMENT: `${API_BASE_URL}/delDepart`,
  
  // Courses
  ADD_COURSE: `${API_BASE_URL}/addCourse`,
  UPDATE_COURSE: `${API_BASE_URL}/updateCourse`,
  DELETE_COURSE: `${API_BASE_URL}/delCourse`,
  
  // Faculty/Positions
  ADD_FACULTY: `${API_BASE_URL}/addFaculty`,
  UPDATE_FACULTY: `${API_BASE_URL}/updateFaculty`,
  DELETE_FACULTY: `${API_BASE_URL}/delFaculty`,
  
  // Attendance
  VIEW_ATTENDANCE: `${API_BASE_URL}/viewattandence`,
  VIEW_MISSING_HOURS: `${API_BASE_URL}/viewAllMissingHours`,
  VIEW_MISSING_DAYS: `${API_BASE_URL}/viewAllMissingDays`,
  SIGN_IN: `${API_BASE_URL}/signIn`,
  SIGN_OUT: `${API_BASE_URL}/signOut`,
  
  // Leave Requests
  VIEW_REQUESTS: `${API_BASE_URL}/viewRequests`,
  SUBMIT_LEAVE: `${API_BASE_URL}/submitLeave`,
  ACCEPT_REQUEST: `${API_BASE_URL}/acceptRequest`,
  REJECT_REQUEST: `${API_BASE_URL}/rejectRequest`,
  
  // Additional
  UPDATE_SALARY: `${API_BASE_URL}/updateSalary`,
};

export default API_ENDPOINTS;
