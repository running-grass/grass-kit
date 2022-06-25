module.exports = () => ({
  ".switch" : {
    "@apply inline-block rounded-full relative h-4 w-8 p-[0.1rem]": {},
    "@apply text-base text-gray-600": {},
    "@apply cursor-pointer select-none border-0": {},

  },
  ".switch--inner": {
    "@apply h-[0.8rem] w-[0.8rem] bg-white float-left rounded-full": {},
  },

  ".switch__off": {
    "@apply bg-indigo-200 after:float-left": {},
  },
  ".switch__on": {
    "@apply bg-indigo-500 after:float-right": {},
  },

  ".switch__off .switch--inner": {
    "@apply float-left": {},
  },
  ".switch__on .switch--inner": {
    "@apply float-right": {},
  },

})