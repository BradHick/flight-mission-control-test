import { tv } from 'tailwind-variants'

export const container = tv({
  base: 'rounded-lg bg-white p-6 text-base',
  variants: {
    status: {
      PRE_FLIGHT: 'border border-[#EE9E3E] border-l-8', 
      FLIGHT: 'border border-[#5C84FC] border-l-8', 
      POST_FLIGHT: 'border border-[#76D18D] border-l-8', 
    }
  }
})

export const header = tv({
  base: 'flex items-center justify-between border-b border-gray-200 p-t-1'
})

export const userInfoContainer = tv({
  base: 'mb-2 mr-3 flex items-center justify-start text-sm font-semibold text-gray-900'
})

export const userPhoto = tv({
  base: 'h-8 w-8 rounded-full flex justify-center items-center bg-gray-200 mr-3'
})

export const text = tv({
  base: 'text-gray-500'
})

export const tagsHighlight = tv({
  base: 'rounded py-0.5 px-1 bg-[rgb(165_180_252)] text-white'
})

export const replyButton = tv({
  base: 'mt-4 text-sm font-medium text-gray-400 hover:underline'
})
