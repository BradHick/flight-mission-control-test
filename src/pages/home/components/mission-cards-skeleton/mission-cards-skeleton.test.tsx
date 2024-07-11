import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import PostsCardsSkeleton from './mission-cards-skeleton'

describe('PostsCardsSkeleton component', () => {
  it('renders without crashing', () => {
    render(<PostsCardsSkeleton />)
  })

  it('renders the correct number of post card skeletons', () => {
    render(<PostsCardsSkeleton />)
    const postCardSkeletons = screen.getAllByTestId('post-card-skeleton')
    expect(postCardSkeletons.length).toBe(4)
  })
})
