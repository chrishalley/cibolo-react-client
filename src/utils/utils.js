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