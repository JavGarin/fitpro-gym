import { Zap, Users, Clock, Trophy } from 'lucide-react';
import gym1 from '../../assets/images/zonadepesas.avif';
import gym2 from '../../assets/images/cardiopremiun.avif';
import gym3 from '../../assets/images/clasesgrupales.avif';
import gym4 from '../../assets/images/multifuncional.avif';
import gym5 from '../../assets/images/spinning.avif';
import gym6 from '../../assets/images/vestuario.avif';

export interface Plan {
  id: string;
  name: string;
  code: string;
  priceMonthly: number;
  priceAnnual: number;
  period: string;
  popular: boolean;
  tag?: string;
  badge?: string;
  features: string[];
  highlight: string;
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Plan Básico',
    code: 'TIER_01',
    priceMonthly: 24990,
    priceAnnual: 19990,
    period: 'mes',
    popular: false,
    tag: 'ESENCIAL',
    highlight: 'Ideal para iniciar tu transformación',
    features: [
      'Acceso total a sala de pesas y máquinas',
      'Acceso en horario regular (6:00 - 23:00)',
      'Vestuarios & duchas premium',
      'WiFi de alta velocidad',
      'Evaluación física inicial',
    ],
  },
  {
    id: 'pro',
    name: 'Plan Pro',
    code: 'TIER_02',
    priceMonthly: 39990,
    priceAnnual: 31990,
    period: 'mes',
    popular: true,
    tag: 'MÁS ELEGIDO',
    badge: 'RECOMENDADO',
    highlight: 'Rendimiento sin límites 24/7',
    features: [
      'Todo lo incluido en Plan Básico',
      'Acceso total 24/7 con pase biométrico',
      'Todas las clases grupales ilimitadas',
      'Asesoría nutricional personalizada mensual',
      'FitPro App Móvil con seguimiento biométrico',
      '1 pase de invitado gratis al mes',
    ],
  },
  {
    id: 'elite',
    name: 'Plan Elite',
    code: 'TIER_03',
    priceMonthly: 54990,
    priceAnnual: 43990,
    period: 'mes',
    popular: false,
    tag: 'MÁXIMO PODER',
    highlight: 'Experiencia VIP de élite deportiva',
    features: [
      'Todo lo incluido en Plan Pro 24/7',
      '4 sesiones de entrenador personal al mes',
      'Acceso exclusivo a Zona VIP & Spa',
      'Masajes deportivos y de recuperación',
      'Estacionamiento reservado preferencial',
      'Kit de bienvenida FitPro Pro-Athlete',
    ],
  },
];

export const faqs = [
  {
    q: '¿Cuál es el horario y cómo funciona el acceso 24/7?',
    a: 'Nuestras sedes están abiertas en horario general de Lunes a Viernes de 6:00 a 23:00, Sábados de 8:00 a 20:00 y Domingos de 9:00 a 18:00. Para los miembros de los planes Pro y Elite, el acceso es ilimitado las 24 horas del día, los 365 días del año mediante cerradura biométrica inteligente en la App.',
  },
  {
    q: '¿Ofrecen clase de prueba sin costo antes de contratar?',
    a: 'Sí. Puedes solicitar un Pase de Cortesía de 1 día totalmente gratis para conocer las máquinas, el ambiente y las clases grupales sin ningún compromiso previo.',
  },
  {
    q: '¿Necesito tener experiencia previa en levantamiento o fitness?',
    a: 'Para nada. Desde el primer día realizamos un diagnóstico corporal y te asignamos una rutina base progresiva con asistencia continua de nuestros coaches certificados en sala.',
  },
  {
    q: '¿Puedo congelar o suspender temporalmente mi membresía?',
    a: 'Por supuesto. Puedes congelar tu plan sin penalizaciones por motivos de viaje, trabajo o salud hasta por un total de 60 días acumulables al año.',
  },
  {
    q: '¿Existe algún contrato de permanencia forzosa?',
    a: 'No. En modalidad mensual puedes cancelar cuando desees con aviso previo de 5 días antes de tu siguiente ciclo de cobro.',
  },
];

export const features = [
  {
    code: '01',
    tag: 'PRO HARDWARE',
    icon: Zap,
    title: 'Equipamiento Technogym & Eleiko',
    desc: 'Máquinas biomecánicas de competición internacional y zonas de peso libre calibrado.',
    accent: '#FF5E00',
  },
  {
    code: '02',
    tag: 'COACHING',
    icon: Users,
    title: 'Entrenadores Certificados NSCA',
    desc: 'Metodologías basadas en ciencia aplicada y corrección técnica postural en cada repetición.',
    accent: '#00E5FF',
  },
  {
    code: '03',
    tag: 'FREEDOM',
    icon: Clock,
    title: 'Acceso Biométrico 24/7',
    desc: 'Entrena a tu propio ritmo con tecnología de acceso digital seguro sin importar la hora.',
    accent: '#D2FF00',
  },
  {
    code: '04',
    tag: 'TRIBE',
    icon: Trophy,
    title: 'Comunidad de Alto Impacto',
    desc: 'Desafíos mensuales, eventos de powerlifting, cross training y un ambiente que te impulsa.',
    accent: '#FF5E00',
  },
];

export const gallery = [
  {
    title: 'Zona de Pesas Libres',
    desc: 'Mancuernas hasta 60kg, plataformas de levantamiento olímpico y racks de potencia.',
    img: gym1,
    tag: 'HEAVY WEIGHTS',
  },
  {
    title: 'Cardio Hi-Tech',
    desc: 'Cintas curvas de aceleración natural, escaleras sin fin y elípticas interactivas.',
    img: gym2,
    tag: 'AEROBIC PEAK',
  },
  {
    title: 'Clases Grupales & HIIT',
    desc: 'Espacios insonorizados con iluminación reactiva y acústica de alta inmersión.',
    img: gym3,
    tag: 'STUDIO DYNAMICS',
  },
  {
    title: 'Zona Funcional & Cross',
    desc: 'Trineos de empuje, cuerdas de batalla, anillas olímpicas y césped sintético reforzado.',
    img: gym4,
    tag: 'FUNCTIONAL HYBRID',
  },
  {
    title: 'Estudio de Spinning',
    desc: 'Bicicletas magnéticas de última generación con telemetría en pantalla gigante.',
    img: gym5,
    tag: 'RPM POWER',
  },
  {
    title: 'Vestuarios & Recovery',
    desc: 'Duchas con agua termal regulada, saunas secos y lockers digitales de seguridad.',
    img: gym6,
    tag: 'RECOVERY SUITE',
  },
];

