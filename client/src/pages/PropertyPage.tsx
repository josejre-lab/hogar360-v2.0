import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function PropertyPage() {
  const agentWhatsApp = "+1 (809) 915-7062";
  const agentName = "Laura Liz";
  const matterportLink = "https://my.matterport.com/show/?m=XXXXX"; // Placeholder - replace with actual link
  
  const handleAgentContact = () => {
    const message = encodeURIComponent("Hola, vi el tour 3D de la casa y me interesa. Quisiera agendar una visita.");
    window.open(`https://wa.me/${agentWhatsApp.replace(/\D/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back link */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="/hogar360">
            <a className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
              ← Volver a Hogar360
            </a>
          </Link>
          <div className="text-xs text-gray-500">Vista Linda, Santiago</div>
        </div>
      </header>

      {/* Hero Section with House Image */}
      <section className="relative h-96 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://framerusercontent.com/images/wkTprlsrdB62blXtpLFmyJcM3vQ.jpeg')",
            opacity: 0.7,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Vista Linda</h1>
          <p className="text-lg text-gray-200">Hermosa residencia en Santiago, RD</p>
        </div>
      </section>

      {/* Matterport Tour Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mb-6">
            <p className="text-sm font-semibold text-teal-600 tracking-wide">RECORRIDO 3D PROFESIONAL</p>
            <h2 className="text-3xl font-bold mt-2">Explora la propiedad en 360°</h2>
          </div>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src={matterportLink}
              frameBorder="0"
              allow="xr-spatial-tracking"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {matterportLink === "https://my.matterport.com/show/?m=XXXXX" 
              ? "Reemplaza el enlace de Matterport cuando esté disponible"
              : "Tour 3D profesional de la propiedad"}
          </p>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Detalles de la Propiedad</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-teal-600">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Habitaciones</p>
                    <p className="text-sm text-gray-600">Cómodas y bien distribuidas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-teal-600">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Baño</p>
                    <p className="text-sm text-gray-600">Completamente equipado</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-teal-600">245m²</div>
                  <div>
                    <p className="font-semibold text-gray-900">Área Total</p>
                    <p className="text-sm text-gray-600">Espacios amplios y funcionales</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Características Incluidas</h3>
              
              <ul className="space-y-3">
                {[
                  "Sala",
                  "Comedor",
                  "Cocina",
                  "Galería",
                  "Marquesina",
                  "Patio",
                  "Título de propiedad",
                  "Excelente estado de conservación"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-teal-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 bg-teal-50">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-600 tracking-wide">PRECIO</p>
            <h2 className="text-4xl font-bold mt-2 text-gray-900">RD$ 10.2 Millones</h2>
            <p className="text-gray-600 mt-4">
              Una excelente oportunidad de adquirir una cómoda y acogedora vivienda ubicada en Vista Linda. 
              La casa se encuentra en muy buen estado de conservación, lista para habitar. Ideal para familias 
              que buscan tranquilidad, comodidad y una buena ubicación.
            </p>
          </div>
        </div>
      </section>

      {/* Agent Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6">Agendar una Visita</h2>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                LL
              </div>
              <div>
                <p className="font-semibold text-gray-900">{agentName}</p>
                <p className="text-sm text-gray-600">Agente Inmobiliario</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Contacta directamente con {agentName} para agendar una visita a la propiedad. 
              Responde rápidamente a todas tus preguntas.
            </p>

            <Button
              onClick={handleAgentContact}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Visita por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container text-center text-sm">
          <p className="mb-2">Tour 3D y Landing creados por</p>
          <Link href="/hogar360">
            <a className="text-teal-400 hover:text-teal-300 font-semibold">
              Hogar360 - Tours 3D para Propiedades
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
