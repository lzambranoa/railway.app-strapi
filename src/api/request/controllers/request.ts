/**
 * request controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::request.request', ({ strapi }) => ({
  async sendRequest(ctx) {
    try {
      const { name, email, message, subject, phone, acceptTerms} = ctx.request.body;

      // Guarda los datos en la base de datos
      await strapi.entityService.create('api::request.request', {
        data: { name, email, message, subject, phone, acceptTerms },
      });

      // Envía el correo
      await strapi.plugins['email'].services.email.send({
        to: 'info@ecopartyproducciones.com',
        subject: 'Nueva solicitud de información',
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}\nSubject: ${subject}\nPhone: ${phone}\nacceptTerms: ${acceptTerms}`,
      });

      ctx.send({ message: 'Solicitud enviada exitosamente.' });
    } catch (error) {
      ctx.throw(500, 'Hubo un error al procesar la solicitud');
    }
  },
}));

