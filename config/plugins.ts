export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    email: {
        provider: 'nodemailer',  // Cambia según el proveedor que uses
        providerOptions: {
          host: env('SMTP_HOST', 'mail.ecopartyproducciones.com'),
          port: env('SMTP_PORT', 465),
          secure: true,
          auth: {
            user: env('SMTP_USER', 'tu-email@empresa.com'),
            pass: env('SMTP_PASS', 'tu-contraseña'),
          },
        },
        settings: {
          defaultFrom: 'info@ecopartyproducciones.com',
          defaultReplyTo: 'info@ecopartyproducciones.com',
        },
      },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
});
