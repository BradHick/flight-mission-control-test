import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import emptyImage from '@/assets/images/empty.svg'

import Empty from './empty'

describe('Empty component', () => {
  it('renders without crashing', () => {
    render(<Empty message='Test message' />)
  })

  it('renders message correctly', () => {
    render(<Empty message='No data available' />)
    const message = screen.getByText(/No data available/i)
    expect(message).toBeInTheDocument()
  })

  it('renders the default emptyImage when no image prop is passed', () => {
    render(<Empty message='No data available' />)
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(emptyImage)
  })

  it('renders the passed image prop correctly', () => {
    const image = 'test-image.svg'
    render(<Empty image={image} message='No data available' />)
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(image)
  })
})
