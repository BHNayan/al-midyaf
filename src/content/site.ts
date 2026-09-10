/**
 * Single source of truth for all site content.
 * Edit company details, services, and copy here — nowhere else.
 */

import heroRiyadh from "@/assets/hero-riyadh.jpg";
import aboutOffice from "@/assets/about-office.jpg";
import svcAdvertising from "@/assets/svc-advertising.jpg";
import svcPublicity from "@/assets/svc-publicity.jpg";
import svcRental from "@/assets/svc-rental.jpg";

export type Bi<T = string> = { en: T; ar: T };

export const images = {
  hero: heroRiyadh,
  about: aboutOffice,
  advertising: svcAdvertising,
  publicity: svcPublicity,
  rental: svcRental,
};

export const company = {
  name: { en: "Al-Midyaf Al-Shamil", ar: "المضيف الشامل" } as Bi,
  activity: {
    en: "Advertising • Publicity • Rental Services",
    ar: "الدعاية • الإعلان • خدمات التأجير",
  } as Bi,
  shortDescription: {
    en: "Premium advertising, publicity and rental solutions that put your brand in front of the right people across Saudi Arabia.",
    ar: "حلول متميزة في الدعاية والإعلان والتأجير تضع علامتك التجارية أمام الجمهور المناسب في جميع أنحاء المملكة العربية السعودية.",
  } as Bi,
  phone: "0555199480",
  website: "almudyaf.net",
  email: "[EMAIL ADDRESS]",
  address: { en: "[SAUDI ARABIA ADDRESS]", ar: "[العنوان في المملكة العربية السعودية]" } as Bi,
  country: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" } as Bi,
};

import type { LinkProps } from "@tanstack/react-router";

export const nav: { to: NonNullable<LinkProps["to"]>; label: Bi }[] = [
  { to: "/", label: { en: "Home", ar: "الرئيسية" } },
  { to: "/about", label: { en: "About", ar: "من نحن" } },
  { to: "/services", label: { en: "Services", ar: "خدماتنا" } },
  { to: "/projects", label: { en: "Projects", ar: "أعمالنا" } },
  { to: "/why-us", label: { en: "Why Us", ar: "لماذا نحن" } },
  { to: "/contact", label: { en: "Contact", ar: "تواصل معنا" } },
];

export const ui = {
  contactCta: { en: "Contact Us", ar: "تواصل معنا" } as Bi,
  exploreCta: { en: "Explore Our Services", ar: "اكتشف خدماتنا" } as Bi,
  readMore: { en: "Discover", ar: "اكتشف المزيد" } as Bi,
  menu: { en: "Menu", ar: "القائمة" } as Bi,
  close: { en: "Close", ar: "إغلاق" } as Bi,
  language: { en: "Language", ar: "اللغة" } as Bi,
};

export const hero = {
  eyebrow: { en: "Advertising · Publicity · Rental", ar: "دعاية · إعلان · تأجير" } as Bi,
  titleLine1: { en: "YOUR BRAND.", ar: "علامتك التجارية" } as Bi,
  titleLine2: { en: "EVERYWHERE.", ar: "في كل مكان" } as Bi,
  subtitle: {
    en: "Advertising, publicity and rental solutions designed to help businesses reach the right audience.",
    ar: "حلول متكاملة في الدعاية والإعلان والتسويق وخدمات التأجير لمساعدة أعمالك على الوصول إلى جمهورها.",
  } as Bi,
};

export const about = {
  title: { en: "ABOUT AL-MIDYAF AL-SHAMIL", ar: "عن المضيف الشامل" } as Bi,
  intro: {
    en: "Al-Midyaf Al-Shamil is a Saudi business operating in advertising, publicity and rental services. We focus on delivering practical and professional solutions that help businesses communicate, promote and reach their audiences.",
    ar: "المضيف الشامل منشأة سعودية تعمل في مجال الدعاية والإعلان وخدمات التأجير، ونركز على تقديم حلول عملية واحترافية تساعد الأعمال على التواصل والترويج والوصول إلى جمهورها.",
  } as Bi,
  direction: {
    title: { en: "Our Direction", ar: "توجهنا" } as Bi,
    body: {
      en: "We work with a clear focus: understand each requirement properly, then deliver a service that is practical, professional and dependable.",
      ar: "نعمل بتركيز واضح: فهم كل احتياج بشكل صحيح، ثم تقديم خدمة عملية واحترافية يمكن الاعتماد عليها.",
    } as Bi,
  },
  approach: {
    title: { en: "Our Approach", ar: "منهجيتنا" } as Bi,
    body: {
      en: "Every engagement begins with listening. From there we plan, execute and stay available for follow-up, keeping communication direct and clear at each stage.",
      ar: "كل تعاون يبدأ بالاستماع. بعدها نخطط وننفذ ونبقى متاحين للمتابعة، مع تواصل مباشر وواضح في كل مرحلة.",
    } as Bi,
  },
  activityTitle: { en: "Business Activity", ar: "النشاط التجاري" } as Bi,
};

