from marshmallow import Schema, fields, validate

class MailSchema(Schema):
    nombre = fields.String(required=True, validate=validate.Length(min=2, max=120))
    empresa = fields.String(required=True, validate=validate.Length(min=2, max=160))
    cargo = fields.String(load_default="", validate=validate.Length(max=120))
    email = fields.Email(required=True)
    telefono = fields.String(required=True, validate=validate.Length(min=7, max=40))
    servicio = fields.String(required=True, validate=validate.Length(min=3, max=180))
    mensaje = fields.String(required=True, validate=validate.Length(min=1, max=5000))
    diagnostico = fields.Boolean(load_default=False)
