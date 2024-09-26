"use client";

import { Fade } from "react-awesome-reveal";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center rtl">
      <div className="container mx-auto text-center">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            متاسفم، صفحه‌ای که به دنبال آن هستید وجود ندارد.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            بازگشت به صفحه اصلی
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default NotFoundPage;