export const missionVision = {
  mission: {
    label: { en: "Mission", ar: "الرسالة" } as Bi,
    body: {
      en: "To provide practical and professional advertising, publicity and rental solutions that support our clients' business needs.",
      ar: "تقديم حلول عملية واحترافية في الدعاية والإعلان وخدمات التأجير بما يدعم احتياجات عملائنا.",
    } as Bi,
  },
  vision: {
    label: { en: "Vision", ar: "الرؤية" } as Bi,
    body: {
      en: "To build a trusted presence through quality service, creative thinking and dependable business support.",
      ar: "بناء حضور موثوق من خلال جودة الخدمة والتفكير الإبداعي والدعم المهني المتميز.",
    } as Bi,
  },
  values: {
    label: { en: "Values", ar: "قيمنا" } as Bi,
    items: [
      { en: "Quality", ar: "الجودة" },
      { en: "Professionalism", ar: "الاحترافية" },
      { en: "Commitment", ar: "الالتزام" },
      { en: "Creativity", ar: "الإبداع" },
      { en: "Reliability", ar: "الموثوقية" },
    ] as Bi[],
  },
};

export type Service = {
  number: string;
  slug: "advertising" | "publicity" | "rental";
  to: "/services/advertising" | "/services/publicity" | "/services/rental";
  title: Bi;
  short: Bi;
  description: Bi;
  image: string;
  highlights: Bi[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "advertising",
    to: "/services/advertising",
    title: { en: "Advertising", ar: "الإعلان" },
    short: {
      en: "Clear, well-presented advertising that gives your brand stronger visibility.",
      ar: "إعلانات واضحة ومصممة باحترافية تمنح علامتك حضوراً أقوى.",
    },
    description: {
      en: "Professional advertising solutions designed to communicate your message clearly and create stronger visibility for your brand.",
      ar: "حلول إعلانية احترافية تساعد على إيصال رسالتك بوضوح وتعزيز حضور علامتك التجارية.",
    },
    image: svcAdvertising,
    highlights: [
      { en: "Billboards", ar: "اللوحات الإعلانية" },
      { en: "Outdoor advertising", ar: "الإعلان الخارجي" },
      { en: "Digital screens", ar: "الشاشات الرقمية" },
      { en: "Brand displays", ar: "عروض العلامة التجارية" },
      { en: "Advertising materials", ar: "المواد الإعلانية" },
    ],
  },
  {
    number: "02",
    slug: "publicity",
    to: "/services/publicity",
    title: { en: "Publicity & Promotion", ar: "الدعاية والترويج" },
    short: {
      en: "Promotional work that presents your products and messages to the right audience.",
      ar: "أعمال ترويجية تقدم منتجاتك ورسائلك إلى الجمهور المناسب.",
    },
    description: {
      en: "Promotional solutions that help businesses present their products, services and messages to their target audiences.",
      ar: "حلول ترويجية تساعد الأعمال على تقديم منتجاتها وخدماتها ورسائلها إلى الجمهور المستهدف.",
    },
    image: svcPublicity,
    highlights: [
      { en: "Promotional visuals", ar: "المواد الترويجية البصرية" },
      { en: "Campaign concepts", ar: "أفكار الحملات" },
      { en: "Brand communication", ar: "التواصل التجاري" },
      { en: "Commercial environments", ar: "البيئات التجارية" },
    ],
  },
  {
    number: "03",
    slug: "rental",
    to: "/services/rental",
    title: { en: "Rental Services", ar: "خدمات التأجير" },
    short: {
      en: "Rental solutions arranged according to each client's requirement.",
      ar: "حلول تأجير تُرتب وفقاً لاحتياج كل عميل.",
    },
    description: {
      en: "We provide rental solutions according to client requirements and available business offerings.",
      ar: "نوفر حلول التأجير وفقاً لاحتياجات العملاء والخدمات المتاحة لدى المنشأة.",
    },
    image: svcRental,
    highlights: [
      { en: "[RENTAL CATEGORY]", ar: "[فئة التأجير]" },
      { en: "[RENTAL ITEM]", ar: "[عنصر التأجير]" },
      { en: "[RENTAL DURATION]", ar: "[مدة التأجير]" },
      { en: "[RENTAL TERMS]", ar: "[شروط التأجير]" },
    ],
  },
];

