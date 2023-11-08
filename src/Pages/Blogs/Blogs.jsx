import { Helmet } from "react-helmet";


const Blogs = () => {
          return (
          <div>
          <Helmet>
          <title>Career X | Blogs</title>
          </Helmet>
          <section className="max-w-7xl p-6 mx-auto">
          <div className="lg:flex items-center">
          <div className=" p-4">
          <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2 md:mb-4 lg:mb-6">Understanding Access Tokens and Refresh Tokens</h1>

        <img
          src="https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1.png"
          alt="Access Tokens and Refresh Tokens"
          className="w-full rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-4">
          Access tokens and refresh tokens are crucial components in modern web authentication and authorization. They play a vital role in ensuring the security and usability of web applications and APIs.
        </p>

        <h2 className="text-xl font-semibold mb-2">Access Token</h2>
        <p className="text-gray-700 mb-4">
          An access token is a short-lived credential that grants a client application permission to access protected resources after a user successfully authenticates. It acts as a key to unlock the door to these resources and is typically included in API requests to prove the client's identity.
        </p>

        <h2 className="text-xl font-semibold mb-2">Refresh Token</h2>
        <p className="text-gray-700 mb-4">
          A refresh token, on the other hand, is a long-lived credential used to obtain a new access token when the original one expires. It ensures a seamless user experience by extending their session without requiring them to repeatedly log in.
        </p>

        <h2 className="text-xl font-semibold mb-2">Where to Store Them</h2>
        <p className="text-gray-700 mb-4">
          Both access tokens and refresh tokens need to be stored securely on the client-side. Access tokens are usually stored in memory, while refresh tokens should be handled with even greater care. They are typically stored in encrypted local storage or a secure keychain to prevent unauthorized access. Safeguarding these tokens is essential to protect against security vulnerabilities.
        </p>

        <p className="text-gray-700">
          In conclusion, understanding the roles of access tokens and refresh tokens is crucial for securing your web applications and APIs. Proper storage and handling of these tokens are vital aspects of ensuring the safety of user data and maintaining a seamless user experience.
        </p>
           </div>
          </div>
          <div>
          <div className=" p-4">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2 md:mb-4 lg:mb-6">Understanding Express.js and Nest.js</h1>

        {/* Add an image */}
        <img
          src="https://www.upsqode.com/wp-content/uploads/2023/03/Next.js-vs-Nest.jpg"
          alt="Express.js and Nest.js"
          className="w-full rounded-lg mb-4"
        />

        <p className="text-gray-700 mb-4">
          Express.js and Nest.js are both JavaScript frameworks that are widely used in building server-side applications. Let's explore what they are and how they work.
        </p>

        <h2 className="text-xl font-semibold mb-2">Express.js</h2>
        <p className="text-gray-700 mb-4">
          Express.js is a minimal and flexible Node.js web application framework. It is designed for building web applications and APIs, providing a robust set of features for web and mobile applications. Express.js simplifies the process of building efficient and scalable server applications.
        </p>

        <h2 className="text-xl font-semibold mb-2">Nest.js</h2>
        <p className="text-gray-700 mb-4">
          Nest.js, on the other hand, is a progressive Node.js framework for building efficient and scalable server-side applications. It follows the principles of Angular and is designed to be easy to use, making it a great choice for developers who are already familiar with Angular concepts. Nest.js leverages TypeScript and decorators for building clean and maintainable code.
        </p>

        <h2 className="text-xl font-semibold mb-2">Explaining the Code</h2>
        <p className="text-gray-700 mb-4">
          The provided code is a React component built using JSX. It uses Tailwind CSS for styling, making it visually appealing and responsive on various devices. The component includes an image, headings, and paragraphs to explain the concepts of Express.js and Nest.js. The code structure ensures a clean and organized presentation of information.
        </p>

        <p className="text-gray-700">
          In conclusion, Express.js and Nest.js are powerful frameworks for server-side development. While Express.js is known for its simplicity and flexibility, Nest.js offers a more structured and opinionated approach. Understanding when to use each framework depends on the specific requirements of your project.
        </p>
      </div>
          </div>
          </div>
          </div>
          <div className="container  space-y-6 sm:space-y-12">
          <a  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-2 lg:col-span-5">
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
          <span className="text-xs dark:text-gray-400">February 19, 2021</span>
          <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
          </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 21, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          <a  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 22, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          <a  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 23, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          <a  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 24, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          <a  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 25, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
          <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
          <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
          </div>
          </a>
          </div>
          <div className="flex justify-center">
          <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
          </div>
          </div>
          </section>                              
          </div>
          );
};

export default Blogs;