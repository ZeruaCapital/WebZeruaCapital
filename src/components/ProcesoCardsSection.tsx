import styles from "./ProcesoCardsSection.module.css";
import { Target, Shield, Heart, Zap, Settings } from "lucide-react";
import {
  ChartBarIcon,
  LightBulbIcon,
  CogIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

const ZeruaFavicon = () => (
  <img
    src="/favicon.ico"
    alt="Zerua"
    style={{ width: 32, height: 32, display: "block" }}
  />
);

const icons = [
  <Target key="target" size={32} strokeWidth={2.2} color="#1a3a5f" />,
  <ZeruaFavicon key="favicon" />,
  <Settings key="settings" size={32} strokeWidth={2.2} color="#1a3a5f" />,
  <Shield key="shield" size={32} strokeWidth={2.2} color="#1a3a5f" />,
  <Heart key="heart" size={32} strokeWidth={2.2} color="#1a3a5f" />,
  <Zap key="zap" size={32} strokeWidth={2.2} color="#1a3a5f" />,
];

const cards = [
  {
    key: "card-1",
    title: "Análisis Inicial",
    description:
      "Evaluación detallada de tus necesidades y objetivos financieros.",
    icon: <ChartBarIcon className="h-6 w-6" />,
    items: [
      "Evaluación de perfil de riesgo",
      "Análisis de objetivos financieros",
      "Revisión de situación actual",
    ],
  },
  {
    key: "card-2",
    title: "Estrategia Personalizada",
    description: "Desarrollo de un plan financiero adaptado a tu perfil.",
    icon: <LightBulbIcon className="h-6 w-6" />,
    items: [
      "Planificación financiera",
      "Estrategias de inversión",
      "Gestión de riesgos",
    ],
  },
  {
    key: "card-3",
    title: "Implementación",
    description: "Puesta en marcha de las estrategias acordadas.",
    icon: <CogIcon className="h-6 w-6" />,
    items: [
      "Ejecución de estrategias",
      "Monitoreo de resultados",
      "Ajustes necesarios",
    ],
  },
  {
    key: "card-4",
    title: "Seguimiento",
    description: "Monitoreo constante y ajustes según sea necesario.",
    icon: <ChartPieIcon className="h-6 w-6" />,
    items: [
      "Análisis de rendimiento",
      "Reportes periódicos",
      "Recomendaciones",
    ],
  },
  {
    key: "card-5",
    title: "Optimización",
    description: "Mejora continua de las estrategias implementadas.",
    icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    items: [
      "Mejoras de estrategias",
      "Ajustes de portafolio",
      "Nuevas oportunidades",
    ],
  },
  {
    key: "card-6",
    title: "Reportes",
    description: "Informes detallados de rendimiento y progreso.",
    icon: <DocumentChartBarIcon className="h-6 w-6" />,
    items: [
      "Informes mensuales",
      "Análisis de tendencias",
      "Recomendaciones futuras",
    ],
  },
];

export default function ProcesoCardsSection() {
  return (
    <section className={styles.procesoSection} style={{ marginTop: 64 }}>
      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div
            className={`${styles.card} ${styles[`cardGradient${idx}`]}`}
            key={card.title}
          >
            <div className={styles.iconCircle}>{card.icon}</div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.description}</p>
            <ul className={styles.list}>
              {card.items.map((item: string, i: number) => (
                <li key={i} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          ¿Vas a seguir anclado en el siglo pasado?
        </h2>
        <p className={styles.ctaSubtitle}>
          Te ayudamos a iniciar el proceso de transformación y adaptarte a los
          tiempos
        </p>
        <button className={styles.ctaBtn}>Salta al siglo XXI</button>
      </div>
    </section>
  );
}
