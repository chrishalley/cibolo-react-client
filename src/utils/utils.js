import { permissions } from '../core/constants';

export const monthIndexToString = index => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[index]
}

export const currentUserCanEdit = (currentUser, userResource) => currentUser.role === permissions.SUPER_ADMIN || currentUser._id === userResource._id

export const urlQueryParams = (queryString) => {
  let obj = {};
  queryString.slice(1) // Remove initial ?
    .split('&') // Split query pairs
    .forEach(queryPair => { // Assign to keyed object
      const [key, value = 'true'] = queryPair.split('=')
      obj[key] = value
    })
  return obj;
}

export const formValues = (formState) => {
  let update = {};
  Object.keys(formState).forEach(key => {
    update[key] = formState[key].value
  });
  return update;
};