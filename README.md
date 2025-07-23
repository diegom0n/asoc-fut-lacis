# Asociación Fútbol La Cisterna

![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)

Sitio web oficial de la Asociación Fútbol La Cisterna, una asociación de fútbol local con sede en La Cisterna, Chile. Este proyecto está construido con Next.js y TypeScript, utilizando prácticas modernas de React y optimizado para rendimiento y escalabilidad.

## 🌐 Demo en Vivo

Visita el sitio web: [https://quiet-llama-d7d21b.netlify.app](https://quiet-llama-d7d21b.netlify.app)

## ✨ Características Actuales

### 🏠 Página Principal
- Hero section con información de la asociación
- Estadísticas rápidas de clubes, jugadores y partidos
- Tarjetas de acceso rápido a todas las secciones
- Vista previa de las últimas noticias
- Footer informativo

### 🏛️ Navegación Responsiva
- Barra de navegación completamente responsiva
- Enlaces a secciones principales: Inicio, Clubes, Noticias, Partidos, Citaciones
- Menú hamburguesa para dispositivos móviles
- Botón de cambio de tema integrado

### ⚽ Página de Clubes
- Tarjetas de clubes con información detallada
- Estadísticas de cada club (jugadores, títulos, año de fundación)
- Categorización por división
- Diseño de tarjetas con colores representativos
- Estadísticas generales de la asociación

### 📰 Sección de Noticias
- Sistema de agregación de noticias
- Noticias destacadas con diseño especial
- Filtros por categoría (Resultados, Administración, Infraestructura, etc.)
- Métricas de visualizaciones y comentarios
- Diseño de tarjetas moderno con información del autor

### 🏆 Sección de Partidos
- Sistema de pestañas para próximos partidos, resultados y tabla de posiciones
- Información detallada de cada partido (equipos, fecha, hora, venue)
- Tabla de posiciones completa con estadísticas
- Resultados recientes con marcadores
- Badges informativos para divisiones y fechas

### 📢 Sección de Citaciones
- Gestión de citaciones para entrenamientos y anuncios
- Sistema de prioridades (Alta, Normal, Baja)
- Estados de citaciones (Activa, Urgente, Confirmada)
- Anuncios importantes destacados
- Barra de progreso de asistencia
- Información detallada de cada citación

### 🌙 Cambio de Tema
- Alternancia entre modo claro y oscuro
- Persistencia de preferencias en localStorage
- Respeto a las preferencias del sistema
- Transiciones suaves entre temas
- Iconos animados para el cambio de tema

## 🛠️ Tecnologías Utilizadas

- **Next.js 13.5.1** - Framework de React para renderizado del lado del servidor y generación de sitios estáticos
- **TypeScript 5.2.2** - Desarrollo tipado y más seguro
- **Tailwind CSS 3.3.3** - Framework CSS utility-first para diseño responsivo
- **React Hooks** - Para interactividad del cliente
- **next-themes** - Gestión de temas claro/oscuro
- **Lucide React** - Iconos modernos y consistentes
- **shadcn/ui** - Componentes de UI reutilizables y accesibles

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/afc-la-cisterna.git
   cd afc-la-cisterna
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js 13
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── clubes/            # Sección de clubes
│   ├── noticias/          # Sección de noticias
│   ├── partidos/          # Sección de partidos
│   ├── citaciones/        # Sección de citaciones
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── navbar.tsx        # Barra de navegación
│   └── theme-provider.tsx # Proveedor de temas
├── lib/                  # Utilidades y configuraciones
│   └── utils.ts          # Funciones utilitarias
├── public/               # Archivos estáticos
└── README.md            # Este archivo
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Azul (#1E40AF) - Representa la confianza y profesionalismo
- **Secundario**: Amarillo (#EAB308) - Energía y dinamismo del fútbol
- **Acentos**: Verde, Rojo, Púrpura para categorización
- **Neutros**: Grises para texto y fondos

### Tipografía
- **Fuente Principal**: Inter - Legibilidad óptima en pantallas
- **Jerarquía**: Sistema consistente de tamaños y pesos

### Responsive Design
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid y Flexbox para layouts flexibles

## 🔮 Futuras Expansiones

### 🔐 Autenticación y Perfiles
- [ ] Sistema de login para jugadores, entrenadores y staff
- [ ] Perfiles de usuario personalizables
- [ ] Gestión de roles y permisos

### 🛡️ Panel de Administración
- [ ] CRUD para noticias, partidos y citaciones
- [ ] Gestión de clubes e información
- [ ] Dashboard administrativo

### ⚡ Actualizaciones en Tiempo Real
- [ ] Resultados de partidos en vivo
- [ ] Notificaciones push
- [ ] WebSocket para actualizaciones instantáneas

### 📱 Funcionalidades Avanzadas
- [ ] Galería multimedia (fotos y videos)
- [ ] Soporte multiidioma (ES/EN)
- [ ] Calendario interactivo de eventos
- [ ] Sistema de búsqueda y filtrado avanzado
- [ ] PWA (Progressive Web App)
- [ ] Integración con app móvil

### 📊 Analytics y SEO
- [ ] Dashboard de métricas y analytics
- [ ] Optimización SEO avanzada
- [ ] Metadatos dinámicos
- [ ] Sitemap automático

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**Asociación Fútbol La Cisterna**
- Email: info@afclacisterna.cl
- Teléfono: +56 9 XXXX XXXX
- Dirección: La Cisterna, Santiago, Chile

## 🙏 Agradecimientos

- Comunidad de Next.js por el excelente framework
- Equipo de Tailwind CSS por las herramientas de diseño
- Todos los clubes y jugadores de la Asociación Fútbol La Cisterna

---

**Desarrollado con ❤️ para la comunidad futbolística de La Cisterna**