export const serviceVisualNote = {
  en: "Images shown are visual representations of the service category. Exact offerings are confirmed with each client.",
  ar: "الصور المعروضة تمثيل بصري لفئة الخدمة، ويتم تأكيد تفاصيل الخدمة مع كل عميل.",
} as Bi;

export const rentalPlaceholderNote = {
  en: "Rental categories and terms are confirmed directly with the client. The fields below are placeholders ready to be completed.",
  ar: "يتم تأكيد فئات وشروط التأجير مباشرة مع العميل. الحقول أدناه عناصر نائبة جاهزة للاستكمال.",
} as Bi;

export const process = {
  title: { en: "HOW WE WORK", ar: "كيف نعمل" } as Bi,
  steps: [
    {
      number: "01",
      title: { en: "Understand", ar: "الفهم" } as Bi,
      body: {
        en: "We understand the client's requirement and objective.",
        ar: "نفهم احتياج العميل وهدفه.",
      } as Bi,
    },
    {
      number: "02",
      title: { en: "Plan", ar: "التخطيط" } as Bi,
      body: {
        en: "We develop a practical approach based on the requirement.",
        ar: "نضع منهجية عملية وفقاً للاحتياج.",
      } as Bi,
    },
    {
      number: "03",
      title: { en: "Deliver", ar: "التنفيذ" } as Bi,
      body: {
        en: "We provide the agreed service with professional attention.",
        ar: "نقدم الخدمة المتفق عليها باهتمام واحترافية.",
      } as Bi,
    },
    {
      number: "04",
      title: { en: "Support", ar: "المتابعة" } as Bi,
      body: {
        en: "We remain responsive to client needs and follow-up.",
        ar: "نبقى متجاوبين مع احتياجات العميل والمتابعة.",
      } as Bi,
    },
  ],
};

export const whyUs = {
  title: { en: "WHY AL-MIDYAF AL-SHAMIL", ar: "لماذا المضيف الشامل" } as Bi,
  items: [
    {
      title: { en: "Professional Approach", ar: "النهج الاحترافي" } as Bi,
      body: {
        en: "Clear communication and organised delivery from first contact to completion.",
        ar: "تواصل واضح وتنفيذ منظم من أول تواصل حتى الإنجاز.",
      } as Bi,
    },
    {
      title: { en: "Practical Solutions", ar: "حلول عملية" } as Bi,
      body: {
        en: "Work shaped around the actual requirement, not around a template.",
        ar: "عمل مبني على الاحتياج الفعلي وليس على قالب جاهز.",
      } as Bi,
    },
    {
      title: { en: "Client Focus", ar: "التركيز على العميل" } as Bi,
      body: {
        en: "Your objective stays at the centre of every decision we make.",
        ar: "هدفك يبقى محور كل قرار نتخذه.",
      } as Bi,
    },
    {
      title: { en: "Quality Service", ar: "جودة الخدمة" } as Bi,
      body: {
        en: "Attention to detail in presentation, execution and follow-up.",
        ar: "اهتمام بالتفاصيل في العرض والتنفيذ والمتابعة.",
      } as Bi,
    },
    {
      title: { en: "Creative Thinking", ar: "التفكير الإبداعي" } as Bi,
      body: {
        en: "Ideas that help your message stand out in a crowded environment.",
        ar: "أفكار تساعد رسالتك على التميّز في بيئة مزدحمة.",
      } as Bi,
    },
    {
      title: { en: "Reliable Support", ar: "الدعم الموثوق" } as Bi,
      body: {
        en: "We stay reachable and responsive throughout the engagement.",
        ar: "نبقى متاحين ومتجاوبين طوال فترة التعاون.",
      } as Bi,
    },
  ],
};

