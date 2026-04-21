'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    motivo: 'Examen Visual'
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', telefono: '', motivo: 'Examen Visual' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">Nombre Completo</label>
        <input 
          required
          type="text" 
          id="nombre" 
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="w-full border-b border-cream/20 bg-transparent py-3 text-lg font-light outline-none focus:border-cyan transition-colors" 
          placeholder="Tu nombre..." 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="telefono" className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">Teléfono de contacto</label>
        <input 
          required
          type="tel" 
          id="telefono" 
          value={formData.telefono}
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          className="w-full border-b border-cream/20 bg-transparent py-3 text-lg font-light outline-none focus:border-cyan transition-colors" 
          placeholder="+34 000 000 000" 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="motivo" className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">Tipo de Cita</label>
        <div className="relative">
          <select 
            id="motivo" 
            value={formData.motivo}
            onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
            className="w-full border-b border-cream/20 bg-transparent py-3 text-lg font-light outline-none focus:border-cyan transition-colors appearance-none cursor-pointer"
          >
            <option className="bg-charcoal">Examen Visual</option>
            <option className="bg-charcoal">Estudio Audiológico</option>
            <option className="bg-charcoal">Renovar Lentes</option>
            <option className="bg-charcoal">Otro motivo</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="pt-4">
        <button 
          disabled={status === 'sending'}
          type="submit" 
          className="w-full bg-cyan py-6 text-xs font-bold uppercase tracking-[0.3em] text-charcoal hover:bg-white transition-colors duration-500 disabled:opacity-50"
        >
          {status === 'sending' ? 'ENVIANDO...' : 'SOLICITAR DISPONIBILIDAD'}
        </button>
        
        {status === 'success' && (
          <p className="mt-4 text-cyan text-xs font-bold uppercase tracking-widest text-center animate-pulse">
            ¡Solicitud enviada! Nos pondremos en contacto pronto.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-400 text-xs font-bold uppercase tracking-widest text-center">
            Error al enviar. Inténtalo de nuevo o llámanos.
          </p>
        )}
      </div>
    </form>
  );
}
