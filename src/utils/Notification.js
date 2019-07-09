import { toast } from 'react-toastify';

export const Notification = {
  success: () => {
    toast.success('Favorites saved', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  },
  favoriteIsMandatory: () => {
    toast.warn('You must select at least one favorite!', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  },
  somethingWrong: () => {
    toast.error('Something wrong happened! Try again', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  },
};
