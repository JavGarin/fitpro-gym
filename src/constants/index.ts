import { Zap, Users, Clock, Heart } from 'lucide-react';
import gym1 from '../../assets/images/zonadepesas.avif';
import gym2 from '../../assets/images/cardiopremiun.avif';
import gym3 from '../../assets/images/clasesgrupales.avif';
import gym4 from '../../assets/images/multifuncional.avif';
import gym5 from '../../assets/images/spinning.avif';
import gym6 from '../../assets/images/vestuario.avif';

export const plans = [
    {
      name: 'Plan Básico',
      price: '24.990',
      period: 'mes',
      features: ['Acceso ilimitado', 'Área de pesas', 'Vestuarios premium', 'WiFi gratis'],
      popular: false
    },
    {
      name: 'Plan Pro',
      price: '39.990',
      period: 'mes',
      features: ['Todo Plan Básico', 'Clases grupales', 'Asesoría nutricional', 'App móvil', 'Acceso 24/7'],
      popular: true
    },
    {
      name: 'Plan Elite',
      price: '54.990',
      period: 'mes',
      features: ['Todo Plan Pro', 'Entrenador personal', 'Zona VIP', 'Masajes deportivos', 'Estacionamiento'],
      popular: false
    }
  ];

  export const faqs = [
    {
      q: '¿Cuál es el horario de atención?',
      a: 'Estamos abiertos de Lunes a Viernes de 6:00 AM a 11:00 PM, Sábados de 8:00 AM a 8:00 PM y Domingos de 9:00 AM a 6:00 PM. Plan Pro y Elite tienen acceso 24/7.'
    },
    {
      q: '¿Ofrecen clases de prueba?',
      a: 'Sí, ofrecemos una clase de prueba gratuita para que conozcas nuestras instalaciones y servicios. Agenda tu visita.'
    },
    {
      q: '¿Necesito experiencia previa?',
      a: 'No, tenemos programas para todos los niveles. Nuestros entrenadores te guiarán desde el primer día.'
    },
    {
      q: '¿Puedo congelar mi membresía?',
      a: 'Sí, puedes congelar tu membresía por razones médicas o viajes, con un máximo de 2 meses al año.'
    }
  ];

  export const features = [
    {
      icon: Zap,
      title: 'Equipamiento Premium',
      desc: 'Máquinas de última tecnología importadas directamente',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Users,
      title: 'Entrenadores Expertos',
      desc: 'Profesionales certificados internacionalmente',
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Clock,
      title: 'Horarios Flexibles',
      desc: 'Abierto cuando tú lo necesites, 24/7 disponible',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Comunidad Activa',
      desc: 'Miles de miembros motivados como tú',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  export const gallery = [
    { title: 'Zona de Pesas', desc: '500m² de área libre', img: gym1 },
    { title: 'Cardio Premium', desc: 'Equipos Technogym', img: gym2 },
    { title: 'Clases Grupales', desc: 'Salas climatizadas', img: gym3 },
    { title: 'Zona Funcional', desc: 'CrossFit & HIIT', img: gym4 },
    { title: 'Spinning', desc: '30 bicicletas', img: gym5 },
    { title: 'Vestuarios', desc: 'Duchas y lockers', img: gym6 }
  ];
