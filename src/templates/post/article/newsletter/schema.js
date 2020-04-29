export default {
  fields: [
    {
      type: 'text',
      name: 'FNAME',
      placeholder: 'Seu nome',
      validations: 'isRequired'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'seu.email.mais@top.com',
      validations: 'isEmail'
    },
  ],
  submit: 'Assinar'
};
