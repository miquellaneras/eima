import type { Actions } from './$types';
import type { Action } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  SMTP_TO
} from '$env/static/private';

export const actions: Actions = {
  default: (async ({ request }) => {
    const data = await request.formData();

    const company = data.get('company');
    if (typeof company === 'string' && company.trim() !== '') {
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }

    const website = data.get('website');
    if (typeof website === 'string' && website.trim() !== '') {
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }

    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const message = data.get('message');
    const location = data.get('location');

    if (!email || typeof email !== 'string' || !email.trim()) {
      return { success: false, error: 'Email requerido' };
    }
    if (!name || typeof name !== 'string' || !name.trim()) {
      return { success: false, error: 'Nombre requerido' };
    }

    const nameStr = name.trim();
    const phoneStr = typeof phone === 'string' && phone.trim() ? phone.trim() : '(no indicado)';
    const locationStr =
      typeof location === 'string' && location.trim() ? location.trim() : '(no indicada)';
    const messageStr = typeof message === 'string' ? message.trim() : '';

    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: true,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: SMTP_FROM,
        to: SMTP_TO,
        subject: 'Nuevo contacto - EIMA Fisioterapia',
        text: `Nombre: ${nameStr}\nEmail: ${email}\nTeléfono: ${phoneStr}\nLocalidad: ${locationStr}\n\nMensaje:\n${messageStr}`,
        html: `<p><strong>Nombre:</strong> ${nameStr}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Teléfono:</strong> ${phoneStr}</p>
<p><strong>Localidad:</strong> ${locationStr}</p>
<p><strong>Mensaje:</strong></p>
<p>${messageStr.replace(/\n/g, '<br/>')}</p>`
      });

      return { success: true };
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      return { success: false, error: 'Error interno del servidor' };
    }
  }) satisfies Action
};
