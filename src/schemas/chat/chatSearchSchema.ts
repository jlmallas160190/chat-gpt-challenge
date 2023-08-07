import * as yup from 'yup';

export const chatSearchSchema = yup.object().shape({
  search: yup.string().min(5).max(100).required('Campo obligatorio'),
});
