interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // email configured on aws SES
      email: 'mail@gobarber.com.br',
      name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
