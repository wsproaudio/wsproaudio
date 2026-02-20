import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "WS",
  lastName: "AUDIO",
  name: `WS AUDIO`,
  role: "Professional Audio",
  avatar: "/images/avatar.jpg",
  email: "admin@ws-proaudio.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/6287796989192",
    essential: true,
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link: "https://tiktok.com/@wsaudioid",
    essential: true,
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  //   essential: true,
  // },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/wsaudioid",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} SOUND & LIGHTING JAKARTA`,
  description: `SOUND & LIGHTING JAKARTA | Sewa Sound System Jakarta | Sewa Ligting Jakarta ${person.role}`,
  headline: <>Abadikan Momen Berharga dengan Harmoni yang Sempurna.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">WS AUDIO</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/sewa-sound-system",
  },
  subline: (
    <>
    WS AUDIO, Professional Rental <Text as="span" size="xl" weight="strong">Sound System</Text>, Suara Sempurna di Setiap Sudut Ruangan. <br />  Sampaikan Pesan Anda dengan Suara yang Bergejolak di Jiwa.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "Tentang Kami",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        WS AUDIO is a Jakarta-based Rental Sound Systeem with a Profeessinal Technician and Equipment.
        Our focus is on ensuring a perfect convergence between event aesthetics and magnificent sound quality. Where technology meets harmony, WS AUDIO excels.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Layanan",
    experiences: [
      {
        company: "Sewa Sound System",
        timeframe: "2026",
        role: "Lagi rencanain acara tapi bingung urusan suara? Jangan biarkan momen spesialmu hambar karena audio yang kresek-kresek! Kami hadir untuk memberikan pengalaman audio terbaik untuk:",
        achievements: [
          <>
            Live Music / Band
          </>,
          <>
            Birthday Party / Gathering
          </>,
          <>
            Seminar & Talkshow
          </>,
          <>
            Weeding & berbagai acara lainnya.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sewa Lighting Set",
        timeframe: "2026",
        role: "Ubah Suasana Biasa Jadi Luar Biasa dengan Magic Lighting! Bikin stage kamu makin hidup dan estetik! Tanpa lighting yang pas, acara keren bakal terasa hambar. Kami siap menyulap venue kamu jadi penuh warna dan penuh energi.",
        achievements: [
          <>
            Moving Head Beam (100 Watt, 120 Watt, 150 Watt, 230 Watt, 380 Watt) 
          </>,
          <>
            Par LED (16x3 Watt, 18x3 Watt, 36x3 Watt, 54x3 Watt)
          </>,
          <>
            Fresnel
          </>,
          <>
            Smoke Gun
          </>,

        ],
        images: [
          {
            src: "/images/projects/project-01/lighting.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Talent Profesional untuk Acara Kamu",
        timeframe: "2026",
        role: "Bingung cari talent profesional untuk acara kamu? Tenang, kami punya solusi lengkap! Kami menyediakan talent profesional untuk berbagai jenis acara, mulai dari MC, DJ, hingga artis panggung. Dengan pengalaman dan keahlian mereka, mereka akan membuat acara kamu semakin meriah dan berkesan. Jangan ragu untuk menghubungi kami untuk mendapatkan talent terbaik yang sesuai dengan kebutuhan acara kamu!",
        achievements: [
          <>
            Adaptasi Konsep yang Luas: Apapun tema acara Anda—vintage, modern, elegant, atau festive—kami memastikan performa talent menyatu sempurna dengan dekorasi dan suasana.
          </>,
          <>
            Kualitas Profesional & Berpengalaman: Didukung oleh individu-individu yang jam terbangnya tinggi di industri hiburan, menjamin penampilan yang minim kesalahan dan penuh percaya diri.
          </>,
          <>
            Interaksi Audiens yang Berkesan: Talent kami terlatih untuk membaca situasi di lapangan, memastikan audiens tetap terlibat (engaged) dan merasa menjadi bagian dari acara.
          </>,
          <>
            Koordinasi Teknis yang Mulus: Karena kami juga menyediakan infrastruktur (sound & lighting), koordinasi antara talent dan kru teknis berjalan satu pintu, sehingga pertunjukan jauh lebih rapi dan sinkron.
          </>,
          <>
            Pilihan Multitalenta: Tersedia berbagai kategori hiburan mulai dari Master of Ceremony (MC), penyanyi solo, band akustik, hingga full band dan penari latar.
          </>

        ],
        images: [
          {
            src: "/images/gallery/gardenia-v.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Experience & Portfolio",
    institutions: [
      {
        name: "Professional Event Handling:",
        description: <>Berpengalaman menangani berbagai skala acara, mulai dari intimate wedding, seminar, hingga konser musik outdoor.</>,
      },
      {
        name: "Vast Project History:",
        description: <>Telah sukses mendukung lebih dari 500 acara di wilayah Jakarta dan sekitarnya dengan tingkat kepuasan klien yang tinggi.</>,
      },
      {
        name: "Certified Sound Engineer:",
        description: <>Tim teknis kami memiliki latar belakang kuat dalam manajemen audio dan tata cahaya untuk memastikan kualitas output yang maksimal.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Our Tech Specs",
    skills: [
      {
        title: "Professional Sound Management:",
        description: (
          <>Keahlian dalam mixing dan tuning frekuensi untuk menghasilkan suara yang jernih, empuk, dan tidak berisik di telinga audiens.</>
        ),
        // tags: [
        //   {
        //     name: "Figma",
        //     icon: "figma",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/pp.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Lighting Control & Programming:",
        description: (
          <>Pengoperasian lighting console tingkat lanjut untuk menciptakan ambience yang dinamis dan sesuai dengan mood acara.</>
        ),
        // tags: [
        //   {
        //     name: "JavaScript",
        //     icon: "javascript",
        //   },
        //   {
        //     name: "Next.js",
        //     icon: "nextjs",
        //   },
        //   {
        //     name: "Supabase",
        //     icon: "supabase",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/lighting.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "High-End Equipment:",
        description: (
          <>Menggunakan perangkat standar industri (seperti yang terlihat pada gambar profil Anda) untuk menjamin durabilitas dan kualitas suara selama acara berlangsung.</>
        ),
        // tags: [
        //   {
        //     name: "JavaScript",
        //     icon: "javascript",
        //   },
        //   {
        //     name: "Next.js",
        //     icon: "nextjs",
        //   },
        //   {
        //     name: "Supabase",
        //     icon: "supabase",
        //   },
        // ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/equipment.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Sound System",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Service",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gardenia-v.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/christmast2025-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/pp.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/equipment.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
