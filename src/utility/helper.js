import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

export const baseURL = "https://fast-taiga-04604.herokuapp.com/api"