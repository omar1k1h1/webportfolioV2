import learningCppImage from '../assets/Learningcpp.png'
import lumynImage from '../assets/lumyn.png'
import whatsappBotImage from '../assets/whatsappbot.png'
import lumynDemoVideo from '../assets/LumynDemo.mp4'
import openGlTriangleVideo from '../assets/OpenGLtriangle.mp4'
import raylibOrbVideo from '../assets/raylib1stproj.mp4'
import whatsappBotDemoVideo from '../assets/WhatsappBotDemo.mp4'

export const projectsData = [
  {
    slug: 'little-cleaner',
    title: 'Little Cleaner',
    shortDescription:
      'WhatsApp bot in production for reporting and locating nearby trash with Twilio and Google Maps.',
    description:
      'A WhatsApp bot currently in production built to report and locate nearby trash. Users can send pictures of trash, share their location pins, and the bot uses Twilio Sandbox and Google Maps integration to log the report and notify local helpers.',
    coverImage: whatsappBotImage,
    videos: [
      {
        src: whatsappBotDemoVideo,
        label: 'Little Cleaner WhatsApp flow demo',
      },
    ],
  },
  {
    slug: 'lumyn',
    title: 'Lumyn (lumyn.site)',
    shortDescription:
      'Islamic smart calculator and analytics dashboard for tracking and estimating missed prayers.',
    description:
      'A dedicated app built for Islamic purposes. It acts as a sophisticated smart calculator and analytics dashboard to track, estimate, and help users make up for missed (Qada) prayers over long periods.',
    coverImage: lumynImage,
    website: 'https://lumyn.site',
    videos: [
      {
        src: lumynDemoVideo,
        label: 'Lumyn dashboard demo',
      },
    ],
  },
  {
    slug: 'low-level-cpp-explorations',
    title: 'Low-Level C++ Explorations',
    shortDescription:
      'Low-level rendering experiments in OpenGL and Raylib from scratch.',
    description:
      'A collection of graphics programming exercises demonstrating my dive into low-level rendering. Includes a 3D "Hello World" pyramid built from scratch using OpenGL, and an interactive 3D red orb environment built with Raylib.',
    coverImage: learningCppImage,
    videos: [
      {
        src: openGlTriangleVideo,
        label: 'OpenGL triangle and pyramid exploration',
      },
      {
        src: raylibOrbVideo,
        label: 'Raylib 3D red orb environment',
      },
    ],
  },
]

export const projectsBySlug = Object.fromEntries(
  projectsData.map((project) => [project.slug, project]),
)
