import { tv } from 'tailwind-variants'

export const column = tv({
  base: 'flex flex-1 flex-col relative m-3 bg-[#f5f6f6] rounded-lg',
  variants: {
    isOver: {
      true: 'shadow z-10'
    }
  }
})

export const columnHeader = tv({
  base: ''
})

export const columnTitle = tv({
  base: 'text-md font-bold p-5',
  variants: {
    withShadow: {
      true: 'shadow z-10'
    }
  }
})

export const missionsList = tv({
  base: 'flex flex-col relative gap-4 px-8 py-8 overflow-auto'
})

export const emptyMissions = tv({
  base: 'h-[100%] mt-20'
})

export const divider = tv({
  base: 'w-[1px] h-[100%] border'
})

export const rightBox = tv({
  base: 'w-[450px] h-[100%] flex flex-col justify-between'
})

export const commentsList = tv({
  base: 'flex flex-col gap-4 px-8 pt-8 overflow-auto'
})

export const emptyComments = tv({
  base: 'h-[100%] mb-52'
})