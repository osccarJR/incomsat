import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Mail, MapPin, Phone, CheckCircle2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    diagnostico: false,
  });

  const [enviando, setEnviando] = useState(false);

  const servicios = [
    'Consultoría y Proyectos IT / Data Center',
    'Soluciones Empresariales (ERP/BI/Ciberseguridad)',
    'Redes y Networking',
    'Sistemas Eléctricos y Respaldo',
    'Seguridad Electrónica',
    'Help Desk y Soporte',
    'Diseño y Construcción de Oficinas',
    'Equipos de Computación',
    'Otro / Consulta general',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      toast.success('Solicitud enviada', {
        description: 'Nuestro equipo se pondrá en contacto en 24-48 horas hábiles.',
      });

      setFormData({
        nombre: '',
        empresa: '',
        cargo: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        diagnostico: false,
      });
    } catch {
      toast.error('No se pudo enviar la solicitud', {
        description: 'Intente nuevamente en unos minutos.',
      });
    } finally {
      setEnviando(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      <Toaster position="top-center" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Contáctenos</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            INCOMSAT – Su socio estratégico para innovar, escalar y construir Soluciones IT
            seguras, inteligentes y sostenibles
          </p>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quito */}
            <Card className="p-8 border-2 hover:border-cyan-200 transition-all text-center">
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">QUITO</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a
                    href="mailto:info@incomsat.net"
                    className="text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    info@incomsat.net
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">+593 0999104889</span>
                </div>
              </div>
            </Card>

            {/* Guayaquil */}
            <Card className="p-8 border-2 hover:border-cyan-200 transition-all text-center">
              <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">GUAYAQUIL</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a
                    href="mailto:info@incomsat.net"
                    className="text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    info@incomsat.net
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">+593 0999104889</span>
                </div>
              </div>
            </Card>

            {/* Horario */}
            <Card className="p-8 border-2 hover:border-cyan-200 transition-all text-center">
              <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">HORARIO DE ATENCIÓN</h3>
              <div className="space-y-2 text-gray-700">
                <div>
                  <div className="font-medium">Lunes a Viernes</div>
                  <div className="text-gray-600">9:00 - 18:00</div>
                </div>
                <div>
                  <div className="font-medium">Soporte 24/7</div>
                  <div className="text-gray-600">Disponible para clientes</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Columna izquierda - Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solicite información</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Complete el formulario y nuestro equipo de especialistas se pondrá en contacto con
                usted en un plazo de 24 a 48 horas hábiles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Respuesta garantizada</div>
                    <div className="text-gray-600">Atención personalizada en menos de 48h</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Sin compromiso</div>
                    <div className="text-gray-600">Diagnóstico inicial gratuito</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Asesoría experta</div>
                    <div className="text-gray-600">Equipo con 25 años de experiencia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="lg:col-span-3">
              <Card className="p-8 border-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        placeholder="Juan Pérez"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        placeholder="Nombre de su empresa"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        value={formData.cargo}
                        onChange={(e) => handleChange('cargo', e.target.value)}
                        placeholder="Gerente de TI"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        placeholder="+593 0999104889"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="email@empresa.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servicio">Servicio de interés *</Label>
                    <Select
                      value={formData.servicio}
                      onValueChange={(value) => handleChange('servicio', value)}
                      required
                    >
                      <SelectTrigger id="servicio">
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {servicios.map((servicio, index) => (
                          <SelectItem key={index} value={servicio}>
                            {servicio}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje / Requerimiento *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Describa brevemente su requerimiento o proyecto..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <Checkbox
                      id="diagnostico"
                      checked={formData.diagnostico}
                      onCheckedChange={(checked) => handleChange('diagnostico', checked as boolean)}
                    />
                    <Label
                      htmlFor="diagnostico"
                      className="text-sm font-medium text-gray-900 cursor-pointer"
                    >
                      Quiero solicitar un diagnóstico inicial gratuito
                    </Label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-900 to-cyan-600 hover:from-blue-800 hover:to-cyan-500"
                      disabled={enviando}
                    >
                      {enviando ? 'Enviando...' : 'Enviar solicitud'}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Al enviar este formulario, acepta que INCOMSAT se comunique con usted. Responderemos
                      en 24-48h hábiles.
                    </p>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa o imagen */}
      <section className="h-96 bg-gray-200 relative">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzcxOTk0OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-extrabold uppercase tracking-wide mb-3 text-cyan-200">
                Próximamente oficinas en Colombia y Estados Unidos
              </h3>
              <p className="text-lg font-semibold">Seguimos creciendo para estar más cerca de usted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