export const portfolio = {
  title: { en: "SELECTED WORK", ar: "أعمال مختارة" } as Bi,
  note: {
    en: "The following are portfolio categories that represent the type of work we undertake.",
    ar: "ما يلي فئات أعمال تمثل نوع المشاريع التي نقوم بها.",
  } as Bi,
  items: [
    {
      category: { en: "Advertising Campaigns", ar: "الحملات الإعلانية" } as Bi,
      body: {
        en: "Campaign concepts built around a clear message and a defined audience.",
        ar: "أفكار حملات مبنية على رسالة واضحة وجمهور محدد.",
      } as Bi,
      image: svcAdvertising,
    },
    {
      category: { en: "Outdoor Advertising", ar: "الإعلان الخارجي" } as Bi,
      body: {
        en: "Large-format presence in high-visibility urban locations.",
        ar: "حضور بمساحات كبيرة في مواقع حضرية عالية المشاهدة.",
      } as Bi,
      image: heroRiyadh,
    },
    {
      category: { en: "Brand Promotion", ar: "ترويج العلامة التجارية" } as Bi,
      body: {
        en: "Presentation work that gives a brand a consistent, considered look.",
        ar: "أعمال عرض تمنح العلامة مظهراً متناسقاً ومدروساً.",
      } as Bi,
      image: svcPublicity,
    },
    {
      category: { en: "Commercial Advertising", ar: "الإعلان التجاري" } as Bi,
      body: {
        en: "Advertising placed where commercial audiences already are.",
        ar: "إعلانات تُوضع حيث يتواجد الجمهور التجاري فعلاً.",
      } as Bi,
      image: svcAdvertising,
    },
    {
      category: { en: "Publicity Activities", ar: "الأنشطة الترويجية" } as Bi,
      body: {
        en: "On-ground promotional activity supporting a wider campaign.",
        ar: "نشاط ترويجي ميداني يدعم حملة أوسع.",
      } as Bi,
      image: svcPublicity,
    },
    {
      category: { en: "Rental Solutions", ar: "حلول التأجير" } as Bi,
      body: {
        en: "Rental arrangements organised around client requirements.",
        ar: "ترتيبات تأجير منظمة وفق احتياجات العميل.",
      } as Bi,
      image: svcRental,
    },
  ],
};

export const cta = {
  title: { en: "LET'S MAKE YOUR BRAND VISIBLE.", ar: "لنجعل علامتك التجارية أكثر حضوراً" } as Bi,
  body: {
    en: "Have a project, campaign or business requirement? Let's discuss how Al-Midyaf Al-Shamil can support you.",
    ar: "لديك مشروع أو حملة أو احتياج تجاري؟ تواصل معنا لمناقشة كيف يمكن للمضيف الشامل دعمك.",
  } as Bi,
};

export const contact = {
  title: { en: "CONTACT US", ar: "تواصل معنا" } as Bi,
  intro: {
    en: "Tell us what you need. We will respond with a clear, practical answer.",
    ar: "أخبرنا باحتياجك، وسنرد عليك بإجابة واضحة وعملية.",
  } as Bi,
  form: {
    name: { en: "Full Name", ar: "الاسم الكامل" } as Bi,
    phone: { en: "Phone", ar: "رقم الجوال" } as Bi,
    email: { en: "Email", ar: "البريد الإلكتروني" } as Bi,
    subject: { en: "Subject", ar: "الموضوع" } as Bi,
    message: { en: "Message", ar: "الرسالة" } as Bi,
    submit: { en: "Send Message", ar: "إرسال الرسالة" } as Bi,
    success: {
      en: "Thank you. Your message has been prepared — we will be in touch.",
      ar: "شكراً لك. تم تجهيز رسالتك وسنتواصل معك قريباً.",
    } as Bi,
  },
  labels: {
    company: { en: "Company", ar: "المنشأة" } as Bi,
    phone: { en: "Phone", ar: "الهاتف" } as Bi,
    website: { en: "Website", ar: "الموقع الإلكتروني" } as Bi,
    email: { en: "Email", ar: "البريد الإلكتروني" } as Bi,
    address: { en: "Address", ar: "العنوان" } as Bi,
    country: { en: "Country", ar: "الدولة" } as Bi,
  },
};

export const footer = {
  rights: {
    en: "© 2026 Al-Midyaf Al-Shamil. All Rights Reserved.",
    ar: "© 2026 المضيف الشامل. جميع الحقوق محفوظة.",
  } as Bi,
  navTitle: { en: "Navigation", ar: "روابط" } as Bi,
  contactTitle: { en: "Contact", ar: "التواصل" } as Bi,
};
