/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import 'setimmediate'

initTestHelpers()

describe('Navigation by link', () => {
  it('Should route to selected page in navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)

    userEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page'))
    // screen.debug()
    userEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('comment page'))
    userEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('context page'))
    userEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('todos page'))
  })
})
