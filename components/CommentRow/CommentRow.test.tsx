import { render, fireEvent, screen } from "@testing-library/react";
import { EnhancedNewItemData } from "../../sdk/fetchNewsItem";
import CommentRow from "./CommentRow";
import React from 'react'

const newsItem: EnhancedNewItemData = {
  by: 'igor',
  descendants: 2,
  id: 10,
  score: 10,
  time: (Date.now() - 60 * 1000) % 1_000,
  title: 'Title',
  text: 'My comment',
  type: 'comment',
  url: '',
}

test('comment info', () => {
  render(<CommentRow {...newsItem} />);

  expect(screen.getByText('My comment')).toBeInTheDocument()
  expect(screen.getByText('igor')).toBeInTheDocument()
})

test('hide comment', () => {
  render(<CommentRow {...newsItem} />);

  const myComment = screen.getByText('My comment')
  expect(myComment).toBeInTheDocument()

  fireEvent.click(screen.getByText('[-]'))

  expect(myComment).not.toBeInTheDocument()
  expect(screen.getByText('[+]')).toBeInTheDocument()
})

test("goToNext and goToPrev", () => {
  const handleGoToNext = jest.fn()
  const handleGoToPrev = jest.fn()
  render(<CommentRow {...newsItem} goToNext={handleGoToNext} goToPrev={handleGoToPrev} />);
  
  fireEvent.click(screen.getByText('next'))
  expect(handleGoToNext).toBeCalledTimes(1)

  fireEvent.click(screen.getByText('prev'))
  expect(handleGoToPrev).toBeCalledTimes(1)
});
