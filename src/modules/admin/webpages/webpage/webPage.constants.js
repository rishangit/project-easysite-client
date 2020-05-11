import * as Yup from 'yup';

const model = {
  name: '',
  url: '',
  contentIdList: [],
};
const validation = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  url: Yup.string().required('Url is required'),
});

export { validation, model };
