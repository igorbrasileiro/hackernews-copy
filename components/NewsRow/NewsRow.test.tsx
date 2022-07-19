import NewsRow from './NewsRow'
import { render, fireEvent, screen } from "@testing-library/react";
import type { EnhancedNewItemData } from '../../sdk/fetchNewsItem';

const newsItem: EnhancedNewItemData = {
  by: 'igor',
  descendants: 2,
  id: 10,
  score: 10,
  time: (Date.now() - 60 * 1000) % 1_000,
  title: 'Title',
  type: 'story',
  url: 'www.google.com',
  host: 'google.com'
}

test('Default props', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} />)

  expect(screen.getByText('1.')).toBeInTheDocument()
  expect(screen.getByText('Title')).toBeInTheDocument()
  expect(screen.getByText('google.com')).toBeInTheDocument()
  expect(screen.getByText('10')).toBeInTheDocument()
  expect(screen.getByText('igor')).toBeInTheDocument()
  expect(screen.getByText('2 comments')).toBeInTheDocument()
  expect(screen.getByText('hide')).toBeInTheDocument()
})

test('prop descendents = 0', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} descendants={0} />)

  expect(screen.getByText('discuss')).toBeInTheDocument()
})

test('prop hideNews = false', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} showHideNews={false} />)

  expect(screen.queryByText('hide')).not.toBeInTheDocument()
})

test('prop showIndex = false', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} showIndex={false} />)

  expect(screen.queryByText('1.')).not.toBeInTheDocument()
})

test('prop showAuthor = false', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} showAuthor={false} />)

  expect(screen.queryByText('igor')).not.toBeInTheDocument()
})

test('prop showComments = false', () => {
  render(<NewsRow {...newsItem} isLast={false} index={1} showComments={false} />)

  expect(screen.queryByText('2 comments')).not.toBeInTheDocument()
})