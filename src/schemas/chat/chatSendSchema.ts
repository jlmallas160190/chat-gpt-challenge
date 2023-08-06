import * as yup from 'yup';

export const chatFormSchema = yup.object().shape({
  content: yup.string().min(10).max(1000).required('Campo obligatorio'),
});
