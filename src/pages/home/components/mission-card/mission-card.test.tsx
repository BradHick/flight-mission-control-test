import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import CommentComponent from './mission-card'

describe('CommentComponent', () => {
  const comment = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    body: 'This is a test comment',
    postId: 1
  }

  const commentWithTags = {
    ...comment,
    body: 'This is a test comment with #tag1 and #tag2'
  }

  const onReplyClick = jest.fn()

  it('renders the comment correctly', () => {
    render(
      <CommentComponent
        tags={[]}
        onReplyClick={onReplyClick}
        comment={comment}
      />
    )
    const commentText = screen.getByText('This is a test comment')
    expect(commentText).toBeInTheDocument()
  })

  it('renders the user email correctly', () => {
    render(
      <CommentComponent
        tags={[]}
        onReplyClick={onReplyClick}
        comment={comment}
      />
    )
    const userEmail = screen.getByText('test@example.com')
    expect(userEmail).toBeInTheDocument()
  })

  it('calls the onReplyClick function when the reply button is clicked', () => {
    render(
      <CommentComponent
        tags={[]}
        comment={comment}
        onReplyClick={onReplyClick}
      />
    )
    const replyButton = screen.getByRole('button', { name: 'Reply' })
    fireEvent.click(replyButton)
    expect(onReplyClick).toHaveBeenCalled()
  })

  it('renders the tags correctly', () => {
    const tags = ['tag1', 'tag2']
    render(
      <CommentComponent
        tags={tags}
        onReplyClick={onReplyClick}
        comment={commentWithTags}
      />
    )
    tags.forEach(tag => {
      const tagElement = screen.getByText(`#${tag}`)
      expect(tagElement).toBeInTheDocument()
    })
  })

  it('does not render tags when they are not provided', () => {
    render(
      <CommentComponent
        tags={[]}
        onReplyClick={onReplyClick}
        comment={comment}
      />
    )
    const tagElement = screen.queryByText(/#/i)
    expect(tagElement).not.toBeInTheDocument()
  })
})
