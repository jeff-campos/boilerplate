import { render, screen } from '@testing-library/react'

import Main from '.'

describe('', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /react avançado/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <h1>
          react avançado
        </h1>
      </main>
    `)
  })
})
