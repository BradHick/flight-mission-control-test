import { tv } from 'tailwind-variants'

export const container = tv({
  base: 'animate-pulse bg-white rounded-xl border p-4 cursor-pointer'
})

export const title = tv({
  base: 'h-2 mb-2 rounded bg-gray-200'
})

export const body = tv({
  base: 'h-2 mb-2 rounded bg-gray-200'
})

export const userInfoContainer = tv({
  base: 'mt-3 flex items-center font-sans'
})

export const userPhotoContainer = tv({
  base: 'shrink-0'
})

export const userPhoto = tv({
  base: 'h-8 w-8 rounded-full flex justify-center items-center bg-gray-200'
})

export const userNameContainer = tv({
  base: 'ml-3 flex flex-col'
})

export const userName = tv({
  base: 'h-2 w-20 rounded bg-gray-200'
})
