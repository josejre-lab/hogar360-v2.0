import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

export default function BusinessPage() {
  const yourWhatsApp = "+1 (849) 863‑1101";
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    propiedad: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.propiedad) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const message = encodeURIComponent(
      `Hola, me interesa en los servicios de Hogar360.\n\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nPropiedad: ${formData.propiedad}`
    );
    
    window.open(`https://wa.me/${yourWhatsApp.replace(/\D/g, "")}?text=${message}`, "_blank");
    setFormData({ nombre: "", email: "", propiedad: "" });
    toast.success("Redirigiendo a WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
            ← Ver Propiedad Demo
          </Link>
          <div className="font-bold text-gray-900">Hogar360</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/wkTprlsrdB62blXtpLFmyJcM3vQ.jpeg')",
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tours 3D para vender más rápido en Santiago</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Recorridos virtuales de alta fidelidad para que cada propiedad se visite, conecte y convenza antes de la primera cita.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-teal-600 tracking-wide">PORTAFOLIO SELECCIONADO</p>
            <h2 className="text-3xl font-bold mt-2">Vista Linda, desde todos sus ángulos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Vista exterior", image: "https://framerusercontent.com/images/aojY4A8XMSYIrUdu8XbsXJspTw.jpeg" },
              { title: "Acceso principal", image: "https://framerusercontent.com/images/Gvg7GhWAVR5QLMouuNf9o8Mw.jpeg" },
              { title: "Detalle arquitectónico", image: "https://framerusercontent.com/images/eQWAYO7xnwJODSGeN4rGiflQLY.jpeg" },
            ].map((card, idx) => (
              <Link key={idx} href="/" className="group cursor-pointer">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-teal-600 mb-1">DISPONIBLE</p>
                    <h3 className="font-semibold text-gray-900">Vista Linda</h3>
                    <p className="text-sm text-gray-600">{card.title}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold">
              Ver tour 3D completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <p className="text-sm font-semibold text-teal-600 tracking-wide">SERVICIOS</p>
            <h2 className="text-3xl font-bold mt-2">Elige la experiencia que mejor presenta tu propiedad</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Base Package */}
            <Card className="border-2 border-teal-600 shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Paquete Lanzamiento</h3>
                <p className="text-sm text-gray-600 mb-6">Tour 3D + Landing</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-teal-600">RD$ 8,950</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Tour 3D profesional",
                    "Landing de la propiedad",
                    "Link listo para compartir"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-teal-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 font-semibold">
                  Solicitar Cotización
                </Button>
              </div>
            </Card>

            {/* Drone Add-on */}
            <div className="relative">
              <Card className="border border-gray-200 shadow-lg opacity-60">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">Add-on Dron</h3>
                  <p className="text-sm text-gray-400 mb-6">Fotos Aéreas</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-400">RD$ 5,000</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Tomas aéreas de propiedad",
                      "Video vertical para redes",
                      "Material optimizado"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <Check className="w-5 h-5 text-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button disabled className="w-full bg-gray-300 text-gray-500 py-6 font-semibold cursor-not-allowed">
                    Próximamente
                  </Button>
                </div>
              </Card>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  Próximamente
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-semibold text-teal-600 tracking-wide">CONTACTO</p>
              <h2 className="text-3xl font-bold mt-2">Hablemos de tu propiedad</h2>
              <p className="text-gray-600 mt-4">
                Una visita virtual puede cambiar la primera impresión. Cuéntanos sobre tu inmueble 
                y te enviaremos una propuesta personalizada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tu nombre</label>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de propiedad y ubicación</label>
                  <Textarea
                    placeholder="Ej: Casa de 3 habitaciones en Santiago"
                    value={formData.propiedad}
                    onChange={(e) => setFormData({ ...formData, propiedad: e.target.value })}
                    className="border-gray-300 min-h-24"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-6 font-semibold"
                >
                  Enviar solicitud
                </Button>
              </form>

              <div className="flex flex-col justify-center">
                <div className="bg-teal-50 rounded-lg p-8 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">O contacta directamente</h3>
                  <Button
                    onClick={() => {
                      const message = encodeURIComponent("Hola, estoy interesado en los servicios de Hogar360.");
                      window.open(`https://wa.me/${yourWhatsApp.replace(/\D/g, "")}?text=${message}`, "_blank");
                    }}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotizar por WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-sm">
          <p>Hogar360 - Tours 3D para Propiedades en Santiago, RD</p>
          <p className="mt-2">© 2026 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
