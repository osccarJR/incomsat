from datetime import datetime
from email.message import EmailMessage
from html import escape
import os
import smtplib

from flask_smorest import Blueprint, abort

from schemas.mail_schema import MailSchema

mail_bp = Blueprint("mail", __name__, url_prefix="/api", description="Endpoints para envio de correos")

# SMTP config
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
MAIL_SENDER = os.getenv("MAIL_SENDER", EMAIL_ADDRESS)
MAIL_RECIPIENT = os.getenv("MAIL_RECIPIENT", "haylandsebastian5@gmail.com")


@mail_bp.route("/send-email", methods=["POST"])
@mail_bp.arguments(MailSchema)
@mail_bp.response(200, description="Correo enviado correctamente")
def send_email(data):
    """Enviar correo de contacto INCOMSAT."""

    nombre = (data.get("nombre") or "").strip()
    empresa = (data.get("empresa") or "").strip()
    cargo = (data.get("cargo") or "").strip() or "No especificado"
    telefono = (data.get("telefono") or "").strip()
    email = (data.get("email") or "").strip()
    servicio = (data.get("servicio") or "").strip()
    mensaje = (data.get("mensaje") or "").strip()
    diagnostico = bool(data.get("diagnostico", False))

    current_year = datetime.now().year
    diagnostico_text = "Si, solicita diagnostico inicial gratuito" if diagnostico else "No"

    try:
        msg = EmailMessage()
        msg["Subject"] = f"INCOMSAT | Nueva solicitud de contacto - {nombre}"
        msg["From"] = MAIL_SENDER
        msg["To"] = MAIL_RECIPIENT

        msg.set_content(
            f"""
Nueva solicitud recibida desde la web de INCOMSAT

Nombre: {nombre}
Empresa: {empresa}
Cargo: {cargo}
Telefono: {telefono}
Email: {email}
Servicio de interes: {servicio}
Diagnostico inicial gratuito: {diagnostico_text}

Mensaje: {mensaje}

Notificacion automatica - INCOMSAT
"""
        )

        nombre_html = escape(nombre)
        empresa_html = escape(empresa)
        cargo_html = escape(cargo)
        telefono_html = escape(telefono)
        email_html = escape(email)
        servicio_html = escape(servicio)
        mensaje_html = escape(mensaje).replace("\n", "<br>")
        diagnostico_html = diagnostico_text

        msg.add_alternative(
            f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INCOMSAT - Nueva solicitud de contacto</title>
</head>
<body style="margin:0; padding:0; background-color:#eef3f8; font-family:Segoe UI, Arial, Helvetica, sans-serif;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px; margin:28px auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(2, 6, 23, 0.18);">
        <tr>
            <td style="background:linear-gradient(135deg,#0f172a,#0f3a73,#0e7490); padding:28px 30px; text-align:left;">
                <h1 style="margin:0; color:#ffffff; font-size:26px; font-weight:800; letter-spacing:0.2px;">Nueva solicitud de contacto</h1>
                <p style="margin:10px 0 0; color:#dbeafe; font-size:14px;">Formulario web de INCOMSAT</p>
            </td>
        </tr>
        <tr>
            <td style="padding:28px 30px 16px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0;">
                    <tr>
                        <td width="40%" style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; font-size:13px; color:#475569; font-weight:600; border-radius:10px 0 0 0;">Nombre</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-left:none; font-size:14px; color:#0f172a; font-weight:600; border-radius:0 10px 0 0;">{nombre_html}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; font-size:13px; color:#475569; font-weight:600;">Empresa</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; font-size:14px; color:#0f172a;">{empresa_html}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; font-size:13px; color:#475569; font-weight:600;">Cargo</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; font-size:14px; color:#0f172a;">{cargo_html}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; font-size:13px; color:#475569; font-weight:600;">Telefono</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; font-size:14px; color:#0f172a;">
                            <a href="tel:{telefono_html}" style="color:#0f172a; text-decoration:none;">{telefono_html}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; font-size:13px; color:#475569; font-weight:600;">Email</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; font-size:14px; color:#0f172a;">
                            <a href="mailto:{email_html}" style="color:#0e7490; text-decoration:none;">{email_html}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; font-size:13px; color:#475569; font-weight:600;">Servicio de interes</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; font-size:14px; color:#0f172a;">{servicio_html}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px 14px; background-color:#f8fafc; border:1px solid #e2e8f0; border-top:none; border-radius:0 0 0 10px; font-size:13px; color:#475569; font-weight:600;">Diagnostico inicial gratuito</td>
                        <td style="padding:12px 14px; background-color:#ffffff; border:1px solid #e2e8f0; border-top:none; border-left:none; border-radius:0 0 10px 0; font-size:14px; color:#0f172a; font-weight:600;">{diagnostico_html}</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding:0 30px 30px;">
                <div style="padding:16px 18px; border:1px solid #dbeafe; border-radius:12px; background-color:#f8fbff;">
                    <p style="margin:0 0 8px; color:#0f3a73; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.4px;">Mensaje / Requerimiento</p>
                    <p style="margin:0; color:#1e293b; font-size:14px; line-height:1.7;">{mensaje_html}</p>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding:18px 30px 24px; background-color:#f8fafc; border-top:1px solid #e2e8f0;">
                <p style="margin:0; color:#64748b; font-size:12px; text-align:center;">
                    Mensaje enviado desde el formulario de contacto de
                    <a href="https://incomsat.net" style="color:#0e7490; text-decoration:none;"> incomsat.net</a>
                </p>
                <p style="margin:8px 0 0; color:#94a3b8; font-size:12px; text-align:center;">
                    &copy; {current_year} INCOMSAT - Information Technology Services
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
            """,
            subtype="html",
        )

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as smtp:
            smtp.starttls()
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        return {"success": True, "message": "Correo enviado correctamente"}
    except Exception as e:
        print("Error al enviar correo:", repr(e))
        abort(500, message=f"No se pudo enviar el correo: {str(e)}")
