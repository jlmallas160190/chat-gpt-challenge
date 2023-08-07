import * as yup from 'yup';

export const chatFormSchema = yup.object().shape({
  content: yup.string().min(5).max(1000).required('Campo obligatorio'),
});
