import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const filterTask = keyword => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTask = data => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      data,
    },
  };
};

export const addTaskSuccess = data => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFailed = error => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};
