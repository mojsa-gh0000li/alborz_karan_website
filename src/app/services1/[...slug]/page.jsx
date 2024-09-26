import Image from 'next/image';

const servicesData = [
  {
    image: "/icon/icon9.png", // Replace this with your actual image path
    title: "امنیت",
    description: "تیم البرز کاران میتواند شما را در حوزه امنیت همراهی کند",
  },
  {
    image: "/icon/icon2.png", // Replace this with your actual image path
    title: "هوش مصنوعی",
    description:
      "گروه فناوری البرز کاران با داشتن تیمی متخصص در حوزه هوش مصنوعی میتواند پروژه ها را پیش ببرد",
  },
  {
    image: "/icon/icon3.png", // Replace this with your actual image path
    title: "واقعیت مجازی",
    description:
      "تیم گروه فناوری البرز در حوزه عینک‌های واقعیت مجازی متخصص است",
  },
  {
    image: "/icon/icon6.png", // Replace this with your actual image path
    title: "علوم داده",
    description: "تیم البرز کاران میتواند شما را در حوزه امنیت همراهی کند",
  },
  {
    image: "/icon/icon8.png", // Replace this with your actual image path
    title: " شبکه",
    description:
      "گروه فناوری البرز کاران با داشتن تیمی متخصص در حوزه هوش مصنوعی میتواند پروژه ها را پیش ببرد",
  },
  {
    image: "/icon/icon3.png", // Replace this with your actual image path
    title: "واقعیت مجازی",
    description:
      "تیم گروه فناوری البرز در حوزه عینک‌های واقعیت مجازی متخصص است",
  },
];

const ServiceDetail = ({ params }) => {
  const { slug } = params;

  // Find the matching service data based on the slug
  const service = servicesData.find((service) => service.slug === slug);

  if (!service) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="bg-primary-light dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-5xl font-extrabold text-primary dark:text-white mb-6 font-sarbaz">
          {service.title}
        </h1>
        <p className="text-xl text-secondary dark:text-gray-300 mb-8 font-vazir">
          {service.description}
        </p>

        <div className="flex justify-center items-center">
          <Image
            src={service.image}
            alt={service.title}
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
