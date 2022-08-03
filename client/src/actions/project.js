import ActionTypes from '../constants/ActionTypes';

export const createProject = (data) => ({
  type: ActionTypes.PROJECT_CREATE,
  payload: {
    data,
  },
});

createProject.success = (project, projectManagers) => ({
  type: ActionTypes.PROJECT_CREATE__SUCCESS,
  payload: {
    project,
    projectManagers,
  },
});

createProject.failure = (error) => ({
  type: ActionTypes.PROJECT_CREATE__FAILURE,
  payload: {
    error,
  },
});

export const handleProjectCreate = (project, users, projectManagers, boards, boardMemberships) => ({
  type: ActionTypes.PROJECT_CREATE_HANDLE,
  payload: {
    project,
    users,
    projectManagers,
    boards,
    boardMemberships,
  },
});

export const updateProject = (id, data) => ({
  type: ActionTypes.PROJECT_UPDATE,
  payload: {
    id,
    data,
  },
});

updateProject.success = (project) => ({
  type: ActionTypes.PROJECT_UPDATE__SUCCESS,
  payload: {
    project,
  },
});

updateProject.failure = (id, error) => ({
  type: ActionTypes.PROJECT_UPDATE__FAILURE,
  payload: {
    id,
    error,
  },
});

export const handleProjectUpdate = (project) => ({
  type: ActionTypes.PROJECT_UPDATE_HANDLE,
  payload: {
    project,
  },
});

export const updateProjectBackgroundImage = (id) => ({
  type: ActionTypes.PROJECT_BACKGROUND_IMAGE_UPDATE,
  payload: {
    id,
  },
});

updateProjectBackgroundImage.success = (project) => ({
  type: ActionTypes.PROJECT_BACKGROUND_IMAGE_UPDATE__SUCCESS,
  payload: {
    project,
  },
});

updateProjectBackgroundImage.failure = (id, error) => ({
  type: ActionTypes.PROJECT_BACKGROUND_IMAGE_UPDATE__FAILURE,
  payload: {
    id,
    error,
  },
});

export const deleteProject = (id) => ({
  type: ActionTypes.PROJECT_DELETE,
  payload: {
    id,
  },
});

deleteProject.success = (project) => ({
  type: ActionTypes.PROJECT_DELETE__SUCCESS,
  payload: {
    project,
  },
});

deleteProject.failure = (id, error) => ({
  type: ActionTypes.PROJECT_DELETE__FAILURE,
  payload: {
    id,
    error,
  },
});

export const handleProjectDelete = (project) => ({
  type: ActionTypes.PROJECT_DELETE_HANDLE,
  payload: {
    project,
  },
});
