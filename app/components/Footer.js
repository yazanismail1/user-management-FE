export default function Footer() {
  return (
    <footer class="relative bg- pt-8 pb-6 bg-dark">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold   text-gray-100">
              Let's keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-twitter"></i>
              </button>
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-dribbble"></i>
              </button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center  text-gray-400">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center ">
            <div class="text-sm font-semibold py-1  text-gray-400">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href=""
                class="text-gray-400 hover:text-gray-200"
                target="_blank"
              >
                {" "}Country Details by{" "}
              </a>
              <a
                href="https://silly-lokum-2b8b46.netlify.app/"
                target="_blank"
                class="text-gray-400 hover:text-gray-200"
              >
                Yazan Alfarra
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
